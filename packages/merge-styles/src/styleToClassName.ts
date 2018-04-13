import { IStyle } from './IStyle';

import { Stylesheet } from './Stylesheet';
import { kebabRules } from './transforms/kebabRules';
import { prefixRules } from './transforms/prefixRules';
import { provideUnits } from './transforms/provideUnits';
import { rtlifyRules } from './transforms/rtlifyRules';

const DisplayNameField = 'displayName';

// tslint:disable-next-line:no-any
export type IDictionary = { [key: string]: any };

export interface IRuleSet {
  order: string[];
  classNames: string[];
  selectors: { [key: string]: IDictionary };
  dependsOn: { [key: string]: true };
}

/**
 * Given a ruleSet tries to pull the display name from the default selector,
 * or returns the default display name ('css').
 */
function getDisplayName(ruleSet: IRuleSet): string | undefined {
  const stylesheet = Stylesheet.getInstance();
  const rootStyle: IStyle = ruleSet.selectors['&'];

  if (rootStyle && rootStyle.displayName) {
    return rootStyle.displayName;
  }

  return stylesheet.getDefaultPrefix();
}

/**
 * Recursive function which traverses a given an array of IStyles, parses them into
 * an IRuleSet structure (which contains a selector-> style map as well as static class
 * names and ordering information.)
 */
function extractRuleSet(
  args: IStyle[],
  ruleSet: IRuleSet = { order: [], classNames: [], dependsOn: {}, selectors: {} },
  currentSelector: string = '&'
): IRuleSet {
  const stylesheet = Stylesheet.getInstance();

  for (const arg of args) {
    // If the arg is a string, we need to look up the class map and merge.
    if (typeof arg === 'string') {
      arg.split(' ').forEach((stringArg: string) => {
        const expandedRules = stylesheet.argsFromClassName(stringArg);

        if (expandedRules) {
          extractRuleSet(expandedRules, ruleSet, currentSelector);
        } else {
          if (ruleSet.classNames.indexOf(stringArg) < 0) {
            ruleSet.classNames.push(stringArg);
          }
        }
      });

      // Else if the arg is an array, we need to recurse in.
    } else if (Array.isArray(arg)) {
      extractRuleSet(arg, ruleSet, currentSelector);
    } else {
      // tslint:disable-next-line:no-any
      for (const prop in (arg as any)) {
        if (prop === 'selectors') {
          // tslint:disable-next-line:no-any
          const selectors: { [key: string]: IStyle } = (arg as any).selectors;

          for (let newSelector in selectors) {
            if (selectors.hasOwnProperty(newSelector)) {
              const selectorValue = selectors[newSelector];
              const dependsOnAreas = newSelector.match(/\$([\w-]+)\b/g);

              if (newSelector.indexOf(':global(') === 0) {
                newSelector = newSelector.replace(/:global\(|\)$/g, '');
              } else if (newSelector.indexOf('@media') === 0) {
                newSelector = newSelector + '{' + currentSelector;
              } else if (newSelector.indexOf(':') === 0) {
                newSelector = currentSelector + newSelector;
              } else if (newSelector.indexOf('&') < 0) {
                newSelector = currentSelector + ' ' + newSelector;
              }

              if (dependsOnAreas) {
                for (const areaName of dependsOnAreas) {
                  ruleSet.dependsOn[areaName.substr(1)] = true;
                }
              }

              extractRuleSet([selectorValue], ruleSet, newSelector);
            }
          }
        } else {
          let currentRules: IDictionary | undefined = ruleSet.selectors[currentSelector] as IDictionary;

          if (!currentRules) {
            currentRules = {};
            ruleSet.selectors[currentSelector] = currentRules;
            ruleSet.order.push(currentSelector);
          }

          // Else, add the rule to the currentSelector.
          if (prop === 'margin' || prop === 'padding') {
            // tslint:disable-next-line:no-any
            expandQuads(currentRules, prop, (arg as any)[prop]);
          } else {
            // tslint:disable-next-line:no-any
            (currentRules as any)[prop] = (arg as any)[prop] as any;
          }
        }
      }
    }
  }

  return ruleSet;
}

/**
 * Given a quad value (such as padding or margin), expands into separate unit rules.
 */
function expandQuads(
  currentRules: IDictionary,
  name: string,
  value: string
): void {
  const parts = (typeof value === 'string') ? value.split(' ') : [value];

  currentRules[name + 'Top'] = parts[0];
  currentRules[name + 'Right'] = parts[1] || parts[0];
  currentRules[name + 'Bottom'] = parts[2] || parts[0];
  currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}

function getKeyForRules(ruleSet: IRuleSet): string | undefined {
  const serialized: string[] = [];
  let hasProps = false;

  for (const selector of ruleSet.order) {
    serialized.push(selector);
    const rulesForSelector = ruleSet.selectors[selector];

    for (const propName in rulesForSelector) {
      if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
        hasProps = true;
        serialized.push(propName, rulesForSelector[propName]);
      }
    }
  }

  return hasProps ? serialized.join('|') : undefined;
}

export function serializeRuleEntries(ruleEntries: { [key: string]: string | number }): string {
  if (!ruleEntries) {
    return '';
  }

  const allEntries: (string | number)[] = [];

  for (const entry in ruleEntries) {
    if (ruleEntries.hasOwnProperty(entry) && entry !== DisplayNameField && ruleEntries[entry] !== undefined) {
      allEntries.push(entry, ruleEntries[entry]);
    }
  }

  // Apply transforms.
  for (let i = 0; i < allEntries.length; i += 2) {
    kebabRules(allEntries, i);
    provideUnits(allEntries, i);
    rtlifyRules(allEntries, i);
    prefixRules(allEntries, i);
  }

  // Apply punctuation.
  for (let i = 1; i < allEntries.length; i += 4) {
    allEntries.splice(i, 1, ':', allEntries[i], ';');
  }

  return allEntries.join('');
}

export interface IRegistration {
  displayName: string;
  className: string;
  globalClassNames: string;
  key: string;
  args: IStyle[];
  ruleSet: IRuleSet;
  shouldInsert: boolean;
  hasDependents: boolean;
  //  rulesToInsert: string[];
}

export function styleToRegistration(...args: IStyle[]): IRegistration | undefined {
  const ruleSet: IRuleSet = extractRuleSet(args);
  const key = getKeyForRules(ruleSet);

  if (key || ruleSet.classNames) {
    const stylesheet = Stylesheet.getInstance();
    const className = stylesheet.classNameFromKey(key);
    const displayName = getDisplayName(ruleSet);

    const registration: Partial<IRegistration> = {
      displayName,
      className,
      shouldInsert: !className && !!key,
      key,
      args,
      ruleSet
    };

    return registration as IRegistration;
  }
}

export function applyShouldInsert(
  node: IRegistration,
  graph: { [key: string]: { [key: string]: IRegistration } }
): void {
  const stack: IRegistration[] = [];
  let currentNode = node;

  while (currentNode) {
    const dependedByMap = graph[currentNode.displayName];

    currentNode.shouldInsert = true;
    for (const dep in dependedByMap) {
      if (dependedByMap.hasOwnProperty(dep)) {
        const childNode = dependedByMap[dep];

        if (!childNode.shouldInsert) {
          stack.push(childNode);
        }
      }
    }

    currentNode = stack.pop()!;
  }
}

export function evaluateDeps(registrations: IRegistration[]): void {
  const graph: { [key: string]: { [key: string]: IRegistration } } = {};
  let hasDeps = false;

  // Build a dependency graph.
  for (let i = 0; i < registrations.length; i++) {
    const registration = registrations[i];
    const { displayName, ruleSet } = registration;

    for (const dep in ruleSet.dependsOn) {
      if (ruleSet.dependsOn.hasOwnProperty(dep)) {
        graph[dep] = graph[dep] || [];
        graph[dep][displayName] = registration;
        hasDeps = true;
      }
    }
  }

  // Ensure that shouldInsert is inherited.
  if (hasDeps) {
    for (const registration of registrations) {
      if (registration.shouldInsert) {
        applyShouldInsert(registration, graph);
      }

      registration.hasDependents = (!!graph[registration.displayName]);
    }
  }
}

export function provideClassNames(registrations: IRegistration[]): { [key: string]: string } {
  const stylesheet = Stylesheet.getInstance();
  const classNames: { [key: string]: string } = {};

  for (const registration of registrations) {
    const { displayName, shouldInsert, className } = registration;

    classNames[displayName] = shouldInsert
      ? stylesheet.getClassName(displayName)
      : className;
  }

  return classNames;
}

export function insertRules(registrations: IRegistration[], classNames: { [key: string]: string }): void {
  const stylesheet = Stylesheet.getInstance();

  for (const registration of registrations) {
    const { key, args } = registration;
    if (registration.shouldInsert) {
      const className = classNames[registration.displayName];
      const rulesToInsert = [];

      for (let selector of registration.ruleSet.order) {
        const rules = registration.ruleSet.selectors[selector];

        // Replace & or ${name} variables in selector.
        selector = selector.replace(/(&)|\$([\w-]+)\b/g, (match: string, amp: string, cn: string): string => {
          if (amp) {
            return '.' + className;
          } else if (cn) {
            return '.' + ((classNames && classNames[cn]) || cn);
          }
          return '';
        });

        // Insert. Note if a media query, we must close the query with a final bracket.
        const serializedRules = serializeRuleEntries(rules);

        rulesToInsert.push(selector, serializedRules);

        if (serializedRules) {
          const processedRule = `${selector}{${serializedRules}}${(selector.indexOf('@media') === 0) ? '}' : ''}`;
          stylesheet.insertRule(processedRule);
        }
      }

      stylesheet.cacheClassName(
        className,
        key,
        args,
        rulesToInsert
      );
    }
  }
}

export function mergeClassNames(registrations: IRegistration[], classNames: { [key: string]: string }): void {
  for (const registration of registrations) {
    const { displayName, ruleSet } = registration;
    const className = classNames[displayName];

    if (className) {
      ruleSet.classNames.push(className);
    }

    classNames[displayName] = ruleSet.classNames.join(' ');
  }
}

export function applyRegistrations(registrations: IRegistration[]): { [key: string]: string } {
  evaluateDeps(registrations);
  const classNames = provideClassNames(registrations);
  insertRules(registrations, classNames);

  mergeClassNames(registrations, classNames);

  return classNames;
}

export function styleToClassName(...args: IStyle[]): string {
  const registration = styleToRegistration(...args);
  if (registration) {
    return applyRegistrations([registration])[registration.displayName] || '';
  }

  return '';
}

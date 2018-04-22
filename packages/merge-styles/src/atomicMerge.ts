import { concatStyleSets } from './concatStyleSets';
import { IStyle } from './IStyle';
import { styleToRegistration, applyRegistrations, IRegistration } from './styleToClassName';
import { extractRuleSet, IRuleSet } from './styleToClassName';
import { Stylesheet } from './Stylesheet';
import { provideUnits } from './provideUnits';
import { kebab } from './kebab';

/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
export function mergeStyleSets<TStyles>(
  ...partSets: (Partial<TStyles> | false | null | undefined)[]
): { [P in keyof TStyles]: string } {
  // tslint:disable-next-line:no-any
  const partSet: any = (partSets.length > 1) ? concatStyleSets(partSets) : partSets[0];
  const result: Partial<{ [key: string]: string }> = {};

  if (partSet) {
    for (const partName in partSet) {
      if (partSet.hasOwnProperty(partName)) {
        const partValue: IStyle = partSet[partName];
        const ruleSet: IRuleSet = extractRuleSet([partValue]);
        result[partName] = processRuleSet(ruleSet);
      }
    }
  }

  return result as { [P in keyof TStyles]: string };
}

export function mergeStyles(...styles: IStyle[]): string {
  return processRuleSet(extractRuleSet(styles));
}

export interface IIndividualRule {
  selector: string;
  name: string;
  value: string | number;
}

export function processRuleSet(ruleSet: IRuleSet): string {
  const classNames = ruleSet.classNames;
  const { selectors } = ruleSet;

  for (const selector in selectors) {
    if (ruleSet.selectors.hasOwnProperty(selector)) {
      const properties = ruleSet.selectors[selector];

      for (const propName in properties) {
        if (properties.hasOwnProperty(propName)) {
          classNames.push(getClassForRule(selector, propName, properties[propName]));
        }
      }
    }
  }

  return classNames.join(' ');
}

export function adjustSelector(selector: string, className: string, classNames?: { [key: string]: string }): string {
  return selector.replace(/(&)|\$([\w-]+)\b/g, (match: string, amp: string, cn: string): string => {
    if (amp) {
      return '.' + className;
    } else if (cn) {
      return '.' + ((classNames && classNames[cn]) || cn);
    }
    return '';
  });
}

export function getClassForRule(selector: string, name: string, value: string): string {
  const stylesheet = Stylesheet.getInstance();
  const key = [selector, name, value].join('|');
  let className = stylesheet.classNameFromKey(key);

  if (!className) {
    className = stylesheet.getAtomicClassName();

    stylesheet.cacheClassName(
      className,
      key,
      [{
        selectors: {
          [selector]: { [name]: value }
        }
      }],
      []
    );

    // prefixing
    // rtl
    // const rule = { name, value };

    // rtlify(rule);
    // provideUnits(rule);
    // kebab(rule);
    value = provideUnits(name, value);
    name = kebab(name);

    stylesheet.insertRule(`${adjustSelector(selector, className)}{${name}:${value}}`);

  }

  return className;
}

// const expanders = [];
// const propTransforms = [
//   // rtlfiy,
//   provideUnits,
//   kebab
// ];
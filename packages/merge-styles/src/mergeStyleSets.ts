import { concatStyleSets } from './concatStyleSets';
import { IStyle } from './IStyle';
import { styleToRegistration, applyRegistrations, IRegistration } from './styleToClassName';

/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
export function mergeStyleSets<TStyles extends string>(
  ...cssSets: ({ [P in TStyles]?: IStyle } | null | undefined)[]
): { [P in TStyles]: string } {
  const cssSet = (cssSets.length > 1) ? concatStyleSets(...cssSets) : cssSets[0];
  const registrations: IRegistration[] = [];
  let result: { [P in TStyles]?: string } = {};

  if (cssSet) {
    for (const prop in cssSet) {
      if (cssSet.hasOwnProperty(prop)) {
        const registration = styleToRegistration(cssSet[prop], { displayName: prop });

        if (registration) {
          registrations.push(registration);
        }
      }
    }

    result = applyRegistrations(registrations) as { [P in TStyles]: string };
  }

  return result as { [P in TStyles]: string };
}

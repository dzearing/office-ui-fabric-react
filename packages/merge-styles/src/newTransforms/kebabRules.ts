import { IIndividualRule } from '../atomicMerge';

export function kebabRules(properties: { [key: string]: any}): void {
  for (const propName in properties) {
    properties[propName] = propName.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
}

import { kebabRules } from './kebabRules';
import { IIndividualRule } from '../atomicMerge';

export type ITransformFunction = (properties: { [key: string]: any }) => void;

const _transforms: ITransformFunction[] = [
  kebabRules
];

export function applyTransforms(properties: { [key: string]: any }): void {
  for (const transform of _transforms) {
    transform(properties);
  }
}
import { kebabRules } from './kebabRules';

// tslint:disable-next-line:no-any
export type ITransformFunction = (properties: { [key: string]: any }) => void;

const _transforms: ITransformFunction[] = [
  kebabRules
];

// tslint:disable-next-line:no-any
export function applyTransforms(properties: { [key: string]: any }): void {
  for (const transform of _transforms) {
    transform(properties);
  }
}
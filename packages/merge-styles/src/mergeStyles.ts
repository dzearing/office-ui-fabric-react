import { IStyle } from './IStyle';
import { styleToClassName } from './styleToClassName';

/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
export function mergeStyles(
  ...args: (IStyle | IStyle[] | false | null | undefined)[]
): string {
  // const { classes, objects } = extractStyleParts(args);

  return styleToClassName(args);
}

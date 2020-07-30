import { makeVariants } from './makeVariants';
import { ButtonTokenSet } from './Button.types';

export const makeButtonVariants = (variants: Record<string, ButtonTokenSet>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  makeVariants('Button', '--button', variants as any);

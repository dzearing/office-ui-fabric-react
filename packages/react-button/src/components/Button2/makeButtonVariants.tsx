import { ButtonTokens } from './Button.types';
import { makeVariants } from './useVariantClass';
import { RecursivePartial } from '@fluentui/react-button/lib/utils/tempTypes';

export const makeButtonVariants = (variants: Record<string, RecursivePartial<ButtonTokens>>) =>
  makeVariants('--button', variants);

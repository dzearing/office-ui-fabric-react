import { ButtonTokenSet } from './Button.types';
import { makeVariants } from './makeVariants';
import { RecursivePartial } from '@fluentui/react-button/lib/utils/tempTypes';
import { TokenSet } from '@fluentui/react-theme-provider';
import { ButtonTokenSet } from './Button.types';

export const makeButtonVariants = (variants: Record<string, TokenSet>) => makeVariants('Button', '--button', variants);

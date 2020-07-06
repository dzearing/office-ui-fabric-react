import { RecursivePartial } from '@fluentui/react-theme-provider';
import { ButtonTokens } from './Button.types';

export const createButtonTheme = (variantName: string, theme: RecursivePartial<ButtonTokens>) => {
  return {
    tokens: {
      [variantName]: {
        button: theme,
      },
    },
  };
};

import { RecursivePartial } from '@fluentui/react-theme-provider';
import { ButtonTokenSet } from './Button.types';

export const createButtonTheme = (variantName: string, theme: RecursivePartial<ButtonTokenSet>) => {
  return {
    tokens: {
      [variantName]: {
        button: theme,
      },
    },
  };
};

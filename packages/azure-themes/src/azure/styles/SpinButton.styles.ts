import { ISpinButtonStyles } from '@fluentui/react/lib/SpinButton';
import { ITheme } from '@fluentui/react';
import { FontSizes } from '../AzureType';

export const SpinButtonStyles = (theme: ITheme): Partial<ISpinButtonStyles> => {
  const { semanticColors } = theme;
  return {
    input: {
      backgroundColor: semanticColors.inputBackground,
      color: semanticColors.inputText,
      fontSize: FontSizes.size12
    },
    inputTextSelected: {
      color: semanticColors.inputText,
      fontSize: FontSizes.size12
    }
  };
};

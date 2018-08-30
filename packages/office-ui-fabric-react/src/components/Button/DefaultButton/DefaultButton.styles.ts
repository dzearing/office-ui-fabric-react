import { IButtonStyles, IButtonStyleProps } from '../Button.types';
import { concatStyleSets, FontWeights } from '../../../Styling';
import { getStyles as getBaseButtonStyles } from '../BaseButton.styles';
import { getStyles as getSplitButtonStyles } from '../SplitButton/SplitButton.styles';

import { primaryStyles, standardStyles } from '../ButtonThemes';

const DEFAULT_BUTTON_HEIGHT = '32px';
const DEFAULT_BUTTON_MINWIDTH = '80px';

export const getDefaultButtonStyles = (viewProps: IButtonStyleProps): Partial<IButtonStyles> => {
  const { primary, theme } = viewProps;

  const baseButtonStyles: IButtonStyles = getBaseButtonStyles(theme!);
  const splitButtonStyles: IButtonStyles = getSplitButtonStyles(theme!);
  const defaultButtonStyles: IButtonStyles = {
    root: {
      minWidth: DEFAULT_BUTTON_MINWIDTH,
      height: DEFAULT_BUTTON_HEIGHT
    },
    label: {
      fontWeight: FontWeights.semibold
    }
  };

  return concatStyleSets(
    baseButtonStyles,
    defaultButtonStyles,
    primary ? primaryStyles(theme!) : standardStyles(theme!),
    splitButtonStyles
  );
};

import { IPropsWithTheme } from '../../utilities/createComponent';
import { HighContrastSelector, ITheme } from '../../Styling';
import { IRatingStarProps, IRatingStarStyles } from './RatingStar.view';

export type IWithTheme = {
  theme: ITheme;
};
export const RatingStarStyles = (props: IRatingStarProps & IWithTheme): IRatingStarStyles => {
  const { theme, disabled } = props;
  const { semanticColors, palette } = theme;

  return {
    root: {
      display: 'inline-block',
      position: 'relative'
    },

    backgroundIcon: [
      {
        color: palette.neutralTertiary,
        width: '100%'
      },
      disabled && {
        color: semanticColors.disabledBodyText,
        selectors: {
          [HighContrastSelector]: {
            color: 'GrayText'
          }
        }
      }
    ],

    foregroundIcon: [
      {
        position: 'absolute',
        height: '100 %',
        left: '0',
        top: '0',
        textAlign: 'center',
        verticalAlign: 'middle',
        overflow: 'hidden',
        color: semanticColors.bodyTextChecked,
        selectors: {
          [HighContrastSelector]: {
            'color': 'Highlight'
          }
        }
      }
    ]
  };
};
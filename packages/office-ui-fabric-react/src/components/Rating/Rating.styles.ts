import {
  getFocusStyle,
  hiddenContentStyle,
  HighContrastSelector,
} from '../../Styling';
import { IRatingViewProps, IRatingStyles } from './Rating.view';
import { IPropsWithTheme } from '../../utilities/createComponent';

export function getStyles(props: IPropsWithTheme<IRatingViewProps>): IRatingStyles {
  const {
    className,
    disabled,
    theme,
    large
  } = props;

  const {
    semanticColors,
    palette
  } = theme;

  const ratingSmallIconSize = 16;
  const ratingLargeIconSize = 20;

  return {
    root: [
      'ms-Rating',
      className
    ],
    starButton: [
      'ms-Rating-button',
      getFocusStyle(theme, 0),
      {
        display: 'inline-block',
        position: 'relative',
        background: 'none',
        cursor: 'pointer',
        fontSize: ratingSmallIconSize,
        lineHeight: ratingSmallIconSize,

        selectors: {
          '&[disabled]': {
            cursor: 'default'
          }
        }
      },
      large && {
        fontSize: ratingLargeIconSize,
        lineHeight: ratingLargeIconSize
      }
    ]
  };

}

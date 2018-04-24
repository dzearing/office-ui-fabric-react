import { ITheme, IStyle } from '../../Styling';
import { IClassNames } from '../../Utilities';

export interface IVerticalDividerProps {
  /**
   * Optional function to generate the class names for the divider for custom styling
   */
  getClassNames?: (theme: ITheme) => IVerticalDividerClassNames;
}

export interface IVerticalDividerStyleProps {
  theme: ITheme;
}

export interface IVerticalDividerStyles {
  wrapper: IStyle;
  divider: IStyle;
}

export type IVerticalDividerClassNames = IClassNames<IVerticalDividerStyles>;
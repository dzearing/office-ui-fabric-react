import { IStyle, ITheme } from '@fluentui/react/lib/Styling';
import { IStyleFunctionOrObject } from '@fluentui/react/lib/Utilities';
import { IPivotStyleProps } from '@fluentui/react/lib/Pivot';

export interface IFeedbackListProps {
  title: string;

  /** Theme provided by higher-order component. */
  theme?: ITheme;

  /** Optional override styles */
  styles?: IStyleFunctionOrObject<IFeedbackListStyleProps, IFeedbackListStyles>;
}

export type IFeedbackListStyleProps = Pick<IFeedbackListProps, 'theme'>;

export interface IFeedbackListStyles {
  root: IStyle;
  issueList: IStyle;
  button: IStyle;
  itemLabel: IStyle;
  itemCell: IStyle;
  itemName: IStyle;
  timeStamp: IStyle;
  subComponentStyles: IFeedbackListSubComponentStyles;
}

export interface IFeedbackListSubComponentStyles {
  // TODO: remove any after TS 3 upgrade
  // tslint:disable-next-line:no-any
  pivot: IStyleFunctionOrObject<IPivotStyleProps, any>;
}

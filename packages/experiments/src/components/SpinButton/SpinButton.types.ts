import { IComponent, IComponentStyles, IHTMLDivSlot, IHTMLInputSlot, IStyleableComponentProps } from '../../Foundation';
import { IButtonSlot, IButton } from '../Button/Button.types';
import { IBaseProps } from '../../Utilities';
import { IStackSlot } from '../Stack';

export type ISpinButtonComponent = IComponent<ISpinButtonProps, ISpinButtonTokens, ISpinButtonStyles, ISpinButtonViewProps>;

// These types are redundant with ISpinButtonComponent but are needed until TS function return widening issue is resolved:
// https://github.com/Microsoft/TypeScript/issues/241
// For now, these helper types can be used to provide return type safety for tokens and styles functions.
export type ISpinButtonTokenReturnType = ReturnType<Extract<ISpinButtonComponent['tokens'], Function>>;
export type ISpinButtonStylesReturnType = ReturnType<Extract<ISpinButtonComponent['styles'], Function>>;

// Optional interface to use for componentRef. This should be limited in scope with the most common scenario being for focusing elements.
export interface ISpinButton {}

export interface ISpinButtonSlots {
  // All props for your component are to be defined here.
  /**
   * Root element.
   */
  root?: IStackSlot;

  /**
   * Component sample prop. If provided, component is controlled.
   * @default defaultText
   */
  input?: IHTMLInputSlot;

  buttonContainer?: IStackSlot;

  upButton?: IButtonSlot;

  downButton?: IButtonSlot;
}

// Extending IStyleableComponentProps will automatically add styleable props for you, such as styles, tokens and theme.
//    If you don't want these props to be included in your component, just remove this extension.
export interface ISpinButtonProps
  extends ISpinButtonSlots,
    IStyleableComponentProps<ISpinButtonViewProps, ISpinButtonTokens, ISpinButtonStyles>,
    IBaseProps<ISpinButton> {
  value?: string;
  defaultValue?: string;
}

export interface ISpinButtonViewProps extends ISpinButtonProps {
  // You can define view only props here.
  /**
   * Sample prop internal to component. These types of props aren't exposed
   *   externally to consumers and their values are typically determined by component state.
   */
  status: string;
}

export interface ISpinButtonTokens {
  // Define tokens for your component here. Tokens are styling 'knobs' that your component will automatically
  //    apply to styling sections in the styles file.
  textColor?: string;
}

export type ISpinButtonStyles = IComponentStyles<ISpinButtonSlots>;

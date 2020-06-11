export type ShorthandValue<TProps = React.PropsWithChildren<React.AllHTMLAttributes<HTMLElement>>> =
  | string
  | boolean
  | number
  | null
  | undefined
  | TProps
  | JSX.Element;

// tslint:disable-next-line:interface-name
export interface InputComponentRef {
  focus: () => void;
}
// tslint:disable-next-line:interface-name
export interface InputProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  // accessibility?: Accessibility<InputBehaviorProps>;

  /** A property that will change the icon on the input and clear the input on click on Cancel. */
  clearable?: boolean;

  placeholder?: string;

  componentRef?: React.RefObject<InputComponentRef>;

  /** The default value of the input. */
  defaultValue?: string | string[];

  /** An Input can be disabled. */
  disabled?: boolean;

  /** An input can take the width of its container. */
  fluid?: boolean;

  /** Optional Icon to display inside the Input. */
  // icon?: ShorthandValue;

  /** An Input with icon can format the icon to appear at the start or at the end of the input field. */
  iconPosition?: 'start' | 'end';

  /** An input can be used inline with text. */
  inline?: boolean;

  /** Shorthand for the input component. */
  // input?: ShorthandValue<BoxProps>;

  /** An input can have inverted colors. */
  inverted?: boolean;

  /** An input can render as underlined. */
  underlined?: boolean;

  /**
   * Called on change.
   *
   * @param event - React's original SyntheticEvent.
   * @param data - All props and proposed value.
   */
  // onChange?: ComponentEventHandler<InputProps & { value: string }>;

  /** The HTML input type. */
  type?: string;

  /** Ref for input DOM node. */
  inputRef?: React.Ref<HTMLElement>;

  /** The value of the input. */
  value?: string | number;

  /** Shorthand for the wrapper component. */
  // wrapper?: ShorthandValue<BoxProps>;

  /** Input can be required to be valid. */
  required?: boolean;

  /** Input can have error state */
  error?: boolean;

  startAdornments?: ShorthandValue;

  endAdornments?: ShorthandValue;

  /** Input can have error indicator when error is true */
  // errorIndicator?: ShorthandValue<BoxProps>;

  /** Optional Icon to display inside the Input if required and fulfilled. */
  // successIndicator?: ShorthandValue<BoxProps>;
}

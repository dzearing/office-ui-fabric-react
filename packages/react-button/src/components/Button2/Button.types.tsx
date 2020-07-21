import * as React from 'react';
import { ComponentProps, ShorthandValue, RecursivePartial } from '../../utils/tempTypes';
import { ComposeOptions } from '@fluentui/react-compose/lib/staging';
import { ColorPlateSet } from '@fluentui/react-theme-provider';

export type SizeValue = 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest';

/**
 * {@docCategory Button}
 */
export interface ButtonRef {
  /**
   * Sets focus to the button.
   */
  focus: () => void;
}

export interface Button2Props extends ComponentProps, React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Access the imperative API of the Button.
   */
  componentRef?: React.RefObject<ButtonRef>;

  /**
   * Shorthand icon. A shorthand prop can be a literal, object,
   * JSX, or function which takes render options.
   */
  icon?: ShorthandValue<{}>;

  /**
   * Shorthand loader content within the button.
   */
  loader?: ShorthandValue<{}>;

  /** A button can appear circular. */
  circular?: boolean;

  /** A button can show that it cannot be interacted with. */
  disabled?: boolean;

  /** A button can fill the width of its container. */
  fluid?: boolean;

  /** A button can contain only an icon. */
  iconOnly?: boolean;

  /** An icon button can format its icon to appear before or after its content. */
  iconPosition?: 'before' | 'after';

  /** A button that inherits its background and has a subtle appearance. */
  inverted?: boolean;

  /** A button can show a loading indicator. */
  loading?: boolean;

  /**
   * Called after a user clicks the button.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  // onClick?: ComponentEventHandler<ButtonProps>;

  /**
   * Called after a user focuses the button.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  // onFocus?: ComponentEventHandler<ButtonProps>;

  /** A button can emphasize that it represents the primary action. */
  primary?: boolean;

  /** A button can emphasize that it represents an alternative action. */
  secondary?: boolean;

  /** A button can be sized. */
  size?: SizeValue;

  // TODO: Deprecate or rename to textOnly for alignment with iconOnly?
  /** A button can be formatted to show only text in order to indicate a less-pronounced action. */
  // text?: boolean;

  tokens?: RecursivePartial<ButtonTokens>;

  /** A button can use a theme variant. */
  variant?: string;
}

export interface Button2State extends Button2Props {
  ref?: React.Ref<HTMLButtonElement>;
  buttonRef?: React.Ref<HTMLButtonElement>;
}

export type Button2Options = ComposeOptions<Button2Props, Button2State>;

export type ButtonTokens = ColorPlateSet & {
  /* sizing */
  padding: string;
  margin: string;
  minHeight: string;
  minWidth: string;
  maxWidth: string;
  contentGap: string;
  iconSize: string;
  borderRadius: string;
  borderWidth: string;
  boxShadow: string;
  width: string;

  size: {
    smallest: string;
    smaller: string;
    small: string;
    regular: string;
    large: string;
    larger: string;
    largest: string;
  };

  transform: string;
  transition: string;

  fontFamily: string;
  fontSize: string;
  fontWeight: string;

  pressed: {
    transform: string;
    transition: string;
  };

  hovered: {
    boxShadow: string;
  };

  disabled: {
    boxShadow: string;
    opacity: string;
  };
};

import * as React from 'react';
import { ComponentProps, ShorthandProps } from '@fluentui/react-compose/lib/staging';
import { ColorTokenSet } from '@fluentui/react-theme-provider';
import { RecursivePartial } from '../../utils/tempTypes';

export type SizeValue = 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest';

/**
 * {@docCategory Button}
 */
export type ButtonRef = {
  /**
   * Sets focus to the button.
   */
  focus: () => void;
};

export type ButtonProps = ComponentProps &
  React.HTMLAttributes<HTMLButtonElement> & {
    /**
     * Access the imperative API of the Button.
     */
    componentRef?: React.RefObject<ButtonRef>;

    /**
     * Shorthand icon. A shorthand prop can be a literal, object, or
     * JSX. The `children` prop of the object can be a render function,
     * taking in the original slot component and props.
     */
    icon?: ShorthandProps;

    /**
     * Shorthand loader content within the button.
     */
    loader?: ShorthandProps;

    /**
     * Shorthand children content within the button.
     */
    children?: ShorthandProps;

    /**
     * Defines the href to navigate to. If applied, will render the button as an anchor
     * element by default, unless `as` specifies otherwise. Note that specifying an href
     * and a non-anchor as the render type will prevent the Button from behaving like a
     * hyperlink and opening the href on click.
     */
    href?: string;

    /**
     * Defines the target window to open the href in. Only is applied if the button renders
     * as an anchor tag, which is the default behavior if href is provided.
     */
    target?: string;

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

    tokens?: RecursivePartial<ButtonTokenSet>;
  };

export type ButtonState = ButtonProps;

export type ButtonTokenSet = ColorTokenSet & {
  /* sizing */
  padding: string;
  margin: string;
  height: string;
  minWidth: string;
  maxWidth: string;
  minHeight: string;
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
};

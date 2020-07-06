import { useImperativeHandle, useRef } from 'react';
import { getStyleFromPropsAndOptions } from '@fluentui/react-theme-provider';
import { useFocusRects } from '@uifabric/utilities';
import { ComposeOptions2 } from '@fluentui/react-compose';
import { ButtonProps, ButtonState } from './Button.types';

/**
 * The useButton hook processes the Button component props and returns state.
 * @param props - Button props to derive state from.
 */
export const useButton = (state: ButtonState): ButtonState => {
  // state.ref = appendRefs(state.ref, useRef<HTMLButtonElement | null>(null);
  // useImperativeHandle(props.componentRef, () => ({
  //   focus: () => buttonRef.current?.focus(),
  // }));
  // useFocusRects(buttonRef as React.RefObject<HTMLElement>);
  // return {
  //   ...props,
  //   buttonRef,
  //   style: getStyleFromPropsAndOptions(props, options, '--button'),
  // };
};

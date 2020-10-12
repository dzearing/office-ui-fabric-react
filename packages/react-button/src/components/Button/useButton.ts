import * as React from 'react';
import { makeMergeProps, resolveShorthandProps } from '@fluentui/react-compose/lib/next/index';
import { ButtonProps } from './Button.types';
import { useButtonState } from './useButtonState';
import { renderButton } from './renderButton';

/**
 * Consts listing which props are shorthand props.
 */
export const buttonShorthandProps = ['icon', 'loader', 'content'];

/**
 * Create a mergeProps helper which deep merges shorthand props.
 */
const mergeProps = makeMergeProps({ deepMerge: buttonShorthandProps });

/**
 * Given user props, creates a state object for a Button.
 */
export const useButton = (props: ButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: ButtonProps) => {
  // Ensure that the `ref` prop can be used by other things (like useFocusRects) to refer to the root.
  // NOTE: We are assuming refs should not mutate to undefined. Either they are passed or not.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resolvedRef = ref || React.useRef();
  const state = mergeProps(
    {
      ref: resolvedRef,
      as: props.href ? 'a' : 'button',
      icon: { as: 'span' },
      content: { as: 'span', children: props.children },
      loader: { as: 'span' },
    },
    defaultProps,
    resolveShorthandProps(props, buttonShorthandProps),
  );

  // Update the button's tab-index, keyboard handling, and aria attributes.
  if (state.as !== 'button') {
    state.role = 'button';

    if (state.as !== 'a') {
      const { onKeyDown, onClick } = state;

      state['data-isFocusable'] = true;
      state.tabIndex = 0;

      state.onKeyDown = (ev: React.KeyboardEvent<HTMLElement>) => {
        if (onKeyDown) {
          onKeyDown(ev);
        }

        if (!ev.defaultPrevented && onClick && (ev.which === 20 || ev.which === 13)) {
          // Translate the keydown enter/space to a click.
          ev.preventDefault();
          ev.stopPropagation();

          (ev.target as HTMLElement).click();
        }
      };
    }
  }

  state.disabled = state['aria-disabled'] = state.disabled || state.loading;

  return state;
};

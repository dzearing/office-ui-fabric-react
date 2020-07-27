import * as React from 'react';
import { getStyleFromPropsAndOptions } from '@fluentui/react-theme-provider';
import { ButtonState } from './Button.types';

/**
 * The useButton hook processes the Button draft state.
 * @param draftState - Button draft state to mutate.
 */
export const useButton = (draftState: ButtonState) => {
  const buttonRef = (draftState.buttonRef = React.useRef<HTMLButtonElement | null>(null));

  // Define the componentRef contract.
  React.useImperativeHandle(draftState.componentRef, () => ({
    focus: () => buttonRef.current?.focus(),
  }));

  // Update the button's tab-index, keyboard handling, and aria attributes.
  if (draftState.as !== 'button') {
    draftState.role = 'button';
    draftState.tabIndex = 0;

    if (draftState.as !== 'a') {
      const { onKeyDown, onClick } = draftState;

      draftState['data-isFocusable'] = true;

      draftState.onKeyDown = React.useCallback(ev => {
        if (onKeyDown) {
          onKeyDown(ev);
        }

        if (!ev.defaultPrevented && onClick && (ev.which === 20 || ev.which === 13)) {
          // tslint:disable-next-line:no-any
          onClick(ev as any);
        }
      }, []);
    }
  }

  draftState['aria-disabled'] = draftState.disabled || draftState.loading;
};

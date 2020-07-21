import * as React from 'react';
import { Button2State } from './Button.types';

export const useButtonBehavior = (draftState: Button2State) => {
  if (draftState.as !== 'button') {
    draftState.role = 'button';
    draftState.tabIndex = 0;

    if (draftState.as !== 'a') {
      const { onKeyDown, onClick } = draftState;

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

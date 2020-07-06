import { ButtonState } from './Button.types';

export const useButtonBehavior = (state: ButtonState) => {
  if (state.as !== 'button') {
    state.role = 'button';
    state.tabIndex = 0;

    if (state.as !== 'a') {
      const { onKeyDown, onClick } = state;

      state.onKeyDown = ev => {
        if (onKeyDown) {
          onKeyDown(ev);
        }

        if (!ev.defaultPrevented && onClick && (ev.which === 20 || ev.which === 13)) {
          // tslint:disable-next-line:no-any
          onClick(ev as any);
        }
      };
    }
  }

  state['aria-disabled'] = state.disabled || state.loading;
};

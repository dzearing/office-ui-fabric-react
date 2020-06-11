import * as React from 'react';
import { compose, mergeProps } from '@fluentui/react-compose';
import { InputProps } from './Input.types';
import { useInput } from './useInput';
import { useControllableValue } from '@uifabric/react-hooks';

// tslint:disable-next-line:interface-name
export interface InputState extends InputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const InputInternalStateContext = React.createContext<InputState>({} as InputState);
export const useInputInternalState = () => React.useContext(InputInternalStateContext);

export const InputBase = compose<'input', InputProps, {}, {}, {}>(
  (props, ref, options) => {
    const [focused, setFocused] = React.useState(false);
    const [value, setValue] = useControllableValue(props.value, props.defaultValue);
    const { state, slots, slotProps } = mergeProps({ ...props, focused, value, setValue }, options);
    const rootRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      rootRef?.current?.addEventListener(
        'focus',
        () => {
          setFocused(true);
        },
        true,
      );
      rootRef?.current?.addEventListener(
        'blur',
        ev => {
          console.log(ev);
          setFocused(false);
        },
        true,
      );
    }, []);

    return (
      <InputInternalStateContext.Provider value={state as InputState}>
        <slots.root ref={rootRef} {...slotProps.root}>
          {props.startAdornments && <slots.startAdornments {...slotProps.startAdornments} />}
          <slots.input ref={state.inputRef} {...slotProps.input} />
          {props.endAdornments && <slots.endAdornments {...slotProps.endAdornments} />}
        </slots.root>
      </InputInternalStateContext.Provider>
    );
  },
  {
    displayName: 'Input',
    slotProps: state => ({
      input: {
        placeholder: state.placeholder,
      },
    }),
    slots: {
      root: 'div',
      input: 'input',
      startAdornments: 'div',
      endAdornments: 'div',
    },
    handledProps: ['placeholder', 'focused'],
  },
);

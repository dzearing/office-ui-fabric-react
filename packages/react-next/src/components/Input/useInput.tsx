import * as React from 'react';
import { InputProps } from './Input.types';
import { ComposePreparedOptions, mergeProps } from '@fluentui/react-compose';

function useInputComponentRef(props: InputProps, inputRef: React.RefObject<HTMLInputElement>) {
  React.useImperativeHandle(props.componentRef, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));
}

export const useInput = (props: InputProps, options: ComposePreparedOptions) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  useInputComponentRef(props, inputRef);

  const state = {
    ...props,
    inputRef,
  };

  return mergeProps(state, options);
};

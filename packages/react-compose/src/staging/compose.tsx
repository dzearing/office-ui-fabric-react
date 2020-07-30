import * as React from 'react';
import { ComposeOptions, ComposedComponent, ComposeInput, OPTIONS_NAME } from './types';
import { mergeComposeOptions } from './mergeComposeOptions';
import { createDraftState } from './createDraftState';
import { applyHooks } from './applyHooks';
import { simplifyShorthand } from './simplifyShorthand';

export function compose<TProps, TState = TProps>(
  render: ComposeInput<TProps, TState>,
  options: ComposeOptions<TProps, TState>,
) {
  const composeOptions = mergeComposeOptions(render, options);

  const Result: ComposedComponent<TProps, TState> = React.forwardRef<HTMLElement, TProps>(
    (props: TProps, ref: React.Ref<HTMLElement>) =>
      composeOptions.render!(
        applyHooks(
          createDraftState(
            // target: initial props
            { ref },

            // default props
            composeOptions.defaultProps,

            // user props, possibly transformed through initialState, and with simplified shorthand
            simplifyShorthand(
              composeOptions.initialState ? composeOptions.initialState(props) : props,
              composeOptions.shorthandPropNames,
            ),
          ),
          composeOptions,
        ),
        composeOptions,
      ),
  ) as ComposedComponent<TProps, TState>;

  Result.displayName = composeOptions.displayName;
  Result[OPTIONS_NAME] = composeOptions;

  Result.extend = <TNewProps, TNewState = TNewProps>(extendOptions: ComposeOptions<TNewProps, TNewState>) =>
    compose<TNewProps, TNewState>(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Result as any,
      extendOptions,
    ) as ComposedComponent<TNewProps, TNewState>;

  return Result;
}

import * as React from 'react';
import { ComposeOptions, ComposedComponent2, ComposeInput, OPTIONS_NAME } from './types';
import { mergeComposeOptions } from './mergeComposeOptions';
import { mergeObjects } from './mergeObjects';
import { applyHooks } from './applyHooks';
import { simplifyShorthand } from './simplifyShorthand';

export function compose<TProps, TState = TProps>(
  render: ComposeInput<TProps, TState>,
  options: ComposeOptions<TProps, TState>,
) {
  const composeOptions = mergeComposeOptions(render, options);

  const Result: ComposedComponent2<TProps, TState> = React.forwardRef<HTMLElement, TProps>(
    (props: TProps, ref: React.Ref<HTMLElement>) =>
      composeOptions.render!(
        applyHooks(
          mergeObjects(
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
  ) as ComposedComponent2<TProps, TState>;

  Result.displayName = composeOptions.displayName;
  Result[OPTIONS_NAME] = composeOptions;

  Result.extend = <TNewProps, TNewState = TNewProps>(extendOptions: ComposeOptions<TNewProps, TNewState>) =>
    compose<TNewProps, TNewState>(
      // tslint:disable-next-line:no-any
      Result as any,
      extendOptions,
    ) as ComposedComponent2<TNewProps, TNewState>;

  return Result;
}

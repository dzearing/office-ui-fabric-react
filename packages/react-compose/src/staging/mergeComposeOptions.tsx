import { ComposeInput, ComposeOptions, ComposedComponent, OPTIONS_NAME, ComposeRenderFunction } from './types';
import { createDraftState } from './createDraftState';

export function mergeComposeOptions<TProps, TState>(
  render: ComposeInput<TProps, TState>,
  options: ComposeOptions<TProps, TState>,
): ComposeOptions<TProps, TState> {
  const parentOptions: ComposeOptions<TProps, TState> = (render as ComposedComponent<TProps, TState>)[OPTIONS_NAME];

  return {
    ...parentOptions,
    ...options,
    shorthandPropNames: [...(parentOptions?.shorthandPropNames || []), ...(options.shorthandPropNames || [])],
    render: (parentOptions?.render || render) as ComposeRenderFunction<TProps, TState>,
    defaultProps: createDraftState({}, parentOptions?.defaultProps, options.defaultProps) as TProps,
    useHooks: [...(parentOptions?.useHooks || []), ...(options.useHooks || [])],
  };
}

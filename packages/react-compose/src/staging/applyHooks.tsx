import { GenericDictionary, ComposeOptions } from './types';
export const applyHooks = <TProps, TState>(state: GenericDictionary, options: ComposeOptions<TProps, TState>) => {
  if (options.useHooks?.length) {
    for (const useHooks of options.useHooks) {
      useHooks(state, options);
    }
  }
  return state as TState;
};

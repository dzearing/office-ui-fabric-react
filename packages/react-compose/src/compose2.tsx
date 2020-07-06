import * as React from 'react';
import { css, getNativeElementProps } from '@uifabric/utilities';
import { GenericDictionary } from './types';

const OPTIONS_NAME = '__options';

export type ComposedComponent2<TProps, TState> = React.ForwardRefExoticComponent<TProps> & {
  [OPTIONS_NAME]: ComposeOptions2<TProps, TState>;
};

export type ComposeRenderFunction2<TProps, TState> = (
  state: TState,
  options: ComposeOptions2<TProps, TState>,
) => JSX.Element;

export type ComposeInput<TProps, TState> = ComposedComponent2<TProps, TState> | ComposeRenderFunction2<TProps, TState>;

export type ComposeHook<TProps, TState> = (props: GenericDictionary, options: ComposeOptions2<TProps, TState>) => void;

export type ComposeOptions2<TProps, TState> = {
  displayName?: string;
  defaultProps?: Partial<TProps>;
  useHooks?: ComposeHook<TProps, TState>[];
  shorthandPropNames?: string[];
  render?: ComposeRenderFunction2<TProps, TState>;
};

export function mergeComposeOptions<TProps, TState>(
  render: ComposeInput<TProps, TState>,
  options: ComposeOptions2<TProps, TState>,
): ComposeOptions2<TProps, TState> {
  const parentOptions: ComposeOptions2<TProps, TState> = (render as ComposedComponent2<TProps, TState>)[OPTIONS_NAME];

  return {
    ...parentOptions,
    ...options,
    shorthandPropNames: [...(parentOptions?.shorthandPropNames || []), ...(options.shorthandPropNames || [])],
    render: (parentOptions?.render || render) as ComposeRenderFunction2<TProps, TState>,
    defaultProps: mergeObjects({}, parentOptions?.defaultProps, options.defaultProps) as TProps,
    useHooks: [...(parentOptions?.useHooks || []), ...(options.useHooks || [])],
  };
}

const mergeObjects = (target: GenericDictionary, ...propSets: (GenericDictionary | undefined)[]) => {
  for (const props of propSets) {
    if (props) {
      for (const propName of Object.keys(props)) {
        const propValue = props[propName];

        if (typeof propValue === 'object') {
          target[propName] = target[propName] || {};

          if (React.isValidElement(propValue)) {
            target[propName] = propValue;
          } else {
            mergeObjects(target[propName], propValue);
          }
        } else if (propName === 'className') {
          if (propValue) {
            target[propName] = css(target[propName], propValue);
          }
        } else {
          target[propName] = propValue;
        }
      }
    }
  }

  return target;
};

const applyHooks = <TProps, TState>(state: GenericDictionary, options: ComposeOptions2<TProps, TState>) => {
  if (options.useHooks?.length) {
    for (const useHooks of options.useHooks) {
      useHooks(state, options);
    }
  }
  return state as TState;
};

const simplifyShorthand = (props: GenericDictionary, shorthandPropNames?: string[]) => {
  let newProps = props;

  if (shorthandPropNames && shorthandPropNames.length) {
    newProps = {
      ...props,
    };
    for (const propName of shorthandPropNames) {
      const propValue = props[propName];

      if (propValue !== undefined && (typeof propValue !== 'object' || React.isValidElement(propValue))) {
        newProps[propName] = { children: propValue };
      }
    }
  }

  return newProps;
};

export function compose2<TProps, TState = TProps>(
  render: ComposeInput<TProps, TState>,
  options: ComposeOptions2<TProps, TState>,
) {
  const composeOptions = mergeComposeOptions(render, options);

  const Component = React.forwardRef<HTMLElement, TProps>((props, ref) =>
    composeOptions.render!(
      applyHooks(
        mergeObjects(
          // target: initial props
          { ref },
          // default props
          composeOptions.defaultProps,
          // user props with simplified shorthand
          simplifyShorthand(props, composeOptions.shorthandPropNames),
        ),
        composeOptions,
      ),
      composeOptions,
    ),
  ) as ComposedComponent2<TProps, TState>;

  Component.displayName = composeOptions.displayName;
  Component[OPTIONS_NAME] = composeOptions;

  return Component;
}

export type ShorthandLiteral = string | number | boolean;
export type ShorthandBaseProps<TProps = {}> = React.PropsWithChildren<TProps & { as: keyof JSX.IntrinsicElements }>;
export type ShorthandValue<TProps> = ShorthandLiteral | ShorthandBaseProps<TProps> | JSX.Element;

// tslint:disable-next-line:function-name
export function Slot<TProps>(shorthandValue: ShorthandValue<TProps>) {
  const { as: RootType = 'span', children, ...rest } = shorthandValue as ShorthandBaseProps<TProps>;

  if (children !== undefined) {
    if (typeof children === 'function') {
      return children(RootType, rest);
    } else {
      // tslint:disable-next-line:no-any
      return <RootType {...(getNativeElementProps(RootType, rest) as any)}>{children}</RootType>;
    }
  }

  return null;
}

export const createUseShorthand = (propNames: string[]) => (state: GenericDictionary) => {
  for (const name of propNames) {
    const shorthandValue = state[name];

    if (shorthandValue && (typeof shorthandValue !== 'object' || React.isValidElement(state[name]))) {
      state[name] = {
        children: shorthandValue,
      };
    }
  }
};

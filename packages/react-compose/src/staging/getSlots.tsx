import * as React from 'react';
import { getNativeElementProps } from '@uifabric/utilities';
import { GenericDictionary } from './types';
import { nullRender } from './nullRender';

export const getSlots = (state: GenericDictionary, slotNames: string[] | undefined) => {
  const slots: GenericDictionary = {
    root: state.as || nullRender,
  };
  const slotProps: GenericDictionary = {
    root: getNativeElementProps(state.as, state),
  };

  for (const name of slotNames!) {
    const slotDefinition = state[name];
    const { as: slotAs, children, ...rest } = slotDefinition;

    const slot = (slots[name] = slotAs || slotDefinition.children ? slotAs : nullRender);

    if (slots[name] !== nullRender) {
      slotProps[name] =
        typeof slot === 'string'
          ? getNativeElementProps(slot as keyof JSX.IntrinsicElements, slotDefinition)
          : { ...rest, children };

      if (children === 'function') {
        slotProps[name].children = children(slots[name], rest);
        slots[name] = React.Fragment;
      }
    }
  }

  return { slots, slotProps };
};

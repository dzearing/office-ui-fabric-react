import * as React from 'react';
import { getNativeElementProps, omit, assign } from '@uifabric/utilities';
import { GenericDictionary } from './types';
import { nullRender } from './nullRender';

const DEFAULT_SLOT_TYPE = 'span';

/**
 * Given the state and an array of slot names, will break out `slots` and `slotProps`
 * collections.
 *
 * The root is always derived from the `as` prop.
 *
 * Slots will render as null if they are rendered as primitives with undefined children.
 *
 * The slotProps will always omit the `as` prop within them, and for slots that are string
 * primitives, the props will be filtered according the the slot type. For example, if the
 * slot is rendered `as: 'a'`, the props will be filtered for acceptable anchor props.
 *
 * @param state - State including slot definitions
 * @param slotNames - Name of which props are slots
 * @returns An object containing the `slots` map and `slotProps` map.
 */
export const getSlots = (state: GenericDictionary, slotNames?: string[] | undefined) => {
  let { as: rootAs = DEFAULT_SLOT_TYPE } = state;
  let rootProps = omit(state, ['as']);

  // Handle the "as" prop as JSX.
  if (typeof rootAs === 'object' && rootAs.type) {
    rootProps = assign(rootProps, rootAs.props);
    rootAs = rootAs.type;
  }

  const slots: GenericDictionary = {
    root: rootAs,
  };

  const slotProps: GenericDictionary = {
    root: typeof rootAs === 'string' ? getNativeElementProps(rootAs, rootProps) : rootProps,
  };

  if (slotNames) {
    for (const name of slotNames) {
      const slotDefinition = state[name] || {};
      const { as: slotAs = 'span' } = slotDefinition;
      const { children } = slotDefinition;

      const isSlotPrimitive = typeof slotAs === 'string';
      const isSlotEmpty = isSlotPrimitive && slotDefinition.children === undefined;

      slots[name] = isSlotEmpty ? nullRender : slotAs;

      if (typeof children === 'function') {
        slotProps[name] = {
          children: children(slots[name], omit(slotDefinition, ['as', 'children'])),
        };
        slots[name] = React.Fragment;
      } else if (slots[name] !== nullRender) {
        slotProps[name] = isSlotPrimitive
          ? getNativeElementProps(slotAs, slotDefinition)
          : omit(slotDefinition, ['as']);
      }
    }
  }

  return { slots, slotProps };
};

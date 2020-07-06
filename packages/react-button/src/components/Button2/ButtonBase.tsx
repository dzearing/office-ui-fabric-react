import * as React from 'react';
import { ButtonProps, ButtonState, ButtonOptions } from './Button.types';
import { compose2, ComposeOptions2, GenericDictionary } from '@fluentui/react-compose';
import { getNativeElementProps } from '@uifabric/utilities';
import { useButtonBehavior } from './useButtonBehavior';

const nullRender = () => null;

const getSlots = (state: GenericDictionary, slotNames: string[] | undefined) => {
  const slots: GenericDictionary = {
    root: state.as || nullRender,
  };
  const nativeProps: GenericDictionary = {
    root: getNativeElementProps(state.as, state),
  };

  for (const name of slotNames!) {
    const slot: GenericDictionary = state[name];

    slots[name] = (slot.children && slot.as) || nullRender;

    if (slots[name] !== nullRender) {
      nativeProps[name] = getNativeElementProps(slot.as, slot);
    }
  }

  return { slots, nativeProps };
};

export const ButtonBase = compose2<ButtonProps, ButtonState>(
  (state: ButtonState, options: ButtonOptions) => {
    const { iconPosition, iconOnly } = state;
    const { slots, nativeProps } = getSlots(state, options.shorthandPropNames);
    const { root, icon, children } = nativeProps;

    return (
      <slots.root {...root}>
        {iconPosition !== 'after' && <slots.icon {...icon} />}
        {!iconOnly && <slots.children {...children} />}
        {iconPosition === 'after' && <slots.icon {...icon} />}
      </slots.root>
    );
  },
  {
    displayName: 'ButtonBase2',

    useHooks: [
      // useNativeProps, // state, options = state.nativeProps.root
      // Provide correct aria attributes and event handlers
      useButtonBehavior,
    ],

    shorthandPropNames: ['icon', 'loader', 'children'],

    defaultProps: {
      as: 'button',
      icon: { as: 'span' },
      children: { as: 'span' },
      loader: { as: 'span' },
    },
  } as ComposeOptions2<ButtonProps, ButtonState>, // ???
);

import * as React from 'react';
import { Button2Props, Button2State, Button2Options } from './Button.types';
import { compose, getSlots } from '@fluentui/react-compose/lib/staging';
import { useButtonBehavior } from './useButtonBehavior';

export const ButtonBase = compose<Button2Props, Button2State>(
  (state: Button2State, options: Button2Options) => {
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
  }, // as ComposeOptions<Button2Props, Button2State>, // ???
);

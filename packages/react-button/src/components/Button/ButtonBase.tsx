import * as React from 'react';
import { compose, getSlots } from '@fluentui/react-compose/lib/staging';
import { useMergedRefs } from '@uifabric/react-hooks';
import { ButtonProps, ButtonState, ButtonOptions } from './Button.types';
import { useButton } from './useButton';

export const ButtonBase = compose<ButtonProps>(
  (state: ButtonState, options: ButtonOptions) => {
    const { slots, nativeProps } = getSlots(state, options.shorthandPropNames);
    const { root, loader, icon, children } = nativeProps;
    const { ref, buttonRef, iconOnly, iconPosition, loading } = state;

    return (
      <slots.root {...root} ref={useMergedRefs(ref, buttonRef)}>
        {loading && <slots.loader {...loader} />}
        {icon && iconPosition !== 'after' && <slots.icon {...icon} />}
        {!iconOnly && children && <slots.children {...children} />}
        {icon && iconPosition === 'after' && <slots.icon {...icon} />}
      </slots.root>
    );
  },
  {
    displayName: 'ButtonBase',

    useHooks: [useButton],

    shorthandPropNames: ['icon', 'loader', 'children'],

    defaultProps: {
      as: 'button',
      icon: { as: 'span' },
      children: { as: 'span' },
      loader: { as: 'span' },
    },
  },
);

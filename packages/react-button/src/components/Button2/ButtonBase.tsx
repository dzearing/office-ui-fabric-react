import * as React from 'react';
import { ButtonProps, ButtonState } from './Button.types';
import { compose2, ComposeOptions2 } from '@fluentui/react-compose';
import { useButton } from './useButton';
import { GenericDictionary } from '../../utils/tempTypes';
import { getNativeElementProps } from '@uifabric/utilities';

const nullRender = () => null;
const getSlots = (state: GenericDictionary, slotNames: string[]) => {
  const slots: GenericDictionary = {
    root: state.as || nullRender,
  };

  for (const name of slotNames) {
    slots[name] = (state[name].children && state[name]?.as) || nullRender;
  }

  return slots;
};

export const ButtonBase = compose2<ButtonProps, ButtonState>(
  (state: ButtonState) => {
    const { icon, iconPosition, iconOnly, children } = state;
    const slots = getSlots(state, ['icon', 'children']);

    const rootProps = getNativeElementProps(state.as, state);
    const iconProps = getNativeElementProps(slots.icon, icon);
    const childrenProps = getNativeElementProps(slots.children, children);

    return (
      <slots.root {...rootProps}>
        {icon && iconPosition !== 'after' && <slots.icon {...iconProps} />}
        {!iconOnly && <slots.children {...childrenProps} />}
        {icon && iconPosition === 'after' && <slots.icon {...iconProps} />}
      </slots.root>
    );
  },
  {
    displayName: 'ButtonBase2',
    useHooks: [useButton],

    shorthandPropNames: ['icon', 'loader', 'children'],
    defaultProps: {
      as: 'button',
      icon: { as: 'span' },
      children: { as: 'span' },
      loader: { as: 'span' },
    },
  } as ComposeOptions2<ButtonProps, ButtonState>, // ???
);

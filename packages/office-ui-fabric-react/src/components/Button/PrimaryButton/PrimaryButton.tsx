import * as React from 'react';
import { styled, nullRender } from '../../../Utilities';
import { IButtonProps, IButtonStyles, IButtonStyleProps } from '../Button.types';
// import { ButtonBase } from './Button.base';
import { getDefaultButtonStyles } from '../DefaultButton/DefaultButton.styles';

export const PrimaryButton = styled<IButtonProps, IButtonStyleProps, IButtonStyles>(
  () => <div>i am a button</div>,
  getDefaultButtonStyles,
  props => ({
    onRenderDescription: nullRender,
    primary: true
  }),
  { scope: 'PrimaryButton' }
);

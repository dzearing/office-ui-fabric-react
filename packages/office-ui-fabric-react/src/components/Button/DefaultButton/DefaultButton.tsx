import { styled, nullRender } from '../../../Utilities';
import { IButtonProps, IButtonStyleProps, IButtonStyles } from '../Button.types';
import { ButtonBase } from '../Button.base';
import { getDefaultButtonStyles } from './DefaultButton.styles';

export const DefaultButton = styled<IButtonProps, IButtonStyleProps, IButtonStyles>(
  ButtonBase,
  getDefaultButtonStyles,
  props => ({
    onRenderDescription: nullRender
  }),
  { scope: 'DefaultButton' }
);

import { SpinButtonView } from './SpinButton.view';
import { SpinButtonStyles, SpinButtonTokens } from './SpinButton.styles';
import { SpinButtonState } from './SpinButton.state';
import { ISpinButtonProps } from './SpinButton.types';
import { createComponent } from '../../Foundation';

export const SpinButton: React.StatelessComponent<ISpinButtonProps> = createComponent({
  displayName: 'SpinButton',
  view: SpinButtonView,
  state: SpinButtonState,
  styles: SpinButtonStyles,
  tokens: SpinButtonTokens
});

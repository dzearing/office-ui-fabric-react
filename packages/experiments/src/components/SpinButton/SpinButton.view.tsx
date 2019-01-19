/** @jsx withSlots */
import { withSlots, getSlots } from '../../Foundation';

import { ISpinButtonComponent, ISpinButtonProps, ISpinButtonSlots } from './SpinButton.types';
import { Button } from '../../Button';
import { Stack } from '../../Stack';

export const SpinButtonView: ISpinButtonComponent['view'] = props => {
  const Slots = getSlots<ISpinButtonProps, ISpinButtonSlots>(props, {
    root: Stack,
    input: 'input',
    buttonContainer: Stack,
    upButton: Button,
    downButton: Button
  });

  return (
    <Slots.root horizontal>
      <Slots.input type="number" />
      <Slots.buttonContainer verticalFill>
        <Slots.upButton icon="CaretUpSolid8" tokens={{ contentPadding: 0, iconSize: 8, minWidth: 16, minHeight: 0 }} />
        <Slots.downButton icon="CaretDownSolid8" tokens={{ contentPadding: 0, iconSize: 8, minWidth: 16, minHeight: 0 }} />
      </Slots.buttonContainer>
    </Slots.root>
  );
};

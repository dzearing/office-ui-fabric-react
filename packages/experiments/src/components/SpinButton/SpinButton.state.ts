import { ISpinButtonProps, ISpinButtonViewProps } from './SpinButton.types';
import { BaseState } from '../../utilities/BaseState';

// Internal state will most likely include a subset of your ViewProps. This template just equates them to start with.
export type ISpinButtonState = ISpinButtonViewProps;

export class SpinButtonState extends BaseState<ISpinButtonProps, ISpinButtonViewProps, ISpinButtonState> {
  constructor(props: SpinButtonState['props']) {
    super(props, {
      // Mark controlledProps to ensure that they get priority when provided as a component prop.
      // For props not marked controlled, component state will get priority over component props.
      controlledProps: ['value']
    });

    this.state = {
      text: props.defaultText || 'Default Text',
      status: 'State Text'
    };
  }
}

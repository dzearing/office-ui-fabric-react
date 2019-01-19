import * as React from 'react';
import { mount } from 'enzyme';
import { SpinButtonState } from './SpinButton.state';

const testView = () => {
  return <div />;
};

// States do not generate rendered output so unit tests test that state initializes and reacts
//  to inputs and events as expected.
describe('SpinButtonState', () => {
  it('initializes default state correctly', () => {
    const testSpinButtonState = mount(<SpinButtonState renderView={testView} />);

    expect(testSpinButtonState.state('text')).toBe('Default Text');
    expect(testSpinButtonState.state('status')).toBe('State Text');
  });

  it('uses props to initialize state correctly', () => {
    const defaultText = 'Prop Default Text';
    const testSpinButtonState = mount(<SpinButtonState defaultText={defaultText} renderView={testView} />);

    expect(testSpinButtonState.state('text')).toBe(defaultText);
  });
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { SpinButtonView } from './SpinButton.view';

// Views are just pure functions with no statefulness, which means they can get full code coverage
//    with snapshot tests exercising permutations of the props.
describe('SpinButtonView', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SpinButtonView text="textProp" status="statusProp" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/** Jest test setup file. */

import * as Adapter from 'enzyme-adapter-react-16';

import { configure } from 'enzyme';
import { setIconOptions } from '@uifabric/styling';

// Suppress icon warnings.
setIconOptions({
  warnOnMissingIcons: false
});

// Configure enzyme.
configure({ adapter: new Adapter() });
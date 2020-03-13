import { Icon } from '@fluentui/react-experimental';
import * as React from 'react';

const IconMinimalPerf = () => <Icon name="user" />;

IconMinimalPerf.iterations = 5000;
IconMinimalPerf.filename = 'IconMinimal.perf.tsx';

export default IconMinimalPerf;

import { List } from '@fluentui/react-experimental';
import * as React from 'react';

const ListMinimalPerf = () => <List />;

ListMinimalPerf.iterations = 5000;
ListMinimalPerf.filename = 'ListMinimal.perf.tsx';

export default ListMinimalPerf;

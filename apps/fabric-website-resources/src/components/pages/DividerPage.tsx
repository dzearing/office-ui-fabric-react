import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { DividerPageProps } from '@fluentui/react/lib/components/Divider/Divider.doc';

export const DividerPage = (props: { isHeaderVisible: boolean }) => <DemoPage {...{ ...DividerPageProps, ...props }} />;

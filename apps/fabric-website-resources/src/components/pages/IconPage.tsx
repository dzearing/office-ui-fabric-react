import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { IconPageProps } from '@fluentui/react/lib/components/Icon/Icon.doc';

export const IconPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/Icon.page.json')} {...{ ...IconPageProps, ...props }} />
);

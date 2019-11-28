import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { FabricPageProps } from 'office-ui-fabric-react/lib/components/Fabric/Fabric.doc';

export const FabricPage = (props: { isHeaderVisible: boolean }) => <DemoPage {...{ ...FabricPageProps, ...props }} />;

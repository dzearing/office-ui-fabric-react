import * as React from 'react';
import { IDocPageProps } from '../../common/DocPage.types';
import { FabricDirectionExample } from './examples/Fabric.Direction.Example';

const FabricDirectionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Fabric/examples/Fabric.Direction.Example.tsx') as string;

export const FabricPageProps: IDocPageProps = {
  title: 'Fabric',
  componentName: 'Fabric',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Fabric',
  examples: [
    {
      title: 'Fabric with size, presence, and fade in options',
      code: FabricDirectionExampleCode,
      view: <FabricDirectionExample />
    }
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Fabric/docs/FabricOverview.md'),
  bestPractices: '',
  isHeaderVisible: true,
  isFeedbackVisible: true
};

import * as React from 'react';
import { IDocPageProps } from '../../common/DocPage.types';
import { SelectionBasicExample } from './examples/Selection.Basic.Example';

const SelectionBasicExampleCode = require('!raw-loader!@fluentui/react/src/utilities/selection/examples/Selection.Basic.Example.tsx') as string;

export const SelectionPageProps: IDocPageProps = {
  title: 'Selection',
  componentName: 'SelectionExample',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/react/current/src/utilities/selection',
  examples: [
    {
      title: 'Basic Selection Example',
      code: SelectionBasicExampleCode,
      view: <SelectionBasicExample />
    }
  ],
  overview: require<string>('!raw-loader!@fluentui/react/src/utilities/selection/docs/SelectionOverview.md'),
  isHeaderVisible: true
};

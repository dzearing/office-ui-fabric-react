import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { LayerHost } from '@fluentui/react/lib/Layer';
import { ResizeGroupPageProps } from '@fluentui/react/lib/components/ResizeGroup/ResizeGroup.doc';

export const ResizeGroupPage = (props: { isHeaderVisible: boolean }) => (
  <LayerHost>
    <DemoPage
      jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/ResizeGroup.page.json')}
      {...{ ...ResizeGroupPageProps, ...props }}
    />
  </LayerHost>
);

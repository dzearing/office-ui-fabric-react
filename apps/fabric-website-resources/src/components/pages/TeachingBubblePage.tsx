import * as React from 'react';
import { LayerHost } from '@fluentui/react/lib/Layer';
import { DemoPage } from '../DemoPage';
import { TeachingBubblePageProps } from '@fluentui/react/lib/components/TeachingBubble/TeachingBubble.doc';

export const TeachingBubblePage = (props: { isHeaderVisible: boolean }) => (
  <LayerHost>
    <DemoPage
      jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/TeachingBubble.page.json')}
      {...{ ...TeachingBubblePageProps, ...props }}
    />
  </LayerHost>
);

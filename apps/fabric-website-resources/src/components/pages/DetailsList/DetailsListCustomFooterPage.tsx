import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { DetailsListCustomFooterPageProps } from '@fluentui/react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListCustomFooterPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage {...{ ...DetailsListCustomFooterPageProps, ...props }} />
);

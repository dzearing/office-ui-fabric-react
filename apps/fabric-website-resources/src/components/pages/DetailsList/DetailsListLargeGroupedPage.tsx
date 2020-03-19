import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { DetailsListLargeGroupedPageProps } from '@fluentui/react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListLargeGroupedPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage {...{ ...DetailsListLargeGroupedPageProps, ...props }} />
);

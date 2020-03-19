import * as React from 'react';

import { CoachmarkBasicExample } from './examples/Coachmark.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
const CoachmarkBasicExampleCode = require('!raw-loader!@fluentui/react/src/components/Coachmark/examples/Coachmark.Basic.Example.tsx') as string;
export const CoachmarkPageProps: IDocPageProps = {
  title: 'Coachmark',
  componentName: 'Coachmark',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/react/current/src/components/Coachmark',
  examples: [
    {
      title: 'Coachmark Basic',
      code: CoachmarkBasicExampleCode,
      view: <CoachmarkBasicExample />,
      isScrollable: false
    }
  ],
  overview: require<string>('!raw-loader!@fluentui/react/src/components/Coachmark/docs/CoachmarkOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!@fluentui/react/src/components/Coachmark/docs/CoachmarkDos.md'),
  donts: require<string>('!raw-loader!@fluentui/react/src/components/Coachmark/docs/CoachmarkDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true
};

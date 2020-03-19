import * as React from 'react';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';

export class ProgressIndicatorIndeterminateExample extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return <ProgressIndicator label="Example title" description="Example description" />;
  }
}

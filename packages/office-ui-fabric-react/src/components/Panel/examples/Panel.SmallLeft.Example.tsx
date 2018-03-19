import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib-es2015/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib-es2015/Panel';

export class PanelSmallLeftExample extends React.Component<{}, {
  showPanel: boolean;
}> {

  constructor(props: {}) {
    super(props);
    this.state = { showPanel: false };
  }

  public render() {
    return (
      <div>
        <DefaultButton
          description='Opens the Sample Panel'
          // tslint:disable-next-line:jsx-no-lambda
          onClick={ () => this.setState({ showPanel: true }) }
          text='Open Panel'
        />
        <Panel
          isOpen={ this.state.showPanel }
          type={ PanelType.smallFixedNear }
          // tslint:disable-next-line:jsx-no-lambda
          onDismiss={ () => this.setState({ showPanel: false }) }
          headerText='Panel - Small, left-aligned, fixed'
        >
          <span>Content goes here.</span>
        </Panel>
      </div>
    );
  }
}

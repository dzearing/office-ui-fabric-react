import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib-es2015/Utilities';
import { DefaultButton } from 'office-ui-fabric-react/lib-es2015/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib-es2015/Panel';

export class PanelMediumExample extends React.Component<{}, {
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
          onClick={ this._setShowPanel(true) }
          text='Open Panel'
        />
        <Panel
          isOpen={ this.state.showPanel }
          onDismiss={ this._setShowPanel(false) }
          type={ PanelType.medium }
          headerText='Medium Panel'
        >
          <span>Content goes here.</span>
        </Panel>
      </div>
    );
  }

  @autobind
  private _setShowPanel(showPanel: boolean): () => void {
    return (): void => {
      this.setState({ showPanel });
    };
  }
}

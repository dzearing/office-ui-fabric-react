import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib-es2015/Utilities';
import { DefaultButton } from 'office-ui-fabric-react/lib-es2015/Button';
import { Panel } from 'office-ui-fabric-react/lib-es2015/Panel';

export class PanelHiddenOnDismissExample extends React.Component<{}, {
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
          text='Open panel'
          onClick={ this._showPanel }
        />
        <Panel
          isOpen={ this.state.showPanel }
          isHiddenOnDismiss={ true }
          headerText='Hidden on Dismiss Panel'
          onDismiss={ this._hidePanel }
        >
          <span>When dismissed, this panel will be hidden instead of destroyed.</span>
        </Panel>
      </div>
    );
  }

  @autobind
  private _showPanel(): void {
    this.setState({ showPanel: true });
  }

  @autobind
  private _hidePanel(): void {
    this.setState({ showPanel: false });
  }
}

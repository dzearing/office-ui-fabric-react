import * as React from 'react';
import * as styles from './Layer.Example.scss';
import { AnimationClassNames } from '@fluentui/react/lib/Styling';
import { css, Async } from '@fluentui/react/lib/Utilities';
import { Layer } from '@fluentui/react/lib/Layer';
import { Toggle } from '@fluentui/react/lib/Toggle';

interface ILayerBasicExampleContext {
  message?: string;
}

const LayerBasicExampleContext = React.createContext<ILayerBasicExampleContext>({ message: undefined });

interface ILayerContentExampleState {
  time: string;
}

class LayerContentExample extends React.Component<{}, ILayerContentExampleState> {
  public state = {
    time: new Date().toLocaleTimeString()
  };

  private _async = new Async(this);

  public componentDidMount() {
    this._async.setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  public componentWillUnmount(): void {
    this._async.dispose();
  }

  public render() {
    return (
      <LayerBasicExampleContext.Consumer>
        {value => (
          <div className={css(styles.content, AnimationClassNames.scaleUpIn100)}>
            <div className={styles.textContent}>{value.message}</div>
            <div>{this.state.time}</div>
          </div>
        )}
      </LayerBasicExampleContext.Consumer>
    );
  }
}

interface ILayerBasicExampleState {
  showLayer: boolean;
}

export class LayerBasicExample extends React.Component<{}, ILayerBasicExampleState> {
  public state = {
    showLayer: false
  };

  public render() {
    const { showLayer } = this.state;
    return (
      <LayerBasicExampleContext.Provider
        value={{
          message: 'Hello world.'
        }}
      >
        <div>
          <Toggle label="Wrap the content box below in a Layer" inlineLabel checked={showLayer} onChange={this._onChange} />

          {showLayer ? (
            <Layer>
              <LayerContentExample />
            </Layer>
          ) : (
            <LayerContentExample />
          )}
        </div>
      </LayerBasicExampleContext.Provider>
    );
  }

  private _onChange = (ev: React.FormEvent<HTMLElement | HTMLInputElement>, checked: boolean): void => {
    this.setState({ showLayer: checked });
  };
}

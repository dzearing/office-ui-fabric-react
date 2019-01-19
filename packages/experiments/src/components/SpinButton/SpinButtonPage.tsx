import * as React from 'react';
import { ExampleCard, ComponentPage, IComponentDemoPageProps, PropertiesTableSet } from '@uifabric/example-app-base';
import { SpinButtonBasicExample } from './examples/SpinButton.Basic.Example';

// tslint:disable-next-line:no-var-requires
const SpinButtonBasicExampleCode = require('!raw-loader!@uifabric/experiments/src/components/SpinButton/examples/SpinButton.Basic.Example.tsx') as string;
// tslint:disable-next-line:no-var-requires

export class SpinButtonPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title={'SpinButton'}
        componentName="SpinButtonExample"
        exampleCards={
          <div>
            <div className="SpinButton-basic-example">
              <ExampleCard title="SpinButton Basic, not Collapsible" code={SpinButtonBasicExampleCode}>
                <SpinButtonBasicExample />
              </ExampleCard>
            </div>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/experiments/src/components/SpinButton/SpinButton.types.ts')]}
          />
        }
        overview={
          <div>
            <p>SpinButton navigation component. If the SpinButton is collapsible, the collapse button is shown on the top.</p>
            <p>
              The SpinButton uses a list of items to render the vertical navigation. Items are rendered as SpinButton buttons by default. If
              an item has a buttonAs or onRender property, these properties will be used to render the item instead. If not, but a
              defaultButton property is specified on the SpinButton, the default button will be used for button rendering. Items should have
              an icon and a label if they are used in a collapsible SpinButton.
            </p>
            <p>
              Custom styling for the SpinButton is done by passing in a ISpinButtonStyles object. And example of this can be seen in the
              basic example below.
            </p>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}

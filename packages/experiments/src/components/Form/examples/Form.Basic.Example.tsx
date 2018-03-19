/* tslint:disable:no-any */
import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { autobind } from 'office-ui-fabric-react';
import { Form, FormTextInput } from '../../Form';

export interface IFormBasicExampleState {
  formResults: any;
}

export class FormBasicExample extends React.Component<{}, IFormBasicExampleState> {

  public render(): JSX.Element {
    return (
      <div>
        <Form onSubmit={ this._onSubmit }>
          <FormTextInput textFieldProps={ { label: 'Name' } } inputKey='name' />
          <PrimaryButton>Submit</PrimaryButton>
        </Form>
        {
          this.state && this.state.formResults &&
          <div className='results-view'>
            <h4>Results</h4>
            { JSON.stringify(this.state.formResults) }
          </div>
        }
      </div>
    );
  }

  @autobind
  private _onSubmit(values: { [key: string]: any }): void {
    this.setState({ formResults: values });
  }
}
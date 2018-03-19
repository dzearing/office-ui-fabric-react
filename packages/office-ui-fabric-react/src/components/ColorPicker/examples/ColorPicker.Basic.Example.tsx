import * as React from 'react';
import {
  ColorPicker
} from 'office-ui-fabric-react/lib-es2015/ColorPicker';

export interface IBasicColorPickerExampleState {
  color: string;
}

export class ColorPickerBasicExample extends React.Component<any, IBasicColorPickerExampleState> {

  public render() {

    return (
      <ColorPicker color='#FFFFFF' />
    );
  }
}

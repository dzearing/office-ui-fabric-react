import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './Dialog.Basic.Example.scss';
import { createTheme } from 'office-ui-fabric-react/lib/Styling';
import { Customizer } from 'office-ui-fabric-react/lib/Utilities';

const TeamsTheme = createTheme({
  palette: {
    'themePrimary': '#6061aa',
    'themeLighterAlt': '#faf2fb',
    'themeLighter': '#ecccee',
    'themeLight': '#dca3df',
    'themeTertiary': '#ba58bf',
    'themeSecondary': '#9a21a1',
    'themeDarkAlt': '#7f0d85',
    'themeDark': '#6b0b70',
    'themeDarker': '#4f0853',
    'neutralLighterAlt': '#f8f8f8',
    'neutralLighter': '#f4f4f4',
    'neutralLight': '#eaeaea',
    'neutralQuaternaryAlt': '#dadada',
    'neutralQuaternary': '#d0d0d0',
    'neutralTertiaryAlt': '#c8c8c8',
    'neutralTertiary': '#c2c2c2',
    'neutralSecondary': '#858585',
    'neutralPrimaryAlt': '#4b4b4b',
    'neutralPrimary': '#333',
    'neutralDark': '#272727',
    'black': '#1d1d1d',
    'white': '#fff'
  }
});

const PrimaryButtonStyles = {
  root: {
    borderRadius: 3
  }
};

const DefaultButtonStyles = {
  root: {
    borderRadius: 3,
    border: '2px solid rgb(189,189,189)',
    background: 'transparent'
  },
  rootHovered: {
    background: 'rgb(189,189,189)'
  }
};

export class DialogBasicExample extends React.Component<{}, {
  hideDialog: boolean
}> {

  constructor(props: {}) {
    super(props);

    this.state = {
      hideDialog: true
    };
  }

  public render() {
    return (
      <Customizer
        settings={ { theme: TeamsTheme } }
        scopedSettings={ {
          PrimaryButton: {
            styles: PrimaryButtonStyles,
          },
          DefaultButton: {
            styles: DefaultButtonStyles
          }
        } }
      >
        <div>
          <DefaultButton
            secondaryText='Opens the Sample Dialog'
            onClick={ this._showDialog }
            text='Open Dialog'
          />
          <label id='myLabelId' className='screenReaderOnly'>My sample Label</label>
          <label id='mySubTextId' className='screenReaderOnly'>My Sample description</label>

          <Dialog
            hidden={ this.state.hideDialog }
            onDismiss={ this._closeDialog }
            dialogContentProps={ {
              type: DialogType.normal,
              title: 'All emails together',
              subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
            } }
            modalProps={ {
              titleAriaId: 'myLabelId',
              subtitleAriaId: 'mySubTextId',
              isBlocking: false,
              containerClassName: 'ms-dialogMainOverride'
            } }
          >
            { null /** You can also include null values as the result of conditionals */ }
            <DialogFooter>
              <PrimaryButton onClick={ this._closeDialog } text='Save' />
              <DefaultButton onClick={ this._closeDialog } text='Cancel' />
            </DialogFooter>
          </Dialog>
        </div>
      </Customizer>
    );
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  }

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
}

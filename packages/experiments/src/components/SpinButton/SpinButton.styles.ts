import { ISpinButtonComponent, ISpinButtonStylesReturnType, ISpinButtonTokenReturnType } from './SpinButton.types';
import { getGlobalClassNames } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-SpinButton',
  text: 'ms-SpinButton-text'
};

const baseTokens: ISpinButtonComponent['tokens'] = {
  textColor: 'blue'
};

const warningTokens: ISpinButtonComponent['tokens'] = {
  textColor: 'red'
};

export const SpinButtonTokens: ISpinButtonComponent['tokens'] = (props, theme): ISpinButtonTokenReturnType => [
  baseTokens,
  props.warning && warningTokens
];

export const SpinButtonStyles: ISpinButtonComponent['styles'] = (props, theme, tokens): ISpinButtonStylesReturnType => {
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        boxSizing: 'border-box',
        border: '1px solid #888',
        height: 32
      }
    ],
    input: {
      flexGrow: 1,
      justifySelf: 'stretch',
      margin: 1,
      border: 'none',
      display: 'block',
      selectors: {
        ':focus': {
          outline: 'none'
        }
      }
    },

    buttonContainer: {},
    upButton: {
      flexGrow: 1
    },
    downButton: {
      flexGrow: 1
    }
  };
};

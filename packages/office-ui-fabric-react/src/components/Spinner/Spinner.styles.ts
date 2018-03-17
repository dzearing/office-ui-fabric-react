export function getStyles(props) {
  return {
    root: {}
  };
}


export const getStyles = function (props) {
  return {

  };
};

export const getStyles = (props: ISpinnerStyleProps): ISpinnerStyles => {
  const { palette } = props.theme;

  return {
    root: [
      'ms-Spinner',
      {
        background: palette.themePrimary,
      },
    ],

    circle: [{}, props.large && {},]

  };
};


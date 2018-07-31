import { IButtonStyles, IButtonStyleProps } from '../Button.types';
import { ITheme, concatStyleSets, getFocusStyle, HighContrastSelector } from '../../../Styling';

export function getStyles(props: IButtonStyleProps): IButtonStyles {
  const { theme } = props;
  const { palette } = theme;

  const commandButtonHighContrastFocus = {
    left: 4,
    top: 4,
    bottom: 4,
    right: 4,
    border: 'none'
  };

  return {
    root: [
      getFocusStyle(theme, -1, 'relative', commandButtonHighContrastFocus),
      {
        minWidth: '40px',
        backgroundColor: palette.neutralLighter,
        color: palette.neutralPrimary,
        padding: '0 4px',
        selectors: {
          [HighContrastSelector]: {
            border: 'none'
          }
        }
      }
    ],

    rootHovered: {
      backgroundColor: palette.neutralLight,
      color: palette.neutralDark,
      selectors: {
        [HighContrastSelector]: {
          color: 'Highlight'
        }
      }
    },

    rootPressed: {
      backgroundColor: palette.neutralQuaternaryAlt,
      color: palette.black
    },

    rootChecked: {
      backgroundColor: palette.neutralQuaternaryAlt,
      color: palette.black
    },

    rootExpanded: {
      backgroundColor: palette.neutralQuaternaryAlt,
      color: palette.black
    },

    rootCheckedHovered: {
      backgroundColor: palette.neutralQuaternary,
      color: palette.black
    },

    // Split button styles
    splitButtonContainer: {
      selectors: {
        [HighContrastSelector]: {
          border: 'none'
        }
      }
    },

    splitButtonDivider: {
      backgroundColor: palette.neutralTertiaryAlt,
      marginTop: 4,
      marginBottom: 4
    },

    splitButtonMenuButton: {
      backgroundColor: palette.neutralLighter,
      color: palette.neutralPrimary,
      selectors: {
        ':hover': {
          backgroundColor: palette.neutralLight,
          color: palette.neutralDark,
          selectors: {
            [HighContrastSelector]: {
              color: 'Highlight'
            }
          }
        }
      }
    },

    splitButtonMenuButtonDisabled: {
      backgroundColor: palette.neutralLighter,
      selectors: {
        ':hover': {
          backgroundColor: palette.neutralLighter
        }
      }
    },

    splitButtonMenuButtonChecked: {
      backgroundColor: palette.neutralQuaternaryAlt,
      color: palette.black,
      selectors: {
        ':hover': {
          backgroundColor: palette.neutralQuaternaryAlt
        }
      }
    },

    splitButtonMenuButtonExpanded: {
      backgroundColor: palette.neutralQuaternaryAlt,
      color: palette.black,
      selectors: {
        ':hover': {
          backgroundColor: palette.neutralQuaternaryAlt
        }
      }
    },

    splitButtonMenuIcon: {
      color: palette.neutralPrimary
    },

    splitButtonMenuIconDisabled: {
      color: palette.neutralTertiary
    },

    label: {
      fontWeight: 'normal' // theme.fontWeights.semibold,
    },

    icon: {
      color: palette.themeDarkAlt
    },

    menuIcon: {
      color: palette.neutralSecondary
    }
  } as IButtonStyles;
}

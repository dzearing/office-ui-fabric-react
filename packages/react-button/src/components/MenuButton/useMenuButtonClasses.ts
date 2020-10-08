import { makeVariantClasses } from '@fluentui/react-theme-provider';
import { useButtonClasses } from '../Button/useButtonClasses';

const GlobalClassNames = {
  root: 'ms-Button-root',
  menuIcon: 'ms-Button-menuIcon',
  _disabled: 'ms-Button--disabled',
  _ghost: 'ms-Button--ghost',
  _expanded: 'ms-Button--expanded',
};

export const useMenuButtonClasses = makeVariantClasses({
  name: 'MenuButton',
  extends: useButtonClasses,
  styles: {
    root: [
      GlobalClassNames.root,
      {
        // This seems like a bad selector.
        '& > .ms-Button-menuIcon + *': {
          marginLeft: 0,
        },

        '& .ms-layer': {
          position: 'absolute',
        },

        [`&:hover .${GlobalClassNames.menuIcon}`]: {
          color: 'var(--button-hovered-menuIconColor, var(--button-menuIconColor))',
        },

        [`&:active .${GlobalClassNames.menuIcon}`]: {
          color:
            'var(--button-pressed-menuIconColor, var(--button-hovered-menuIconColor, var(--button-menuIconColor)))',
        },
      },
    ],

    menuIcon: [
      GlobalClassNames.menuIcon,
      {
        color: 'var(--button-menuIconColor)',
        fontSize: 'var(--button-menuIconSize)',

        [`.${GlobalClassNames._disabled} &`]: {
          color: 'var(--button-disabled-menuIconColor)',
        },
      },
    ],

    _disabled: [GlobalClassNames._disabled],
  },

  variants: {
    root: {
      menuIconSize: '12px',
      menuIconColor: 'var(--body-menuIconColor)',
    },
  },
});

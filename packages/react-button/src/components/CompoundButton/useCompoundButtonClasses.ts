import { makeVariantClasses, Theme } from '@fluentui/react-theme-provider';
import { CompoundButtonState, CompoundButtonVariants } from './CompoundButton.types';
import { buttonStyles, buttonVariants } from '../Button/useButtonClasses';
import { ButtonVariants } from '../Button/Button.types';

import { merge } from '@fluentui/utilities';
import { concatStyleSets } from '@fluentui/style-utilities';

const GlobalClassNames = {
  root: 'ms-CompoundButton',
  contentContainer: 'ms-CompoundButton-contentContainer',
  secondaryContent: 'ms-CompoundButton-secondaryContent',
};

/**
 * CompoundButton classes hook for mixing classes into a mutable state object.
 */
export const useCompoundButtonClasses = makeVariantClasses<CompoundButtonState, CompoundButtonVariants>({
  name: 'CompoundButton',
  prefix: '--button',
  styles: concatStyleSets(buttonStyles, {
    root: [
      GlobalClassNames.root,
      {
        alignItems: 'flex-start',
      },
    ],

    contentContainer: [
      GlobalClassNames.contentContainer,
      {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      },
    ],

    secondaryContent: [
      GlobalClassNames.secondaryContent,
      {
        color: 'var(--button-secondaryContentColor, var(--button-contentColor))',
        fontSize: 'var(--button-secondaryContentFontSize)',
        fontWeight: 'var(--button-secondaryContentFontWeight)',
        lineHeight: '100%',
        marginTop: 'var(--button-secondaryContentGap)',

        '@media (forced-colors: active)': {
          color: 'var(--button-highContrast-secondaryContentColor)',
        },

        [`.${GlobalClassNames.root}:hover &`]: {
          color: 'var(--button-hovered-secondaryContentColor, var(--button-secondaryContentColor))',

          '@media (forced-colors: active)': {
            color:
              'var(--button-highContrast-hovered-secondaryContentColor, ' +
              'var(--button-highContrast-secondaryContentColor))',
          },
        },

        [`.${GlobalClassNames.root}:active &`]: {
          color:
            'var(--button-pressed-secondaryContentColor, ' +
            'var(--button-hovered-secondaryContentColor, ' +
            'var(--button-secondaryContentColor)))',

          '@media (forced-colors: active)': {
            color:
              'var(--button-highContrast-pressed-secondaryContentColor, ' +
              'var(--button-highContrast-hovered-secondaryContentColor, ' +
              'var(--button-highContrast-secondaryContentColor)))',
          },
        },

        [`.${GlobalClassNames.root}[aria-disabled="true"] &`]: {
          color: 'var(--button-disabled-secondaryContentColor, var(--button-disabled-contentColor))',

          '@media (forced-colors: active)': {
            color:
              'var(--button-highContrast-disabled-secondaryContentColor, ' +
              'var(--button-highContrast-secondaryContentColor))',
          },
        },
      },
    ],
  }),

  variants: (theme: Theme): CompoundButtonVariants => {
    const { fonts, palette, semanticColors } = theme;

    return merge<ButtonVariants>({}, buttonVariants(theme), {
      root: {
        height: 'auto',
        maxWidth: '280px',
        minWidth: '72px',
        paddingBottom: '16px',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '16px',
        iconSize: '28px',
        secondaryContentColor: palette.neutralSecondary,
        secondaryContentGap: '4px',
        secondaryContentFontSize: fonts?.small.fontSize as string,
        secondaryContentFontWeight: 'normal',

        hovered: {
          secondaryContentColor: palette.neutralDark,
        },

        pressed: {
          secondaryContentColor: semanticColors.buttonTextPressed,
        },

        disabled: {
          secondaryContentColor: semanticColors.buttonTextDisabled,
        },

        highContrast: {
          secondaryContentColor: 'WindowText',
          hovered: {
            secondaryContentColor: 'Highlight',
          },
          pressed: {
            secondaryContentColor: 'WindowText',
          },
          disabled: {
            secondaryContentColor: 'GrayText',
          },
        },
      },

      block: {
        maxWidth: '100%',
      },

      iconOnly: {
        minHeight: 'var(--button-size-regular)',
        width: 'var(--button-minHeight)',
        minWidth: '0',
        paddingBottom: '0',
        paddingTop: '0',
        paddingLeft: '0',
        paddingRight: '0',
      },

      primary: {
        secondaryContentColor: 'var(--color-brand-secondaryContentColor)',

        focused: {
          secondaryContentColor: 'var(--color-brand-focused-secondaryContentColor)',
        },

        hovered: {
          secondaryContentColor: 'var(--color-brand-hovered-secondaryContentColor)',
        },

        pressed: {
          secondaryContentColor: 'var(--color-brand-pressed-secondaryContentColor)',
        },

        highContrast: {
          secondaryContentColor: 'Window',
          hovered: {
            secondaryContentColor: 'Window',
          },
          pressed: {
            secondaryContentColor: 'Window',
          },
          disabled: {
            secondaryContentColor: 'GrayText',
          },
        },
      },

      ghost: {
        secondaryContentColor: palette.neutralSecondary,
        disabled: {
          secondaryContentColor: palette.neutralTertiary,
        },
        focused: {
          secondaryContentColor: palette.neutralSecondary,
        },
        hovered: {
          secondaryContentColor: palette.neutralDark,
        },
        pressed: {
          secondaryContentColor: palette.black,
        },

        highContrast: {
          secondaryContentColor: 'WindowText',
          hovered: {
            secondaryContentColor: 'Highlight',
          },
          pressed: {
            secondaryContentColor: 'Highlight',
          },
          disabled: {
            secondaryContentColor: 'GrayText',
          },
        },
      },

      transparent: {
        hovered: {
          secondaryContentColor: palette?.themePrimary,
        },
      },
    } as ButtonVariants);
  },
});

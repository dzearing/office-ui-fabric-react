import { ITheme } from '@fluentui/react';
import { getFocusStyle } from '@fluentui/react/lib/Styling';
import { IButtonStyles } from '@fluentui/react/lib/Button';
import { FontSizes } from '../AzureType';

export const CommandBarButtonStyles = (theme: ITheme): Partial<IButtonStyles> => {
  const { semanticColors } = theme;

  return {
    icon: {
      color: semanticColors.focusBorder
    },
    menuIcon: {
      color: semanticColors.bodyText
    },
    root: {
      ...getFocusStyle(theme, { inset: 2 }),
      fontSize: FontSizes.size12,
      backgroundColor: semanticColors.bodyBackground,
      color: semanticColors.bodyText
    },
    rootExpanded: {
      backgroundColor: semanticColors.menuItemBackgroundHovered,
      color: semanticColors.bodyText
    },
    rootHovered: {
      backgroundColor: semanticColors.menuItemBackgroundHovered,
      color: semanticColors.bodyText
    },
    rootPressed: {
      backgroundColor: semanticColors.menuItemBackgroundPressed,
      color: semanticColors.bodyText
    },
    rootChecked: {
      backgroundColor: semanticColors.listItemBackgroundChecked,
      color: semanticColors.bodyText
    },
    rootDisabled: {
      backgroundColor: semanticColors.bodyBackground,
      color: semanticColors.disabledBodyText
    },
    splitButtonMenuButton: {
      backgroundColor: semanticColors.bodyBackground,
      selectors: {
        ':hover': {
          backgroundColor: semanticColors.menuItemBackgroundHovered
        }
      }
    },
    splitButtonMenuButtonChecked: {
      backgroundColor: semanticColors.bodyBackground,
      selectors: {
        ':hover': {
          backgroundColor: semanticColors.menuItemBackgroundHovered
        }
      }
    },
    splitButtonMenuButtonDisabled: {
      backgroundColor: semanticColors.bodyBackground
    },
    splitButtonMenuButtonExpanded: {
      backgroundColor: semanticColors.bodyBackground,
      selectors: {
        ':hover': {
          backgroundColor: semanticColors.menuItemBackgroundHovered
        }
      }
    },
    splitButtonMenuIcon: {
      color: semanticColors.bodyText
    }
  };
};

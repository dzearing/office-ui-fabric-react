import { Theme, Tokens } from '@fluentui/theme';
import { createTheme } from '@uifabric/styling';
import { getTokens } from './getTokens';

/**
 * Creates default theme (Fluent theme).
 */
export const createDefaultTheme = (): Theme => {
  const defaultTheme: Theme = createTheme({});
  defaultTheme.tokens = getTokens(defaultTheme);

  return defaultTheme;
};

export const defaultTokens: Tokens = {
  body: { background: '#ffffff' },
  accent: {
    background: '#0078d4',
    contentColor: '#ffffff',
    borderColor: 'transparent',
    iconColor: '#ffffff',
    dividerColor: '#ffffff',
    disabled: {
      background: '#f3f2f1',
      contentColor: '#c8c6c4',
      borderColor: 'var(--accent-disabled-background)',
      iconColor: 'var(--accent-disabled-contentColor)',
      dividerColor: '#c8c6c4',
    },
    hovered: {
      background: '#106ebe',
      contentColor: '#ffffff',
      borderColor: 'var(--accent-borderColor)',
      iconColor: '#ffffff',
    },
    pressed: {
      background: '#005a9e',
      contentColor: 'var(--accent-contentColor)',
      borderColor: 'var(--accent-borderColor)',
      iconColor: 'var(--accent-iconColor)',
    },
    focused: {
      background: 'var(--accent-background)',
      borderColor: 'var(--accent-borderColor)',
      contentColor: 'var(--accent-contentColor)',
      iconColor: 'var(--accent-iconColor)',
    },
    checked: {
      background: 'var(--accent-pressed-background)',
      contentColor: 'var(--accent-pressed-contentColor)',
    },
    checkedHovered: {
      background: 'var(--accent-pressed-background)',
      contentColor: 'var(--accent-pressed-contentColor)',
    },
  },

  // TODO: this should be a variant.
  ghost: {
    background: 'var(--body-background)',
    borderColor: 'transparent',
    contentColor: '#323130',
    iconColor: '#106ebe',
    menuIconColor: '#605e5c',

    checked: {
      background: 'var(--ghost-background)',
      borderColor: 'var(--ghost-borderColor)',
      contentColor: '#000000',
      iconColor: '#004578',
    },
    checkedHovered: {
      background: 'var(--ghost-background)',
      borderColor: 'var(--ghost-borderColor)',
      contentColor: 'var(--ghost-hovered-contentColor)',
      iconColor: 'var(--ghost-hovered-iconColor)',
    },
    disabled: {
      background: 'var(--ghost-background)',
      borderColor: 'var(--ghost-borderColor)',
      contentColor: '#a19f9d',
      iconColor: 'inherit',
    },
    expanded: {
      contentColor: '#0078d4',
    },
    focused: {
      background: 'var(--ghost-background)',
      borderColor: 'var(--ghost-borderColor)',
      contentColor: 'var(--ghost-contentColor)',
      iconColor: 'var(--ghost-iconColor)',
    },
    hovered: {
      background: 'var(--ghost-background)',
      borderColor: 'var(--ghost-borderColor)',
      contentColor: '#0078d4',
      iconColor: '#0078d4',
    },
    pressed: {
      background: 'var(--ghost-background)',
      borderColor: 'var(--ghost-borderColor)',
      contentColor: '#000000',
      iconColor: '#004578',
    },
  },

  // TODO: these should not be here.
  button: {
    size: {
      // smallest size supported by default theme is 24px.
      smallest: '24px',
      smaller: '24px',
      small: '24px',
      regular: '32px',
      large: '40px',
      larger: '48px',
      largest: '64px',
    },
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '0',
    paddingBottom: '0',
    minWiedth: '80px',
    minHeight: 'var(--button-size-regular)',
    contentGap: '10px',
    iconSize: '16px',
    borderRadius: '2px',
    borderWidth: '1px',
    // eslint-disable-next-line @fluentui/max-len
    fontFamily: `'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif`,
    fontSize: '14px',
    fontWeight: 400,
    focusColor: '#605e5c',
    focusInnerColor: '#ffffff',
    focusWidth: '2px',
    innerFocusWidth: '2px',
    background: '#ffffff',
    borderColor: '#8a8886',
    contentColor: '#323130',
    iconColor: 'inherit',
    menuIconColor: 'inherit',
    dividerColor: 'rgba(0, 0, 0, 0.1)',
    dividerLength: 'var(--button-minHeight)',
    dividerThickness: 'var(--button-borderWidth)',

    disabled: {
      background: '#f3f2f1',
      borderColor: '#f3f2f1',
      contentColor: '#a19f9d',
      iconColor: 'var(--button-disabled-contentColor)',
      dividerColor: '#c8c6c4',
    },

    hovered: {
      background: '#f3f2f1',
      borderColor: '#8a8886',
      contentColor: '#201f1e',
      iconColor: 'var(--button-iconColor)',
      menuIconColor: 'var(--button-menuIconColor)',
    },

    pressed: {
      background: '#edebe9',
      borderColor: '#8a8886',
      contentColor: '#201f1e',
      iconColor: 'var(--button-iconColor)',
      menuIconColor: 'var(--button-menuIconColor)',
    },

    focused: {
      background: 'var(--button-background)',
      borderColor: 'var(--button-borderColor)',
      contentColor: 'var(--button-contentColor)',
      iconColor: 'var(--button-iconColor)',
      menuIconColor: 'var(--button-menuIconColor)',
    },

    checked: {
      background: 'var(--button-pressed-background)',
      contentColor: 'var(--button-pressed-contentColor)',
    },

    checkedHovered: {
      background: 'var(--button-pressed-background)',
      contentColor: 'var(--button-pressed-contentColor)',
    },
  },
};

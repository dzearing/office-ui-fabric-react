import { Theme, ColorTokens, ColorTokenSet } from './types';

const defaultLightColors: ColorTokens = {
  background: 'white',
  contentColor: 'black',
  subTextColor: '#333',
  linkColor: 'blue',
  iconColor: 'black',
  borderColor: '#ccc',
  dividerColor: '#ccc',
  focusColor: '#000',
  focusInnerColor: '#fff',
};

const defaultLightColorSet: ColorTokenSet = {
  ...defaultLightColors,
  hovered: defaultLightColors,
  pressed: defaultLightColors,
  disabled: defaultLightColors,
  checked: defaultLightColors,
  checkedHovered: defaultLightColors,
  checkedPressed: defaultLightColors,
};

/**
 * Creates a blank initial theme.
 */
export const createDefaultTheme = (): Theme => ({
  stylesheets: [],
  tokens: {
    color: {
      body: defaultLightColorSet,
      brand: defaultLightColorSet,
    },
  },
  components: {},
});

# @fluentui/react-theme-provider

**React theming component and hook for [Fluent UI React](https://developer.microsoft.com/en-us/fluentui)**

## Installation

```bash
yarn add @fluentui/react-theme-provider
```

## Example usage

First, ensure you use an existing theme, or create your own. Example:

```js
export const theme: Theme = {
  /* Provide any stylesheets which should come along with the theme */
  stylesheets: [
    '.className { ... }',
    ...
  ],

  /* Provide standard fluent tokens here. */
  tokens: {
    body: {
      fill: '#fafafa',
      text: '#333'
    }
  }
};
```

Use the theme with Fluent UI by wrapping content within the provider:

```tsx
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <>...app</>
  </ThemeProvider>
);
```

## `ThemeProvider` api

The `ThemeProvider` component takes all default `div` html attributes, in addition to the following:

| Prop name | Description        |
| --------- | ------------------ |
| theme     | The theme to apply |

### Theme generation

Themes can be defined from a few knobs to expand to a fully qualified theme. We have a few theme generation options available:

1. Dynamically create a theme using the `generateTheme` helper.

```tsx
 const lightTheme = const generateTheme({
  mode: 'light',
  productColor: 'red',
  densityScale: 1,
  fontScale: 1
});
```

2. Define the theme manually.

See the theme shape section below for a details on what a complete theme object contains.

## Theme shape

```tsx
{
  stylesheets: [
    '...css',
    { url: 'http://...' }
  ]
  tokens: { ... }
}
```

## Theme tokens

| background |
| contentColor |
| captionColor |
| linkColor |
| dividerColor

### Color tokens

### General guidance

Token names try to follow css convention with some exceptions. Examples:

/\*\*

- A set of states for each color plate to use.
-
- Note:
-
- State names here align to a consistent naming convention:
-
- The component is **\_**
-
- Bad: "hover", Good: "hovered"
-
- Additional considerations:
-
- The term "active" in css means that the keyboard or mouse button
- which activates the component is pressed down. It is however ambiguous
- with a focused state, as the HTML object model refers to the focused
- element as the "activeElement". To resolve ambiguity and to be more
- compatible with other platforms reusing token names, we have decided to snap
- to "pressed".
  \*/

### Colors

```tsx
tokens: {
  body: {
    background: '',
    contentColor: ''

  },
  accent: {

  },
  button: {

  }
}
```

### Density

import * as React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { PartialTheme } from './types';

const lightTheme: PartialTheme = {
  tokens: {
    color: {
      body: {
        background: 'white',
        contentColor: 'black',
      },
    },
  },
};

const darkTheme: PartialTheme = {
  tokens: {
    color: {
      body: {
        background: 'white',
        contentColor: 'black',
      },
    },
  },
};

const themeWithStylesheets: PartialTheme = {
  stylesheets: [
    `
    .foo {
      background: var(--color-custom-background);
      color: var(--color-custom-contentColor);
    }
  `,
  ],
  tokens: {
    color: {
      custom: {
        background: 'purple',
      },
      body: {
        background: 'white',
        contentColor: 'black',
      },
    },
  },
};

export const NestedTheming = () => {
  const [isLight, setIsLight] = React.useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <button onClick={() => setIsLight(l => !l)}>Toggle theme</button>
      <div>I am {isLight ? 'light theme' : 'dark theme'}</div>
      <ThemeProvider theme={isLight ? darkTheme : lightTheme}>
        <div>I am a nested {isLight ? 'dark theme' : 'light theme'}</div>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export const TestStylesheets = () => (
  <ThemeProvider className="foo" theme={themeWithStylesheets}>
    <span>I am a custom color set.</span>
  </ThemeProvider>
);

export default {
  title: 'ThemeProvider',
};

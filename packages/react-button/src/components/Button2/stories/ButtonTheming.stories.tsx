import * as React from 'react';
import { mergeThemes, ThemeProvider, Theme, PartialTheme } from '@fluentui/react-theme-provider';
import { UploadIcon } from '@fluentui/react-icons';
import { ColorPicker, IColor } from 'office-ui-fabric-react';
import { Stack } from './Stack';
import { Text } from './Text';
import { Button } from '../../Button';

// tslint:disable: jsx-ban-props
const paletteAccent = 'var(--palette-accent)';
const paletteSoftest = 'var(--palette-softest)';
const paletteStrongest = 'var(--palette-strongest)';

const getThemes = (accent: string) => {
  const lightTheme = mergeThemes({
    tokens: {
      palette: {
        accent: accent,
        softest: 'white',
        strongest: 'black',
      },

      body: {
        background: 'white',
        contentColor: 'black',
      },

      accent: {
        background: paletteAccent,
        contentColor: paletteSoftest,

        hovered: {
          background: paletteAccent,
          contentColor: paletteSoftest,
        },
        pressed: {
          background: paletteAccent,
          contentColor: paletteSoftest,
        },
      },

      button: {
        background: '#ddd',
      },
    },
    stylesheets: [],
  });

  const darkTheme = mergeThemes(lightTheme, {
    tokens: {
      palette: {
        softest: 'black',
        strongest: 'white',
      },

      body: {
        background: '#333',
        contentColor: paletteStrongest,
      },

      button: {
        background: 'transparent',
        contentColor: paletteStrongest,

        hovered: {
          background: '#555',
          contentColor: paletteStrongest,
        },
      },

      accent: {
        background: paletteAccent,
        contentColor: paletteStrongest,

        hovered: {
          background: '#555',
          contentColor: paletteStrongest,
        },
      },
    },
  } as PartialTheme);

  return { lightTheme, darkTheme };
};

const ExampleBox = ({ title, theme }: { title: string; theme: Theme }) => (
  <ThemeProvider theme={theme} style={{ padding: 20 }}>
    <Stack>
      <Text>{title}</Text>
      <Button icon={<UploadIcon />} content="I am a button" />
      <Button primary content="I am a primary button" />
    </Stack>
  </ThemeProvider>
);

export const Button2ThemeExample = () => {
  const [color, setColor] = React.useState<string>('#f00');
  const { lightTheme, darkTheme } = getThemes(color);
  const onColorChange = React.useCallback((ev: never, newColor: IColor) => setColor(newColor.str), []);

  return (
    <Stack>
      <Text>Accent color</Text>
      <ColorPicker color={color} onChange={onColorChange} />

      <ExampleBox title="Light" theme={lightTheme} />
      <ExampleBox title="Dark" theme={darkTheme} />
    </Stack>
  );
};

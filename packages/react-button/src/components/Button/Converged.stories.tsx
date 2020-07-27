import * as React from 'react';
import { Button } from './Button';
import { mergeThemes, ThemeProvider, Theme, PartialTheme } from '@fluentui/react-theme-provider';
import { UploadIcon } from '@fluentui/react-icons';
import { Stack, Text, ColorPicker, IColor } from 'office-ui-fabric-react';

const color = {
  brand: {
    background: 'var(--color-brand-background)',
  },
};

const getThemes = (brandColor: string) => {
  const lightTheme = mergeThemes({
    tokens: {
      color: {
        body: {
          background: 'white',
          contentColor: 'black',
        },

        brand: {
          background: brandColor,
          contentColor: 'white',

          hovered: {
            background: color.brand.background,
          },
          pressed: {
            background: color.brand.background,
          },
        },
      },
    },
    stylesheets: [],
  });

  const darkTheme = mergeThemes(lightTheme, {
    tokens: {
      color: {
        body: {
          background: '#333',
          contentColor: '#fff',
        },

        brand: {
          background: '#eee',
          contentColor: '#fff',

          hovered: {
            background: '#555',
          },
        },
      },
    },
  } as PartialTheme);

  return { lightTheme, darkTheme };
};

const ExampleBox = ({ title, theme }: { title: string; theme: Theme }) => (
  <ThemeProvider theme={theme} style={{ padding: 20 }}>
    <Stack
      tokens={{
        childrenGap: 8,
        maxWidth: 400,
      }}
    >
      <Text variant="xLarge">{title}</Text>
      <Button icon={<UploadIcon />}>I am a button</Button>
      <Button primary>I am a primary button</Button>
    </Stack>
  </ThemeProvider>
);

export const ThemeExample = () => {
  const [color, setColor] = React.useState<string>('#f00');
  const { lightTheme, darkTheme } = getThemes(color);
  const onColorChange = React.useCallback((ev: never, newColor: IColor) => setColor(newColor.str), []);

  return (
    <Stack gap={16}>
      <Text variant="xLarge">Accent color</Text>
      <ColorPicker color={color} onChange={onColorChange} />

      <ExampleBox title="Light" theme={lightTheme} />
      <ExampleBox title="Dark" theme={darkTheme} />
    </Stack>
  );
};

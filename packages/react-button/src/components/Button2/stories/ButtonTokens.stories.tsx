import * as React from 'react';
import { Stack } from './Stack';
import { Text } from './Text';
import { Button } from '../Button';
import { ThemeProvider, mergeThemes } from '@fluentui/react-theme-provider';
import { createButtonTheme } from '../createButtonTheme';

// This is an app layer concerns
const productTheme = mergeThemes(
  createButtonTheme('github', {
    padding: '3px 10px',
    fontSize: '12px',
    fontWeight: '600',
    contentGap: '8px',
    borderRadius: '4px',
    borderWidth: '1px',
    background: 'linear-gradient(-180deg,#34d058,#28a745 90%)',
    contentColor: 'white',
    borderColor: 'rgba(27, 31, 35, 0.2)',

    hovered: {
      background: '#269f42 linear-gradient(-180deg,#2fcb53,#269f42 90%)',
      contentColor: 'white',
      borderColor: 'rgba(27, 31, 35, .5)',
    },

    pressed: {
      background: '#279f43',
      borderColor: 'rgba(27, 31, 35, .5)',
      contentColor: 'white',
      transform: 'none',
    },
  }),
  createButtonTheme('amazon', {
    fontFamily: `"Amazon Ember", Arial, sans-serif`,
    fontSize: '13px',
    fontWeight: '400',
    borderRadius: '3px',
    padding: '0 10px',

    background: 'linear-gradient(to bottom,#f7dfa5,#f0c14b)',
    contentColor: 'rgb(17, 17, 17)',
    borderColor: 'rgb(168, 135, 52) rgb(156, 126, 49) rgb(132, 106, 41)',

    hovered: {
      background: 'linear-gradient(to bottom,#f5d78e,#eeb933)',
      contentColor: 'rgb(17, 17, 17)',
      borderColor: '#a88734 #9c7e31 #846a29',
    },

    pressed: {
      background: '#f0c14b',
      contentColor: 'rgb(17, 17, 17)',
      borderColor: '#a88734 #9c7e31 #846a29',
    },
  }),
  createButtonTheme('netflix', {
    borderWidth: '0px',
    padding: '7px 17px',
    borderRadius: '3px',
    fontFamily: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',

    background: 'rgb(229, 9, 20)',
    contentColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(255, 255, 255)',

    hovered: {
      background: 'rgb(255, 50, 61)',
      borderColor: '#a88734 #9c7e31 #846a29',
    },

    pressed: {
      background: 'rgb(229, 9, 20)',
      borderColor: '#a88734 #9c7e31 #846a29',
    },
  }),
  createButtonTheme('spotifyPrimary', {
    height: '48px',
    borderWidth: '0px',
    padding: '17px 48px',
    borderRadius: '500px',
    fontFamily: 'Circular, Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '700',
    background: 'rgb(29, 185, 84) none repeat scroll 0% 0% / auto padding-box border-box',
    contentColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(255, 255, 255)',

    hovered: {
      background: 'rgb(30, 215, 96) none repeat scroll 0% 0% / auto padding-box border-box',
      contentColor: 'rgb(255, 255, 255)',
      borderColor: 'rgb(255, 255, 255)',
    },

    pressed: {
      transform: 'none',
      background: '#1aa34a',
      contentColor: 'rgb(255, 255, 255)',
      borderColor: 'rgb(255, 255, 255)',
    },
  }),
);

export const Button2Tokens = () => (
  <ThemeProvider theme={productTheme}>
    <Stack>
      <Text>A button can be colored using theme variants.</Text>
      <Stack variant="github">
        <Button icon="O">Github: Open issue</Button>
        <Button variant="amazon">Amazon: Proceed to checkout</Button>

        <Button variant="netflix">Netflix: Sign In</Button>
        <Button variant="spotifyPrimary">Spotify: GET PREMIUM</Button>
        <Button
          tokens={{
            height: '52px',
            background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box',
            contentColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: '2px',
            padding: '17px 48px',
            borderRadius: '500px',
            fontFamily: 'Circular, Helvetica, Arial, sans-serif',
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Spotify: LEARN MORE
        </Button>
      </Stack>

      <Text>A button can be overridden using inline tokens.</Text>
      <Stack>
        <Button
          icon="O"
          variant="github"
          tokens={{
            background: 'red',
            hovered: {
              background: 'pink',
              borderColor: 'transparent',
              contentColor: 'black',
            },
            pressed: {
              background: 'darkred',
              borderColor: 'transparent',
              contentColor: 'white',
            },
          }}
        >
          Github: Open issue
        </Button>
      </Stack>
    </Stack>
  </ThemeProvider>
);

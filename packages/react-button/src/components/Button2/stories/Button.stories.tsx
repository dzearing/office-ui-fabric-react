import * as React from 'react';
import { Stack } from './Stack';
import { Text } from './Text';
import { Button } from '../Button';
import { ButtonProps } from '../Button.types';

const ButtonVariants = (props: ButtonProps) => (
  <Stack horizontal>
    <Button icon="X" {...props}>
      Hello, world
    </Button>
    <Button primary icon="X" {...props}>
      Hello, world
    </Button>
    <Button disabled icon="X" {...props}>
      Hello, world
    </Button>
    <Button primary disabled icon="X" {...props}>
      Hello, world
    </Button>
  </Stack>
);

export const Button2Css = () => (
  <Stack>
    <Text>A button comes in default and `primary` flavors.</Text>
    <ButtonVariants />

    <Text>A button can appear round using the `circular` prop.</Text>
    <ButtonVariants circular />

    <Text>A button can fill the width of its container using the `fluid` prop.</Text>
    <Stack horizontal>
      <Button fluid icon="X">
        Hello, world
      </Button>
      <Button fluid primary icon="X">
        Hello, world
      </Button>
      <Button fluid disabled icon="X">
        Hello, world
      </Button>
      <Button fluid primary disabled icon="X">
        Hello, world
      </Button>
    </Stack>

    <Text>A button can contain only an icon using the `iconOnly` prop.</Text>
    <ButtonVariants iconOnly />

    <Text>A button can be both `circular` and `iconOnly`.</Text>
    <ButtonVariants circular iconOnly />

    <Text>An icon button can format its Icon to appear before or after its content.</Text>
    <Stack>
      <ButtonVariants iconPosition="before" />
      <ButtonVariants iconPosition="after" />
    </Stack>

    <Text>A button can show a loading indicator using the `loading` prop.</Text>
    <ButtonVariants loading />

    <Text>A button can be sized.</Text>
    <Stack>
      <ButtonVariants size="smallest" />
      <ButtonVariants size="smaller" />
      <ButtonVariants size="small" />
      <ButtonVariants size="large" />
      <ButtonVariants size="larger" />
      <ButtonVariants size="largest" />
    </Stack>
  </Stack>
);

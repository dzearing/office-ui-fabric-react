import * as React from 'react';
import { Button, IButtonStyleVariables } from '../index';
import { HorizontalStack, Text, VerticalStack } from '@uifabric/experiments';
import { Customizer, ContextualMenu, IContextualMenuProps, Icon, createTheme } from 'office-ui-fabric-react';

const menuItems = [{ key: 'a', name: 'Item a' }, { key: 'b', name: 'Item b' }];
const buttonMenu = (props: IContextualMenuProps) => <ContextualMenu {...props} items={menuItems} />;

const wordCustomizations = {
  settings: {
    theme: createTheme({
      palette: {
        themePrimary: '#2b579a',
        themeSecondary: '#366ec2'
      },
      semanticColors: {
        buttonBackground: 'white',
        buttonBackgroundHovered: 'rgb(240, 240, 240)',
        buttonBackgroundPressed: 'rgb(240, 240, 240)',
        buttonText: 'rgb(43, 87, 154)',
        buttonBorder: 'rgb(237, 235, 233)'
      }
    })
  },

  scopedSettings: {
    Button: {
      styleVariables: {
        baseVariant: {
          baseState: {
            borderWidth: 1,
            minHeight: 26,
            textSize: 13.5,
            lineHeight: 13.5,
            textWeight: 600,
            iconSize: 12,
            contentPadding: '0px 6px'
          }
        }
      } as IButtonStyleVariables
    }
  }
};

const teamsButtonVariables: IButtonStyleVariables = {
  baseVariant: {
    baseState: {
      borderRadius: 3,
      borderWidth: 2,
      iconSize: 16,
      iconWeight: 700,
      textWeight: 400,
      contentPadding: '4px 32px'
    },
    enabled: {
      backgroundColor: 'transparent',
      backgroundColorHovered: '#bdbdbd',
      backgroundColorPressed: '#a7a7a7',

      borderColor: '#bdbdbd',
      borderColorHovered: '#bdbdbd',
      borderColorPressed: '#a7a7a7',

      textColor: '#252424',
      textColorPressed: '#252424',
      textColorHovered: '#252424',

      iconColor: 'rgba(37,36,36,.75)'
    },
    expanded: {
      borderColor: 'transparent',
      borderColorHovered: 'transparent',
      borderColorPressed: 'transparent'
    }
  },
  primary: {
    enabled: {
      borderColor: 'transparent',
      borderColorHovered: 'transparent',
      borderColorPressed: 'transparent',
      iconColor: 'white'
    }
  }
};

const teamsCustomizations = {
  settings: {
    theme: createTheme({
      palette: {
        themePrimary: '#6061aa',
        themeLighterAlt: '#f7f7fc',
        themeLighter: '#e1e1f2',
        themeLight: '#c7c8e6',
        themeTertiary: '#9797cd',
        themeSecondary: '#6f70b5',
        themeDarkAlt: '#56579a',
        themeDark: '#494a82',
        themeDarker: '#363660',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#b6b0b0',
        neutralSecondary: '#9f9797',
        neutralPrimaryAlt: '#877f7f',
        neutralPrimary: '#282424',
        neutralDark: '#585151',
        black: '#403b3b',
        white: '#fff'
      },
      semanticColors: {
        buttonBorder: 'rgb(237, 235, 233)'
      }
    })
  },

  scopedSettings: {
    Button: { styleVariables: teamsButtonVariables }
  }
};

const sectionGap = 32;
const headingGap = 16;
const buttonGap = 12;

const ButtonSet = (props: { className?: string; customizations?: {}; title: string }) => (
  <VerticalStack className={props.className} gap={headingGap}>
    <Text variant="h3">{props.title}</Text>
    <div>
      <Customizer {...props.customizations}>
        <VerticalStack gap={buttonGap}>
          <HorizontalStack gap={buttonGap}>
            <Button text="Default button" />
            <Button disabled text="Disabled default button" />
            <Button primary text="Primary button" />
            <Button disabled primary text="Primary disabled button" />
          </HorizontalStack>

          <HorizontalStack gap={buttonGap}>
            <Button icon="PeopleAdd" circular />
            <Button icon="Video" circular />
            <Button icon="Phone" circular disabled />
            <Button icon="FontSize" circular primary />
            <Button icon="Attach" circular primary disabled />
          </HorizontalStack>

          <HorizontalStack gap={buttonGap}>
            <Button icon="Upload" text="Button with string icon" />
            <Button icon={{ iconName: 'Share' }} text="Button with iconProps" />
            <Button icon={<Icon iconName="Download" />} text="Button with custom icon" />
          </HorizontalStack>

          <HorizontalStack gap={buttonGap}>
            <Button>
              <Icon iconName="Upload" />
              <Text>I am text.</Text>
            </Button>
            <Button primary disabled>
              <Text>I am a variant="primary" button with text.</Text>
              <Icon iconName="Upload" />
            </Button>
          </HorizontalStack>

          <HorizontalStack gap={buttonGap}>
            <Button text="Menu button" menu={buttonMenu} />
            <Button disabled text="Menu disabled button" menu={buttonMenu} />
            <Button expanded text="Menu expanded button" />
          </HorizontalStack>

          <HorizontalStack gap={buttonGap} verticalAlign="center">
            <Button icon="Share" menu={buttonMenu}>
              <VerticalStack padding="8px 0" as="span" gap={4} horizontalAlign="left">
                <Text>I am a compound multiline button.</Text>
                <Text variant="caption">I can have a caption.</Text>
              </VerticalStack>
            </Button>
            <Button disabled text="Menu disabled button" />
            <Button expanded text="Menu expanded button" />
          </HorizontalStack>
        </VerticalStack>
      </Customizer>
    </div>
  </VerticalStack>
);

export const ButtonExample = () => (
  <VerticalStack gap={sectionGap}>
    <ButtonSet title="Default styling" />
    <ButtonSet title="Teams theme" customizations={teamsCustomizations} />
    <ButtonSet title="Word theme" customizations={wordCustomizations} />
  </VerticalStack>
);

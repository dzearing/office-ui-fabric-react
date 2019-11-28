import * as React from 'react';
import {
  PrimaryButton,
  Fabric,
  DefaultButton,
  ActionButton,
  IconButton,
  Toggle,
  ColorPicker,
  Checkbox,
  ChoiceGroup,
  Slider,
  Dropdown,
  ComboBox,
  MessageBar,
  MessageBarType,
  TextField,
  SpinButton,
  Persona,
  Rating,
  Link,
  SearchBox,
  Separator,
  Text
} from 'office-ui-fabric-react';

const text = 'Hello, world';
const noOpFunction = () => {
  /* no-op */
};

const ControlExamplesCard = () => {
  const [dir, setDir] = React.useState(undefined);
  const onRTLChange = React.useCallback((ev, option) => setDir(option.value), [setDir]);

  return (
    <Fabric className="Box VFlex" dir={dir} style={{ maxWidth: 400 }}>
      <ChoiceGroup
        label="RTL option:"
        onChange={onRTLChange}
        options={[
          {
            key: '0',
            value: undefined,
            text: 'Inherit',
            checked: dir === undefined
          },
          { key: '1', value: 'ltr', text: 'Force LTR', checked: dir === 'ltr' },
          { key: '2', value: 'rtl', text: 'Force RTL', checked: dir === 'rtl' }
        ]}
      />
      <Separator />
      <PrimaryButton iconProps={{ iconName: 'Upload' }} text={text} />
      <DefaultButton iconProps={{ iconName: 'Upload' }} text={text} />
      <ActionButton iconProps={{ iconName: 'Upload' }} text="oh" />
      <IconButton iconProps={{ iconName: 'Upload' }} text="hi" />
      <Toggle onText="On" offText="Off" />
      <Toggle onText="On" offText="Off" checked />
      <Checkbox label={text} />
      <Checkbox checked label={text} />
      <Dropdown label="hi" required selectedKey={1} options={[{ key: 1, text }]} />
      <ComboBox selectedKey={1} options={[{ key: 1, text }]} />
      <Slider max={100} step={10} />
      <MessageBar style={{ width: '100%' }} />
      <MessageBar messageBarType={MessageBarType.success} onDismiss={noOpFunction}>
        I am a success MessageBar.
      </MessageBar>
      <MessageBar messageBarType={MessageBarType.warning} onDismiss={noOpFunction}>
        I am a warning MessageBar.
      </MessageBar>
      <MessageBar messageBarType={MessageBarType.error} onDismiss={noOpFunction}>
        I am an error MessageBar.
      </MessageBar>
      <MessageBar messageBarType={MessageBarType.severeWarning} onDismiss={noOpFunction}>
        I am a severe warning MessageBar.
      </MessageBar>
      <TextField value={text} />
      <SpinButton />
      <Persona />
      <Rating readOnly />
      <Text>
        I am text with a link: <Link>{text}</Link>
      </Text>
      <SearchBox placeholder="Search the web" />
      <ColorPicker />
    </Fabric>
  );
};

export const FabricDirectionExample = () => {
  const [dir, setDir] = React.useState<'ltr' | 'rtl'>('ltr');
  const setRTL = (isRTL: boolean) => {
    setDir(isRTL ? 'rtl' : 'ltr');
    setRTL(isRTL);
  };
  const onRTLChange = React.useCallback((ev, option) => setRTL(option.value === 'rtl'), [setRTL]);

  return (
    <Fabric dir={dir}>
      <div className="Box">
        <Text variant="large">Scoped RTL </Text>
        <ChoiceGroup
          label="App-wide RTL option:"
          onChange={onRTLChange}
          options={[
            { key: '0', value: 'ltr', text: 'Force LTR', checked: dir === 'ltr' },
            { key: '1', value: 'rtl', text: 'Force RTL', checked: dir === 'rtl' }
          ]}
        />

        <ControlExamplesCard />
        <ControlExamplesCard />
      </div>
    </Fabric>
  );
};

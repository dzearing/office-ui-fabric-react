import * as React from 'react';
import { Input } from '../Input';
import { useInputInternalState } from '../InputBase';
import { AddIcon, SearchIcon, ClearIcon, PasswordFieldIcon } from '@fluentui/react-icons';

const Example = (props: React.PropsWithChildren<{ title: string; description: string }>) => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <div style={{ background: 'pink' }}>{props.children}</div>
  </div>
);

const Foo = () => (
  <Form onSubmit>
    <FormField label="Thing" content={<Input />} />
  </Form>
);

const FormField = () => (
  <div>
    <Label id="" content="" />
    {content}
    <Label error content="" />
  </div>
);

const iconStyles = { style: { height: 16, padding: '0 4px', alignSelf: 'center' } };

const InputPasswordHideButton = (props: React.HTMLAttributes<HTMLDivElement>) => <PasswordFieldIcon {...iconStyles} />;

const InputClearButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const { setValue } = useInputInternalState();
  const onClearClick = () => setValue('');

  return (
    <button onClick={onClearClick}>
      <ClearIcon style={{ height: 12, padding: '0 4px' }} />
    </button>
  );
};

const InputInlineLabel = (props: React.HTMLAttributes<HTMLLabelElement>) => <label>.com</label>;

export const InputBaseExample = () => (
  <div>
    <input />
    <Example title="Default" description="A default Input.">
      <Input />
    </Example>

    <Example title="Inverted colors" description="An input can show an inverted background color.">
      <Input />
    </Example>

    <Example title="Icon" description="An input can have an icon.">
      <Input endAdornments={<AddIcon {...iconStyles} />} />
    </Example>

    <Example title="Icon position" description="The icon inside the input can be positioned at the start of the input.">
      <Input startAdornments={<AddIcon {...iconStyles} />} />
    </Example>

    <Example title="Fluid" description="An input can take the full width of the parent element.">
      <Input fluid endAdornments={<SearchIcon {...iconStyles} />} placeholder="Search..." />
    </Example>

    <Example title="Clearable" description="An input can be clearable.">
      <Input placeholder="Search..." endAdornments={<InputClearButton />} />
    </Example>

    <Example
      title="Clearable with icon"
      description={
        'An input with a given icon can be clearable (the given icon will change into clear button on typing).'
      }
    >
      <Input
        endAdornments={
          <>
            <SearchIcon {...iconStyles} />
            <InputClearButton />
          </>
        }
      />
    </Example>

    <Example title="Inline" description="An input can be used inline with text.">
      <p>
        This is some text with an <Input placeholder="inline Input" /> nested in-between.
      </p>
    </Example>

    <Example title="Error" description="An input can render with an error background.">
      <Input error />
    </Example>

    <Example
      title="Inline, clearable with icon"
      description="An input can be clearable, with icon and inlined into text."
    >
      <Input />
    </Example>

    <Example
      title="Input slot"
      description="The 'input' slot targets the input element and overrides input related props passed to the root."
    >
      <Input />
    </Example>

    <Example
      title="Wrapper slot"
      description={
        "The 'wrapper' slot targets the wrapper element and overrides wrapper related props passed to the root."
      }
    >
      <Input />
    </Example>
    <Example
      title="Targeting slots"
      description={
        'An input can handle both input and wrapper slots for targetting the input and wrapper elements, respectively.'
      }
    >
      <Input />
    </Example>
    <Example title="Disabled" description="A disabled Input can show it is currently unable to be interacted with.">
      <Input />
    </Example>
  </div>
);

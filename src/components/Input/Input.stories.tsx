import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Input, { IInput } from './index';
import { mockInputProps } from './Input.mocks';

export default {
  title: 'Controls/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    color: { control: 'text' },
    borderColor: { control: 'text' },
    maxLength: { control: 'number' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onFocus: { action: 'focused' },
  },
} as Meta;

const Template: StoryFn<IInput> = (args) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        args.onChange?.(e);
        setValue(e.target.value);
      }}
    />
  );
};

export const Base = Template.bind({});
Base.args = {
  ...mockInputProps.baseStyles,
} as IInput;

export const Error = Template.bind({});
Error.args = {
  ...mockInputProps.errorStyles,
} as IInput;

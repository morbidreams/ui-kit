import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import VerificationInput, { IVerificationInputProps } from "./index";
import { mockVerificationInputProps } from "./VerificationInput.mocks";

export default {
  title: "Controls/Verification Code Input",
  component: VerificationInput,
  argTypes: {
    value: { control: "text" },
    length: { control: "number" },
    placeholder: { control: "text" },
    autoFocus: { control: "boolean" },
    passwordMode: { control: "boolean" },
    inputProps: { control: "object" },
    containerProps: { control: "object" },
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    onComplete: { action: "completed" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
    color: { control: "text" },
    borderColor: { control: "text" },
    type: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<IVerificationInputProps> = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <VerificationInput
      {...args}
      value={value}
      onChange={(newValue: string) => {
        args.onChange?.(newValue);
        setValue(newValue);
      }}
    />
  );
};

export const Base = Template.bind({});
Base.args = {
  ...mockVerificationInputProps.base,
} as IVerificationInputProps;

export const Filled = Template.bind({});
Filled.args = {
  ...mockVerificationInputProps.filled,
} as IVerificationInputProps;

export const PasswordMode = Template.bind({});
PasswordMode.args = {
  ...mockVerificationInputProps.passwordMode,
} as IVerificationInputProps;

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...mockVerificationInputProps.errorState,
} as IVerificationInputProps;

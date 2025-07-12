import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import PhoneInput from "./index";
import { mockPhoneInputProps } from "./PhoneInput.mocks";

const meta: Meta<typeof PhoneInput> = {
  title: "Controls/Phone Input",
  component: PhoneInput,
  argTypes: {},
};

export default meta;

const Template: StoryFn<
  Omit<React.ComponentProps<typeof PhoneInput>, "type">
> = (args) => <PhoneInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockPhoneInputProps.baseStyles,
};

export const Error = Template.bind({});
Error.args = {
  ...mockPhoneInputProps.errorStyles,
};

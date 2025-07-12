import { Meta, StoryFn } from "@storybook/react";
import Logo, { ILogo } from ".";
import { mockLogoProps } from "./Logo.mocks";

const meta: Meta<typeof Logo> = {
  title: "Decor/Logo",
  component: Logo,
};

const Template: StoryFn<ILogo> = (args) => <Logo {...args} />;

export const Base: StoryFn<ILogo> = Template.bind({});

Base.args = {
  ...mockLogoProps.base,
} as ILogo;

export default meta;

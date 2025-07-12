import { Meta, StoryFn } from "@storybook/react";
import CircleBadge, { ICircleBadge } from "./index";
import { mockCircleBadgeProps } from "./CircleBadge.mocks";
import React from "react";

const meta: Meta<typeof CircleBadge> = {
  title: "Decor/Circle Badge",
  component: CircleBadge,
  argTypes: {},
};

const Template: StoryFn<ICircleBadge> = (args) => <CircleBadge {...args} />;

export const Base = Template.bind({});
export const WithIcon = Template.bind({});

Base.args = {
  ...mockCircleBadgeProps.baseStyles,
} as ICircleBadge;

WithIcon.args = {
  ...mockCircleBadgeProps.withIconStyles,
} as ICircleBadge;

export default meta;

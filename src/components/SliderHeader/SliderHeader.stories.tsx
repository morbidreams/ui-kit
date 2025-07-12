import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Slider, { ISliderHeader } from "./index";
import { mockSliderHeaderProps } from "./SliderHeader.mocks";

const meta: Meta<typeof Slider> = {
  title: "Decor/Slider Header",
  component: Slider,
  argTypes: {},
};

const Template: StoryFn<ISliderHeader> = (args) => <Slider {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSliderHeaderProps.baseStyles,
} as ISliderHeader;

export default meta;

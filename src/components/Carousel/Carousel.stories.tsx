import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Slider, { ISlider } from './index';
import { mockSliderProps } from './Carousel.mocks';

const meta: Meta<typeof Slider> = {
  title: 'Carousel',
  component: Slider,
  argTypes: {},
};

const Template: StoryFn<ISlider> = (args) => <Slider {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSliderProps.baseStyles,
} as ISlider;

export default meta;

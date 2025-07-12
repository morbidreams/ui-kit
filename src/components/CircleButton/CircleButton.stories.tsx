import { Meta, StoryFn } from '@storybook/react';
import CircleButton, { ICircleButton } from './index';
import { mockCircleButtonProps } from './CircleButton.mocks';
import React from 'react';

const meta: Meta<typeof CircleButton> = {
  title: 'Circle Button',
  component: CircleButton,
  argTypes: {},
};

const Template: StoryFn<ICircleButton> = (args) => <CircleButton {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCircleButtonProps.baseStyles,
} as ICircleButton;

export default meta;

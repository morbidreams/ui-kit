import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { mockButtonProps } from './Button.mocks';
import Button, { IButton } from './index';

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  argTypes: {},
};

const Template: StoryFn<IButton> = (args) => <Button {...args} />;

export const Base = Template.bind({});
export const WithIcon = Template.bind({});
export const Loading = Template.bind({});

Base.args = {
  ...mockButtonProps.baseStyles,
} as IButton;

WithIcon.args = {
  ...mockButtonProps.withIconStyles,
} as IButton;

Loading.args = {
  ...mockButtonProps.baseStyles,
  loading: true,
  children: 'Verify phone number',
} as IButton;

export default meta;

import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Rating, { IRating } from './index';
import { mockRatingProps } from './Rating.mocks';

export default {
  title: 'Controls/Rating',
  component: Rating,
  argTypes: {
    value: { control: 'number', defaultValue: 4 },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    iconColor: { control: 'color' },
    emptyIconColor: { control: 'color' },
    readOnly: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<IRating> = (args) => <Rating {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockRatingProps.base,
};

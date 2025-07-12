import { Meta, StoryFn } from '@storybook/react';
import Badge, { IBadge } from './index';
import { mockBadgeProps } from './Badge.mocks';
import React from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Decor/Tag',
  component: Badge,
  argTypes: {},
};

const Template: StoryFn<IBadge> = (args) => <Badge {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockBadgeProps.baseStyles,
} as IBadge;

export default meta;

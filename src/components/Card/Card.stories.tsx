import { Meta, StoryFn } from '@storybook/react';
import Card, { ICard } from './index';
import { mockCardProps } from './Card.mocks';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {},
};

const Template: StoryFn<ICard> = (args) => <Card {...args} />;

export const Base = Template.bind({});
export const WithContent = Template.bind({});

Base.args = {
  ...mockCardProps.baseStyles,
} as ICard;

WithContent.args = {
  ...mockCardProps.withContentStyles,
} as ICard;

export default meta;

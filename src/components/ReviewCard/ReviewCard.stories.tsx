import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ReviewCard, { IReviewCard } from './index';
import { mockReviewCardProps } from './ReviewCard.mocks';

export default {
  title: 'Review Card',
  component: ReviewCard,
  argTypes: {
    content: {
      control: 'select',
      options: [
        '14K+ clients reviewed apps.',
        '14K+ clients ont évalué les apps.',
      ],
    },
    rating: { control: 'text', defaultValue: 4.7 },
  },
} as Meta;

const Template: StoryFn<IReviewCard> = (args) => <ReviewCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockReviewCardProps.base,
};

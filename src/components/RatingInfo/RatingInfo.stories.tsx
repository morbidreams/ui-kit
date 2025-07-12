import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import RatingInfo, { IRatingInfo } from './';
import { mockRatingInfoProps } from './RatingInfo.mocks';

const meta: Meta<typeof RatingInfo> = {
  title: 'Rating Info',
  component: RatingInfo,
  argTypes: {},
};

const Template: StoryFn<IRatingInfo> = (args) => <RatingInfo {...args} />;
export const Base: StoryFn<IRatingInfo> = Template.bind({});

Base.args = {
  ...mockRatingInfoProps.base,
} as IRatingInfo;

export default meta;

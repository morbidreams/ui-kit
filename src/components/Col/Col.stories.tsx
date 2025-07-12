import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { mockColProps } from './Col.mocks';
import Col, { ColProps } from './index';

const meta: Meta<typeof Col> = {
  title: 'Layout/Col',
  component: Col,
  argTypes: {},
};

const Template: StoryFn<ColProps> = (args) => <Col {...args} />;

export const Base = Template.bind({});

export const Responsive = Template.bind({});

export const BasicGrid = Template.bind({});

export const ResponsiveGrid = Template.bind({});

Base.args = {
  ...mockColProps.base,
} as ColProps;

Responsive.args = {
  ...mockColProps.responsive,
} as ColProps;

BasicGrid.args = {
  ...mockColProps.basicGrid,
} as ColProps;

ResponsiveGrid.args = {
  ...mockColProps.responsiveGrid,
} as ColProps;

export default meta;

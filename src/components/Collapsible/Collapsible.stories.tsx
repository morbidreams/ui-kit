import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { mockCollapsibleProps } from './Collapsible.mocks';
import Collapsible, { ICollapsible } from './index';

const meta: Meta<typeof Collapsible> = {
  title: 'Decor/Collapsible',
  component: Collapsible,
};

const Template: StoryFn<ICollapsible> = (args) => {
  return (
    <>
      <Collapsible {...args}>Collapsible Content</Collapsible>
      <p>Non collapsible content</p>
    </>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockCollapsibleProps.base,
} as ICollapsible;

export default meta;

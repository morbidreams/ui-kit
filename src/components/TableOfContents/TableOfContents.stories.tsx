import { Meta, StoryFn } from '@storybook/react';
import { mockTableOfContentsProps } from './TableOfContents.mocks';
import React from 'react';
import TableOfContents, { ITableOfContents } from './index';

const meta: Meta<typeof TableOfContents> = {
  title: 'Table Of Contents',
  component: TableOfContents,
  argTypes: {},
};

const Template: StoryFn<ITableOfContents> = (args) => <TableOfContents {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockTableOfContentsProps.BaseStyles,
} as ITableOfContents;

export default meta;

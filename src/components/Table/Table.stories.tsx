import { Meta, StoryFn } from '@storybook/react';
import Table, { ITable } from './index';
import { mockTableProps } from './Table.mocks';
import React from 'react';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  argTypes: {},
};

const Template: StoryFn<ITable> = (args) => <Table {...args} />;

export const Base = Template.bind({});
export const WithContent = Template.bind({});

Base.args = {
  ...mockTableProps.baseStyles,
} as ITable;

WithContent.args = {
  ...mockTableProps.WithContentStyles,
} as ITable;

export default meta;

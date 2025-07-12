import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import PaginationDots, { IPaginationDots } from "./";
import { mockPaginationDotsProps } from "./PaginationDots.mocks";

const meta: Meta<typeof PaginationDots> = {
  title: "Decor/Pagination Dots",
  component: PaginationDots,
  argTypes: {
    length: {
      control: { type: "number", min: 1 },
      description: "The total number of dots",
      defaultValue: 3,
    },
    currentIndex: {
      control: { type: "number" },
      description: "The currently active dot index",
      defaultValue: 0,
    },
  },
};

const Template: StoryFn<IPaginationDots> = (args) => (
  <PaginationDots {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockPaginationDotsProps.baseStyles,
};

export default meta;

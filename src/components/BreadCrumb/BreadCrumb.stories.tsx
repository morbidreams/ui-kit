import { Meta, StoryFn } from "@storybook/react";
import { mockBreadCrumbProps } from "./BreadCrumb.mocks";
import React from "react";
import BreadCrumb, { IBreadCrumb } from "./index";

const meta: Meta<typeof BreadCrumb> = {
  title: "Breadcrumb",
  component: BreadCrumb,
  argTypes: {},
};

const Template: StoryFn<IBreadCrumb> = (args) => <BreadCrumb {...args} />;

export const Base: StoryFn<IBreadCrumb> = Template.bind({});

Base.args = {
  ...mockBreadCrumbProps.baseBreadCrumb,
} as IBreadCrumb;

export default meta;

import { Meta, StoryFn } from "@storybook/react";
import SearchInput, { ISearchInput } from "./index";
import SearchResult from "../SearchResult";
import SearchResultHeader from "../SearchResultHeader";
import SearchResultFooter from "../SearchResultFooter";
import { mockSearchInputProps } from "./Searchbar.mocks";
import React from "react";

const meta: Meta<typeof SearchInput> = {
  title: "Controls/Searchbar",
  component: SearchInput,
  argTypes: {},
};

const Template: StoryFn<ISearchInput> = (args) => (
  <SearchInput {...args}>
    <SearchResultHeader headerText="I'm looking for..." />
    <SearchResult result="Netflix" />
    <SearchResult result="Vk" />
    <SearchResult result="Goodreads" />
    <SearchResult result="Braceletbook" />
    <SearchResultFooter
      footerText="Looking for another answer?"
      linkText="Tell us about your ideas"
    />
  </SearchInput>
);

const NoResultsTemplate: StoryFn<ISearchInput> = (args) => (
  <SearchInput {...args}>
    <SearchResultHeader headerText="I'm looking for..." />
    <SearchResult result="No results found." noDestination />
    <SearchResultFooter linkText="Tell us about your project" noDivider />
  </SearchInput>
);

export const Base = Template.bind({});
export const NoResults = NoResultsTemplate.bind({});

Base.args = {
  ...mockSearchInputProps.baseStyles,
} as ISearchInput;

NoResults.args = {
  ...mockSearchInputProps.baseStyles,
} as ISearchInput;

export default meta;

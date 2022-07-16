import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchInput from "../components/SearchInput";

export default {
  title: "components/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const SearchPerson = Template.bind({});
SearchPerson.args = {
  label: "Search persons",
};

export const SearchProduct = Template.bind({});
SearchProduct.args = {
  label: "Search products",
};

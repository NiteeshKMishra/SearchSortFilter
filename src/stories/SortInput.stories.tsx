import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SortInput from "../components/SortInput";

export default {
  title: "components/SortInput",
  component: SortInput,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SortInput>;

const Template: ComponentStory<typeof SortInput> = (args) => (
  <SortInput {...args} />
);

export const SortPerson = Template.bind({});
SortPerson.args = {
  label: "Sort persons",
  options: ["firstName", "lastName"] as never[],
};

export const SortProduct = Template.bind({});
SortProduct.args = {
  label: "Sort products",
  options: ["product", "name", "description", "department"] as never[],
};

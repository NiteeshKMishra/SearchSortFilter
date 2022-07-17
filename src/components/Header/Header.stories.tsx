import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    selectedType: {
      options: ["person", "product"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  selectedType: "person",
};

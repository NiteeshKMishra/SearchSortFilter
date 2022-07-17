import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Filter from "./Filter";

export default {
  title: "components/Filter",
  component: Filter,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const FilterPersonGender = Template.bind({});
FilterPersonGender.args = {
  //@ts-ignore
  label: "Gender",
  options: ["Male", "Female"],
};

export const FilterProductColor = Template.bind({});
FilterProductColor.args = {
  //@ts-ignore
  label: "Color",
  options: ["Red", "Blue", "White", "Green"],
};

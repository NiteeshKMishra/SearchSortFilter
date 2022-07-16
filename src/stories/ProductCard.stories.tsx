import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { faker } from "@faker-js/faker";

import ProductCard from "../components/ProductCard";

export default {
  title: "components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const DefaultProductCard = Template.bind({});
DefaultProductCard.args = {
  product: {
    id: faker.datatype.uuid(),
    product: faker.commerce.product(),
    image: faker.image.abstract(640, 480),
    name: faker.commerce.productName(),
    color: faker.color.human(),
    department: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    material: faker.commerce.productMaterial(),
    manufacturedOn: faker.date.past(),
  },
};

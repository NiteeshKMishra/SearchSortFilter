import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { faker } from "@faker-js/faker";

import PersonCard from "../components/PersonCard";

export default {
  title: "components/PersonCard",
  component: PersonCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PersonCard>;

const Template: ComponentStory<typeof PersonCard> = (args) => (
  <PersonCard {...args} />
);

export const DefaultPersonCard = Template.bind({});
DefaultPersonCard.args = {
  person: {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    image: faker.image.people(640, 480),
    gender: faker.name.gender(),
    birthDate: faker.date.birthdate(),
    email: faker.internet.email(),
    jobTitle: faker.name.jobTitle(),
    jobType: faker.name.jobType(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
    },
  },
};

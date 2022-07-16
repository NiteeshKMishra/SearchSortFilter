import { faker } from "@faker-js/faker";

import Person from "../types/person";

export const persons: Person[] = Array.from({ length: 200 }).map(() => ({
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
}));

import { faker } from "@faker-js/faker";

import Product from "../types/product";

export const products: Product[] = Array.from({ length: 200 }).map(() => ({
  id: faker.datatype.uuid(),
  product: faker.commerce.product(),
  image: faker.image.image(640, 480),
  name: faker.commerce.productName(),
  color: faker.commerce.color(),
  department: faker.commerce.department(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  manufacturedOn: faker.date.past(),
}));

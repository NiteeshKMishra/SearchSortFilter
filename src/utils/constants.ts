import Person from "../types/person";
import Product from "../types/product";

export const ITEMS_COUNT = 200;
export const SMALL_SCREEN_SIZE = 600;
export const BIG_SCREEN_SIZE = 350;

export const PersonFilterKeys: Array<keyof Person> = [
  "gender",
  "jobTitle",
  "jobType",
];

export const ProductFilterKeys: Array<keyof Product> = [
  "product",
  "department",
  "material",
  "color",
];

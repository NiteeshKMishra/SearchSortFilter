export default interface Product {
  id: string;
  product: string;
  name: string;
  image: string;
  description: string;
  department: string;
  color: string;
  material: string;
  price: string;
  manufacturedOn: Date;
}

export const ProductFilterKeys: Array<keyof Product> = [
  "product",
  "department",
  "material",
  "color",
];

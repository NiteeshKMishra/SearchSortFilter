export default interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  birthDate: string;
  jobTitle: string;
  jobType: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

import { faker } from "@faker-js/faker";
const engage = { photo: faker.image.urlLoremFlickr() };
export default () => {
  return {
    engage,
  };
};

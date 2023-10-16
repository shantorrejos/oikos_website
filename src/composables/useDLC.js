import { Faker, faker } from "@faker-js/faker";

export default () => {
  const dlc = [];

  for (let i = 0; i < 10; i++) {
    dlc[i] = {
      name: faker.lorem.word(),
      content: Array(10)
        .fill()
        .map(() => faker.lorem.paragraphs(10)),
    };
  }

  return {
    dlc,
  };
};

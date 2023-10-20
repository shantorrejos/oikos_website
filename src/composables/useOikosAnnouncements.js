import { faker } from "@faker-js/faker";

const announcements = ref([]);

for (let i = 0; i < 3; i++) {
  announcements[i] = {
    type: `${faker.lorem.words(3)} :`,
    content: faker.lorem.sentence(),
    date: faker.date.soon(),
  };
}

export default () => {
  return {
    announcements,
  };
};

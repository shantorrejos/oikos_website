import { faker } from "@faker-js/faker";

const articles = [];

// for articles
for (let i = 0; i < 10; i++) {
  articles[i] = {
    title: faker.lorem.words(),
    photo: faker.image.urlLoremFlickr(),
    content: faker.lorem.paragraphs(),
  };
}

export default () => {
  return {
    articles,
  };
};

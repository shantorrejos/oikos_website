import { faker } from "@faker-js/faker";

const articles = [];

// for articles
for (let i = 0; i < 10; i++) {
  articles[i] = {
    title: faker.lorem.words(),
    photo: faker.image.urlLoremFlickr(),
    content: faker.lorem.paragraphs(),
    summary: faker.lorem.sentences(2),
    datePublished: faker.date.month(),
  };
}

export default () => {
  return {
    articles,
  };
};

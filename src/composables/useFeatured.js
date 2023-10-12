import { Faker, faker } from "@faker-js/faker";

const featuredProjects = [];
const featuredArticles = [];

const featuredBanner = {
  title: faker.lorem.words(3),
  content: faker.lorem.paragraph(),
  photo: Array(5)
    .fill()
    .map(() => faker.image.urlLoremFlickr()),
};

for (let i = 0; i < 3; i++) {
  featuredProjects[i] = {
    name: faker.lorem.words(2),
    description: faker.lorem.paragraph(),
    photo: faker.image.urlPicsumPhotos(),
    tags: Array(faker.number.int({ min: 2, max: 4 }))
      .fill()
      .map(() => faker.helpers.arrayElement(["Agriculture", "Education"])),
    progress: faker.number.float({ precision: 0.01 }),
  };
}

for (let i = 0; i < 3; i++) {
  featuredArticles[i] = {
    title: faker.lorem.words(),
    photo: faker.image.urlPicsumPhotos(),
    description: faker.lorem.sentences(2),
    content: faker.lorem.paragraphs(),
  };
}

export default () => {
  return {
    featuredBanner,
    featuredProjects,
    featuredArticles,
  };
};

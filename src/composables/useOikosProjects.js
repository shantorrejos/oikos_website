import { faker } from "@faker-js/faker";

const projects = [];
const articles = [];
const users = [];

// for projects
for (let i = 0; i < 10; i++) {
  projects[i] = {
    photo: faker.image.urlPicsumPhotos(),
    description: faker.lorem.paragraph(),
    tags: Array(5)
      .fill()
      .map(() => faker.commerce.department()),
    documentation: { photos: [], videos: [] },
    articles: Array(5)
      .fill()
      .map(() => articles[Math.random() * articles.length - 1]),
    accomplishments: Array(5)
      .fill()
      .map(() => faker.lorem.word()),
    projectManagers: Array(5)
      .fill()
      .map(() => faker.person.fullName()),
    volunteers: [],
    updates: [],
  };
}

// for articles
for (let i = 0; i < 10; i++) {
  articles[i] = {
    title: faker.lorem.words(),
    photo: faker.image.urlLoremFlickr(),
    content: faker.lorem.paragraphs(),
  };
}

// for users
for (let i = 0; i < 20; i++) {
  users[i] = {
    displayName: faker.internet.displayName(),
    username: faker.internet.userName(),
    birthday: faker.date.birthdate(),
    location: `${faker.location.buildingNumber()} ${faker.location.city()} ${faker.location.country()}`,
    gender: { sex: faker.person.sex(), pronouns: faker.person.prefix() },
    contact: { email: faker.internet.email(), phoneNumber: faker.phone.number },
  };
}

export default () => {};

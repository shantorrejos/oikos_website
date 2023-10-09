import { faker } from "@faker-js/faker";
import useOikosUsers from "./useOikosUsers";
import useOikosArticles from "./useOikosArticles";

const projects = [];

const { users } = useOikosUsers();
const { articles } = useOikosArticles();

// for projects
for (let i = 0; i < 10; i++) {
  projects[i] = {
    name: faker.lorem.words(2),
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
    volunteers: Array(20)
      .fill()
      .map(() => users[Math.random() * users.length - 1]),
    updates: Array(8)
      .fill()
      .map(() => faker.lorem.sentence),
  };
}

export default () => {
  return {
    projects,
  };
};

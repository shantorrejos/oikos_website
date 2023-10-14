import { faker } from "@faker-js/faker";
import useOikosUsers from "./useOikosUsers";
import useOikosArticles from "./useOikosArticles";

// This is TypeScript for people who don't want to use TypeScript.
// Oftentimes, the big reason why lots of people use TypeScript is
// for the Intellisense it can provide in their IDE. But if TypeScript
// is not used or otherwise not available, JSDoc serves as a good alternative
// because it provides the same level of Intellisense -- though you do need
// to define your types explicitly in this manner.

/**
 * @type {{
 * name: string,
 * photo: string,
 * description: string,
 * tags: string[],
 * documentation: {photos: string[], videos: string[]},
 * articles: string[],
 * accomplishments: string[],
 * projectManagers: string[],
 * volunteers: string[],
 * updates: string[],
 * progress: number,
 * }[]}
 */
const projects = [];

const { users } = useOikosUsers();
const { articles } = useOikosArticles();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const statusOptions = ["completed", "ongoing"];
const availableTags = [
  "Agriculture",
  "Education",
  "Healthcare",
  "Rural",
  "Technology",
  "Transportation",
];

// for projects
for (let i = 0; i < 10; i++) {
  const availableHashTags = Array(10)
    .fill()
    .map(() => faker.lorem.word());

  shuffleArray(availableTags);
  shuffleArray(availableHashTags);
  const numTags = faker.number.int({ min: 1, max: 4 });
  const numHashTags = faker.number.int({ min: 1, max: 10 });

  projects[i] = {
    name: faker.lorem.words(2),
    photo: faker.image.urlPicsumPhotos(),
    description: faker.lorem.sentences(2),
    summary: faker.lorem.sentences(8),
    tags: availableTags.slice(0, numTags),
    documentation: {
      photos: Array(5)
        .fill()
        .map(() => faker.image.urlPicsumPhotos()),
      videos: Array(5)
        .fill()
        .map(() => faker.image.urlPicsumPhotos()),
    },
    articles: Array(8)
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
      .map(() => faker.lorem.sentence()),
    progress: faker.number.float({ precision: 0.01 }),
    status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    hashtags: availableHashTags.slice(0, numHashTags),
  };
}

export default () => {
  return {
    projects,
  };
};

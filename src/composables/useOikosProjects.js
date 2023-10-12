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

// for projects
for (let i = 0; i < 10; i++) {
  const availableTags = [
    "Agriculture",
    "Education",
    "Healthcare",
    "Rural",
    "Technology",
    "Transportation",
  ];

  shuffleArray(availableTags);
  const numTags = faker.number.int({ min: 1, max: 4 });
  projects[i] = {
    name: faker.lorem.words(2),
    photo: faker.image.urlPicsumPhotos(),
    description: faker.lorem.sentences(2),
    tags: availableTags.slice(0, numTags),
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
    progress: faker.number.float({ precision: 0.01 }),
  };
}

export default () => {
  return {
    projects,
  };
};

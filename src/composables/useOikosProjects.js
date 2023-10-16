import { faker } from "@faker-js/faker";
import useOikosUsers from "./useOikosUsers";
import useDLC from "./useDLC";
import { ref } from "vue";
import useProjectUpdates from "./useProjectUpdates";

// This is TypeScript for people who don't want to use TypeScript.
// Oftentimes, the big reason why lots of people use TypeScript is
// for the Intellisense it can provide in their IDE. But if TypeScript
// is not used or otherwise not available, JSDoc serves as a good alternative
// because it provides the same level of Intellisense -- though you do need
// to define your types explicitly in this manner.

/**
 * @type {{
 * nayme: string,
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
const articles = [];
const { users } = useOikosUsers();
const { dlc } = useDLC();
const { projectUpdates } = useProjectUpdates();
const statusOptions = ["completed", "ongoing"];
const availableTags = [
  "Agriculture",
  "Education",
  "Healthcare",
  "Rural",
  "Technology",
  "Transportation",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

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
    articles: articles,
    accomplishments: Array(10)
      .fill()
      .map(() => faker.lorem.word()),
    projectManagers: Array(5)
      .fill()
      .map(() => faker.person.fullName()),
    volunteers: Array(20)
      .fill()
      .map(() => users[Math.floor(Math.random() * users.length)]),
    updates: Array(8)
      .fill()
      .map(() => faker.lorem.sentence()),
    progress: faker.number.float({ precision: 0.01 }),
    status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    hashtags: availableHashTags.slice(0, numHashTags),
    dlcList: dlc,
    topdonors: Array(4)
      .fill()
      .map(() => users[Math.floor(Math.random() * users.length)]),
    projectUpdatesList: useProjectUpdates().projectUpdates,
  };
}

export default () => {
  for (let i = 0; i < 10; i++) {
    articles[i] = {
      title: faker.lorem.words(),
      photo: faker.image.urlLoremFlickr(),
      content: faker.lorem.paragraphs(),
      summary: faker.lorem.sentences(2),
      datePublished: faker.date.month(),
    };
  }

  return {
    projects,
    articles,
  };
};

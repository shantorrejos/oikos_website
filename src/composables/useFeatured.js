import { Faker, faker } from "@faker-js/faker";
import useOikosProjects from "./useOikosProjects";

const { projects } = useOikosProjects();
const featuredProjects = [];
const featuredArticles = [];

const featuredBanner = {
  title: faker.lorem.words(3),
  content: faker.lorem.paragraph(),
  photo: Array(5)
    .fill()
    .map(() => faker.image.urlLoremFlickr()),
};

const projectsCopy = [...projects];
for (let i = 0; i < 3; i++) {
  // Filter projectsCopy to select only "ongoing" projects
  const ongoingProjects = projectsCopy.filter(
    (project) => project.status === "ongoing"
  );

  if (ongoingProjects.length > 0) {
    // Generate a random index within the ongoingProjects array length
    const randomIndex = Math.floor(Math.random() * ongoingProjects.length);

    // Remove the selected ongoing project from the projectsCopy array
    const selectedProject = ongoingProjects.splice(randomIndex, 1)[0];

    featuredProjects.push(selectedProject);
  }
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

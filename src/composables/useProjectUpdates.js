import { faker } from "@faker-js/faker";
import { ref } from "vue";

export default () => {
  const projectUpdates = [];

  for (let i = 0; i < 2; i++) {
    const content = []; // Create a new content array for each projectUpdate
    for (let j = 0; j < 3; j++) {
      content[j] = {
        title: faker.lorem.words(3),
        updateList: Array(10)
          .fill()
          .map(() => faker.lorem.sentence()),
      };
    }

    projectUpdates[i] = {
      month: faker.date.month(),
      content: content,
    };
  }
  return {
    projectUpdates,
  };
};

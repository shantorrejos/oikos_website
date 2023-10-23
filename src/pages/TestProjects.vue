<template>
  <button @click="addProjects">Add projects</button>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import useProjectUpdates from "../composables/useProjectUpdates";
import useDLC from "src/composables/useDLC";
import useOikosUsers from "src/composables/useOikosUsers";

const { dlc } = useDLC();
const { users } = useOikosUsers();
const projectUpdatesData = useProjectUpdates().projectUpdates;

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

const addProjects = async () => {
  try {
    console.log("projectUpdatesData:", projectUpdatesData);
    const projectsRef = collection(db, "projects");
    console.log(dlc);

    //tags shuffler
    shuffleArray(availableTags);
    const numTags = faker.number.int({ min: 1, max: 4 });

    //article generator
    const articles = [];
    for (let i = 0; i < 3; i++) {
      articles[i] = {
        title: faker.lorem.words(),
        author: faker.person.fullName(),
        photo: faker.image.urlLoremFlickr(),
        content: faker.lorem.paragraphs(50),
        summary: faker.lorem.sentences(2),
        datePublished: faker.date.month(),
      };
    }

    //hashtags generator
    const availableHashTags = Array(10)
      .fill()
      .map(() => faker.lorem.word());
    shuffleArray(availableHashTags);
    const numHashTags = faker.number.int({ min: 1, max: 10 });

    const newProject = {
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
      projectUpdatesList: projectUpdatesData,
    };

    console.log(newProject);

    const docRef = await addDoc(projectsRef, newProject);

    console.log("Document added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

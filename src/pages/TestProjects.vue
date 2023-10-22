<template>
  <button @click="addProjects">Add projects</button>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { faker } from "@faker-js/faker";

const addProjects = async () => {
  try {
    const projectsRef = collection(db, "projects");

    const newProject = {
      name: faker.lorem.words(2),
      photo: faker.image.urlPicsumPhotos(),
      description: faker.lorem.sentences(2),
      summary: faker.lorem.sentences(8),
      documentation: {
        photos: Array(5)
          .fill()
          .map(() => faker.image.urlPicsumPhotos()),
        videos: Array(5)
          .fill()
          .map(() => faker.image.urlPicsumPhotos()),
      },
      accomplishments: Array(10)
        .fill()
        .map(() => faker.lorem.word()),
      projectManagers: Array(5)
        .fill()
        .map(() => faker.person.fullName()),
      volunteers: "",
      updates: Array(8)
        .fill()
        .map(() => faker.lorem.sentence()),
      progress: faker.number.float({ precision: 0.01 }),
    };

    await addDoc(projectsRef, newProject);
    console.log("Document added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

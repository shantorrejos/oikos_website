<template>
  <button @click="addArticles">Add articles</button>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc } from "firebase/firestore";
import { faker } from "@faker-js/faker";
import useOikosProjects from "src/composables/useOikosProjects";

const articlesRef = collection(db, "articles");

const { projects } = useOikosProjects();

console.log(projects);

const addArticles = () => {
  projects.value.forEach((project) => {
    const projectArticles = project.articles; // Assuming articles are stored within the project

    // Add each article to the "articles" collection
    projectArticles.forEach((article) => {
      addDoc(articlesRef, article)
        .then((docRef) => {
          console.log("Article added with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding article: ", error);
        });
    });
  });
};
</script>

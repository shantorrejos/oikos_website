<template>
  <button @click="addArticles">Add articles</button>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc } from "firebase/firestore";
import { faker } from "@faker-js/faker";

const addArticles = async () => {
  try {
    const articlesRef = collection(db, "articles");
    const newArticle = {
      type: faker.lorem.words(2),
      content: faker.lorem.sentence(),
      date: new Date().toISOString(),
    };

    await addDoc(articlesRef, newArticle);
    console.log("Document added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

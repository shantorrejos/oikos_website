<template>
  <button @click="addAnnouncement">Add Announcement</button>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc } from "firebase/firestore";
import { faker } from "@faker-js/faker";

const addAnnouncement = async () => {
  try {
    const announcementsRef = collection(db, "announcements");
    const newAnnouncement = {
      type: faker.lorem.words(2),
      content: faker.lorem.sentence(),
      date: new Date().toISOString(),
    };

    await addDoc(announcementsRef, newAnnouncement);
    console.log("Document added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

<template>
  <button @click="addFeature">Add featured</button>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { faker } from "@faker-js/faker";

const featuredDocRef = doc(db, "featured", "DcOlSVkzU673D4Zp9Vjv");

// Set the "engage" property

const addFeature = async () => {
  try {
    await setDoc(
      featuredDocRef,
      {
        engage: faker.image.urlPicsumPhotos(),
        shout: {
          title: faker.lorem.words(3),
          content: faker.lorem.paragraph(),
          photo: Array(5)
            .fill()
            .map(() => faker.image.urlLoremFlickr()),
        },
      },
      { merge: true }
    );

    console.log("Data updated successfully");
  } catch (error) {
    console.error("Error updating data: ", error);
  }
};
</script>

<template>
  <button @click="addUsers">Add Users</button>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc } from "firebase/firestore";
import { faker } from "@faker-js/faker";

const addUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const newUser = {
      displayName: faker.internet.displayName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      birthday: faker.date.birthdate(),
      location: `${faker.location.buildingNumber()} ${faker.location.city()} ${faker.location.country()}`,
      gender: { sex: faker.person.sex(), pronouns: faker.person.prefix() },
      contact: {
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
      },
      followedProjects: "",
      volunteeredProjects: "",
    };

    await addDoc(usersRef, newUser);
    console.log("Document added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

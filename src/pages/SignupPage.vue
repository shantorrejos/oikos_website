<template>
  <div
    class="mx-auto text-[90px] font-bold text-element-purple w-fit h-fit mt-10"
  >
    SIGN <span class="text-element-b39pink">UP.</span>
  </div>
  <p class="text-[35px] text-element-b39pink mx-auto w-fit mt-[-20px]">
    Be a part of the foundation.
  </p>
  <div class="w-[950px] h-[3px] bg-element-b39pink mx-auto"></div>
  <div class="flex flex-col items-center mt-10">
    <q-input
      outlined
      v-model="email"
      label="EMAIL ADDRESS"
      class="w-[550px] m-3"
    ></q-input>
    <q-input
      outlined
      v-model="username"
      label="USERNAME"
      class="w-[550px] m-3"
    ></q-input>
    <q-input
      outlined
      v-model="password"
      label="PASSWORD"
      class="w-[550px] m-3"
    ></q-input>
    <q-btn
      flat
      @click="register"
      class="bg-element-b39pink text-white font-bold text-[20px] w-[200px] h-fit rounded-[40px] p-0 mb-20 mt-5"
    >
      NEXT
    </q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { faker } from "@faker-js/faker";

const router = useRouter();

const email = ref("");
const password = ref("");
const username = ref("");
const firestore = getFirestore(); // Create a reference to the Firestore database
const usersCollection = collection(firestore, "users");

const isUsernameUnique = async (proposedUsername) => {
  const q = query(usersCollection, where("username", "==", proposedUsername));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size === 0;
};
const register = async () => {
  try {
    const isUnique = await isUsernameUnique(username.value);
    if (!isUnique) {
      alert("Username is already in use. Please choose another one.");
      return;
    }

    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const user = userCredential.user;

    // Create a user profile document in Firestore with default values
    const userProfile = {
      gender: "",
      bio: "",
      username: username.value,
      contactInfo: {
        email: email.value,
        phone: "",
      },
      birthday: "",
      followedProjects: [],
      volunteeredProjects: [],
      location: "",
      profilePhoto: "",
    };

    const userProfileRef = doc(usersCollection, user.uid);
    await setDoc(userProfileRef, userProfile);

    alert("Username is already in use. Please choose another one.");

    router.push("/");
  } catch (error) {
    console.error(error.code);
    alert(error.message);
  }
};
</script>

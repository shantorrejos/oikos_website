<template>
  <div v-if="!isLoggedIn">Loading...</div>
  <div v-else>
    <img
      src="https://images.pexels.com/photos/2948636/pexels-photo-2948636.jpeg?cs=srgb&dl=pexels-mont-photographs-2948636.jpg&fm=jpg"
      class="h-[700px] w-full object-cover"
    />

    <div
      class="relative w-full h-[440px] rounded-t-[80px] mt-[-130px] bg-white flex flex-col items-center"
    >
      <img
        v-bind:src="userDoc.profilePhoto"
        class="w-[450px] h-[450px] mt-[-300px] rounded-[360px] object-cover"
      />
      <div class="uppercase font-bold text-[48px] text-element-purple">
        {{ userDoc.username }}
      </div>
      <div class="uppercase text-[20px] text-element-purple">
        {{ userDoc.location }}
      </div>

      <div
        class="uppercase font-light text-[16px] text-element-purple w-[350px] text-center mt-5"
      >
        "{{ userDoc.bio }}"
      </div>
      <div class="flex gap-8 mt-5">
        <q-btn
          flat
          rounded
          class="bg-element-purpink text-white font-bold text-[14px] w-36"
          >EDIT PROFILE</q-btn
        >
        <q-btn
          flat
          rounded
          class="bg-element-purpink text-white font-bold text-[14px] w-36"
          @click="handleSignOut"
          >LOG OUT</q-btn
        >
      </div>
    </div>
    <div
      class="bg-[url('../../src/assets/subtle-prism.svg')] w-full h-[1000px] opacity-100 pt-10"
    >
      <q-tabs
        v-model="tab"
        class="text-element-purple mx-30 flex justify-center"
      >
        <q-tab
          name="mails"
          label="PROJECTS PARTICIPATED"
          class="mx-10 w-[200px]"
        />
        <q-tab name="alarms" label="PROJECT UPDATES " class="mx-10 w-[200px]" />
      </q-tabs>

      <div
        class="bg-white w-[800px] h-[800px] mt-10 mx-auto rounded-tl-[80px] rounded-br-[80px] p-20 overflow-y-auto"
      >
        hello <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import Firestore related functions

const router = useRouter();
const route = useRoute();
const isLoggedIn = ref(false);
const tab = ref("mails");

const userIDToFind = route.params.userId;
console.log(userIDToFind);

let auth;
let userDoc = ref(null); // To store the retrieved Firestore document

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Initialize Firestore
      const db = getFirestore();

      // Reference to the user document with the specified userIDToFind
      const userRef = doc(db, "users", userIDToFind);

      // Fetch the document
      try {
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          userDoc.value = userSnapshot.data(); // Store the document data in userDoc
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }

      isLoggedIn.value = true;
    } else {
      router.push("/login");
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

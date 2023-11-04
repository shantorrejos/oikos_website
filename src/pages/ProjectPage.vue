<template>
  <div class="flex flex-col items-center">
    <div class="mb-3 mt-8 w-[90vw] flex justify-end">
      <div
        v-if="!isProjectFollowed"
        @click="toggleFollowProject"
        class="border-[2px] border-element-purpink py-1 px-5 rounded-[40px] w-fit text-element-purple cursor-pointer hover:bg-element-purpink hover:text-white"
      >
        + FOLLOW PROJECT
      </div>
      <div
        v-else
        @click="toggleFollowProject"
        class="border-[2px] bg-element-purpink border-element-purpink py-1 px-5 rounded-[40px] w-fit text-white cursor-pointer hover:bg-element-purpink hover:text-white"
      >
        ✔ PROJECT FOLLOWED!
      </div>
    </div>
    <img
      v-bind:src="activeProject.photo"
      class="w-[90vw] h-[450px] object-cover object-center"
    />
    <q-linear-progress
      size="20px"
      :value="activeProject.progress"
      color="secondary"
      class="mt-[35px] w-[1000px] rounded-[100px] mx-auto"
    />
    <div class="text-[25px] m-5 text-element-b39pink">
      KEEP THE SUPPORT FOR THIS PROJECT GOING!
    </div>

    <div class="w-[500px] flex justify-center">
      <!-- <font-awesome-icon :icon="['fas', 'share-nodes']" /> -->
      <q-btn
        color="white"
        text-color="primary"
        class="font-bold text-[16px] rounded-[40px] w-[250px] m-0"
      >
        SHARE THIS PROJECT</q-btn
      >
    </div>

    <div class="text-element-b39pink m-2 text-[16px] mb-10">
      Spread the Word!
    </div>

    <div class="uppercase font-bold text-[80px] text-element-purple">
      {{ activeProject.name }}
    </div>
    <div class="uppercase text-[20px] mt-[-16px] text-element-purpink">
      BY {{ activeProject.projectManagers[0] }}
    </div>
    <div class="w-[800px] m-8 text-[22px] text-element-41black text-center">
      {{ activeProject.summary }}
    </div>
    <div class="flex items-center w-[800px] justify-center">
      <p class="text-element-purple text-[22px] m-2">TAGS</p>
      <!-- {{ completeTags.join(", ") }} -->
      <div
        class="flex border-[1px] border-element-b39pink rounded-[20px] text-[20px] text-element-b39pink px-6 m-2 flex-wrap capitalize"
        v-for="(completeTag, i) in completeTags"
        :key="completeTag.value"
        :name="i"
      >
        {{ completeTag }}
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center gap-[50px] my-[90px]">
    <div class="flex justify-center items-center gap-[50px]">
      <div class="bg-element-b39pink h-[3px] w-[500px]"></div>
      <div class="text-[24px] font-bold text-element-41black">
        DOCUME<span class="text-element-b39pink">NTATION</span>
      </div>
      <div class="bg-element-b39pink h-[3px] w-[500px]"></div>
    </div>

    <!-- container for documentation -->
    <div class="flex w-[1200px] m-0">
      <q-carousel
        animated
        v-model="photoCarousel"
        arrows
        infinite
        class="w-[550px] mr-auto"
      >
        <q-carousel-slide
          v-for="(projectPhoto, i) in activeProject.documentation.photos"
          :key="i"
          :name="i"
          v-bind:img-src="projectPhoto"
        />
      </q-carousel>

      <q-carousel
        animated
        v-model="videoCarousel"
        arrows
        infinite
        class="w-[550px] ml-auto"
      >
        <q-carousel-slide
          v-for="(projectPhoto, i) in activeProject.documentation.photos"
          :key="i"
          :name="i"
          v-bind:img-src="projectPhoto"
        />
      </q-carousel>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] my-[30px]">
    <div class="bg-element-b39pink h-[3px] w-[540px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      ARTI<span class="text-element-b39pink">CLES</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[540px]"></div>
  </div>

  <!-- container for articles -->
  <div class="mx-auto w-[1200px] my-22">
    <div
      class="flex flex-col overflow-auto h-[340px] my-[50px] gap-y-14 gap-x-10 p-[4px] items-center"
    >
      <q-card
        @click="router.push('/article/' + article.title)"
        light
        bordered
        class="bg-white-700 h-[300px] w-[265px] rounded-[30px] flex relative bg-slate-100 drop-shadow-md cursor-pointer"
        v-for="(article, i) in activeProject.articles"
        :key="i"
        :name="i"
      >
        <div>
          <img
            v-bind:src="article.photo"
            class="w-[100%] h-[58%] rounded-none-child mb-0 rounded-t-[30px] object-cover"
          />

          <div class="m-5 absolute">
            <p class="text-slate-400 text-[12 px]">ARTICLE</p>
            <p
              class="text-element-41black font-bold uppercase mt-2 text-[18px]"
            >
              {{ article.title }}
            </p>
          </div>
        </div>
      </q-card>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] mt-[60px] mb-[40px]">
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      ACCOMPL<span class="text-element-b39pink">ISHMENTS</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
  </div>
  <!-- project accomplishments -->

  <div class="flex flex-col items-center mb-10">
    <div class="w-[1200px] flex flex-col">
      <p class="font-bold text-[40px] text-element-purple uppercase">
        {{ activeProject.name }}
        <span class="text-element-purpink">HAS...</span>
      </p>
      <ul
        class="ml-[20px] list-disc text-element-purple text-[25px] capitalize"
      >
        <li
          v-for="(accomplishments, i) in activeProject.accomplishments"
          :key="i"
          :name="i"
        >
          {{ accomplishments }}
        </li>
      </ul>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] mt-[90px] mb-[10px]">
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      BEHIND<span class="text-element-b39pink"> THE</span
      ><span class="text-element-purple"> SCENES</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-[1200px]">
      <p class="font-bold text-element-purpink text-[23px] mr-auto my-4">
        PROJECT MANAGER/S
      </p>
      <div
        class="text-element-purple text-[20px]"
        v-for="(managers, i) in activeProject.projectManagers"
        :key="i"
      >
        {{ managers }}
      </div>

      <ul class="list-disc">
        <p
          class="font-bold text-element-purpink text-[23px] mr-auto my-4 mt-16"
        >
          VOLUNTEERS
        </p>
        <div class="flex flex-col max-h-[300px] flex-wrap overflow-x-auto">
          <li
            class="text-element-purple text-[20px] ml-[20px]"
            v-for="(volunteers, i) in activeProject.volunteers"
            :key="i"
          >
            {{ volunteers.displayName }}
          </li>
        </div>
      </ul>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] mt-[90px] mb-[40px]">
    <div class="bg-element-b39pink h-[3px] w-[470px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      DOWNLOADABLE<span class="text-element-b39pink"> FILES</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[470px]"></div>
  </div>

  <div class="flex justify-center flex-wrap h-[300px]">
    <div
      class="flex flex-col max-h-[250px] flex-wrap overflow-x-auto w-[940px] gap-[20px]"
    >
      <div
        flat
        v-for="(dlc, i) in activeProject.dlcList"
        :key="i"
        class="w-[450px] h-[60px] bg-element-EAgray rounded-[20px] ml-[5px] p-[20px] flex justify-between"
      >
        <p class="capitalize mr-auto text-element-41black">
          {{ dlc.name }} <span class="lowercase">.txt</span>
        </p>
        <p
          @click="downloadContent(i)"
          class="cursor-pointer text-element-purple"
        >
          Download
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center gap-[50px] mt-[30px] mb-[40px]">
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      PROJECT<span class="text-element-b39pink"> UPDATES</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
  </div>
  <div class="flex justify-center">
    <div class="flex items-center w-[1200px] justify-center">
      <div class="flex flex-col items-center leading-none mr-8">
        <p class="text-element-purple text-[32px] font-bold">TOP</p>
        <p class="text-element-purple text-[15px] font-bold">DONORS</p>
      </div>

      <div
        class="flex border-[1px] bg-element-b39pink rounded-[20px] text-[20px] text-white px-10 m-2 flex-wrap capitalize h-[50px] items-center font-bold"
        v-for="(topdonor, i) in activeProject.topdonors"
        :key="i"
      >
        {{ topdonor.displayName }}
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-10">
    <div class="flex flex-col items-center w-[1000px]">
      <div
        class="flex items-center gap-2 justify-between mb-10"
        v-for="(projectUpdate, i) in sortedProjectUpdates"
        :key="i"
      >
        <p class="text-[24px] font-bold uppercase text-element-b39pink">
          {{ projectUpdate.month }}
        </p>
        <div class="bg-element-b39pink h-[3px] w-[850px]"></div>

        <ul
          class="border-[2px] border-element-b39pink rounded-[20px] w-full h-fit py-[25px] px-[30px] list-disc"
          v-for="(updateInstance, i) in projectUpdate.content"
          :key="i"
        >
          <p
            class="uppercase text-element-purple text-[20px] font-roboto-condensed-medium"
          >
            {{ updateInstance.title }}
          </p>

          <li
            class="ml-[20px] text-element-41black text-[15px]"
            v-for="(cont, i) in updateInstance.updateList"
            :key="i"
          >
            {{ cont }}
          </li>
        </ul>
      </div>
      <p class="text-element-b39pink text-[17px] mb-16">
        Do stay tuned for more updates with this project!
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import useOikosProjects from "src/composables/useOikosProjects";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onAuthStateChanged, getAuth } from "firebase/auth"; // Import Firebase Authentication method
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const route = useRoute();
const router = useRouter();
const { projects } = useOikosProjects();
const isFollowed = ref(false);
const userId = ref(null); // New variable to store the user ID
const userDocument = ref(null); // To store the user's Firestore document

// Define a ref to hold the user's authentication state
const isAuthenticated = ref(false);

// Initialize Firebase authentication
const auth = getAuth(); // You may need to import getAuth from your Firebase setup

// Add a listener to check if the user is authenticated
onAuthStateChanged(auth, (user) => {
  isAuthenticated.value = !!user;
  console.log(isAuthenticated.value);
});

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    isAuthenticated.value = !!user;
    if (user) {
      userId.value = user.uid; // Update the user ID when the user is authenticated
      console.log("yahoo!");
      // Fetch the user's document from Firestore
      const firestore = getFirestore();
      const userDocRef = doc(firestore, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        userDocument.value = userDocSnap.data(); // Store the user's document data
      } else {
        userDocument.value = null; // Handle the case where the document doesn't exist
      }
    } else {
      userId.value = null; // Set the user ID to null when the user is not authenticated
      userDocument.value = null; // Clear the user document when not authenticated
    }
  });

  // Make sure to unsubscribe when the component is unmounted
  onUnmounted(unsubscribe);
});

const activeProject = computed(() => {
  return projects.value.find((project) => project.name === route.params.name);
});

const sortedProjectUpdates = computed(() => {
  return activeProject.value
    ? activeProject.value.projectUpdatesList.slice().sort((a, b) => {
        return b.month.localeCompare(a.month);
      })
    : [];
});

const downloadContent = (i) => {
  const dlcObject = activeProject.value.dlcList[i];
  if (dlcObject && dlcObject.content) {
    const content = dlcObject.content;
    const blob = new Blob([content], {
      type: "application/octet-stream",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "downloadedFile.txt";
    a.style.display = "none";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } else {
    console.error("Invalid dlcList object or content is missing.");
  }
};

const completeTags = computed(() => {
  return activeProject.value
    ? activeProject.value.tags.concat(activeProject.value.hashtags)
    : [];
});

const isProjectFollowed = computed(() => {
  if (!isAuthenticated.value || !userDocument.value) {
    // If not authenticated or userDocument is not available, return false
    return false;
  }

  const userData = userDocument.value;
  const followedProjects = userData.followedProjects || [];
  return followedProjects.includes(activeProject.value.id);
});

const toggleFollowProject = async () => {
  if (!isAuthenticated.value) {
    // Handle the case when the user is not authenticated
    console.error("User is not authenticated. Please log in.");
    return;
  }

  const firestore = getFirestore();
  const userDocRef = doc(firestore, "users", userId.value);

  try {
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      if (!userData.followedProjects) {
        userData.followedProjects = []; // Initialize the followedProjects array if it doesn't exist
      }

      const projectId = activeProject.value.id;
      const isFollowing = userData.followedProjects.includes(projectId);

      if (isFollowing) {
        // If the project is already followed, unfollow it
        userData.followedProjects = userData.followedProjects.filter(
          (id) => id !== projectId
        );
      } else {
        // If the project is not followed, follow it
        userData.followedProjects.push(projectId);
      }

      // Update the user document in Firestore with the new followedProjects array
      await setDoc(userDocRef, userData, { merge: true });

      // Optionally, you can also update the userDocument locally
      userDocument.value = userData;
    } else {
      console.error("User document not found in Firestore.");
    }
  } catch (error) {
    console.error("Error toggling follow/unfollow:", error);
  }
};
const photoCarousel = ref(0);
const videoCarousel = ref(0);
</script>

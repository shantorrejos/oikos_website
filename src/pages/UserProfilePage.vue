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
        class="bg-white h-[800px] w-[800px] mt-10 mx-auto rounded-tl-[80px] rounded-br-[80px] flex flex-col"
      >
        <div
          v-if="tab === 'mails'"
          class="w-[670px] h-[670px] m-auto overflow-y-scroll flex gap-20"
        >
          <div
            v-for="(project, i) in participatedProjects"
            :key="i"
            class="pr-2"
          >
            <div class="flex gap-10 flex-nowrap">
              <img
                v-bind:src="project.photo"
                class="w-[250px] h-full object-cover"
              />
              <div class="flex flex-col">
                <div class="flex justify-between items-center">
                  <p
                    class="text-[30px] font-bold text-element-purple uppercase"
                  >
                    {{ project?.name }}
                  </p>
                  <q-btn
                    @click="router.push('/project/' + project.name)"
                    flat
                    rounded
                    class="bg-element-purpink text-white font-bold text-[12px] px-4 w-fit"
                    >VIEW
                  </q-btn>
                </div>

                <p
                  v-if="project.tags"
                  class="font-light text-[16px] text-element-purpink"
                >
                  {{ project?.tags.join(", ") }}
                </p>
                <p class="font-light text-justify text-[13px]">
                  {{ project.summary }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="tab === 'alarms'"
          class="w-[550px] h-[670px] m-auto overflow-y-scroll flex gap-20"
        >
          <div
            v-for="(project, i) in participatedProjects"
            :key="i"
            class="pr-2"
          >
            <div class="flex gap-10 flex-nowrap flex-shrink-0">
              <div class="relative">
                <img
                  :src="project.photo"
                  class="w-[400px] h-full object-cover"
                />
                <div
                  class="w-full h-full bg-element-purpink top-0 opacity-70 absolute"
                ></div>
                <div
                  class="absolute top-[40%] left-[43%] text-white text-[22px] font-bold"
                >
                  {{ (project.progress * 100).toFixed(0) }}%
                </div>
                <div class="absolute top-[55%] left-[30%]">
                  <q-linear-progress
                    size="5px"
                    :value="project.progress"
                    class="w-[100px] rounded-[100px] text-white bg-slate-400"
                  />
                </div>
              </div>

              <div class="flex flex-col w-[500px]">
                <div class="flex justify-between items-center">
                  <p
                    class="text-[22px] font-bold text-element-purple uppercase"
                  >
                    {{ project?.name }}
                  </p>
                  <q-btn
                    @click="router.push('/project/' + project.name)"
                    flat
                    rounded
                    class="bg-element-purpink text-white font-bold text-[10px] px-4 w-fit"
                    >SEE ALL UPDATES
                  </q-btn>
                </div>

                <p
                  v-if="project.tags"
                  class="font-light text-[12px] text-element-purpink"
                >
                  {{ project?.tags.join(", ") }}
                </p>
                <p
                  class="font-bold text-justify text-[16px] text-element-purple"
                >
                  {{ project.projectUpdatesList[0].month }}:
                  {{ project.projectUpdatesList[0].content[0].title }} <br />
                </p>

                <ul class="list-disc pl-4 text-justify text-[13px]">
                  <li
                    v-for="(update, i) in project.projectUpdatesList[0]
                      .content[0].updateList"
                    :key="i"
                    class="font-light"
                  >
                    {{ update }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import db from "src/components/firebaseInit"; // Import Firestore related functions

const router = useRouter();
const route = useRoute();
const isLoggedIn = ref(false);
const tab = ref("mails");
const participatedProjects = ref([]);
const i = ref();

const userIDToFind = route.params.userId;
console.log(userIDToFind);

let auth;
let userDoc = ref(null);

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = doc(db, "users", userIDToFind);

      // fetch shit
      try {
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          userDoc.value = userSnapshot.data();
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }

      fetchVolunteeredProjects();
      console.log(participatedProjects.value);
      isLoggedIn.value = true;
    } else {
      router.push("/login");
    }
  });
});

const fetchVolunteeredProjects = () => {
  const volunteeredRef = doc(db, "users", userIDToFind);
  onSnapshot(volunteeredRef, (snapshot) => {
    const data = snapshot.data();
    if (data) {
      participatedProjects.value = data.volunteeredProjects.map((docID) => ({
        id: docID,
      }));

      console.log(participatedProjects.value);
      populateVolunteered();
    }
  });
};

const fetchDocumentByID = async (collectionName, docID) => {
  const docRef = doc(db, collectionName, docID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } else {
    return null;
  }
};

const populateVolunteered = async () => {
  const volunteeredProjectsData = await Promise.all(
    participatedProjects.value.map(async (project) => {
      return await fetchDocumentByID("projects", project.id);
    })
  );
  participatedProjects.value = volunteeredProjectsData.filter(
    (project) => project
  );
  console.log(participatedProjects.value);
};

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

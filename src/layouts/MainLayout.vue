<template>
  <q-layout view="hHh lpR fff">
    <q-header
      class="flex justify-between bg-white text-black drop-shadow-lg"
      height-hint="98"
    >
      <div class="flex p-4">
        <a @click="$router.push('/')" class="cursor-pointer">
          <img src="../assets/qweqw.png" width="170" class="ml-4" />
        </a>

        <div
          class="h-auto w-1 rounded bg-element-purple text-center mx-16"
        ></div>

        <!-- styles are overriden in app.scss -->
        <q-tabs align="left" class="text-element-purple">
          <q-route-tab
            to="/projects"
            label="Projects"
            class="mx-8 capitalize"
          />
          <q-route-tab to="/page2" label="Community" class="mx-8 capitalize" />
          <q-route-tab
            to="/donatepage"
            label="Donate"
            class="mx-8 capitalize"
          />
          <q-route-tab
            to="/volunteerpage"
            label="Volunteer"
            class="mx-8 capitalize"
          />
        </q-tabs>
      </div>

      <div class="flex p-4">
        <q-btn
          flat
          class="w-32 h-12 shadow-none text-nav font-bold text-element-purple"
        >
          Search
        </q-btn>
        <!-- TODO: CHANGE CLICK -->

        <div v-if="isAuthenticated">
          <!-- btn here -->
          <img
            v-if="userDocument.profilePhoto"
            v-bind:src="userDocument.profilePhoto"
            class="h-12 w-fit rounded-[360px] cursor-pointer"
            @click="toggleUserDropdown"
          />
          <!-- the div below needs an animation as if its a dropdown menu -->

          <div
            class="absolute flex flex-col bg-white shadow-inner w-[180px] rounded-[20px] top-24 right-4 items-start text-[15px] gap-y-2 pt-5 pb-10 text-element-purple"
            v-show="isOpen"
          >
            <div
              @click="pushToRouter('userprofile')"
              class="cursor-pointer w-full hover:bg-slate-100 pl-5"
            >
              Profile
            </div>
            <div
              @click="$router.push('/')"
              class="cursor-pointer w-full hover:bg-slate-100 pl-5"
            >
              Notifications
            </div>
            <div
              @click="$router.push('/')"
              class="cursor-pointer w-full hover:bg-slate-100 pl-5"
            >
              Manage Account
            </div>
            <div
              @click="handleSignOut"
              class="cursor-pointer w-full hover:bg-slate-100 pl-5"
            >
              Log Out
            </div>
          </div>
        </div>

        <q-btn
          v-else
          flat
          class="w-32 h-12 shadow-none text-nav font-bold text-element-purple"
          @click="$router.push('/login')"
        >
          Sign In
        </q-btn>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-white">
      <div class="bg-element-purple w-[100vw] h-[2px] mx-auto"></div>
      <div class="flex justify-center m-14">
        <!-- image and copyright -->
        <div class="flex flex-col justify-center">
          <img src="../assets/FooterLogo.png" class="w-[160px]" />
          <p class="text-element-purple text-center text-[10px]">
            ©The Oikos Foundation <br />
            Mandau City Cebu, Philippines
          </p>
        </div>
        <!-- details container -->
        <div class="ml-[70px] flex-col">
          <!-- div that holds the top -->
          <div class="flex gap-[50px]">
            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">
                COMMUNITIES
              </p>
              <a class="text-[16px] text-element-purpink">Agriculture</a>
              <a class="text-[16px] text-element-purpink">Education</a>
              <a class="text-[16px] text-element-purpink">Healthcare</a>
              <a class="text-[16px] text-element-purpink">Technology</a>
              <a class="text-[16px] text-element-purpink">Transportation</a>
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">OIKOS</p>
              <a class="text-[16px] text-element-purpink">About Us</a>
              <a class="text-[16px] text-element-purpink">Projects</a>
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">ACCOUNT</p>
              <a class="text-[16px] text-element-purpink">Profile</a>
              <a class="text-[16px] text-element-purpink">Manage</a>
              <a class="text-[16px] text-element-purpink">Log Out</a>
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">SUPPORT</p>
              <a class="text-[16px] text-element-purpink">Donate</a>
              <a class="text-[16px] text-element-purpink">Volunteer</a>
            </div>
          </div>
          <!-- div separator -->
          <div class="bg-element-purple w-[800px] h-[2px] my-8"></div>

          <!-- div that holds the bottom -->
          <div class="flex justify-between">
            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">
                CONTACT US
              </p>
              <a class="text-[14px] text-element-purpink font-bold">HOTLINE</a>
              <a class="text-[14px] text-element-purpink">0123456789</a>

              <a class="text-[14px] text-element-purpink font-bold mt-5"
                >EMAIL</a
              >
              <a class="text-[14px] text-element-purpink"
                >theoikosfoundation@gmail.com</a
              >
              <a class="text-[14px] text-element-purpink"
                >theoikosfoundation@yahoo.com</a
              >
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">
                FIND US HERE
              </p>
              <a class="text-[14px] text-element-purpink w-[300px]"
                >Lorem ipsum dolor sit amet, Curabitur tempor, Etiam viverra, ut
                molestie nisi varius. ty, 9000, Philippines</a
              >
            </div>

            <div class="flex flex-col">
              <q-btn outline rounded color="primary" class="w-[180px] mb-2"
                >FEEDBACK</q-btn
              >
              <a class="text-[14px] text-element-purpink text-right"
                >Have something to say? <br />
                We'd love to hear your feedback!</a
              >
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import Firestore functions

const router = useRouter();

const auth = getAuth();
const isAuthenticated = ref(false);
const isOpen = ref(false);
const userId = ref(null); // New variable to store the user ID
const userDocument = ref(null); // To store the user's Firestore document

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    isAuthenticated.value = !!user;
    if (user) {
      userId.value = user.uid; // Update the user ID when the user is authenticated

      // Fetch the user's document from Firestore
      const firestore = getFirestore();
      const userDocRef = doc(firestore, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        userDocument.value = userDocSnap.data(); // Store the user's document data
        console.log(userDocument.value);
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

const toggleUserDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleSignOut = () => {
  signOut(auth).then(() => {
    isOpen.value = !isOpen.value;
    router.push("/");
  });
};

const pushToRouter = (path) => {
  router.push("/" + path + "/" + userId.value);
  isOpen.value = !isOpen.value;
  console.log(userId.value);
};
</script>

<!-- bot is sign out lol xd -->
<!-- <script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);

let auth;

onMounted = () => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
};

const handleSignOut = () => {};
</script> -->

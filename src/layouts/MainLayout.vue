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
            v-bind:src="userDocument?.profilePhoto"
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

            <q-dialog v-model="willconfirm">
              <q-card>
                <q-card-section>
                  <div class="text-h6">First dialog</div>
                </q-card-section>
                <q-card-section class="row items-center q-gutter-sm">
                  <q-btn
                    label="Open dialog"
                    color="primary"
                    @click="dialog2 = true"
                  />
                  <q-btn v-close-popup label="Close" color="primary" />

                  <q-dialog v-model="dialog2">
                    <q-card>
                      <q-card-section>
                        <div class="text-h6">Second dialog</div>
                      </q-card-section>
                      <q-card-section class="row items-center q-gutter-sm">
                        <q-btn
                          v-close-popup="2"
                          label="Close both dialogs"
                          color="accent"
                        />
                        <q-btn
                          v-close-popup
                          label="Close this dialog"
                          color="accent"
                        />
                      </q-card-section>
                    </q-card>
                  </q-dialog>
                </q-card-section>
              </q-card>
            </q-dialog>
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
              <a
                @click="$router.push('/aboutus')"
                class="text-[16px] text-element-purpink cursor-pointer"
                >About Us</a
              >
              <a
                @click="$router.push('/projects')"
                class="text-[16px] text-element-purpink cursor-pointer"
                >Projects</a
              >
            </div>

            <div class="flex flex-col">
              <p class="text-[18px] font-bold text-element-purple">SUPPORT</p>
              <a class="text-[16px] text-element-purpink">Donate</a>
              <a
                @click="$router.push('/volunteerpage')"
                class="text-[16px] text-element-purpink cursor-pointer"
                >Volunteer</a
              >
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
              <q-btn
                outline
                rounded
                color="primary"
                class="w-[180px] mb-2"
                @click="dialog = true"
                >FEEDBACK</q-btn
              >
              <a class="text-[14px] text-element-purpink text-right"
                >Have something to say? <br />
                We'd love to hear your feedback!</a
              >

              <q-dialog v-model="dialog">
                <q-card>
                  <q-card-section class="w-[500px] h-[550px] p-5 pt-8">
                    <div class="flex flex-col items-center">
                      <p class="font-bold text-element-41black text-[30px]">
                        FEEDBACK FORM
                      </p>
                      <p class="text-element-b39pink mt-[-10px]">
                        Any concerns or feedback? Tell Us!
                      </p>
                    </div>
                    <div class="p-10 pt-3 flex flex-col gap-2">
                      <div class="uppercase text-[12px] text-element-b39pink">
                        Name
                      </div>
                      <div class="w-[350px]">
                        <input
                          outlined
                          v-model="name"
                          class="border-[2px] border-element-b39pink rounded-[5px] px-2 py-1 w-[380px]"
                        />
                      </div>
                      <div class="uppercase text-[12px] text-element-b39pink">
                        Email Address / Phone Number
                      </div>
                      <div class="w-[350px]">
                        <input
                          outlined
                          v-model="contact"
                          class="border-[2px] border-element-b39pink rounded-[5px] px-2 py-1 w-[380px]"
                        />
                      </div>
                      <div class="uppercase text-[12px] text-element-b39pink">
                        Feedback:
                      </div>
                      <div class="w-[350px]">
                        <textarea
                          v-model="feedback"
                          class="border-[2px] border-element-b39pink rounded-[5px] px-2 py-1 h-[250px] w-[380px] resize-none"
                        />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section
                    class="row items-center q-gutter-sm justify-center"
                  >
                    <q-btn
                      label="SUBMIT"
                      color="primary"
                      @click="addFeedback"
                    />
                    <q-btn v-close-popup label="Close" color="primary" />
                  </q-card-section>
                </q-card>
              </q-dialog>
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
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
} from "firebase/firestore"; // Import Firestore functions
import db from "src/components/firebaseInit";

const router = useRouter();

const auth = getAuth();
const isAuthenticated = ref(false);
const isOpen = ref(false);
const userId = ref(null); // New variable to store the user ID
const userDocument = ref(null); // To store the user's Firestore document
const dialog = ref(false);
const name = ref("");
const contact = ref("");
const feedback = ref("");
const willconfirm = ref();

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

const addFeedback = async () => {
  console.log(name.value);
  try {
    const feedbackRef = collection(db, "feedback");
    const newFeedback = {
      name: name.value,
      contact: contact.value,
      content: feedback.value,
    };

    await addDoc(feedbackRef, newFeedback);
    console.log("Document added successfully!");

    name.value = "";
    contact.value = "";
    feedback.value = "";
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

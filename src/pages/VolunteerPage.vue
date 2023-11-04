<template>
  <div class="flex justify-center my-[80px] items-center gap-[200px]">
    <div class="m-20">
      <div class="text-element-purple font-bold text-[90px]">
        VOLUN<span class="text-element-b39pink">TEER.</span>
      </div>
      <div class="font-light text-element-b39pink mt-[-30px] text-[35px]">
        Be part of the team!
      </div>
    </div>

    <div v-if="isLoading">Loading...</div>

    <q-carousel
      v-else
      animated
      v-model="slide"
      infinite
      autoplay
      class="w-[800px]"
    >
      <q-carousel-slide
        v-for="(featuredproject, i) in featuredProjects"
        :key="i"
        :name="i"
        :img-src="featuredproject.photo"
      />
    </q-carousel>
  </div>

  <div
    class="w-[100vw] rounded-t-[80px] h-[1100px] shadow-[1200px] border-element-purple border-2 p-[80px]"
  >
    <div class="w-[80vw] h-[800px] m-auto mt-[100px]">
      <div
        class="text-element-purple font-bold uppercase text-[35px] flex flex-nowrap items-center"
      >
        name
        <div class="bg-element-b39pink h-[3px] flex-grow ml-[50px]"></div>
      </div>

      <div class="flex flex-nowrap justify-between gap-10 mb-10">
        <q-input
          outlined
          v-model="firstName"
          label="FIRST NAME"
          class="min-w-[650px] flex-grow"
        />
        <q-input
          outlined
          v-model="middleInitial"
          label="M.I"
          class="w-[100px]"
        />
        <q-input
          outlined
          v-model="lastName"
          label="LAST NAME"
          class="min-w-[450px] flex-grow"
        />
      </div>

      <div
        class="text-element-purple font-bold uppercase text-[35px] flex flex-nowrap items-center"
      >
        project
        <div class="bg-element-b39pink h-[3px] flex-grow ml-[50px]"></div>
      </div>
      <div class="flex flex-nowrap justify-between gap-10 mb-10">
        <q-btn-dropdown
          label="Select Project to Volunteer"
          class="w-[500px] text-element-purple text-[18px] p-0"
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="(project, i) in projects"
              :key="i"
              @click="onItemClick(project)"
            >
              <q-item-section>
                <q-item-label>{{ project.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div
        class="text-element-purple font-bold uppercase text-[35px] flex flex-nowrap items-center"
      >
        contact
        <div class="bg-element-b39pink h-[3px] flex-grow ml-[50px]"></div>
      </div>

      <div class="flex flex-nowrap justify-between gap-10 mb-5">
        <q-input
          outlined
          v-model="emailAddress"
          label="EMAIL ADDRESS"
          class="flex-grow"
        />
        <q-input
          outlined
          v-model="contactNumber"
          label="CONTACT NUMBER"
          class="flex-grow"
        />
      </div>
      <div class="flex flex-nowrap justify-between gap-10">
        <q-input
          outlined
          v-model="emergencyContactName"
          label="EMERGENCY CONTACT NAME"
          class="flex-grow"
        />
        <q-input
          outlined
          v-model="emergencyContactNumber"
          label="EMERGENCY CONTACT NUMBER"
          class="flex-grow"
        />
      </div>

      <div class="flex justify-end">
        <q-btn
          flat
          class="bg-element-purpink text-white font-bold text-[30px] px-12 w-[250px] mt-10 rounded-[200px]"
          >SUBMIT</q-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import useFeatured from "src/composables/useFeatured";
import useOikosProjects from "src/composables/useOikosProjects";

const { projects } = useOikosProjects();
const { featuredProjects } = useFeatured();
const isLoading = ref(true);

const slide = ref(0);
const firstName = ref("");
const middleInitial = ref("");
const lastName = ref("");
const emailAddress = ref("");
const contactNumber = ref("");
const emergencyContactName = ref("");
const emergencyContactNumber = ref("");
const dropdownLabel = ref("Select Project to Volunteer");

const onItemClick = (project) => {
  console.log(project);
};

watch(featuredProjects, () => {
  if (featuredProjects.value.length > 0) {
    isLoading.value = false;
  }
});

// TODO: Create an onItemClick function that takes the projectID of the selected
// TODO: Create a submit function that takes all data above and adds a volunteerApplications document
// TODO:
// TODO:
// TODO:
// TODO:
// TODO:
// TODO:
</script>

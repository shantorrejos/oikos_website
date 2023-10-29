<template>
  <div class="mx-auto w-[1600px] mb-22">
    <p class="font-bold text-[20px] text-element-purple">PROJECTS</p>
    <div class="bg-element-purple h-[3px] w-[100%] my-[20px]"></div>

    <!-- Categories -->
    <div class="flex items-center gap-5 my-[10px]">
      <p class="text-[20px] text-element-b39pink font-bold">CATEGORIES</p>
      <q-btn
        @click="toggleTag('Agriculture')"
        flat
        rounded
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedTags.some((tag) => tag == 'Agriculture')
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Agriculture</q-btn
      >
      <q-btn
        @click="toggleTag('Education')"
        flat
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedTags.some((tag) => tag == 'Education')
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Education</q-btn
      >
      <q-btn
        @click="toggleTag('Healthcare')"
        flat
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedTags.some((tag) => tag == 'Healthcare')
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Healthcare</q-btn
      >
      <q-btn
        @click="toggleTag('Rural')"
        flat
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedTags.some((tag) => tag == 'Rural')
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Rural</q-btn
      >
      <q-btn
        @click="toggleTag('Technology')"
        flat
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedTags.some((tag) => tag == 'Technology')
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Technology</q-btn
      >
      <q-btn
        @click="toggleTag('Transportation')"
        flat
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedTags.some((tag) => tag == 'Transportation')
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Transportation</q-btn
      >
    </div>

    <!-- Progress -->
    <div class="flex items-center gap-5 my-[10px]">
      <p class="text-[20px] text-element-b39pink font-bold mr-[15px]">
        PROGRESS
      </p>
      <q-btn
        @click="toggleButton('completed')"
        :active="selectedButton === 'completed'"
        flat
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedButton === 'completed'
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Completed</q-btn
      >
      <q-btn
        @click="toggleButton('ongoing')"
        :active="selectedButton === 'ongoing'"
        flat
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize ring-1 ring-element-purple"
        v-bind:class="
          selectedButton === 'ongoing'
            ? 'bg-element-purple text-white'
            : 'bg-white text-element-purple'
        "
        >Ongoing</q-btn
      >
    </div>

    <!-- Actual Project this time -->
    <div
      class="flex flex-col overflow-x-auto h-[630px] my-[50px] gap-y-14 gap-x-28"
    >
      <!-- project instance -->

      <q-card
        light
        bordered
        class="bg-white-700 h-[270px] w-[740px] rounded-bl-[20px] flex border-b-0 border-l-0"
        v-for="(project, i) in filteredProjects"
        :key="project.name"
        :name="i"
      >
        <!-- this is a photo -->
        <div class="h-full">
          <img
            v-bind:src="project.photo"
            class="h-full w-[300px] rounded-bl-[20px] object-cover"
          />
        </div>

        <div class="w-[350px] mx-[40px] my-auto">
          <p
            class="font-bold text-[30px] w-[300px] leading-none text-element-purple uppercase"
          >
            {{ project.name }}
          </p>
          <p class="font-light text-[16px] text-element-purpink">
            {{ project.tags.join(", ") }} <br />
          </p>
          <p class="mt-[20px] font-light text-[18px]">
            {{ project.description }}
          </p>
          <div class="mt-[20px] flex justify-between items-center">
            <p class="text-slate-300 capitalize">{{ project.status }}</p>
            <q-btn
              @click="router.push('./project/' + project.name)"
              flat
              rounded
              class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50 ml-auto"
              >View More</q-btn
            >
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import useOikosProjects from "src/composables/useOikosProjects";
import { useRouter } from "vue-router";

const router = useRouter();

const selectedTags = ref([]);
const selectedButton = ref("noChoice");
const { projects } = useOikosProjects();

// Create a flag to check if projects are loaded
const projectsLoaded = ref(false);

// Watch the projects data and set the flag when it's populated
watch(projects, () => {
  projectsLoaded.value = true;
});

function toggleTag(tag) {
  if (selectedTags.value.includes(tag)) {
    const index = selectedTags.value.indexOf(tag);
    if (index !== -1) {
      selectedTags.value.splice(index, 1); // Remove the tag if it exists
    }
  } else {
    selectedTags.value.push(tag); // Add the tag
  }
}

// assign status value
function toggleButton(button) {
  if (selectedButton.value === button) {
    selectedButton.value = "noChoice"; // Deselect the current button
  } else {
    selectedButton.value = button; // Select the clicked button
  }
}

const filteredProjects = computed(() => {
  if (!projectsLoaded.value || !Array.isArray(projects.value)) {
    return []; // Return an empty array if projects are not loaded or not an array
  }

  return projects.value.filter((project) => {
    if (
      selectedTags.value.length > 0 &&
      project.tags.every((tag) => !selectedTags.value.includes(tag))
    ) {
      return false;
    }

    if (
      selectedButton.value === "completed" &&
      project.status !== "completed"
    ) {
      return false;
    }

    if (selectedButton.value === "ongoing" && project.status !== "ongoing") {
      return false;
    }

    return true;
  });
});
</script>

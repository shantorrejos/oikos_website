<template>
  <!-- container for the top thing might be unnecessary-->
  <div class="mb-[60px]">
    <img
      src="../assets/omegalol.jpg"
      class="w-[100vw] max-h-[550px] object-cover"
    />
    <div class="flex items-end mt-[-170px]">
      <!-- Progress bar -->
      <div class="bg-white-600 h-[180px] w-[60vw]">
        <q-linear-progress
          size="16px"
          :value="progress1"
          color="secondary"
          class="mt-[35px] w-[1000px] rounded-[100px] mx-auto"
        />

        <div class="flex w-[1000px] mx-auto">
          <div class="text-[40px] text-element-purple">36%</div>
          <div
            class="flex flex-col leading-none mt-[12px] ml-[10px] text-element-purpink"
          >
            <p class="text-[15px]">PROJECT GOAL</p>
            <p class="text-[20px]">PROGRESS</p>
          </div>
        </div>
      </div>

      <!-- card here -->
      <q-card
        light
        bordered
        class="bg-white-700 h-[350px] w-[40vw] rounded-l-[80px] flex flex-col px-[80px]"
      >
        <div class="my-auto">
          <p
            class="font-bold text-[50px] w-[300px] leading-none text-element-purple"
          >
            INNER TEXT PLACE
          </p>
          <p class="font-light text-[16px] text-element-purpink">
            tags, placeholder, qwerty lorem
          </p>
          <p class="mt-[20px] font-light text-[18px]">
            description lmao xd asiha fu e bfusad oqd biyuro gqsud fsd gfosi
            aziufyfsdfwy
          </p>
          <div class="mt-[20px] flex justify-between items-center">
            <p class="text-slate-300">icons here</p>
            <q-btn
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

  <!-- container for the projects thing might-->
  <div class="mx-auto w-[1600px] mb-32">
    <p class="font-bold text-[20px] text-element-purple">PROJECTS</p>
    <div class="bg-element-purple h-[3px] w-[100%] my-[20px]"></div>

    <!-- Categories -->
    <div class="flex items-center gap-5 my-[10px]">
      <p class="text-[20px] text-element-b39pink font-bold">CATEGORIES</p>
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
        >Agriculture</q-btn
      >
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
        >Education</q-btn
      >
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
        >Healthcare</q-btn
      >
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
        >Rural</q-btn
      >
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
        >Technology</q-btn
      >
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
        >Transportation</q-btn
      >
    </div>

    <!-- Progress -->
    <div class="flex items-center gap-5 my-[10px]">
      <p class="text-[20px] text-element-b39pink font-bold mr-[15px]">
        PROGRESS
      </p>
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
        >Completed</q-btn
      >
      <q-btn
        outline
        rounded
        color="primary"
        class="w-[150px] text-[15px] capitalize"
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
        v-for="(project, i) in projects"
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
            tags, placeholder, qwerty lorem
          </p>
          <p class="mt-[20px] font-light text-[18px]">
            {{ project.description }}
          </p>
          <div class="mt-[20px] flex justify-between items-center">
            <p class="text-slate-300">icons here</p>
            <q-btn
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

  <!-- container for the articles -->
  <div></div>
</template>

<script>
import useOikosProjects from "src/composables/useOikosProjects";

export default {
  setup() {
    const { projects } = useOikosProjects();
    return {
      progress1: 0.4,
      projects,
    };
  },
};
</script>

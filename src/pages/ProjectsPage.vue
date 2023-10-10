<template>
  <!-- container for the top thing might be unnecessary-->
  <div class="mb-[80px]">
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
          <div class="text-[70px] text-element-purple">36%</div>
          <div
            class="flex flex-col leading-none mt-[22px] ml-[20px] text-element-purpink"
          >
            <p class="text-[25px] font-thin">PROJECT GOAL</p>
            <p class="text-[35px] font-thin">PROGRESS</p>
          </div>
        </div>
      </div>

      <q-card
        light
        bordered
        class="bg-white-700 h-[350px] w-[40vw] rounded-l-[80px] flex flex-col p-[80px] py-[50px]"
      >
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

    <!-- PROGRESS -->
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
  </div>
</template>

<script>
export default {
  setup() {
    return {
      progress1: 0.4,
    };
  },
};
</script>

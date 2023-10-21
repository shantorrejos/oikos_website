<template>
  <div class="mb-[60px] relative">
    <img :src="current.photo" class="w-[100vw] max-h-[550px] object-cover" />
    <div
      class="absolute top-5 left-10 font-bold uppercase text-white text-[30px]"
    >
      Featured
    </div>
    <div class="flex items-end mt-[-170px] flex-nowrap gap-">
      <!-- Progress bar -->
      <div class="bg-white-600 h-[180px] w-[60vw]">
        <q-linear-progress
          size="16px"
          :value="current.progress"
          color="secondary"
          class="mt-[35px] w-[1000px] rounded-[100px] mx-auto"
        />

        <div class="flex w-[1000px] mx-auto">
          <div class="text-[40px] text-element-purple">
            {{ (current.progress * 100).toFixed(0) }}%
          </div>
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
            class="font-bold text-[50px] w-[300px] leading-none text-element-purple capitalize"
          >
            {{ current.name }}
          </p>
          <p class="font-light text-[16px] text-element-purpink">
            {{ current.tags.join(", ") }}
          </p>
          <p class="mt-[20px] font-light text-[18px]">
            {{ current.description }}
          </p>
          <div class="mt-[20px] flex justify-between items-center">
            <p class="text-slate-300">icons here</p>
            <q-btn
              @click="router.push('./project/' + current.name)"
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
import useCycleFeaturedProjects from "src/composables/useCycleFeaturedProjects";
import { useRouter } from "vue-router";
const router = useRouter();

const { current } = useCycleFeaturedProjects();
</script>

<template>
  <img
    v-bind:src="aboutus.firstphoto"
    class="w-[100vw] h-[650px] object-cover"
  />
  <div
    class="w-[800px] h-[250px] flex flex-col flex-nowrap border-[1px] rounded-[20px] border-element-purpink p-10 items-center justify-center mx-auto my-12 text-center"
  >
    <p class="font-bold text-[60px] text-element-41black">
      ABOUT<span class="text-element-b39pink"> US</span>
    </p>
    <p class="text-[20px] font-light capitalize">{{ aboutus.about }}</p>
  </div>
  <img
    v-bind:src="aboutus.secondphoto"
    class="w-[100vw] h-[650px] object-cover"
  />
  <div class="flex">
    <div
      class="w-[600px] h-[450px] flex flex-col flex-nowrap border-[1px] rounded-[20px] border-element-b39pink p-20 items-center justify-center mx-auto my-12 text-center"
    >
      <p class="font-bold text-[55px] text-element-41black leading-none mb-3">
        MISSION<span class="text-element-b39pink"> & VISION</span>
      </p>
      <p class="text-[20px] font-light capitalize">
        {{ aboutus.visionmission }}
      </p>
    </div>

    <div
      class="w-[600px] h-[450px] flex flex-col flex-nowrap border-[1px] rounded-[20px] border-element-b39pink p-20 items-center justify-center mx-auto my-12 text-center flex-grow-0"
    >
      <p class="font-bold text-[60px] text-element-41black leading-none mb-3">
        WHAT<span class="text-element-b39pink leading-none"> WE DO</span>
      </p>
      <p class="text-[20px] font-light capitalize">{{ aboutus.whatwedo }}</p>
    </div>
  </div>
</template>

<script setup>
import useFeatured from "src/composables/useFeatured";

const { aboutus } = useFeatured();
</script>

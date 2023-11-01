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
          v-model="text"
          label="FIRST NAME"
          class="min-w-[650px] flex-grow"
        />
        <q-input outlined v-model="text" label="M.I" class="w-[100px]" />
        <q-input
          outlined
          v-model="text"
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
        <q-input
          outlined
          v-model="text"
          label="PROJECT NAME"
          class="w-[650px]"
        />
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
          v-model="text"
          label="EMAIL ADDRESS"
          class="flex-grow"
        />
        <q-input
          outlined
          v-model="text"
          label="CONTACT NUMBER"
          class="flex-grow"
        />
      </div>
      <div class="flex flex-nowrap justify-between gap-10">
        <q-input
          outlined
          v-model="text"
          label="EMERGENCY CONTACT NAME"
          class="flex-grow"
        />
        <q-input
          outlined
          v-model="text"
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

const { featuredProjects } = useFeatured();
const isLoading = ref(true);

watch(featuredProjects, () => {
  if (featuredProjects.value.length > 0) {
    isLoading.value = false;
  }
});

const slide = ref(0);
</script>

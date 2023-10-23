<template>
  <div align="center" class="relative mx-auto max-w-fit">
    <q-carousel
      v-if="shout"
      control="false"
      animated
      v-model="slideShoutCarousel"
      infinite
      control-color="primary"
      :autoplay="3000"
      class="relative p-0 w-[1200px] h-[370px] mb-16"
      id="projectsIne"
    >
      <!-- Place holder, code javascript later -->
      <q-carousel-slide
        v-for="(featuredPhoto, i) in shout.photo"
        :key="featuredPhoto"
        :name="i"
        :img-src="featuredPhoto"
      />
    </q-carousel>

    <!-- textoverlay for announcement -->
    <div class="absolute w-[417px] top-5 left-10">
      <p class="text-[45px] text-left font-bold text-white uppercase">
        {{ shout?.title }}
      </p>
      <p class="text-[20px] text-white text-left font-thin">
        {{ shout?.content }}
      </p>
      <div class="flex gap-[20px] my-3">
        <q-btn
          flat
          rounded
          class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
          >View More</q-btn
        >
        <q-btn
          flat
          rounded
          class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
          >Go to Page</q-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useFeatured from "src/composables/useFeatured";

const { shout } = useFeatured();
const slideShoutCarousel = ref(0);
</script>

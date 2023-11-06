<template>
  <div class="q-pa-md">
    <!-- main carousel -->
    <index-carousel />

    <!-- announcement carousel -->
    <index-announcement>
      <template #default />
    </index-announcement>

    <!-- Engage section -->
    <div class="flex items-center justify-center gap-[40px] m-[50px] mt-0">
      <img v-bind:src="engage" class="relative h-[400px] w-auto" />

      <div class="max-w-[400px]">
        <div align="center" class="flex flex-col items-center">
          <p class="text-[45px] font-bold text-element-41black leading-none">
            SUPPORT THE FOUNDATION!
          </p>
          <p class="text-element-b39pink text-[15px] max-w-[200px] mt-[20px]">
            DONATE, VOLUNTEER, OR EVEN PROPOSE A PROJECT OF YOUR OWN
          </p>
        </div>

        <div class="flex flex-col my-[30px] items-center gap-[20px]">
          <q-btn
            flat
            rounded
            class="bg-element-purpink text-white font-bold text-[16px] px-12 w-48"
            >DONATE</q-btn
          >
          <q-btn
            flat
            rounded
            class="bg-element-purpink text-white font-bold text-[17px] px-12 w-48"
            >VOLUNTEER</q-btn
          >
        </div>
      </div>
    </div>
    <!-- Engage section -->

    <!-- Featured label -->
    <label-head>
      <template v-slot:text1>FEAT</template>
      <template v-slot:text2>URED</template>
    </label-head>

    <!-- SHOUT banner -->

    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <shout-carousel />
      </div>
    </div>

    <!-- projects label -->
    <div align="center">
      <div
        class="flex max-w-[1200px] text-[17px] text-element-E7Cpink justify-start font-bold m-0 mt-[20px] pb-8px"
      >
        PROJECTS
      </div>
    </div>

    <!-- projects carousel  -->

    <div>
      <featured-carousel :items="featuredProjects">
        <template #default
      /></featured-carousel>
    </div>

    <!-- Articles label -->
    <div align="center">
      <div
        class="flex max-w-[1200px] text-[17px] text-element-E7Cpink justify-start font-bold m-0 mt-[20px] pb-[8px]"
      >
        ARTICLES
      </div>
    </div>

    <!-- articles carousel -->

    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <featured-carousel :items="featuredArticles">
          <template #default
        /></featured-carousel>
      </div>
    </div>

    <!-- test -->
  </div>
</template>

<script setup>
import useEngage from "src/composables/useEngage";
import useFeatured from "src/composables/useFeatured";
import { QBtn } from "quasar";
import IndexCarousel from "src/components/IndexCarousel.vue";
import IndexAnnouncement from "src/components/IndexAnnouncements.vue";
import LabelHead from "src/components/LabelHead.vue";
import ShoutCarousel from "src/components/ShoutCarousel.vue";
import FeaturedCarousel from "src/components/FeaturedCarousel.vue";
import { ref, watch } from "vue";

// const { engage } = useFeatured();

const { engage } = useFeatured();
const { loading } = useFeatured();
const { featuredProjects } = useFeatured();
const { featuredArticles } = useFeatured();
const { shout } = useFeatured();

const printit = () => {
  console.log(featuredProjects.value);
};
</script>

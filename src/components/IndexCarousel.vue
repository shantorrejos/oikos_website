<template>
  <div class="relative m-0">
    <q-carousel
      animated
      v-model="slideMain"
      infinite
      :autoplay="3000"
      class="p-0 max-w-full h-[700px] relative"
    >
      <q-carousel-slide
        v-for="(project, i) in projects"
        :key="project.name"
        :name="i"
        :img-src="project.photo"
      >
      </q-carousel-slide>
    </q-carousel>
    <div
      class="bg-element-purpink w-full h-[700px] absolute top-0 opacity-70 mr-2"
    ></div>
    <p
      class="absolute bottom-20 right-10 text-white p-4 text-right font-bold text-header leading-none"
    >
      BIG INITIATIVES FOR<br />
      SMALL COMMUNITIES
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useOikosProjects from "src/composables/useOikosProjects";

const { projects } = useOikosProjects();
const slideMain = ref(0);
</script>

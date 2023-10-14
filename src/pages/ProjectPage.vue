<template>
  <div class="flex flex-col items-center">
    <img
      v-bind:src="activeProject.photo"
      class="w-[90vw] h-[450px] object-cover object-center"
    />
    <q-linear-progress
      size="20px"
      :value="activeProject.progress"
      color="secondary"
      class="mt-[35px] w-[1000px] rounded-[100px] mx-auto"
    />
    <div class="text-[25px] m-5 text-element-b39pink">
      KEEP THE SUPPORT FOR THIS PROJECT GOING!
    </div>

    <div class="w-[500px] flex justify-center">
      <!-- <font-awesome-icon :icon="['fas', 'share-nodes']" /> -->
      <q-btn
        color="white"
        text-color="primary"
        class="font-bold text-[16px] rounded-[40px] w-[250px] m-0"
      >
        SHARE THIS PROJECT</q-btn
      >
    </div>

    <div class="text-element-b39pink m-2 text-[16px] mb-10">
      Spread the Word!
    </div>

    <div class="uppercase font-bold text-[80px] text-element-purple">
      {{ activeProject.name }}
    </div>
    <div class="uppercase text-[20px] mt-[-16px] text-element-purpink">
      BY {{ activeProject.projectManagers[1] }}
    </div>
    <div class="w-[800px] m-8 text-[22px] text-element-41black text-center">
      {{ activeProject.summary }}
    </div>
    <div class="flex items-center w-[800px] justify-center">
      <p class="text-element-purple text-[22px] m-2">TAGS</p>
      <!-- {{ completeTags.join(", ") }} -->
      <div
        class="flex border-[1px] border-element-b39pink rounded-[20px] text-[20px] text-element-b39pink px-6 m-2 flex-wrap capitalize"
        v-for="(completeTag, i) in completeTags"
        :key="completeTag.value"
        :name="i"
      >
        {{ completeTag }}
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] my-[90px]">
    <div class="bg-element-41black h-[3px] w-[500px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      DOCUME<span class="text-element-b39pink">NTATION</span>
    </div>
    <div class="bg-element-41black h-[3px] w-[500px]"></div>

    <!-- container for documentation -->
    <div class="flex w-[1200px] m-0">
      <q-carousel
        animated
        v-model="photoCarousel"
        arrows
        navigation
        infinite
        class="w-[550px] mr-auto"
      >
        <q-carousel-slide
          v-for="(projectPhoto, i) in activeProject.documentation.photos"
          :key="i"
          :name="i"
          v-bind:img-src="projectPhoto"
        />
      </q-carousel>

      <q-carousel
        animated
        v-model="videoCarousel"
        arrows
        navigation
        infinite
        class="w-[550px] ml-auto"
      >
        <q-carousel-slide
          v-for="(projectPhoto, i) in activeProject.documentation.photos"
          :key="i"
          :name="i"
          v-bind:img-src="projectPhoto"
        />
      </q-carousel>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] my-[90px]">
    <div class="bg-element-41black h-[3px] w-[540px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      ARTI<span class="text-element-b39pink">CLES</span>
    </div>
    <div class="bg-element-41black h-[3px] w-[540px]"></div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useOikosProjects from "src/composables/useOikosProjects";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const { projects } = useOikosProjects();

    const activeProject = projects.find(
      (Object) => Object.name === route.params.name
    );

    const completeTags = computed(() => {
      return activeProject.tags.concat(activeProject.hashtags);
    });

    console.log(completeTags);

    return {
      photoCarousel: ref(1),
      videoCarousel: ref(1),
      route,
      projects,
      activeProject,
      completeTags,
    };
  },
};
</script>

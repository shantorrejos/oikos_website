<template>
  <!-- container for the top thing might be unnecessary-->
  <div class="mb-[60px]">
    <img :src="current.photo" class="w-[100vw] max-h-[550px] object-cover" />
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
            {{ project.tags.join(", ") }}
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
  <div class="mx-auto w-[1600px] mb-22">
    <p class="font-bold text-[20px] text-element-purple">ARTICLES</p>
    <div class="bg-element-purple h-[3px] w-[100%] my-[20px]"></div>

    <div
      class="flex flex-col overflow-x-auto h-[500px] my-[50px] gap-y-14 gap-x-10 p-[4px]"
    >
      <q-card
        light
        bordered
        class="bg-white-700 h-[475px] w-[285px] rounded-[30px] flex relative"
        v-for="(article, i) in articles"
        :key="article.title"
        :name="i"
      >
        <!-- and for no particular reason, this div must exist. I have stopped wondering why and instead
          have come to the conclusion that I shall simply accept this and move on -->
        <div>
          <img
            v-bind:src="article.photo"
            class="h-[45%] w-[100%] rounded-none-child mb-0 rounded-t-[30px] object-cover"
          />
          <!-- container for bottom half -->
          <div class="p-[20px]">
            <div class="capitalize font-bold text-[20px] text-element-41black">
              {{ article.title }}
            </div>
            <div class="text-[16px] font-light">{{ article.summary }}</div>
          </div>
        </div>

        <div class="absolute bottom-[20px] right-[30px] text-slate-400">
          {{ article.datePublished }}
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import useOikosProjects from "src/composables/useOikosProjects";
import useOikosArticles from "src/composables/useOikosArticles";
import useCycleEvents from "src/composables/useCycleEvents";

export default {
  setup() {
    const { projects } = useOikosProjects();
    const { articles } = useOikosArticles();
    const { current } = useCycleEvents();

    const selectedTags = ref([]);

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

    const filteredProjects = computed(() => {
      if (selectedTags.value.length === 0) {
        return projects;
      } else {
        return projects.filter(function (project) {
          return project.tags.some((tag) => selectedTags.value.includes(tag));
        });
      }
    });

    return {
      projects,
      articles,
      current,
      filteredProjects,
      selectedTags,
      toggleTag,
    };
  },
};
</script>

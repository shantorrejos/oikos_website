<template>
  <div class="mx-auto w-[1600px] mb-22">
    <p class="font-bold text-[20px] text-element-purple">ARTICLES</p>
    <div class="bg-element-purple h-[3px] w-[100%] my-[20px]"></div>

    <div
      class="flex flex-col overflow-x-auto h-[500px] my-[50px] gap-y-14 gap-x-10 p-[4px]"
    >
      <q-card
        light
        bordered
        class="bg-white-700 h-[475px] w-[285px] rounded-[30px] flex relative cursor-pointer"
        v-for="(article, i) in limitedArticles"
        :key="i"
        @click="router.push('./article/' + article.title)"
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

<script setup>
import { ref, computed } from "vue";
import useOikosProjects from "src/composables/useOikosProjects";

const { projects } = useOikosProjects();

const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);

// Initialize the result array
const allArticles = [];

for (const project of shuffledProjects) {
  // Concatenate the project's articles with the result
  allArticles.push(...project.articles);

  // Check if the result array has reached the desired size (e.g., 20)
  if (allArticles.length >= 20) {
    break;
  }
}

// Slice the result array to the fixed size (e.g., 20)
const limitedArticles = allArticles.slice(0, 20);
</script>

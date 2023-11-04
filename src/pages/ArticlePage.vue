<template>
  <div
    class="my-[10px] mx-auto bg-element-purpink w-[150px] rounded-[20px] px-2 py-1 cursor-pointer"
    @click="router.push('/project/' + articleProject.name)"
  >
    <p class="text-[14px] text-white font-bold text-center">Source Project</p>
  </div>

  <div class="flex flex-col items-center">
    <p class="uppercase text-element-b39pink">Article</p>
    <p class="uppercase text-element-purple font-bold text-[40px]">
      {{ article.title }}
    </p>
    <div
      class="flex w-[800px] justify-center text-element-b39pink gap-10 mt-[-10px]"
    >
      <p class="flex-1 text-right uppercase text-[14px]">
        {{ article.datePublished }}
      </p>
      <div class="w-[3px] h-[20px] bg-element-b39pink rounded-[30px]"></div>
      <p class="flex-1 uppercase text-[14px]">BY {{ article.author }}</p>
    </div>
    <p class="w-[400px] my-[30px] text-center text-element-41black">
      {{ article.summary }}
    </p>
    <img
      v-bind:src="article.photo"
      class="min-w-[800px] h-[420px] object-cover"
    />
    <p class="w-[800px] text-justify font-light text-[20px] my-[50px]">
      {{ article.content }}
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import useOikosProjects from "src/composables/useOikosProjects";

const router = useRouter();

const route = useRoute();
const { projects } = useOikosProjects();
const articleNameToFind = route.params.title;
console.log(articleNameToFind);

const articleProject = projects.value.find((project) => {
  // Check if the project contains an article with the matching name
  return project.articles.some(
    (article) => article.title === articleNameToFind
  );
});

const article = projects.value
  .map((project) =>
    project.articles.find((article) => article.title === articleNameToFind)
  )
  .filter((article) => article)[0];
</script>

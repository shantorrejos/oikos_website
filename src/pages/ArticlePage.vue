<template>
  <div
    class="my-[10px] mx-auto bg-element-purpink w-[150px] rounded-[20px] px-2 py-1 cursor-pointer"
    @click="router.push('/project/' + articleProject.name)"
  >
    <p class="text-[14px] text-white font-bold text-center">Source Project</p>
  </div>

  <div class="flex flex-col items-center">
    <p>Article</p>
    <p>{{ article.title }}</p>
    <div class="flex w-[800px] justify-center] gap-10">
      <p class="flex-1 text-right uppercase">{{ article.datePublished }}</p>
      <div class="w-[3px] h-[20px] bg-element-b39pink rounded-[30px]"></div>
      <p class="flex-1 uppercase">BY {{ article.author }}</p>
    </div>
    <p>{{ article.summary }}</p>
    <img
      v-bind:src="article.photo"
      class="min-w-[800px] h-[420px] object-cover"
    />
    <p class="w-[800px] text-justify">{{ article.content }}</p>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import useOikosProjects from "src/composables/useOikosProjects";

export default {
  setup() {
    const router = useRouter();

    const route = useRoute();
    const { projects } = useOikosProjects();
    const articleNameToFind = route.params.title;
    console.log(articleNameToFind);

    const articleProject = projects.find((project) => {
      // Check if the project contains an article with the matching name
      return project.articles.some(
        (article) => article.title === articleNameToFind
      );
    });

    const article = projects
      .map((project) =>
        project.articles.find((article) => article.title === articleNameToFind)
      )
      .filter((article) => article)[0];

    console.log(articleProject.name);

    return {
      route,
      router,
      articleProject,
      articleNameToFind,
      article,
    };
  },
};
</script>

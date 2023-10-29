<template>
  <!-- container for the top thing might be unnecessary-->
  <projects-featured />

  <!-- container for the projects thing might-->
  <projects-list></projects-list>

  <!-- container for the articles -->
  <articles-list></articles-list>
</template>

<script setup>
import ProjectsFeatured from "src/components/ProjectsFeatured.vue";
import useFeatured from "src/composables/useFeatured";
import ProjectsList from "src/components/ProjectsList.vue";
import ArticlesList from "src/components/ArticlesList.vue";

const { loading } = useFeatured();
</script>

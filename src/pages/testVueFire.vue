<script setup>
import db from "src/components/firebaseInit";
import { ref, computed } from "vue";
import { useCollection, useDocument } from "vuefire";
import { collection, doc } from "firebase/firestore";

const engage = ref("hello");

// featured
//     DcOlSVkzU673D4Zp9Vjv
//        > engage
//        > featuredArticles [project1docID, project2docID, project3docID]
//        > featuredProjects []
//        > shout[]

const featuredRef = useDocument(
  doc(collection(db, "featured"), "DcOlSVkzU673D4Zp9Vjv")
);

const featuredProjects = computed(() => {
  const featuredProjectsData = featuredRef.value.featuredProjects;
  return featuredProjectsData.map((id) =>
    useDocument(doc(collection(db, "projects"), id))
  );
});

const featuredDocRef = useDocument(
  doc(collection(db, "featured"), "DcOlSVkzU673D4Zp9Vjv")
);

const showConsole = () => {
  engage.value = featuredDocRef.value.engage;
  console.log(engage.value);
  console.log(featuredProjects.value);
};

const showLol = () => {
  console.log(featuredRef.value.featuredProjects);
};
</script>

<template>
  <div @click="showConsole">click</div>
  <div @click="showLol">click</div>
  <div v-for="(project, i) in projects" :key="i">{{ project.name }}</div>
</template>

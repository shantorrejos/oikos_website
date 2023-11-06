import db from "src/components/firebaseInit";
import { ref, computed, watch } from "vue";
import { useCollection, useDocument } from "vuefire";
import { collection, doc, documentId, query, where } from "firebase/firestore";

export default () => {
  const projectsRef = useCollection(collection(db, "projects"));

  const projects = computed(() => {
    if (!projectsRef.value) return;
    return projectsRef.value;
  });

  return {
    projects,
  };
};

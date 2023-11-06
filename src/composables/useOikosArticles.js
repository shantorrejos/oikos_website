import db from "src/components/firebaseInit";
import { ref, computed, watch } from "vue";
import { useCollection, useDocument } from "vuefire";
import { collection, doc, documentId, query, where } from "firebase/firestore";

export default () => {
  const articlesRef = useCollection(collection(db, "articles"));

  const articles = computed(() => {
    if (!articlesRef.value) return;
    return articlesRef.value;
  });

  return {
    articles,
  };
};

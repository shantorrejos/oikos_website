import db from "src/components/firebaseInit";
import { ref, computed, watch } from "vue";
import { useCollection, useDocument } from "vuefire";
import {
  FieldPath,
  collection,
  doc,
  documentId,
  query,
  where,
} from "firebase/firestore";

export default () => {
  const featuredRef = useDocument(
    doc(collection(db, "featured"), "DcOlSVkzU673D4Zp9Vjv")
  );

  const featuredProjectsQuery = computed(() => {
    if (!featuredRef.value) return;
    return query(
      collection(db, "projects"),
      where(documentId(), "in", featuredRef.value?.featuredProjects)
    );
  });

  const featuredProjects = useCollection(featuredProjectsQuery);

  const featuredArticlesQuery = computed(() => {
    if (!featuredRef.value) return;
    return query(
      collection(db, "articles"),
      where(documentId(), "in", featuredRef.value?.featuredArticles)
    );
  });

  const featuredArticles = useCollection(featuredArticlesQuery);

  const engage = computed(() => {
    if (!featuredRef.value) return;
    return featuredRef.value.engage;
  });

  const shout = computed(() => {
    if (!featuredRef.value) return;
    return featuredRef.value.shout;
  });

  const aboutus = computed(() => {
    if (!featuredRef.value) return;
    return featuredRef.value.aboutus;
  });

  // const featuredProjects = computed(() => {
  //   if (featuredRef.pending.value) return [];
  //   const featuredProjectsData = featuredRef.value.featuredProjects;
  //   return featuredProjectsData.map((id) =>
  //     useDocument(doc(collection(db, "projects"), id))
  //   );
  // });

  // const featuredArticles = computed(() => {
  //   if (featuredRef.pending.value) return [];
  //   const featuredArticlesData = featuredRef.value.featuredArticles;
  //   return featuredArticlesData.map((id) =>
  //     useDocument(doc(collection(db, "articles"), id))
  //   );
  // });

  return {
    featuredProjects,
    featuredArticles,
    engage,
    shout,
    aboutus,
  };
};

import { ref, onMounted } from "vue";
import db from "src/components/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

const getFeaturedData = () => {
  const engage = ref(null);
  const featuredProjects = ref([]);
  const featuredArticles = ref([]);
  const shout = ref(null);
  const loading = ref(true); // Loading indicator

  onMounted(async () => {
    try {
      const docRef = doc(db, "featured", "DcOlSVkzU673D4Zp9Vjv");
      const doc_ = await getDoc(docRef);
      const data = doc_.data();

      engage.value = data.engage || null;
      shout.value = data.shout || null;

      // Fetch featured projects based on document IDs
      const projectPromises = data.featuredProjects.map(async (projectId) => {
        const projectRef = doc(db, "projects", projectId);
        const projectDoc = await getDoc(projectRef);
        return projectDoc.data();
      });
      featuredProjects.value = await Promise.all(projectPromises);

      // Fetch featured articles based on document IDs
      const articlePromises = data.featuredArticles.map(async (articleId) => {
        const articleRef = doc(db, "articles", articleId);
        const articleDoc = await getDoc(articleRef);
        return articleDoc.data();
      });
      featuredArticles.value = await Promise.all(articlePromises);

      loading.value = false; // Data is loaded
    } catch (error) {
      console.error("Error fetching data:", error);
      loading.value = false; // Set loading to false to handle errors
    }
  });

  return {
    engage,
    featuredProjects,
    featuredArticles,
    shout,
    loading, // Provide loading indicator
  };
};

export default getFeaturedData;

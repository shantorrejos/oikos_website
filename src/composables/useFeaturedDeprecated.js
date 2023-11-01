import { ref, onMounted, computed, watch, onUnmounted } from "vue";
import db from "src/components/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

const getFeaturedData = () => {
  const engage = ref(null);
  const featuredProjects = ref([]);
  const featuredArticles = ref([]);
  const shout = ref(null);
  const loading = ref(true); // Loading indicator
  let i = ref(0);
  const current = computed(() => featuredProjects.value[i.value]);
  let intervalId;
  let isIntervalRunning = false;

  const runIntervalCode = (i, featuredProjects) => {
    setInterval(function () {
      i.value = (i.value + 1) % featuredProjects.value.length;
    }, 5000);
  };

  onMounted(async () => {
    try {
      if (!loading.value) {
        return; // Data is already loaded, no need to reload it.
      }
      const docRef = doc(db, "featured", "DcOlSVkzU673D4Zp9Vjv");
      const doc_ = await getDoc(docRef);
      const data = doc_.data();

      engage.value = data.engage || null;
      shout.value = data.shout || null;

      const projectPromises = data.featuredProjects.map(async (projectId) => {
        const projectRef = doc(db, "projects", projectId);
        const projectDoc = await getDoc(projectRef);
        return projectDoc.data();
      });
      featuredProjects.value = await Promise.all(projectPromises);

      const articlePromises = data.featuredArticles.map(async (articleId) => {
        const articleRef = doc(db, "articles", articleId);
        const articleDoc = await getDoc(articleRef);
        return articleDoc.data();
      });
      featuredArticles.value = await Promise.all(articlePromises);

      if (!isIntervalRunning) {
        intervalId = runIntervalCode(i, featuredProjects);
        isIntervalRunning = true;
      }

      console.log(featuredArticles.value);
      loading.value = false;

      intervalId = runIntervalCode(i, featuredProjects);
    } catch (error) {
      console.error("Error fetching data:", error);
      loading.value = false;
    }
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });
  return {
    engage,
    featuredProjects,
    featuredArticles,
    shout,
    loading,
    current,
  };
};

export default getFeaturedData;

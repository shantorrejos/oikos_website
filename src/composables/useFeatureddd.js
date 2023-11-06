import { ref, onUnmounted } from "vue";
import db from "src/components/firebaseInit";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";

// Define refs for your data properties
let featured = ref([]);
let featuredArticles = ref([]);
let featuredProjects = ref([]);
let engage = ref("");
let shout = ref("");

// Create a function to fetch and update featured data
const fetchFeaturedData = () => {
  // Fetch featured data from Firestore
  const featuredRef = doc(db, "featured", "DcOlSVkzU673D4Zp9Vjv"); // Replace "your-featured-doc-id" with the actual document ID for your featured data
  onSnapshot(featuredRef, (snapshot) => {
    const data = snapshot.data();
    if (data) {
      // Update the refs with the fetched data
      featured.value = data.featuredArticles;
      featuredArticles.value = data.featuredArticles.map((docID) => ({
        id: docID,
      }));
      console.log(featuredArticles.value);
      featuredProjects.value = data.featuredProjects.map((docID) => ({
        id: docID,
      }));
      console.log(featuredProjects.value);
      engage.value = data.engage;
      shout.value = data.shout;

      populateFeaturedData();
    }
  });
};

// Define a function to fetch a document by its ID from a collection
const fetchDocumentByID = async (collectionName, docID) => {
  const docRef = doc(db, collectionName, docID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } else {
    return null;
  }
};

// Create a function to populate featuredArticles and featuredProjects
const populateFeaturedData = async () => {
  const featuredArticlesData = await Promise.all(
    featuredArticles.value.map(async (article) => {
      return await fetchDocumentByID("articles", article.id);
    })
  );
  const featuredProjectsData = await Promise.all(
    featuredProjects.value.map(async (project) => {
      return await fetchDocumentByID("projects", project.id);
    })
  );
  // Update the refs with the fetched data
  featuredArticles.value = featuredArticlesData.filter((article) => article);
  featuredProjects.value = featuredProjectsData.filter((project) => project);
};

export default () => {
  // Fetch and update featured data
  fetchFeaturedData();

  // Return your data properties
  return {
    featured,
    featuredArticles,
    featuredProjects,
    engage,
    shout,
  };
};

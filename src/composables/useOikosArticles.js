import { ref, onUnmounted } from "vue";
import db from "src/components/firebaseInit";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

let articles = ref([]);

const fetchArticles = () => {
  const articlesRef = collection(db, "articles");
  const unsubscribe = onSnapshot(articlesRef, (querySnapshot) => {
    articles.value = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id, // Document ID
        ...doc.data(), // Document data (type, content, date, etc.)
      };
    });
  });

  // Add an unsubscribe handler to stop listening when the component unmounts
  onUnmounted(unsubscribe);
};

export default () => {
  fetchArticles(); // Call the fetchAnnouncements function to populate announcements initially

  return {
    articles,
  };
};

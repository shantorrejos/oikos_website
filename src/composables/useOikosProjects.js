import { ref, onUnmounted } from "vue";
import db from "src/components/firebaseInit";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

let projects = ref([]);

const fetchProjects = () => {
  const projectsRef = collection(db, "projects");
  const unsubscribe = onSnapshot(projectsRef, (querySnapshot) => {
    projects.value = querySnapshot.docs.map((doc) => {
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
  fetchProjects(); // Call the fetchAnnouncements function to populate announcements initially
  console.log(projects.value);
  return {
    projects,
  };
};

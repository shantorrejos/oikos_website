import { ref, onUnmounted } from "vue";
import db from "src/components/firebaseInit";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

let announcements = ref([]);

const fetchAnnouncements = () => {
  const announcementsRef = collection(db, "announcements");
  const unsubscribe = onSnapshot(announcementsRef, (querySnapshot) => {
    announcements.value = querySnapshot.docs.map((doc) => {
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
  fetchAnnouncements(); // Call the fetchAnnouncements function to populate announcements initially

  return {
    announcements,
  };
};

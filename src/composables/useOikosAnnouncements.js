import { ref } from "vue";
import db from "src/components/firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";

let announcements = ref([]);

const fetchAnnouncements = async () => {
  const announcementsRef = collection(db, "announcements");
  const querySnapshot = await getDocs(announcementsRef);

  announcements.value = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id, // Document ID
      ...doc.data(), // Document data (type, content, date, etc.)
    };
  });
};

// Call the fetchAnnouncements function to populate announcementOikos
fetchAnnouncements();

export default () => {
  return {
    announcements,
  };
};

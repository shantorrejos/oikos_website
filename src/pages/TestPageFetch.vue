<template>
  <div v-if="announcementOikos.length > 0">
    {{ announcementOikos[0].content }}
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref } from "vue";

let announcementOikos = ref([]);

const fetchAnnouncements = async () => {
  const announcementsRef = collection(db, "announcements");
  const querySnapshot = await getDocs(announcementsRef);

  announcementOikos.value = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id, // Document ID
      ...doc.data(), // Document data (type, content, date, etc.)
    };
  });
};

// Call the fetchAnnouncements function to populate announcementOikos
fetchAnnouncements();
</script>

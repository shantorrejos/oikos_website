<template>
  <div>{{ announcementOikos[1].type }}</div>
</template>

<script setup>
import db from "src/components/firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";

let announcementOikos = [];

const fetchAnnouncements = async () => {
  const announcementsRef = collection(db, "announcements");
  const querySnapshot = await getDocs(announcementsRef);

  announcementOikos = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id, // Document ID
      ...doc.data(), // Document data (type, content, date, etc.)
    };
  });
};

// Call the fetchAnnouncements function to populate announcementOikos
fetchAnnouncements();
</script>

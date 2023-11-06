import db from "src/components/firebaseInit";
import { ref, computed, watch } from "vue";
import { useCollection, useDocument } from "vuefire";
import { collection, doc, documentId, query, where } from "firebase/firestore";

export default () => {
  const announcementRef = useCollection(collection(db, "announcements"));

  const announcements = computed(() => {
    if (!announcementRef.value) return;
    return announcementRef.value;
  });

  return {
    announcements,
  };
};

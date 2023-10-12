import useFeatured from "./useFeatured";
import { ref, computed } from "vue";

export default () => {
  // List of projects it has
  const { featuredProjects } = useFeatured();

  let i = ref(0);

  const _current = ref(featuredProjects[i.value]);
  const current = computed(() => featuredProjects[i.value]);
  // every 10s, increment current index
  setInterval(function () {
    i.value = (i.value + 1) % featuredProjects.length;
  }, 5000);

  return {
    current,
  };
};

import useFeatured from "src/composables/useFeatured";
import { ref, computed, watch } from "vue";

export default () => {
  const { featuredProjects } = useFeatured();
  let i = ref(0);

  // Initialize current as null to handle initial undefined value
  const current = ref(null);

  // Watch for changes in featuredProjects and update current when it has data
  watch(featuredProjects, () => {
    if (featuredProjects.value.length > 0) {
      current.value = featuredProjects.value[i.value];
    }
  });

  // Every 10s, increment the current index
  setInterval(function () {
    if (featuredProjects.value.length > 0) {
      i.value = (i.value + 1) % featuredProjects.value.length;
      current.value = featuredProjects.value[i.value];
    }
  }, 5000);

  return {
    current,
  };
};

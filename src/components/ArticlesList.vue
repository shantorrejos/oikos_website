<template>
  <div class="mx-auto w-[1600px] mb-22">
    <p class="font-bold text-[20px] text-element-purple">ARTICLES</p>
    <div class="bg-element-purple h-[3px] w-[100%] my-[20px]"></div>

    <div
      class="flex flex-col overflow-x-auto h-[500px] my-[50px] gap-y-14 gap-x-10 p-[4px]"
    >
      <q-card
        light
        bordered
        class="bg-white-700 h-[475px] w-[285px] rounded-[30px] flex relative cursor-pointer"
        v-for="(article, i) in randomArticles"
        :key="i"
        @click="router.push('./article/' + article.title)"
      >
        <!-- and for no particular reason, this div must exist. I have stopped wondering why and instead
          have come to the conclusion that I shall simply accept this and move on -->
        <div>
          <img
            v-bind:src="article.photo"
            class="h-[45%] w-[100%] rounded-none-child mb-0 rounded-t-[30px] object-cover"
          />
          <!-- container for bottom half -->
          <div class="p-[20px]">
            <div class="capitalize font-bold text-[20px] text-element-41black">
              {{ article.title }}
            </div>
            <div class="text-[16px] font-light">{{ article.summary }}</div>
          </div>
        </div>

        <div class="absolute bottom-[20px] right-[30px] text-slate-400">
          {{ article.datePublished }}
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import useOikosArticles from "src/composables/useOikosArticles";
import { useRouter } from "vue-router";

const router = useRouter();

const { articles } = useOikosArticles();

// Create a flag to check if projects are loaded
const isArticlesPopulated = ref(false);

// Watch the projects data and set the flag when it's populated
watch(articles, () => {
  isArticlesPopulated.value = true;
});

const randomArticles = ref([]);

onMounted(() => {
  // Watch for changes in the articles data
  watch(isArticlesPopulated, async (newVal) => {
    if (newVal) {
      await loadRandomArticles();
    }
  });
});

async function loadRandomArticles() {
  console.log();
  const randomIndexes = generateRandomIndexes(articles.value.length);

  // Sort articles by the random indexes
  randomArticles.value = randomIndexes
    .map((index) => articles.value[index])
    .slice(0, 20);
}

// Function to generate random indexes
function generateRandomIndexes(arrayLength) {
  const indexes = Array.from({ length: arrayLength }, (_, i) => i);
  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes;
}
</script>

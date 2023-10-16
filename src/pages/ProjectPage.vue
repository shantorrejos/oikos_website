<template>
  <div class="flex flex-col items-center">
    <img
      v-bind:src="activeProject.photo"
      class="w-[90vw] h-[450px] object-cover object-center"
    />
    <q-linear-progress
      size="20px"
      :value="activeProject.progress"
      color="secondary"
      class="mt-[35px] w-[1000px] rounded-[100px] mx-auto"
    />
    <div class="text-[25px] m-5 text-element-b39pink">
      KEEP THE SUPPORT FOR THIS PROJECT GOING!
    </div>

    <div class="w-[500px] flex justify-center">
      <!-- <font-awesome-icon :icon="['fas', 'share-nodes']" /> -->
      <q-btn
        color="white"
        text-color="primary"
        class="font-bold text-[16px] rounded-[40px] w-[250px] m-0"
      >
        SHARE THIS PROJECT</q-btn
      >
    </div>

    <div class="text-element-b39pink m-2 text-[16px] mb-10">
      Spread the Word!
    </div>

    <div class="uppercase font-bold text-[80px] text-element-purple">
      {{ activeProject.name }}
    </div>
    <div class="uppercase text-[20px] mt-[-16px] text-element-purpink">
      BY {{ activeProject.projectManagers[0] }}
    </div>
    <div class="w-[800px] m-8 text-[22px] text-element-41black text-center">
      {{ activeProject.summary }}
    </div>
    <div class="flex items-center w-[800px] justify-center">
      <p class="text-element-purple text-[22px] m-2">TAGS</p>
      <!-- {{ completeTags.join(", ") }} -->
      <div
        class="flex border-[1px] border-element-b39pink rounded-[20px] text-[20px] text-element-b39pink px-6 m-2 flex-wrap capitalize"
        v-for="(completeTag, i) in completeTags"
        :key="completeTag.value"
        :name="i"
      >
        {{ completeTag }}
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center gap-[50px] my-[90px]">
    <div class="flex justify-center items-center gap-[50px]">
      <div class="bg-element-b39pink h-[3px] w-[500px]"></div>
      <div class="text-[24px] font-bold text-element-41black">
        DOCUME<span class="text-element-b39pink">NTATION</span>
      </div>
      <div class="bg-element-b39pink h-[3px] w-[500px]"></div>
    </div>

    <!-- container for documentation -->
    <div class="flex w-[1200px] m-0">
      <q-carousel
        animated
        v-model="photoCarousel"
        arrows
        navigation
        infinite
        class="w-[550px] mr-auto"
      >
        <q-carousel-slide
          v-for="(projectPhoto, i) in activeProject.documentation.photos"
          :key="i"
          :name="i"
          v-bind:img-src="projectPhoto"
        />
      </q-carousel>

      <q-carousel
        animated
        v-model="videoCarousel"
        arrows
        navigation
        infinite
        class="w-[550px] ml-auto"
      >
        <q-carousel-slide
          v-for="(projectPhoto, i) in activeProject.documentation.photos"
          :key="i"
          :name="i"
          v-bind:img-src="projectPhoto"
        />
      </q-carousel>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] my-[90px]">
    <div class="bg-element-b39pink h-[3px] w-[540px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      ARTI<span class="text-element-b39pink">CLES</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[540px]"></div>
  </div>

  <!-- container for articles -->
  <div class="mx-auto w-[1200px] my-22">
    <div
      class="flex flex-col overflow-auto h-[340px] my-[50px] gap-y-14 gap-x-10 p-[4px] items-center"
    >
      <q-card
        light
        bordered
        class="bg-white-700 h-[300px] w-[265px] rounded-[30px] flex relative bg-slate-100 drop-shadow-md"
        v-for="(article, i) in activeProject.articles"
        :key="i"
        :name="i"
      >
        <div>
          <img
            v-bind:src="article.photo"
            class="w-[100%] h-[58%] rounded-none-child mb-0 rounded-t-[30px] object-cover"
          />

          <div class="m-5 absolute">
            <p class="text-slate-400 text-[12 px]">ARTICLE</p>
            <p
              class="text-element-41black font-bold uppercase mt-2 text-[18px]"
            >
              {{ article.title }}
            </p>
          </div>
        </div>
      </q-card>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] mt-[90px] mb-[40px]">
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      ACCOMPL<span class="text-element-b39pink">ISHMENTS</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
  </div>
  <!-- project accomplishments -->

  <div class="flex flex-col items-center mb-10">
    <div class="w-[1200px] flex flex-col">
      <p class="font-bold text-[40px] text-element-purple uppercase">
        {{ activeProject.name }}
        <span class="text-element-purpink">HAS...</span>
      </p>
      <ul
        class="ml-[20px] list-disc text-element-purple text-[25px] capitalize"
      >
        <li
          v-for="(accomplishments, i) in activeProject.accomplishments"
          :key="i"
          :name="i"
        >
          {{ accomplishments }}
        </li>
      </ul>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] mt-[90px] mb-[40px]">
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      BEHIND<span class="text-element-b39pink"> THE</span
      ><span class="text-element-purple"> SCENES</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[485px]"></div>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-[1200px]">
      <p class="font-bold text-element-purpink text-[23px] mr-auto my-4">
        PROJECT MANAGER/S
      </p>
      <div
        class="text-element-purple text-[20px]"
        v-for="(managers, i) in activeProject.projectManagers"
        :key="i"
      >
        {{ managers }}
      </div>

      <ul class="list-disc">
        <p
          class="font-bold text-element-purpink text-[23px] mr-auto my-4 mt-16"
        >
          VOLUNTEERS
        </p>
        <div class="flex flex-col max-h-[300px] flex-wrap overflow-x-auto">
          <li
            class="text-element-purple text-[20px] ml-[20px]"
            v-for="(volunteers, i) in activeProject.volunteers"
            :key="i"
          >
            {{ volunteers.displayName }}
          </li>
        </div>
      </ul>
    </div>
  </div>

  <div class="flex justify-center items-center gap-[50px] mt-[90px] mb-[40px]">
    <div class="bg-element-b39pink h-[3px] w-[470px]"></div>
    <div class="text-[24px] font-bold text-element-41black">
      DOWNLOADABLE<span class="text-element-b39pink"> FILES</span>
    </div>
    <div class="bg-element-b39pink h-[3px] w-[470px]"></div>
  </div>

  <div class="flex justify-center flex-wrap h-[300px]">
    <div
      class="flex flex-col max-h-[250px] flex-wrap overflow-x-auto w-[940px] gap-[20px]"
    >
      <div
        flat
        v-for="(dlc, i) in activeProject.dlcList"
        :key="i"
        class="w-[450px] h-[60px] bg-element-EAgray rounded-[20px] ml-[5px] p-[20px] flex justify-between"
      >
        <p class="capitalize mr-auto text-element-41black">
          {{ dlc.name }} <span class="lowercase">.txt</span>
        </p>
        <p
          @click="downloadContent(i)"
          class="cursor-pointer text-element-purple"
        >
          Download
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useOikosProjects from "src/composables/useOikosProjects";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const { projects } = useOikosProjects();

    const activeProject = projects.find(
      (Object) => Object.name === route.params.name
    );

    console.log();

    const downloadContent = function (i) {
      const dlcObject = activeProject.dlcList[i]; // Access the object at index i from dlcList
      if (dlcObject && dlcObject.content) {
        const content = dlcObject.content;
        const blob = new Blob([content], {
          type: "application/octet-stream",
        });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "downloadedFile.txt"; // Specify the filename
        a.style.display = "none";

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Clean up
      } else {
        console.error("Invalid dlcList object or content is missing.");
      }
    };

    const completeTags = computed(() => {
      return activeProject.tags.concat(activeProject.hashtags);
    });

    console.log(completeTags);

    return {
      photoCarousel: ref(0),
      videoCarousel: ref(0),
      route,
      projects,
      activeProject,
      completeTags,
      downloadContent,
    };
  },
};
</script>

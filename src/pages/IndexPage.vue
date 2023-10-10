<template>
  <div class="q-pa-md">
    <!-- main carousel -->
    <div class="relative m-0">
      <q-carousel
        animated
        v-model="slideMain"
        arrows
        navigation
        infinite
        :autoplay="3000"
        class="p-0 max-w-full h-[700px]"
      >
        <!-- Place holder, code javascript later -->
        <q-carousel-slide
          v-for="(project, i) in projects"
          :key="project.name"
          :name="i"
          :img-src="project.photo"
        />
      </q-carousel>
      <p
        class="absolute bottom-20 right-10 text-white p-4 text-right font-bold text-header leading-none"
      >
        BIG INITIATIVES FOR<br />
        SMALL COMMUNITIES
      </p>
    </div>
    <!-- donate button -->
    <q-carousel
      animated
      navigation
      navigation-position="bottom"
      control-color="primary"
      v-model="slideAnnouceMain"
      ref="announcementCarousel"
      infinite
      class="w-[1000px] h-fit mx-auto p-0 my-9"
      id="announcementIndex"
    >
      <q-carousel-slide
        class="p-0 w-[250px] h-[150px]"
        v-for="(announcement, i) in announcements"
        :key="announcement.type"
        :name="i"
      >
        <div class="max-w-fit">
          <p class="font-semibold text-element-purple text-[24px] my-[20px]">
            ANNOUNCEMENTS
          </p>
        </div>
        <q-card light bordered class="bg-white mb-[60px] rounded-3xl relative">
          <p class="absolute top-2 right-4 text-element-purple">TODAY</p>
          <q-card-section class="p-80px">
            <div class="text-h6 m-3 text-element-purple font-bold">
              {{ announcement.type }}
              <span class="text-h6 m-3 text-element-purple font-thin">
                {{ announcement.content }}
              </span>
            </div>
          </q-card-section>
        </q-card></q-carousel-slide
      >

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[1.2, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            icon="arrow_left"
            @click="$refs.announcementCarousel.previous()"
          />
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            icon="arrow_right"
            @click="$refs.announcementCarousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
    <!-- Engage section -->
    <div class="flex items-center justify-center gap-[40px] m-[50px] mt-0">
      <!-- engage text -->

      <!-- engage photo -->

      <img v-bind:src="engage.photo" class="relative h-[400px] w-auto" />

      <div class="max-w-[400px]">
        <div align="center" class="flex flex-col items-center">
          <p class="text-[45px] font-bold text-element-41black leading-none">
            SUPPORT THE FOUNDATION!
          </p>
          <p class="text-element-b39pink text-[15px] max-w-[200px] mt-[20px]">
            DONATE, VOLUNTEER, OR EVEN PROPOSE A PROJECT OF YOUR OWN
          </p>
        </div>

        <div class="flex flex-col my-[30px] items-center gap-[20px]">
          <q-btn
            flat
            rounded
            class="bg-element-purpink text-white font-bold text-[16px] px-12 w-48"
            >DONATE</q-btn
          >
          <q-btn
            flat
            rounded
            class="bg-element-purpink text-white font-bold text-[17px] px-12 w-48"
            >VOLUNTEER</q-btn
          >
        </div>
      </div>
    </div>

    <!-- Featured label -->
    <div class="flex justify-center items-center gap-[50px] my-[90px]">
      <div class="bg-element-41black h-[3px] w-[500px]"></div>
      <div class="text-[24px] font-bold text-element-41black">
        FEAT<span class="text-element-b39pink">URED</span>
      </div>
      <div class="bg-element-41black h-[3px] w-[500px]"></div>
    </div>

    <!-- announcement carousel // change this for javascript -->
    <div align="center" class="relative mx-auto max-w-fit">
      <q-carousel
        control="false"
        animated
        v-model="slideAnnouncement"
        infinite
        control-color="primary"
        :autoplay="3000"
        class="relative p-0 w-[1200px] h-[370px] mb-16"
        id="projectsIne"
      >
        <!-- Place holder, code javascript later -->
        <q-carousel-slide
          v-for="(featuredPhoto, i) in featuredBanner.photo"
          :key="featuredPhoto"
          :name="i"
          :img-src="featuredPhoto"
        />
      </q-carousel>

      <!-- textoverlay for announcement -->
      <div class="absolute w-[417px] top-5 left-10">
        <p class="text-[45px] text-left font-bold text-white uppercase">
          {{ featuredBanner.title }}
        </p>
        <p class="text-[20px] text-white text-left font-thin">
          {{ featuredBanner.content }}
        </p>
        <div class="flex gap-[20px] my-3">
          <q-btn
            flat
            rounded
            class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
            >View More</q-btn
          >
          <q-btn
            flat
            rounded
            class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
            >Go to Page</q-btn
          >
        </div>
      </div>
    </div>

    <!-- projects label -->
    <div align="center">
      <div
        class="flex max-w-[1200px] text-[17px] text-element-E7Cpink justify-start font-bold m-0 mt-[20px] pb-8px"
      >
        PROJECTS
      </div>
    </div>

    <!-- projects carousel // change this for javascript -->

    <div align="center" class="relative m-0 p-0">
      <q-carousel
        animated
        ref="slideProjectRef"
        v-model="slideProject"
        navigation
        control-color="primary"
        infinite
        class="p-0 w-[1200px] m-0"
        id="projectsIndex"
      >
        <!-- Place holder, code javascript later -->
        <q-carousel-slide
          class="p-0"
          v-for="(featuredProject, i) in featuredProjects"
          :key="featuredProject.name"
          :name="i"
        >
          <div class="flex justify-between p-0">
            <q-img
              class="flex-1 max-h-[330px] max-w-[600px]"
              v-bind:src="featuredProject.photo"
            ></q-img>

            <div class="flex text-left w-[550px] flex-col justify-center">
              <!-- code this cunt -->
              <p
                class="text-[50px] font-bold text-element-b39pink leading-none w-[400px] uppercase mb-[20px]"
              >
                {{ featuredProject.name }}
              </p>
              <p class="text-[22px] font-thin text-element-24black mb-[20px]">
                {{ featuredProject.description }}
              </p>

              <div style="display: flex; gap: 30px; margin-top: 10px">
                <q-btn
                  flat
                  rounded
                  class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
                  >View More</q-btn
                >
                <q-btn
                  flat
                  rounded
                  class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
                  >More Projects</q-btn
                >
              </div>
            </div>
          </div>
        </q-carousel-slide>

        <template v-slot:control>
          <q-carousel-control
            position="bottom-left"
            :offset="[1.2, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              icon="arrow_left"
              @click="$refs.slideProjectRef.previous()"
            />
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              icon="arrow_right"
              @click="$refs.slideProjectRef.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <!-- Articles -->
    <!-- label -->

    <div align="center">
      <div
        class="flex max-w-[1200px] text-[17px] text-element-E7Cpink justify-start font-bold m-0 mt-[20px] pb-[8px]"
      >
        ARTICLES
      </div>
    </div>

    <!-- articles carousel // change this for javascript-->
    <div align="center" class="relative m-0 p-0">
      <q-carousel
        control="false"
        animated
        control-color="primary"
        ref="slideArticlesRef"
        v-model="slideArticles"
        navigation
        infinite
        class="p-0 w-[1200px] m-0 mb-20"
        id="articlesIndex"
      >
        <!-- Place holder, code javascript later -->
        <q-carousel-slide
          class="p-0"
          v-for="(featuredArticle, i) in featuredArticles"
          :key="featuredArticle.title"
          :name="i"
        >
          <div class="flex justify-between p-0">
            <q-img
              class="flex-1 max-h-[330px] max-w-[600px]"
              v-bind:src="featuredArticle.photo"
            ></q-img>

            <div class="flex text-left w-[550px] flex-col justify-center">
              <!-- code this cunt -->
              <p
                class="text-[50px] font-bold text-element-b39pink leading-none w-[400px] uppercase mb-[20px]"
              >
                {{ featuredArticle.title }}
              </p>
              <p class="text-[22px] font-thin text-element-24black mb-[20px]">
                {{ featuredArticle.description }}
              </p>

              <div style="display: flex; gap: 30px; margin-top: 10px">
                <q-btn
                  flat
                  rounded
                  class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
                  >View More</q-btn
                >
              </div>
            </div>
          </div>
        </q-carousel-slide>

        <template v-slot:control>
          <q-carousel-control
            position="bottom-left"
            :offset="[1.2, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              icon="arrow_left"
              @click="$refs.slideArticlesRef.previous()"
            />
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              icon="arrow_right"
              @click="$refs.slideArticlesRef.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { QBtn } from "quasar";
import { ref } from "vue";
import useOikosProjects from "src/composables/useOikosProjects";
import useOikosAnnouncements from "src/composables/useOikosAnnouncements";
import useEngage from "src/composables/useEngage";
import useFeatured from "src/composables/useFeatured";

export default {
  setup() {
    const { projects } = useOikosProjects();
    const { announcements } = useOikosAnnouncements();
    const { engage } = useEngage();
    const { featuredBanner } = useFeatured();
    const { featuredProjects } = useFeatured();
    const { featuredArticles } = useFeatured();

    return {
      slideMain: ref(0),
      slideAnnouceMain: ref(0),
      slideAnnouncement: ref(0),
      slideProject: ref(0),
      slideArticles: ref(0),
      projects,
      announcements,
      engage,
      featuredBanner,
      featuredProjects,
      featuredArticles,
    };
  },
  components: { QBtn },
};
</script>

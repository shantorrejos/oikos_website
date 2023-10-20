<template>
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
      class="p-0 w-[250px] h-[150px] relative"
      v-for="(announcement, i) in announcements"
      :key="announcement.type"
      :name="i"
    >
      <div class="h-[80px] relative">
        <p
          class="font-semibold text-element-purple text-[24px] absolute left-[20px] bottom-[20px]"
        >
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
</template>

<script setup>
import { ref } from "vue";
import useOikosAnnouncements from "src/composables/useOikosAnnouncements";

const { announcements } = useOikosAnnouncements();
const slideAnnouceMain = ref(0);
</script>

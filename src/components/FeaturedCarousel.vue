<template>
  <div align="center" class="relative mx-auto max-w-fit">
    <q-carousel
      animated
      ref="slideRef"
      v-model="slideModel"
      navigation
      control-color="primary"
      infinite
      class="p-0 w-[1200px] m-0"
      id="projectsIndex"
    >
      <q-carousel-slide
        class="p-0"
        v-for="(item, index) in items"
        :key="index"
        :name="index"
      >
        <div class="flex justify-between p-0">
          <q-img
            class="flex-1 max-h-[330px] max-w-[600px]"
            v-bind:src="item?.photo"
          >
          </q-img>

          <div class="flex text-left w-[550px] flex-col justify-center">
            <p
              class="text-[50px] font-bold text-element-purple leading-none w-[400px] uppercase mb-[20px]"
            >
              {{ item?.title ? item?.title : item?.name }}
            </p>
            <p class="text-[22px] font-thin text-element-24black mb-[20px]">
              {{ item?.description ? item?.description : item?.summary }}
            </p>

            <div style="display: flex; gap: 30px; margin-top: 10px">
              <q-btn
                v-if="item?.title"
                @click="router.push('./article/' + item.title)"
                flat
                rounded
                class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
                >View More</q-btn
              >
              <q-btn
                v-if="item?.name"
                @click="router.push('/project/' + item.name)"
                flat
                rounded
                class="bg-element-purpink text-white font-bold text-[14px] px-12 w-50"
                >View More</q-btn
              >

              <q-btn
                v-if="item?.name"
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
            @click="$refs.slideRef.previous()"
          />
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            icon="arrow_right"
            @click="$refs.slideRef.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
    <div
      class="w-[600px] h-[330px] bg-element-b39pink absolute top-0 opacity-50"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  items: Array,
});
console.log("hello world");

const router = useRouter();
const slideModel = ref(0);
</script>

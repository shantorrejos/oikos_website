<template>
  <div class="mx-auto text-[90px] font-bold text-element-purple w-fit mt-10">
    LOG <span class="text-element-b39pink">IN</span>
  </div>
  <div class="w-[950px] h-[3px] bg-element-b39pink mx-auto"></div>
  <div class="flex flex-col items-center mt-10">
    <q-input
      outlined
      v-model="username"
      label="EMAIL ADDRESS"
      class="w-[550px] m-3"
    ></q-input>
    <q-input
      outlined
      v-model="password"
      label="PASSWORD"
      class="w-[550px] m-3"
    ></q-input>
    <q-btn
      flat
      @click="router.push('/signup')"
      class="bg-element-b39pink text-white font-bold text-[20px] w-[200px] h-fit rounded-[40px] p-0"
    >
      LOGIN
    </q-btn>

    <div class="text-[15px] text-element-b39pink mt-3">
      Don't have an account?
      <span @click="router.push('/signup')" class="cursor-pointer font-bold">
        SIGN UP</span
      >
    </div>
    <div class="text-[15px] text-element-b39pink mb-20">Forgot password?</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
</script>

<template>
  <div
    class="mx-auto text-[90px] font-bold text-element-purple w-fit h-fit mt-10"
  >
    SIGN <span class="text-element-b39pink">UP.</span>
  </div>
  <p class="text-[35px] text-element-b39pink mx-auto w-fit mt-[-20px]">
    Be a part of the foundation.
  </p>
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
      v-model="phonenumber"
      label="PHONE NUMBER"
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
      class="bg-element-b39pink text-white font-bold text-[20px] w-[200px] h-fit rounded-[40px] p-0 mb-20 mt-5"
    >
      NEXT
    </q-btn>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      username: ref(""),
      password: ref(""),
      router,
    };
  },
};
</script>

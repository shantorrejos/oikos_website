<template>
  <div>Login</div>
  <div class="w-[800px] h-[3px] bg-element-b39pink"></div>
  <q-input v-model="username" label="UserName"></q-input>
  <q-input v-model="password" label="Password"></q-input>
  <q-btn @click="router.push('/signup')"></q-btn>
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

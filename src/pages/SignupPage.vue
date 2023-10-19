<template>
  <div>Signup</div>
  <div class="w-[800px] h-[3px] bg-element-b39pink"></div>
  <q-input v-model="email" label="email"></q-input>
  <q-input v-model="password" label="Password" type="password"></q-input>
  <q-btn @click="register"></q-btn>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log("successfully registered");
          router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };
    return {
      email,
      password,
      router,
      register,
    };
  },
};
</script>

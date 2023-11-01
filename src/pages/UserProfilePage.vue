<template>
  <img
    src="https://images.pexels.com/photos/2948636/pexels-photo-2948636.jpeg?cs=srgb&dl=pexels-mont-photographs-2948636.jpg&fm=jpg"
    class="h-[600px] w-full object-cover"
  />

  <div
    class="relative w-full h-[800px] rounded-t-[80px] mt-[-130px] bg-white flex justify-center"
  >
    <img
      src="https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?s=170667a&w=0&k=20&c=nssFUeuHYKJB-ZBTU3LUJlD4m2lvpQ5e7dshUto3FDw="
      class="w-[350px] h-[350px] mt-[-240px] rounded-[360px] object-cover"
    />
  </div>
  <div>oten</div>
  <q-btn @click="handleSignOut">CLICK ME TO SIGN OUT BITCHES </q-btn>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
const

let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      router.push("/login");
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<template>
  
  <div class="mt-10 ml-96">
    <img src="/logos/Logo-3-2Doo.jpg" alt="Isologo de 2Doo" class="h-36" />
  </div>
  <h1 class="ml-96 text-3xl mt-5 text-gray-700">
    Use 2Doo, the best to-do list application.
  </h1>
  

  <Login v-if="login" />
  <Register v-else="register" />
  <div class="flex justify-center">
    <button
      @click="loginRegister"
      type="sbmit"
      class="w-full bg-blue-800 mb-12 h-9 text-2xl max-w-lg p-8 mt-8 text-white mx-auto text-center flex items-center justify-center"
    >
      Login - Register
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Login from "../components/LoginForm.vue";
import Register from "../components/RegisterForm.vue";


const login = ref(true);

function loginRegister() {
  login.value = !login.value;
}
</script>

<style scoped></style>

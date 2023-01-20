<template>
  <div class="flex justify-end mr-24">
    <button class="text-white py-1 px-6 mt-3 bg-fuchsia-700 w-44 flex justify-center" @click="logout">
      Log out
    </button>
  </div>
</template>

<script setup>
import {useUserStore} from '../store/user'
import {useRouter} from "vue-router"
const user = useUserStore()
const router = useRouter();


async function logout() {
  await user.logout()
  router.push("/auth");

}

</script>

<style scoped>

</style>
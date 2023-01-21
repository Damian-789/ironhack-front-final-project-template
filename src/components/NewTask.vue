<template>
    <form @submit.prevent="newTask" class="bg-sky-100 border-slate-900 max-w-lg p-8 mx-auto mt-7 mb-11">

<h1 class="text-3xl font-bold mb-4 text-gray-800" >New Task</h1>

<div class="mb-6">
    <input type="text" v-model="newTask" placeholder="Create a new task" class="bg-slate-300 w-full h-9" 
    />
    
</div>

<button type="submit" class="w-full bg-teal-700 mb-4 h-9 text-2xl"
>Submit</button>

</form> 


</template>

<script setup>
import {ref} from "vue"

const newTask = ref("")



</script>

<style scoped>

</style>
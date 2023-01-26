<template>
    <form @submit.prevent="createTasks" class="bg-sky-200 border-slate-900 max-w-lg p-8 mx-auto mt-7 mb-11">

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
import {useTaskStore} from '../store/task'
import {useUserStore} from '../store/user'
const taskStore = useTaskStore();
const userStore = useUserStore(); //DE AQUI VIENE EL USER

const newTask = ref("") // DE AQUI VIENE LA TAREA

const emits =defineEmits(["getReloadFunction"])

async function createTasks() {
    console.log(userStore.user)
    const res = await taskStore.postTasks(userStore.user.id, newTask.value)
    emits("getReloadFunction");

    /*const user_id = userStore.user.value;
    const title = newTask.value;*/
    newTask.value = ""
    
    //location.reload()

     
}

</script>

<style scoped>

</style>
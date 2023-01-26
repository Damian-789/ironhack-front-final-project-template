<template>
    <div id="tarea1" class="bg-sky-200 border-slate-900 max-w-lg p-8 mx-auto mt-7 mb-11">
        <h1 class="text-3xl font-bold mb-4 text-gray-800" >Pending</h1>
        <div v-for="task in tasks" class="mb-4" >
            <div class="flex justify-between">
            <input type="text" v-model="task.title" class="bg-white text-2xl mb-px w-64">
                <div>
                <button class=" bg-teal-800 p-2 mr-3 w-16" @click="edit(task)" >Edit</button>
                <button class="bg-teal-800 p-2 mr-3 w-16" @click="remove(task)">Delete</button>
                </div>
            </div>
                <p>Is Complete: {{ task.is_complete }}</p>
        </div>


    </div>
</template>

<script setup>
import {ref, watch} from "vue"

import {useTaskStore} from '../store/task'
import {useUserStore} from '../store/user'
const taskStore = useTaskStore();
const userStore = useUserStore();

const tasks = ref([])


const props = defineProps(["msg"])
/*const props = defineProps({
    type: Boolean,
    default: true,
});*/

watch(props, (newProps) => {
    console.log(newProps.msg)
   if(newProps.msg === true) {
    getAllTasks()
   }
})


async function getAllTasks() {
    const res = await taskStore.fetchTasks()
    tasks.value = res;
      
}
getAllTasks()





async function remove(task) {
    const res = await taskStore.deleteTasks(task.id)
    await getAllTasks()
}


async function edit(task) {
    console.log(task.id,task.title)
    const res = await taskStore.editTasks(task.id,task.title)

    //newTask.value = ""
}

</script>

<style scoped>

</style>
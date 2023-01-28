<template>
    <div id="tarea1" class="bg-sky-200 border-slate-900 w-6/12 p-8 mx-auto mt-7 mb-11">
        <h1 class="text-3xl font-bold mb-4 text-gray-800" >Tasks to do</h1>
        <div v-for="task in tasks" class="mb-4" >
            <div class="flex justify-between">
            <input type="text" v-model="task.title" class="bg-white text-2xl mb-px w-96 line-through" v-if="task.is_complete">
            <input type="text" v-model="task.title" class="bg-white text-2xl mb-px w-96" v-else>
                <div>
                <button class="bg-teal-800 p-2 mr-3 w-16" @click="remove(task)">Delete</button>
                <button class=" bg-teal-800 p-2 mr-3 w-16" @click="edit(task)" >Edit</button>
                
                <button class=" bg-green-600 p-2 mr-3 w-24"   @click="complete(task)" v-if="task.is_complete">Commplete</button>
                <button class=" bg-red-600 p-2 mr-3 w-24" @click="complete(task)" v-else>Incomplete</button>
                <!--<input type="checkbox" id="activar"> 
                <label for="activar"> Complete</label> -->
                </div>
            </div>
                <!--<p>Is Complete: {{ task.is_complete }}</p>-->
        </div>
        <!-- :class="backgroundColor" -->

    </div>
</template>

<script setup>
import {ref, watch} from "vue"

import {useTaskStore} from '../store/task'
import {useUserStore} from '../store/user'
const taskStore = useTaskStore();
const userStore = useUserStore();

const tasks = ref([])




/*
const status = ref("")
const backgroundColor = ref()

watch(task.is_complete,(newStatus) =>{
    if (newStatus = true ) {
        status.value = "Complete";
        backgroundColor.value = "green-background"
    }else{
        status.value = "Pending";
        backgroundColor.value = "red-background"
    }
})*/

//const props = defineProps(["msg"])
/*const props = defineProps({
    type: Boolean,
    default: true,
});*/

/*watch(props, (newProps) => {
    console.log(newProps.msg)
   if(newProps.msg === true) {
    getAllTasks()
   }
})*/


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

async function complete(task) {
    // Le pasas el estado actual de la tarea (false)
    console.log(task.id,task.is_complete)
    const res = await taskStore.completeTasks(task.id,task.is_complete)
    await getAllTasks()
    //newTask.value = ""
}


</script>

<style scoped>

[type="checkbox"] 
label{
padding-left: 1.3em;
position: relative;
}

label::before{
content: "";
border:solid 1px #9e9e9e;
width: 1.3em;
height: 1.3em;
position:absolute;
left: 0px;


}




.green-background{
    background-color: green;
}


.red-background{
    background-color: red;
}





</style>
<template>
<LogOut/>
<NewTastk @getReloadFunction="getReloadFunction"/>
<TaskList :msg="msg"/>


    
</template>

<script setup>
import { ref } from "vue";
import LogOut from "../components/LogoutBoton.vue";
import NewTastk from "../components/NewTask.vue";
import TaskList from "../components/TaskList.vue";

const msg = ref(false);


function getReloadFunction(){
    console.log("probando recepcion de funcion getAllTasks")
    msg.value = true;
}




</script>



<style scoped>

</style>
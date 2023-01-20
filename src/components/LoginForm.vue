<template>
    <form @submit.prevent="login" class="bg-sky-100 border-slate-900 max-w-lg p-8 mx-auto mt-8 mb-11">

        <h1 class="text-3xl font-bold mb-4 text-gray-800" >Login</h1>

        <div class="mb-6">
            <h3 for="email" class="mb-1 text-2xl">Email</h3>
            <input type="email" v-model="email" placeholder="Enter your email" class="bg-slate-300 w-full h-9" 
            />
            <p id="email-error" v-if="show1">{{ errorEmail }}</p>
        </div>

        <div class="mb-11">
            <h3 for="password" class="mb-1 text-2xl">Password</h3>
            <input type="password" v-model="password" placeholder="Enter your password" class="bg-slate-300 w-full h-9 scroll-pl-2" 
            />
            <p id="password-error" v-if="show2">{{ errorPassword }}</p>
        </div>

        <button :disabled="show1" :disable="show2"
        type="submit" class="w-full bg-teal-700 mb-4 h-9 text-2xl"
        >Login</button>

    </form> 
 
</template>

<script setup>

import {ref,watch} from "vue";
import {useRouter} from "vue-router"
import {useUserStore} from '../store/user'
const user = useUserStore();
const router = useRouter();

const email = ref("");
const errorEmail = ref("");
const show1 = ref(false);

watch(email,(newEmail, oldEmail) => {
    if( newEmail.length <6) {
        show1.value = true;
        errorEmail.value = "email too short"
    } else if(!newEmail.includes("@")){
        show1.value = true;
        errorEmail.value= "email should include an @"
    } else if(newEmail.indexOf(".") === -1){
        show1.value = true;
        errorEmail.value= `email should include a "."`
    } else {
        show1.value = false
    }
    }
 
   );

const password = ref("");
const errorPassword = ref("");
const show2 = ref(false);

watch(password,(newPassword, oldPassword) => {
    if( newPassword.length <6) {
        show2.value = true;
        errorPassword.value = "Password too short"
    } else {
        show2.value = false
    }
    }
 
   );

async function login(){
    const res = await user.login(email.value, password.value)
    router.push("/");
    //const finalRes = await 


    //return  = "invalid username or password"
}




</script>

<style scoped>

</style>
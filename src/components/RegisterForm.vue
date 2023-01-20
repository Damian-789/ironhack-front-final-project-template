<template>
    <form @submit.prevent="Register" class="bg-sky-100 border-slate-900 max-w-lg p-8 mx-auto mt-8 mb-11 ">

<h1 class="text-3xl font-bold mb-4 text-gray-800" >Register</h1>

<div class="mb-6">
    <h3 for="email" class="mb-1 text-2xl">Email</h3>
    <input type="email" v-model="email" placeholder="Enter your full email" class="bg-slate-300 w-full h-9" 
    />
    <p id="email-error" v-if="show1">{{ errorEmail }}</p>
</div>


<div class="mb-11">
    <h3 for="password" class="mb-1 text-2xl">Password</h3>
    <input type="password" v-model="password" placeholder="Enter your password" class="bg-slate-300 w-full h-9 scroll-pl-2" 
    />
    <p id="password-error" v-if="show2">{{ errorPassword }}</p>

</div>

<div class="mb-11">
    <h3 for="repeat-password" class="mb-1 text-2xl">Repeat Password</h3>
    <input type="password" v-model="password2" placeholder="Enter your password again" class="bg-slate-300 w-full h-9 scroll-pl-2" 
    />
    <p id="password-error" v-if="show3">{{ errorPassword2 }}</p>

</div>
<button :disabled="show1" :disable="show2" :disabl="show3"
type="submit" class="w-full bg-teal-700 mb-4 h-9 text-2xl"
>Register</button>


</form> 
</template>

<script setup>
import {ref,watch} from "vue";

import {useUserStore} from '../store/user'
const user = useUserStore()



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


    const password2 = ref("");
    const errorPassword2 = ref("");
    const show3 = ref(false);

    watch(password2, (newPassword2) => {
    if( newPassword2 !== password.value) {
        show3.value = true;
        errorPassword2.value = "Passwords don't match"
    } else {
        show3.value = false
    }
    }
 
   );

   async function Register(){
    const res = await user.signUp(email.value, password.value)
    //const finalRes = await res.json()
}







</script>

<style scoped>

</style>
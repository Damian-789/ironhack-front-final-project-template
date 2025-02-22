// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    async signUp(email, password) {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
        if (user) this.user = user;
      } catch (error) {
        console.log(error);
      }
    },

    // Hacer sign in
    async login(email, password) {
      try {
        const { data, error } = await supabase.auth.signIn({
          email: email,
          password: password,
        });
        if (error) throw error;
        
        console.log(data);
      } catch (error) {
        console.log(error);
        //return response
      }
    },
    // Hacer log out
    async logout(){
    const { error } = await supabase.auth.signOut()// - tomado de Supabase
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
    //},
  },
});

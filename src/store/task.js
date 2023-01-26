// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      try {
        const { data: tasks, error } = await supabase.from("tasks").select("*");
        if (error) throw error;
        this.tasks = tasks;
        //Este return es importante porque necesitamos las tareas en el frontend
        return tasks;
      } catch (error) {
        console.log(error);
      }
    },
    // Hacer el delete
    async deleteTasks(id) {
      try {
        const { data: tasks, error } = await supabase
          .from("tasks")
          .delete()
          .match({ id: id });
        //Este return es importante porque necesitamos las tareas en el frontend
        return tasks;
      } catch (error) {
        console.log(error);
      }
    },

    // Hacer POST
    async postTasks(user_id, title) {
      console.log(user_id, title);
      try {
        //tomado de supabase
        const { data: tasks, error } = await supabase
        .from("tasks")
          .insert({ user_id: user_id, title: title });
        return tasks;
      } catch (error) {
        console.log(error);
      }
    },

    // Hacer el PUT (edit)
    async editTasks(id, title) {
      console.log(id, title);
      try {
        const { data: tasks, error } = await supabase
        .from('tasks')
        .update({ title: title })
        .eq('id',id );

        return tasks;
      } catch (error) {
        console.log(error);
      }
    },







    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});

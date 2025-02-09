<template>
  <div class="tasks">
    <h1>Tasks</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.completed ? "Completada" : "Pendiente" }}
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  name: "TasksPage",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      try {
        const response = await apiClient.get("tasks/");
        this.tasks = response.data;
      } catch (error) {
        console.error("An error ocurred loading tasks:", error);
      }
    },
  },
};
</script>

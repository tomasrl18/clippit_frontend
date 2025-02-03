<template>
  <div class="notes">
    <h1>Notas</h1>
    <ul>
      <li v-for="note in notes" :key="note.id">{{ note.title }}</li>
    </ul>
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  name: "NotesPage",
  data() {
    return {
      notes: [],
    };
  },
  created() {
    this.getNotes();
  },
  methods: {
    async getNotes() {
      try {
        const response = await apiClient.get("notes/");
        this.notes = response.data;
      } catch (error) {
        console.error("An error ocurred loading notes:", error);
      }
    },
  },
};
</script>

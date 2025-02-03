<!-- src/views/Register.vue -->

<template>
  <div class="register">
    <h2>Registro</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">Usuario:</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <button type="submit">Registrar</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async handleRegister() {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await apiClient.post("api/register/", this.user);
        alert("Registro exitoso. Inicia sesión ahora.");
        this.$router.push("/login"); // Redirige al formulario de inicio de sesión
      } catch (error) {
        this.error = "Error al registrar. Inténtalo de nuevo.";
        console.error("Error al registrar:", error);
      }
    },
  },
};
</script>

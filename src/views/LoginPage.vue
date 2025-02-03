<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Usuario:</label>
        <input
          type="text"
          id="username"
          v-model="credentials.username"
          required
        />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="credentials.password"
          required
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  name: "LoginPage",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await apiClient.post("api/token/", this.credentials);
        const { access, refresh } = response.data;

        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        this.$router.push("/notes");
      } catch (error) {
        this.error = "Credenciales incorrectas. Inténtalo de nuevo.";
        console.error("Error al iniciar sesión:", error);
      }
    },
  },
};
</script>

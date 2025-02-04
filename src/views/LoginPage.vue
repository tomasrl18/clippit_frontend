<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Log In</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="credentials.username"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="credentials.password"
            required
          />
        </div>
        <button type="submit" class="btn-login">Log in</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <router-link to="/register" class="link-register">
        Don't you have an account? Sign up here
      </router-link>
    </div>
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
        this.error = null;
        const response = await apiClient.post("api/token/", this.credentials);
        const { access, refresh } = response.data;

        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        this.$router.push("/notes");
      } catch (error) {
        this.error = "Wrong credentials. Try it again.";
        console.error("Error on log in:", error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.login-box {
  background-color: #ffffff;
  padding: 50px 70px;
  border-radius: 12px;
  box-shadow: 10px 10px 15px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.login-box h2 {
  margin-bottom: 30px;
  font-size: 28px;
  color: #333333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #555555;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  border-color: #42b983;
  outline: none;
}

.btn-login {
  width: 100%;
  padding: 15px;
  background-color: #42b983;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  margin-left: 10px;
}

.btn-login:hover {
  background-color: #38a169;
}

.error {
  margin-top: 10px;
  color: #e53e3e;
  font-size: 14px;
}

.link-register {
  display: block;
  margin-top: 20px;
  font-size: 17px;
  color: #42b983;
  text-decoration: none;
}

.link-register:hover {
  text-decoration: underline;
}
</style>

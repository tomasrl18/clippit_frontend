<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Sign Up</h2>
      <small>(Asterisk means required)</small>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="user.first_name" />
        </div>
        <div class="input-group">
          <label for="username">
            <span class="asterisk">*</span>
            Username:
          </label>
          <input type="text" id="username" v-model="user.username" required />
        </div>
        <div class="input-group">
          <label for="password">
            <span class="asterisk">*</span>
            Password:
          </label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
          />
        </div>
        <button type="submit" class="btn-register">Sign up</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <router-link to="/login" class="link-login">
        Do you have an account? Log in here
      </router-link>
    </div>
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        name: "",
        username: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async handleRegister() {
      try {
        this.error = null;
        // eslint-disable-next-line no-unused-vars
        const response = await apiClient.post("api/register/", this.user);
        alert("Signed up succesfully. Log in now");
        this.$router.push("/login");
      } catch (error) {
        this.error = "Error on sign up. Try it again.";
        console.error("Error on sign up:", error);
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.register-box {
  background-color: #ffffff;
  padding: 50px 70px;
  border-radius: 12px;
  box-shadow: 10px 10px 15px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.register-box h2 {
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

.btn-register {
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

.btn-register:hover {
  background-color: #38a169;
}

.error {
  margin-top: 10px;
  color: #e53e3e;
  font-size: 14px;
}

.link-login {
  display: block;
  margin-top: 20px;
  font-size: 17px;
  color: #42b983;
  text-decoration: none;
}

.link-login:hover {
  text-decoration: underline;
}

.asterisk {
  color: #e53e3e;
}
</style>

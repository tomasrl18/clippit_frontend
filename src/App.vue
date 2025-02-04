<template>
  <div id="app">
    <nav>
      <router-link class="nav-links" to="/">Home</router-link> |
      <router-link class="nav-links" to="/tasks">Tasks</router-link> |
      <router-link class="nav-links" to="/notes">Notes</router-link>
      <button v-if="isLoggedIn" @click="logout" class="logout">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      this.isLoggedIn = !!localStorage.getItem("access_token");
    },
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      this.isLoggedIn = false;
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-links {
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 10px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logout {
  margin-left: 20px;
  padding: 5px 10px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.logout:hover {
  background-color: #38a169;
}
</style>

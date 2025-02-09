<template>
  <div id="app">
    <header class="header">
      <h1>Clippit</h1>
    </header>
    <nav class="navbar">
      <router-link class="nav-link" to="/">Home</router-link> |
      <router-link class="nav-link" to="/tasks">Tasks</router-link> |
      <router-link class="nav-link" to="/notes">Notes</router-link>
      <!-- <button v-if="isLoggedIn" @click="logout" class="btn-logout">
        Logout
      </button> -->
    </nav>
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer class="footer">
      <p>&copy; {{ currentYear }} Clippit. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* isLoggedIn: false, */
      currentYear: new Date().getFullYear(),
    };
  },
  /* created() {
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
  }, */
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 98.8vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 2rem;
}

.header p {
  margin: 5px 0 0;
  font-size: 1rem;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  background-color: #f4f4f9;
  border-bottom: 1px solid #ddd;
}

.nav-link {
  font-size: 1.3rem;
  text-decoration: none;
  color: #2c3e50;
  transition: color 0.3s ease;
  font-weight: bold;
  padding: 10px;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #42b983;
}

/* .btn-logout {
  margin-left: auto;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-logout:hover {
  background-color: #38a169;
} */

.main-content {
  flex: 1;
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.footer {
  background-color: #42b983;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 0.9rem;
}
</style>

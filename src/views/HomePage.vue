<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Clippit</h1>
      <p>Your personal assistant for managing notes and tasks.</p>
      <button @click="scrollToFeatures" class="cta-button">
        Explore Features
      </button>
    </section>

    <section class="features" ref="featuresSection">
      <h2>Why Choose Clippit?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <i class="icon">📝</i>
          <h3>Organize Notes</h3>
          <p>Create and manage your notes with ease.</p>
        </div>
        <div class="feature-card">
          <i class="icon">📅</i>
          <h3>Track Tasks</h3>
          <p>Stay on top of your to-do list with task management.</p>
        </div>
        <div class="feature-card">
          <i class="icon">🔒</i>
          <h3>Secure & Private</h3>
          <p>Your data is safe with us. We prioritize your privacy.</p>
        </div>
      </div>
    </section>

    <section class="fun-fact">
      <h2>Did You Know?</h2>
      <p>
        People who use task managers are
        <strong>28% more productive</strong> than those who don't.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    scrollToFeatures() {
      this.$refs.featuresSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

.hero {
  background: linear-gradient(135deg, #42b983, #38a169);
  color: white;
  padding: 100px 20px;
  border-radius: 10px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.cta-button {
  background-color: white;
  color: #42b983;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #f0f0f0;
}

.features {
  margin-bottom: 40px;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-card {
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-card .icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #42b983;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 1rem;
  color: #555555;
}

.fun-fact {
  background-color: #42b983;
  color: white;
  padding: 40px 20px;
  border-radius: 10px;
}

.fun-fact h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.fun-fact p {
  font-size: 1.2rem;
}
</style>

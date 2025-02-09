<template>
  <div class="tasks-page">
    <h1>Tasks</h1>

    <div class="task-sections-container">
      <div class="task-section">
        <h2>
          Today Tasks <small>({{ todayDate }})</small>
        </h2>
        <div v-if="pendingTodayTasks.length > 0" class="task-group">
          <h3>Pendientes</h3>
          <div class="task-cards">
            <div
              v-for="task in pendingTodayTasks"
              :key="task.id"
              class="task-card"
            >
              <p>{{ task.title }}</p>
            </div>
          </div>
        </div>
        <div v-if="completedTodayTasks.length > 0" class="task-group">
          <h3>Completadas</h3>
          <div class="task-cards">
            <div
              v-for="task in completedTodayTasks"
              :key="task.id"
              class="task-card completed"
            >
              <p>{{ task.title }}</p>
            </div>
          </div>
        </div>
        <p v-if="todayTasks.length === 0" class="no-tasks">
          No hay tareas hoy.
        </p>
      </div>

      <div class="task-section">
        <h2>
          Week Tasks
          <small>({{ weekRange.start }} - {{ weekRange.end }})</small>
        </h2>
        <div v-if="pendingWeekTasks.length > 0" class="task-group">
          <h3>Pendientes</h3>
          <div class="task-cards">
            <div
              v-for="task in pendingWeekTasks"
              :key="task.id"
              class="task-card"
            >
              <p>{{ task.title }}</p>
            </div>
          </div>
        </div>
        <div v-if="completedWeekTasks.length > 0" class="task-group">
          <h3>Completadas</h3>
          <div class="task-cards">
            <div
              v-for="task in completedWeekTasks"
              :key="task.id"
              class="task-card completed"
            >
              <p>{{ task.title }}</p>
            </div>
          </div>
        </div>
        <p v-if="weekTasks.length === 0" class="no-tasks">
          No hay tareas esta semana.
        </p>
      </div>

      <div class="task-section">
        <h2>
          Month Tasks <small>({{ monthYear }})</small>
        </h2>
        <div v-if="pendingMonthTasks.length > 0" class="task-group">
          <h3>Pendientes</h3>
          <div class="task-cards">
            <div
              v-for="task in pendingMonthTasks"
              :key="task.id"
              class="task-card"
            >
              <p>{{ task.title }}</p>
            </div>
          </div>
        </div>
        <div v-if="completedMonthTasks.length > 0" class="task-group">
          <h3>Completadas</h3>
          <div class="task-cards">
            <div
              v-for="task in completedMonthTasks"
              :key="task.id"
              class="task-card completed"
            >
              <p>{{ task.title }}</p>
            </div>
          </div>
        </div>
        <p v-if="monthTasks.length === 0" class="no-tasks">
          No hay tareas este mes.
        </p>
      </div>
    </div>
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
  computed: {
    todayDate() {
      const daysOfWeek = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      const today = new Date();
      const dayName = daysOfWeek[today.getDay()];
      const dayNumber = today.getDate();
      return `${dayName} ${dayNumber}`;
    },
    weekRange() {
      const daysOfWeek = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      const today = new Date();
      const currentDay = today.getDay();

      const startOfWeek = new Date(today);
      startOfWeek.setDate(
        today.getDate() - (currentDay === 0 ? 6 : currentDay - 1)
      );

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      const formatDay = (date) => {
        const dayName = daysOfWeek[date.getDay()];
        const dayNumber = date.getDate();
        return `${dayName} ${dayNumber}`;
      };

      return {
        start: formatDay(startOfWeek),
        end: formatDay(endOfWeek),
      };
    },
    monthYear() {
      const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      const today = new Date();
      return `${months[today.getMonth()]} ${today.getFullYear()}`;
    },
    todayTasks() {
      return this.tasks.filter(
        (task) => task.frequency.toString().toLowerCase() === "daily"
      );
    },
    pendingTodayTasks() {
      return this.todayTasks.filter((task) => !task.completed);
    },
    completedTodayTasks() {
      return this.todayTasks.filter((task) => task.completed);
    },
    weekTasks() {
      return this.tasks.filter(
        (task) => task.frequency === "weekly".toString().toLowerCase()
      );
    },
    pendingWeekTasks() {
      return this.weekTasks.filter((task) => !task.completed);
    },
    completedWeekTasks() {
      return this.weekTasks.filter((task) => task.completed);
    },
    monthTasks() {
      return this.tasks.filter(
        (task) => task.frequency === "monthly".toString().toLowerCase()
      );
    },
    pendingMonthTasks() {
      return this.monthTasks.filter((task) => !task.completed);
    },
    completedMonthTasks() {
      return this.monthTasks.filter((task) => task.completed);
    },
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

<style scoped>
.tasks-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-sections-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.task-section {
  flex: 1;
  min-width: 400px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-section h2 {
  margin-top: 0;
  color: #333;
  text-align: center;
}

.task-group {
  margin-bottom: 10px;
}

.task-group h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #555;
}

.task-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.task-card {
  background-color: #ffeb3b;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  width: calc(33.33% - 10px);
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-card.completed {
  background-color: #c8e6c9;
}

.task-card p {
  margin: 0;
  font-weight: bold;
}

.no-tasks {
  text-align: center;
  color: #777;
  margin-top: 10px;
}
</style>

import { createRouter, createWebHashHistory } from "vue-router";

/* function requireAuth(to, from, next) {
  const token = localStorage.getItem("access_token");
  if (token) {
    next();
  } else {
    next("/login");
  }
} */

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/notes",
    name: "notes",
    component: () => import("../views/NotesPage.vue"),
    /* beforeEnter: requireAuth, */
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/TasksPage.vue"),
    /* beforeEnter: requireAuth, */
  },
  /* {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterPage.vue"),
  }, */
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

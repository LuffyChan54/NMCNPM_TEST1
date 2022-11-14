import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

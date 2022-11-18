import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import UserInfo from "./pages/UserInfo.vue";

const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
  {
    path: "/info",
    name: "user-info-route",
    component: UserInfo,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

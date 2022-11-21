import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import UserInfo from "./pages/UserInfo.vue";
import UserHistory from "./pages/UserHistory.vue";
import CashierHome from "./pages/CashierHome.vue";
import CashierTurnover from "./pages/CashierTurnover.vue";
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
  {
    path: "/Userhistory",
    name: "user-history-route",
    component: UserHistory,
  },
  {
    path: "/CashierHome",
    name: "cashier-home-route",
    component: CashierHome,
  },
  {
    path: "/CashierTurnover",
    name: "cashier-turnover-route",
    component: CashierTurnover,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

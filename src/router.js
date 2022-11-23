import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import UserInfo from "./pages/UserInfo.vue";
import UserHistory from "./pages/UserHistory.vue";
import CashierHome from "./pages/CashierHome.vue";
import CashierTurnover from "./pages/CashierTurnover.vue";
import CashierHistory from "./pages/CashierHistory.vue";
import CashierSchedule from "./pages/CashierSchedule.vue";
import CashierExport from "./pages/CashierExport.vue";
import CashierDelivery from "./pages/CashierDelivery.vue";
import AssistantPage from "./pages/AssistantPage.vue";
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
  {
    path: "/CashierHistory",
    name: "cashier-history-route",
    component: CashierHistory,
  },

  {
    path: "/CashierSchedule",
    name: "cashier-schedule-route",
    component: CashierSchedule,
  },
  {
    path: "/CashierExport",
    name: "cashier-export-route",
    component: CashierExport,
  },
  {
    path: "/CashierDelivery",
    name: "cashier-delivery-route",
    component: CashierDelivery,
  },
  {
    path: "/Assistant",
    name: "cashier-assistant-route",
    component: AssistantPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

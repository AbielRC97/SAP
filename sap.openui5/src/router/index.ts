import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "sap",
    component: () => import("../views/ControlsView.vue"),
  },
  {
    path: "/avatar",
    name: "avatar",
    component: () => import("../views/AvatarView.vue"),
  },
  {
    path: "/brage",
    name: "brage",
    component: () => import("../views/BrageView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

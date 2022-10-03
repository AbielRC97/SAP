import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
const guard = (to: any, from: any, next: any) => {
  next();
};
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "vuexview",
    component: () => import("../views/VuexView.vue"),
    beforeEnter: guard,
    meta: { title: "Vuex" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

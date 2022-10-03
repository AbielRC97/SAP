import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/registrar",
    name: "registrar",
    component: () => import("../views/RegistroView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/contactos",
    name: "contactos",
    component: () => import("../views/VistaContacto.vue"),
  },
  {
    path: "/detalle/:id",
    name: "detalle",
    component: () => import("../views/DetalleView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

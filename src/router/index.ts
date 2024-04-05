import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../pages/Home.vue") },
  {
    path: "/cls",
    name: "Cumulative Layout Shift",
    component: () => import("../pages/CLS.vue"),
  },
  {
    path: "/lcp",
    name: "Largest Contentful Print",
    component: () => import("../pages/LCP.vue"),
  },
  {
    path: "/inp",
    name: "Interaction to Next Paint",
    component: () => import("../pages/INP.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

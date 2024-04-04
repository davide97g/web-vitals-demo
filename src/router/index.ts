import { createRouter, createWebHistory } from "vue-router";

import CLSView from "../pages/CLS.vue";
import LCPView from "../pages/LCP.vue";
import INPView from "../pages/INP.vue";
import HomeView from "../pages/Home.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/cls", name: "Cumulative Layout Shift", component: CLSView },
  { path: "/lcp", name: "Largest Contentful Print", component: LCPView },
  { path: "/inp", name: "Interaction to Next Paint", component: INPView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

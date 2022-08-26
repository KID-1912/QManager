import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          component: () => import("@views/Home/home.vue"),
        },
      ],
    },
  ],
});

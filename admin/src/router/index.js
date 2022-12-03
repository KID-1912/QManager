import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/latest",
      component: Layout,
      children: [
        {
          name: "latest",
          path: "/latest",
          component: () => import("@views/latest/index.vue"),
        },
      ],
    },
  ],
});

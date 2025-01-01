import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/index",
      component: Layout,
      children: [
        {
          name: "index",
          path: "/index",
          component: () => import(/* webpackChunkName: "index" */ "@views/index.vue"),
        },
      ],
    },
  ],
});

import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/src/layout/index.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: Layout,
      children: [
        {
          name: "Home",
          path: "home",
          component: import("@views/Home/home.vue"),
        },
      ],
    },
  ],
});

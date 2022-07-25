import { createApp } from "vue";
import router from "@/src/router/index.js";

import ElementPlus from 'element-plus';

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount("#app");

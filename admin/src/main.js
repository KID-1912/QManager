import { createApp } from "vue";
import router from "@/src/router/index.js";
import './assets/css/common.css'

import ElementPlus from 'element-plus';

import App from "./App.vue";

console.log(process.env.NODE_ENV);

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount("#app");

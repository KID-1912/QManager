import { createApp } from "vue";
import router from "@/router/index.js";
import 'normalize.css/normalize.css';
import './style/index.css';

import ElementPlus from 'element-plus';

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount("#app");

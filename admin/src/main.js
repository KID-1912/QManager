import { createApp } from "vue";
import router from "@/router/index.js";
import "normalize.css/normalize.css";
import "windi.css";
import "./style/index.scss";

import ElementPlus from "element-plus";

import App from "./App.vue";

let a;

createApp(App).use(router).use(ElementPlus).mount("#app");

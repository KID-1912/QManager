import { createApp } from "vue";
import router from "@/router/index.js";

// style
import "normalize.css/normalize.css";
import "windi.css";
import "./style/global.scss";

import App from "./App.vue";

createApp(App).use(router).mount("#app");

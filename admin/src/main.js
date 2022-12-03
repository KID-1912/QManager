import { createApp } from "vue";
import router from "@/router/index.js";

// style
import "normalize.css/normalize.css";
import "windi.css";
import "./style/index.scss";

// element-ui
import "./style/element-ui.scss";

import App from "./App.vue";

createApp(App).use(router).mount("#app");

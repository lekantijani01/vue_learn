import "./assets/main.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";

// ✅ Create app
const app = createApp(App);

// ✅ Use Element Plus
app.use(ElementPlus);

// ✅ Mount it
app.mount("#app");

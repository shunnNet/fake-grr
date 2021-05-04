import { createApp } from "vue";
import App from "./App.vue";
import loadSvg from "@/plugins/loadSvg.js";

createApp(App)
  .use(loadSvg)
  .mount("#app");

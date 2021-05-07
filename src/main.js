import { createApp } from "vue";
import App from "./App.vue";
import loadSvg from "@/plugins/loadSvg.js";
import "@/assets/scss/all.scss"
import "@/assets/scripts/mediaStore.js"

createApp(App)
  .use(loadSvg)
  .mount("#app");

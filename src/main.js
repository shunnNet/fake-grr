import { createApp } from "vue";
import App from "./App.vue";
import loadSvg from "@/plugins/loadSvg.js";
import loadSwiper from "@/plugins/swiper.js";
import commonFeature from "@/plugins/common.js";

import "@/assets/scss/all.scss";
import "@/assets/scripts/mediaStore.js";

createApp(App)
  .use(loadSvg)
  .use(loadSwiper)
  .use(commonFeature)
  .mount("#app");

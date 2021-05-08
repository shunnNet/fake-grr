import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  EffectFade,
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
  Controller,
} from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination, Thumbs, Autoplay, Controller]);

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";

import "swiper/components/controller/controller.scss";
import "swiper/components/effect-fade/effect-fade.scss";
// https://github.com/nolimits4web/swiper/issues/3408

import "swiper/components/thumbs/thumbs.scss";

export default {
  install: (app) => {
    app.component("Swiper", Swiper);
    app.component("SwiperSlide", SwiperSlide);
  },
};

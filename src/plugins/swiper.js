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



export default {
  install: (app) => {
    app.component("Swiper", Swiper);
    app.component("SwiperSlide", SwiperSlide);
  },
};

<template lang='pug'>
section.index__appreciate
  Swiper.index__appreciateCarouselOp(
    @beforeInit="setSwiperOne",
    @slideChange="beforeSlideChangeStartOne",
    effect="fade",
    :loop="true",
    :autoplay="{ disableOnInteraction: false }"
  )
    SwiperSlide(v-for="item in quotesList", :key="item.quote")
      blockquote.quotes
        p.quotes__main {{ item.quote }}
        cite.quotes__cite {{ item.sub }}

  Swiper.index__appreciateCarousel(
    v-if="useSwiper",
    @beforeInit="setSwiperTwo",
    @slideChange="beforeSlideChangeStartTwo",
    :slidesPerView="5",
    :loop="true",
    :centeredSlides="true"
  )
    SwiperSlide.quotes__slide(
      v-for="(item, index) in quotesList",
      :key="item.quote",
      v-slot="{ isActive }"
    )
      SwitchBg.quotes__logo(
        :active="isActive",
        :source="item.iconOff",
        :active-source="item.iconOn",
        @click="swiperOne.slideToLoop(index)"
      )
  .index__appreciateTab(v-else)
    .quotes__slide(v-for="(item, index) in quotesList", :key="item.quote")
      SwitchBg.quotes__logo(
        :active="index === nowIndex",
        :source="item.iconOff",
        :active-source="item.iconOn",
        @click="swiperOne.slideToLoop(index)"
      )
</template>

<script>
import { ref, onUnmounted } from "vue";
import SwitchBg from "@/components/SwitchBg.vue";
import { watchMedia } from "@/assets/scripts/mediaStore.js";
export default {
  components: {
    SwitchBg,
  },
  setup() {
    const useSwiper = ref(true);

    const unwatchMedia = watchMedia("992", (match) => {
      useSwiper.value = !match;
    });

    onUnmounted(() => {
      unwatchMedia();
    });
    const nowIndex = ref(0);

    const swiperOne = ref(null);
    const swiperTwo = ref(null);
    const setSwiperOne = (swiper) => {
      swiperOne.value = swiper;
    };
    const setSwiperTwo = (swiper) => {
      swiperTwo.value = swiper;
    };

    const beforeSlideChangeStartOne = (swiper) => {
      if (useSwiper.value && swiperTwo.value) {
        swiperTwo.value.slideToLoop(swiper.realIndex);
      }
      nowIndex.value = swiper.realIndex;
    };
    const beforeSlideChangeStartTwo = (swiper) => {
      if (useSwiper.value && swiperOne.value) {
        swiperOne.value.slideToLoop(swiper.realIndex);
      }
    };

    const quotesList = ref([
      {
        quote: "You have to see it to really appreciate how cool it is,",
        sub: "Al Gore, Wired, December 2017",
        iconOff: require("@/assets/images/quotes_logo_wired_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_wired_on.jpg"),
        isIconOn: false,
      },
      {
        quote: "The 9 Coolest Gadgets from CES 2016",
        sub: "Time",
        iconOff: require("@/assets/images/quotes_logo_time_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_time_on.jpg"),
        isIconOn: false,
      },
      {
        quote: "2018 Asian Company of the Year",
        sub: "Cleantech 100",
        iconOff: require("@/assets/images/quotes_logo_cleantech_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_cleantech_on.jpg"),
        isIconOn: false,
      },
      {
        quote: "2015 CES Best In Show Award",
        sub: "The Verge",
        iconOff: require("@/assets/images/quotes_logo_verge_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_verge_on.jpg"),
        isIconOn: false,
      },

      {
        quote: "2017 Nikkei Asian Review Award for Excellence",
        sub: "Nikkei Asian Review",
        iconOff: require("@/assets/images/quotes_logo_nikkei_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_nikkei_on.jpg"),
        isIconOn: false,
      },
      {
        quote: "Selected for the 2016 Sustainia 1000",
        sub: "Sustainia",
        iconOff: require("@/assets/images/quotes_logo_sustania_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_sustania_on.jpg"),
        isIconOn: false,
      },
    ]);

    return {
      beforeSlideChangeStartOne,
      beforeSlideChangeStartTwo,
      quotesList,
      swiperOne,
      swiperTwo,
      setSwiperOne,
      setSwiperTwo,
      useSwiper,
      nowIndex,
    };
  },
};
</script>

<style lang='scss'>
.quotes {
  user-select: none;
  width: 100%;
  height: 100%;
  padding: 6rem 1rem 3rem 1rem;
  text-align: center;
  background-color: #fff;
  @include md {
    padding: 8rem 1rem 5rem 1rem;
  }
  &__main {
    color: #323237;
    font-size: 24px;
    font-weight: lighter;
    &::before {
      content: "\201C";
    }
    &::after {
      content: "\201D";
    }
    @include sm {
      font-size: 32px;
    }
    @include md {
      font-size: 36px;
    }
  }
  &__cite {
    color: #b9bcbf;
    font-size: 18px;
    &::before {
      content: "- ";
    }
  }
  &__logo {
    width: 150px;
    height: 80px;
  }
}
.quotes__slide {
  display: flex;
  justify-content: center;
}
.switchBg--active {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    border-width: 10px 10px;
    border-color: #fff transparent transparent transparent;
    border-style: solid;
  }
}
.index__appreciateTab {
  height: 80px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-around;
}
.index__appreciateCarousel {
  height: 80px;
  background-color: #e6e6e6;
}

</style>
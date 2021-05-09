<template lang='pug'>
Swiper(
  @beforeInit="setSwiperOne",
  @destroy="handleDestroyOne",
  @slideChange="beforeSlideChangeStartOne",
  effect="fade",
  :loop="true",
  :autoplay="{ disableOnInteraction: false }"
)
  SwiperSlide(v-for="item in quotes", :key="item.quote")
    blockquote.quotes
      p.quotes__main {{ item.quote }}
      cite.quotes__cite {{ item.sub }}

Swiper.quotesTabs.quotesTab--slide(
  v-if="useSwiper",
  @beforeInit="setSwiperTwo",
  @destroy="handleDestroyTwo",
  @slideChange="beforeSlideChangeStartTwo",
  :slidesPerView="5",
  :loop="true",
  :centeredSlides="true"
)
  SwiperSlide.quotesTabs__tab(
    v-for="(item, index) in quotes",
    :key="item.quote"
  )
    SwitchBg.quotesTabs__logo(
      :active="index === nowIndex",
      :source="item.iconOff",
      :active-source="item.iconOn",
      @click="swiperOne.slideToLoop(index)"
    )
.quotesTabs(v-else)
  .quotesTabs__tab(v-for="(item, index) in quotes", :key="item.quote")
    SwitchBg.quotesTabs__logo(
      :active="index === nowIndex",
      :source="item.iconOff",
      :active-source="item.iconOn",
      @click="swiperOne.slideToLoop(index)"
    )
</template>

<script>
import { ref } from "vue";
import { useLinkedSwiper } from "@/composable/useLinkedSwiper.js";
import { useWatchMedia } from "@/composable/useWatchMedia.js";
import SwitchBg from "@/components/libs/SwitchBg.vue";
export default {
  props: {
    quotes: {
      type: Array,
      required: true,
    },
  },
  components: {
    SwitchBg,
  },
  setup() {
    const useSwiper = ref(true);
    useWatchMedia([
      {
        name: "992",
        cb: (match) => {
          useSwiper.value = !match;
        },
      },
    ]);

    const nowIndex = ref(0);
    const {
      swiperOne,
      swiperTwo,
      setSwiperOne,
      setSwiperTwo,
      beforeSlideChangeStartOne,
      beforeSlideChangeStartTwo,
      handleDestroyTwo,
      handleDestroyOne,
    } = useLinkedSwiper(nowIndex);

    return {
      swiperOne,
      swiperTwo,
      setSwiperOne,
      setSwiperTwo,
      beforeSlideChangeStartOne,
      beforeSlideChangeStartTwo,
      useSwiper,
      nowIndex,
      handleDestroyOne,
      handleDestroyTwo,
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
}
.quotesTabs {
  height: 80px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-around;
  &--slide {
    display: block;
  }
  &__tab {
    display: flex;
    justify-content: center;
    min-width: 0;
  }
  &__logo {
    width: 150px;
    height: 80px;
    &.switchBg--active::after {
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
}
</style>
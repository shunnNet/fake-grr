import { ref } from "vue";

export function useLinkedSwiper(nowIndexRef) {
  const swiperOne = ref(null);
  const swiperTwo = ref(null);

  const setSwiperOne = (swiper) => {
    swiperOne.value = swiper;
  };
  const setSwiperTwo = (swiper) => {
    swiperTwo.value = swiper;
  };
  const handleDestroyOne = (swiper) => {
    swiperOne.value = null
  }
  const handleDestroyTwo = (swiper) => {
    swiperTwo.value = null
  }

  const beforeSlideChangeStartOne = (swiper) => {
    if (swiperTwo.value) {
      swiperTwo.value.slideToLoop(swiper.realIndex);
    }
    nowIndexRef.value = swiper.realIndex;
  };
  const beforeSlideChangeStartTwo = (swiper) => {
    if (swiperOne.value) {
      swiperOne.value.slideToLoop(swiper.realIndex);
    }
    nowIndexRef.value = swiper.realIndex;
  };
  return {
    swiperOne,
    swiperTwo,
    setSwiperOne,
    setSwiperTwo,
    beforeSlideChangeStartOne,
    beforeSlideChangeStartTwo,
    handleDestroyTwo,
    handleDestroyOne
  };
}

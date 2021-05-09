<template lang='pug'>
.community(@mouseenter="stopAutoPlay", @mouseleave="startAutoPlay(5000)")
  .community__slide
    .box
      h3.community__title Our community’s impact
      Transition(name="community", mode="out-in")
        section.community__box(:key="activeCommunity.name")
          .community__image
            img(:src="activeCommunity.img")
          .community__content
            .community__number {{ activeCommunity.number }}
              span.community__numberUnit {{ activeCommunity.unit }}
            .community__numberDesc {{ activeCommunity.numberDesc }}
            .community__desc {{ activeCommunity.desc }}

    .community__pagination
      .community__bullet(
        v-for="(community, index) in communities",
        :class="{ 'community__bullet--active': activeSlide === index }",
        @click="switchSlide(index)"
      )
</template>

<script>
import { computed } from "vue";
import { useCommunityImpactInfo } from "@/composable/useCommunityImpactInfo.js";
import { useCounter } from "@/composable/useCounter.js";
export default {
  setup() {
    const { communities } = useCommunityImpactInfo();
    const {
      counter,
      modifyCounter: switchSlide,
      startAutoCounter: startAutoPlay,
      stopAutoCounter: stopAutoPlay,
    } = useCounter();

    const activeSlide = computed(
      () => counter.value % communities.value.length
    );

    const activeCommunity = computed(
      () => communities.value[activeSlide.value]
    );
    startAutoPlay(5000);

    return {
      activeSlide,
      startAutoPlay,
      stopAutoPlay,
      switchSlide,
      activeCommunity,
      communities,
    };
  },
};
</script>

<style lang='scss'>
.community {
  user-select: none;
  background-color: #fff;

  &__title {
    padding-top: 1.5em;
    margin-bottom: 1em;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.01em;
    text-align: center;
    line-height: 1.21;
    @include md {
      font-size: 32px;
    }
    @include lg {
      font-size: 42px;
    }
  }

  &__number {
    position: relative;
    line-height: 1;
    font-weight: lighter;
    font-size: 40px;
    @include sm {
      font-size: 54px;
    }
    @include lg {
      font-size: 72px;
      letter-spacing: -2px;
    }
  }
  &__numberUnit {
    position: absolute;
    display: inline-block;
    margin-left: 3px;
    top: 4px;
    font-size: 20px;

    @include sm {
      top: 6px;
      font-size: 24px;
    }
    @include xl {
      margin-left: 5px;
      top: 11px;
    }
  }
  &__numberDesc {
    margin: 0.5em 0;
    font-weight: bold;
    font-size: 20px;
  }
  &__desc {
    font-size: 16px;
    @include md {
      font-size: 20px;
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    height: 300px;

    @include md {
      flex-direction: row;
      text-align: left;
      width: 2 / 3 * 100%;
    }
  }
  &__image {
    width: 103px;
    height: 138px;
    margin: 0 auto 20px auto;
    transform: scale(0.5);
    transform-origin: center;
    flex: 0 0 103px;
    img {
      max-width: 100%;
    }

    @include md {
      width: 206px;
      height: 278px;
      margin: 0 70px 0 0;
      flex: 0 0 206px;
      transform: scale(1);
      transform-origin: center;
    }
  }
}
.community {
  &-enter-from,
  &-leave-to {
    opacity: 0;
    .community__content {
      transform: translateY(75px);
    }
  }
  &-enter-to,
  &-leave-from {
    opacity: 1;
    .community__content {
      transform: translateY(0);
    }
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 0.8s;
    .community__content {
      transition: transform 0.8s;
    }
  }
}
.community {
  &__pagination {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
  }
  &__bullet {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      border: 2px solid #f1f3f3;
      border-radius: 6px;
      background-color: #f1f3f3;
      transition: all 0.8s;
    }
  }
  &__bullet--active {
    &::before {
      border: 2px solid #00d7ff;
      background-color: #fff;
    }
  }
}
</style>
<template lang='pug'>
.community(@mouseenter="stopAutoPlay", @mouseleave="startAutoPlay")
  .community__slide
    .box
      h3.community__title Our community’s impact
      Transition(name="community", mode="out-in")
        .community__box(v-if="active === 0")
          .community__image
            img(src="@/assets/images/green/Green_co2.svg")
          .community__content
            .community__number 
              | {{ toFormatString(CO2) }}
              span.community__numberUnit KG
            .community__numberDesc CO2 saved
            .community__desc As many as the amount of CO2 that {{ toFormatString(treeCost) }} trees consume every year.

        .community__box(v-else-if="active === 1")
          .community__image
            img(src="@/assets/images/green/Green_battery.svg")

          .community__content
            .community__number {{ toFormatString(battery) }}
            .community__numberDesc Battery's swapped
            .community__desc There are more than 279,965 batteries swapped per day in the last 30 days.

        .community__box(v-else-if="active === 2")
          .community__image
            img(src="@/assets/images/green/Green_earth.svg")
          .community__content
            .community__number 
              | {{ toFormatString(distance) }}
              span.community__numberUnit KM

            .community__numberDesc Total distance covered
            .community__desc As long as the distance traveling around the Earth via equator {{ toFormatString(distancePerEarth) }} times.
    .community__pagination
      .community__bullet(
        :class="{ 'community__bullet--active': active === 0 }",
        @click="switchActive(0)"
      )
      .community__bullet(
        :class="{ 'community__bullet--active': active === 1 }",
        @click="switchActive(1)"
      )
      .community__bullet(
        :class="{ 'community__bullet--active': active === 2 }",
        @click="switchActive(2)"
      )
</template>

<script>
import { computed, ref, Transition } from "vue";
export default {
  setup() {
    const CO2 = ref(276156838);
    const treeCost = computed(() => Math.floor(CO2.value / 10));
    const battery = ref(182570168);
    const distance = ref(3348609768);
    const distancePerEarth = computed(() => Math.floor(distance.value / 40000));

    const toFormatString = (number) => number.toLocaleString("en-US");

    let addCO2Interval = setInterval(() => {
      CO2.value += 10;
      battery.value += 6;
      distance.value += 120;
    }, 800);

    const active = ref(0);
    let transitionInterval = -1;

    const startAutoPlay = () => {
      if (transitionInterval == -1) {
        transitionInterval = setInterval(() => {
          active.value += 1;
          active.value = active.value > 2 ? 0 : active.value;
        }, 5000);
      }
    };
    startAutoPlay();

    const stopAutoPlay = () => {
      clearInterval(transitionInterval);
      transitionInterval = -1;
    };

    const switchActive = (target) => {
      active.value = target;
    };

    return {
      CO2,
      treeCost,
      battery,
      distance,
      distancePerEarth,
      toFormatString,
      active,
      transitionInterval,
      startAutoPlay,
      Transition,
      switchActive,
      stopAutoPlay,
    };
  },
};
</script>

<style lang='scss'>
.community {
  background-color: #fff;
  user-select: none;
  &__slide {
    // background-color: #fff;
  }

  &__title {
    letter-spacing: -0.01em;
    font-size: 28px;
    text-align: center;
    padding-top: 1.5em;
    margin-bottom: 1em;
    font-weight: 500;
    line-height: 1.21;
    @include md {
      font-size: 32px;
    }
    @include lg {
      font-size: 42px;
    }
  }

  &__number {
    line-height: 1;
    font-weight: lighter;
    position: relative;
    font-size: 40px;
    @include sm {
      font-size: 54px;
    }
    @include lg {
      letter-spacing: -2px;
      font-size: 72px;
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
    font-weight: bold;
    font-size: 20px;

    margin: 0.5em 0;
  }
  &__desc {
    font-size: 16px;
    @include md {
      font-size: 20px;
    }
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    text-align: center;
    height: 300px;

    @include md {
      text-align: left;
      flex-direction: row;
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
      transform: scale(1);
      transform-origin: center;
      margin: 0 70px 0 0;
      flex: 0 0 206px;
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
    padding-top: 20px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
  }
  &__bullet {
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      border: 2px solid #f1f3f3;
      background-color: #f1f3f3;
      transition: all 0.8s;
      // transition-delay: .8s;
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
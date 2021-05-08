<template lang="pug">
nav.main-nav(
  :style="{ backgroundColor: bgColor }",
  @mouseenter="handleHover(true)",
  @mouseleave="handleHover(false)"
)
  .main-nav__box.box-lg
    .main-nav__container
      TogglerMenu.main-nav__toggle(@click="toggleMenu()", :active="menuActive")

      h1.main-nav__logo gogoro
      a.main-nav__account(href="https://my.gogoro.com/?lang=en-US")
        Account
    ul.main-nav__list(:class="{ 'main-nav__list--active': menuActive }")
      li.main-nav__list-item 
        a.main-nav__link(href="https://www.gogoro.com/smartscooter/") Smartscooter®
      li.main-nav__list-item
        a.main-nav__link(href="https://www.gogoro.com/gogoro-network/") Gogoro Network®
      li.main-nav__list-item
        a.main-nav__link(href="https://www.gogoro.com/news/") News
</template>

<script>
import { computed, ref, watch } from "vue";
import TogglerMenu from "@/components/TogglerMenu.vue";
import { watchMedia, unwatchMedia } from "@/assets/scripts/mediaStore.js";

export default {
  components: { TogglerMenu },
  setup() {
    const maxOpacityScrollColor = 300;

    let opacity = ref(1);

    const hoverControl = ref(false);
    const handleHover = (toState) => {
      if (!mediaControl.value) {
        if (toState === true) {
          hoverControl.value = true;
        } else {
          hoverControl.value = false;
          modifyOpacityByScroll();
        }
      }
    };
    const mediaControl = ref(false);
    watchMedia("992", (match) => {
      if (match) {
        mediaControl.value = false;
        modifyOpacityByScroll && modifyOpacityByScroll();
      } else {
        mediaControl.value = true;
      }
    });

    const modifyOpacityByScroll = () => {
      if (!mediaControl.value && !hoverControl.value) {
        opacity.value = window.scrollY / maxOpacityScrollColor;
      }
    };
    window.onscroll = modifyOpacityByScroll;
    modifyOpacityByScroll();

    let bgColor = computed(
      () =>
        `rgba(18,18,21, ${
          mediaControl.value || hoverControl.value ? 1 : opacity.value
        })`
    );

    const menuActive = ref(false);
    const toggleMenu = () => {
      menuActive.value = !menuActive.value;
    };
    window.onresize = function () {
      menuActive.value = false;
    };

    return {
      opacity,
      bgColor,
      modifyOpacityByScroll,
      menuActive,
      toggleMenu,
      handleHover,
    };
  },
};
</script>

<style lang="scss">
.main-nav {
  height: 50px;
  transition: background-color 0.3s;

  &__box {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  &__box.box-lg {
    padding: 0;
    @include lg {
      padding: 0 $box-space;
    }
  }
  &__container {
    width: 100%;
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(18, 18, 21);
    z-index: 2;
    @include lg {
      background-color: transparent;
    }
  }
  &__logo {
    @include hide-text();
    background-image: url("~@/assets/images/icon/Logo.svg");
    background-repeat: no-repeat;
    background-size: 78px 22px;
    background-position: 0 calc(50% + 1px);
    height: 100%;
    width: 100px;

    @include lg {
      margin-right: 16px;
      width: 105px;
      background-size: auto 27px;
    }
    @include xl {
      margin-right: 24px;
    }
  }
  &__account {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
  }
  &__toggle {
    display: block;
  }
  &__list {
    position: absolute;
    display: flex;
    
    width: 100%;
    bottom: 0;
    left: 0;

    background-color: #202023;

    z-index: 1;
    height: calc(100vh - 50px);
    overflow: hidden;
    opacity: 1;
    transform: translate3d(0, 0%, 0);
    transition: transform 0.5s;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &--active {
      transform: translate3d(0, 100%, 0);
    }

    @include sm {
      flex-direction: row;
      justify-content: center;
      background-color: rgb(18, 18, 21);
      height: 60px;
      opacity: 0;
      transform: translate3d(0, 0%, 0);
      transition: opacity 0.5s, transform 0.5s;

      &--active {
        transform: translate3d(0, 100%, 0);
        opacity: 1;
      }
    }
  }
  &__list-item {
    width: 100%;
    @include sm {
      width: auto;
    }
  }
  &__link {
    @extend %reset-a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;
    font-size: 18px;
    color: $nav-link-color;
    transition: color 0.2s;
    cursor: pointer;
    text-align: center;

    &:hover {
      color: $nav-link-hover-color;
    }
    @include sm {
      font-size: 13px;
      line-height: 54px;
      padding: 0 10px;
      height: 54px;
    }
    @include md {
      font-size: 14px;
      line-height: 60px;
      padding: 0 14px;
      height: 60px;
    }
    @include lg {
      font-size: 14px;
      padding: 0 12px;
    }
    @include xl {
      font-size: 16px;
      padding: 0 16px;
    }
  }

  @include lg {
    height: 60px;
    &__box {
      justify-content: flex-start;
    }
    &__box.box-lg {
      padding: 0 $box-space;
    }
    &__container {
      width: auto;
    }
    &__account {
      display: none;
    }
    &__toggle {
      display: none;
    }
    &__list {
      position: static;
      display: flex;
      opacity: 1;
      transform: unset;
      background-color: transparent;
      width: auto;
      transition: none;
    }
  }
}
</style>
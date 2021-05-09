<template lang="pug">
nav.mainNav(
  :style="{ backgroundColor: bgColor }",
  @mouseenter="handleHover(true)",
  @mouseleave="handleHover(false)"
)
  .mainNav__box.box-lg
    .mainNav__iconWrapper
      TogglerMenu.mainNav__toggle(@click="toggleMenu()", :active="menuActive")

      h1.mainNav__logo gogoro
      a.mainNav__account(href="https://my.gogoro.com/?lang=en-US")
        Account
    .mainNav__drop(:class="{ 'mainNav__drop--active': menuActive }")
      ul.mainNav__list
        li.mainNav__listItem 
          a.mainNav__link(href="https://www.gogoro.com/smartscooter/") Smartscooter®
        li.mainNav__listItem
          a.mainNav__link(href="https://www.gogoro.com/gogoro-network/") Gogoro Network®
        li.mainNav__listItem
          a.mainNav__link(href="https://www.gogoro.com/news/") News
</template>

<script>
import { computed, ref, onUnmounted } from "vue";
import TogglerMenu from "@/components/libs/TogglerMenu.vue";
import { watchMedia } from "@/assets/scripts/mediaStore.js";

export default {
  components: { TogglerMenu },
  setup() {
    const maxOpacityScrollColor = 300;

    const opacity = ref(1);

    const hoverControl = ref(false);
    const handleHover = (toState) => {
      if (mediaControl.value === true) {
        return;
      }
      if (toState === true) {
        hoverControl.value = true;
      } else {
        hoverControl.value = false;
        modifyOpacityByScroll();
      }
    };

    const mediaControl = ref(false);
    const unwatchMedia = watchMedia("992", (match) => {
      if (match) {
        mediaControl.value = false;
        modifyOpacityByScroll && modifyOpacityByScroll();
      } else {
        mediaControl.value = true;
      }
    });
    onUnmounted(() => {
      unwatchMedia();
    });

    const modifyOpacityByScroll = () => {
      if (!mediaControl.value && !hoverControl.value) {
        opacity.value = window.scrollY / maxOpacityScrollColor;
      }
    };
    window.onscroll = modifyOpacityByScroll;
    modifyOpacityByScroll();

    const bgColor = computed(
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
.mainNav {
  height: 50px;
  transition: background-color 0.3s;
  @include lg {
    height: 60px;
  }
  &__box {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @include lg {
      justify-content: flex-start;
    }
  }
  &__box.box-lg {
    padding: 0;
    @include lg {
      padding: 0 $box-space;
    }
  }
  &__iconWrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(18, 18, 21);
    z-index: 2;
    @include lg {
      width: auto;
      background-color: transparent;
    }
  }
  &__logo {
    @include hide-text();
    height: 100%;
    width: 100px;
    background-image: url("~@/assets/images/icon/Logo.svg");
    background-repeat: no-repeat;
    background-size: 78px 22px;
    background-position: 0 calc(50% + 1px);

    @include lg {
      width: 105px;
      margin-right: 16px;
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
    @include lg {
      display: none;
    }
  }
  &__toggle {
    display: block;
    @include lg {
      display: none;
    }
  }
  &__drop {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    overflow: hidden;
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, 0%, 0);
    transition: transform 0.5s;
    background-color: #202023;
    &--active {
      transform: translate3d(0, 100%, 0);
    }
    @include sm {
      height: auto;
      opacity: 0;
      background-color: rgb(18, 18, 21);
      transform: translate3d(0, 0%, 0);
      transition: opacity 0.5s, transform 0.5s;

      &--active {
        transform: translate3d(0, 100%, 0);
        opacity: 1;
      }
    }
    @include lg {
      position: static;
      opacity: 1;
      transform: unset;
      background-color: transparent;
      width: auto;
      transition: none;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @include sm {
      flex-direction: row;
      justify-content: center;
    }
  }
  &__listItem {
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
    height: 100%;
    padding: 20px;
    font-size: 18px;
    text-align: center;
    color: $nav-link-color;
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: $nav-link-hover-color;
    }
    @include sm {
      height: 54px;
      padding: 0 10px;
      font-size: 13px;
      line-height: 54px;
    }
    @include md {
      height: 60px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 60px;
    }
    @include lg {
      padding: 0 12px;
      font-size: 14px;
    }
    @include xl {
      padding: 0 16px;
      font-size: 16px;
    }
  }
}
</style>
<template lang='pug'>
nav.sub-nav
  .sub-nav__box
    .sub-nav__left-top
      LogoBox.sub-nav__logo
      .sub-nav__socials
        IconText.sub-nav__social(
          v-for="item in socialList",
          :key="item.text",
          :href="item.link",
          tag="a",
          :icon="item.icon"
        ) {{ item.text }}

    .sub-nav__right-bottom
      ul.sub-nav__list
        li.sub-nav__list-item(
          v-for="group in navList",
          :key="group.title",
          @click="toggleGroup(group)"
        )
          .sub-nav__list-unit {{ group.title }}
            TogglerPlus(:active="group.show", v-if="!toggleLock")
          TransitionSlide(:min="0")
            .sub-nav__link-group(v-if="group.show", @click.stop="")
              a.sub-nav__list-link(
                v-for="item in group.items",
                :key="item.text",
                :href="item.link"
              ) {{ item.text }}
</template>

<script>
import LogoBox from "@/components/LogoBox.vue";
import IconText from "@/components/IconText.vue";
import TransitionSlide from "@/components/TransitionSlide.vue";
import TogglerPlus from "@/components/TogglerPlus.vue";
import { watchMedia } from "@/assets/scripts/mediaStore.js";
import { ref } from "vue";
export default {
  components: { LogoBox, IconText, TransitionSlide, TogglerPlus },
  setup() {
    const toggleLock = ref(true);

    const navList = ref([
      {
        show: false,
        title: "Smartscooter",
        items: [
          {
            link: "https://www.gogoro.com/smartscooter/s-performance/",
            text: "S Performance",
          },
          {
            link: "https://www.gogoro.com/smartscooter/1-series/",
            text: "Gogoro 1 Series",
          },
          {
            link: "https://www.gogoro.com/smartscooter/2-series/",
            text: "Gogoro 2 Series",
          },
          {
            link: "https://www.gogoro.com/smartscooter/3-series/",
            text: "Gogoro 3 Series",
          },
          {
            link: "https://www.gogoro.com/smartscooter/viva/",
            text: "Gogoro VIVA",
          },
          {
            link: "https://www.gogoro.com/smartscooter/viva/mix/",
            text: "Gogoro VIVA MIX",
          },
          {
            link: "https://www.gogoro.com/software/",
            text: "iQ System®",
          },
          {
            link: "https://www.gogoro.com/smartscooter/specs/",
            text: "Compare Specs",
          },
        ],
      },
      {
        show: false,
        title: "Smart Power",
        items: [
          {
            link: "https://www.gogoro.com/gogoro-network/",
            text: "Gogoro Network®",
          },
        ],
      },
      {
        show: false,
        title: "News",
        items: [
          {
            link: "https://www.gogoro.com/news/",
            text: "Latest",
          },
          {
            link: "https://www.gogoro.com/about-us/",
            text: "About Us",
          },
          {
            link: "https://www.gogoro.com/media-center/",
            text: "Media Center",
          },
          {
            link: "https://www.gogoro.com/media-center/logos/",
            text: "Media Assets",
          },
          {
            link: "https://www.gogoro.com/media-center/#section-contact",
            text: "Inquires",
          },
        ],
      },
      {
        show: false,
        title: "Get Support",
        items: [
          {
            link: "https://support.gogoro.com/en/",
            text: "Tech Support",
          },
          {
            link: "https://support.gogoro.com/en",
            text: "Mail Us",
          },
          {
            link: "https://support.gogoro.com/en/faq/",
            text: "FAQ",
          },
        ],
      },
    ]);

    const toggleGroup = (group) => {
      if (!toggleLock.value) {
        group.show = !group.show;
      }
    };
    watchMedia("992", (match) => {
      toggleLock.value = match;
      navList.value.forEach((group) => (group.show = match));
    });

    const socialList = ref([
      {
        link: "http://www.facebook.com/gogoro",
        icon: "Facebook",
        text: "Facebook",
      },
      {
        link: "http://www.facebook.com/GogoroChannel",
        icon: "Youtube",
        text: "Youtube",
      },
      {
        link: "http://www.facebook.com/WeAreGogoro",
        icon: "Twitter",
        text: "Twitter",
      },
      {
        link: "http://www.facebook.com/gogoro_taiwan",
        icon: "Instagram",
        text: "Instagram",
      },
      {
        link: "http://www.facebook.com/company/gogoro",
        icon: "Linkedin",
        text: "Linkedin",
      },
    ]);

    return {
      navList,
      toggleGroup,
      socialList,
      toggleLock,
    };
  },
};
</script>

<style lang='scss'>
.sub-nav {
  color: #fff;
  padding-top: 60px;
  border-bottom: none;
  font-size: 14px;
  @include lg {
    padding-bottom: 60px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }

  &__box {
    display: flex;
    flex-direction: column;

    @include lg {
      flex-direction: row;
    }
  }
  &__left-top {
    @include lg {
      flex: 0 0 20%;
    }
    @include xl {
      flex: 0 0 25%;
    }
  }
  &__right-bottom {
    display: flex;
    width: 100%;
    margin-top: 4px;

    @include lg {
      margin-top: -5px;
      flex: 1;
    }
  }
  &__list {
    width: 100%;
    border-top: 1px solid hsla(0, 0%, 100%, 0.08);
    @include lg {
      display: flex;
      flex-wrap: wrap;
      border-top: none;
    }
    @include xl {
      flex-wrap: nowrap;
    }
  }
  &__list-item {
    flex: 1;
    padding: 14px 0;

    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
    @include lg {
      padding: 0;
      border-bottom: none;
      flex: 1 0 33%;
      margin-bottom: 60px;
    }
    @include xl {
      flex: 1;
    }
  }
  &__link-group {
    &::before {
      content: "";
      display: block;
      height: 16px;
    }
    // margin-top: 16px; NOTE: Failed if use margin-top
  }
  &__list-unit {
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $footer-title-color;
    cursor: pointer;
    @include lg {
      cursor: default;
    }
  }
  &__list-link {
    @extend %reset-a;
    display: block;
    margin-bottom: 8px;
    line-height: 1.4;

    color: $footer-list-item-color;
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      color: $footer-list-item-hover-color;
      text-decoration: underline;
    }
  }
  &__logo {
    height: auto;
    justify-content: flex-start;
  }
  &__socials {
    margin-top: 40px;
    display: flex;
    max-width: 380px;
    flex-wrap: wrap;
    @include lg {
      margin-top: 60px;
    }
  }
  &__social {
    @extend %reset-a;
    display: flex;
    flex: 0 0 50%;
    justify-content: flex-start;
    line-height: 1.14;
    font-size: 14px;
    color: $footer-icon-text-color;
    margin-bottom: 20px;
    .iconText-icon {
      margin-right: 8px;
    }
    @include lg {
      flex: 1 0 100%;
    }
  }
}
</style>
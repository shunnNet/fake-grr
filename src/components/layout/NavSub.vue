<template lang='pug'>
nav.subNav
  section.subNav__leftTop
    LogoBox.subNav__logo
    .subNav__socials
      IconText.subNav__social.socialIconText(
        v-for="item in socialList",
        :key="item.text",
        tag="a",
        :href="item.link",
        :icon="item.icon"
      ) {{ item.text }}

  section.subNav__rightBottom
    component(:is="listComponent", :groups="navListData", #item="{ item }")
      a.subNav__listItem(:href="item.link") {{ item.text }}
</template>

<script>
import LogoBox from "@/components/layout/sub/LogoBox.vue";

import { ref, defineAsyncComponent } from "vue";
import { watchMedia } from "@/assets/scripts/mediaStore.js";

import {
  navListData,
  socialList as socialListData,
} from "@/assets/data/site.js";

export default {
  components: {
    LogoBox,
    Hamburger: defineAsyncComponent(() =>
      import("@/components/libs/Hamburger.vue")
    ),
    GroupList: defineAsyncComponent(() =>
      import("@/components/libs/GroupList.vue")
    ),
  },
  setup() {
    const listComponent = ref("Hamburger");
    watchMedia("992", (match) => {
      listComponent.value = match ? "GroupList" : "Hamburger";
    });

    return {
      navListData,
      socialList: socialListData,
      listComponent,
    };
  },
};
</script>

<style lang='scss'>
.subNav {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  border-bottom: none;
  color: #fff;
  font-size: 14px;
  @include lg {
    flex-direction: row;
    padding-bottom: 60px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }

  &__box {
    @include lg {
    }
  }
  &__leftTop {
    @include lg {
      flex: 0 0 20%;
    }
    @include xl {
      flex: 0 0 25%;
    }
  }

  &__logo {
    height: auto;
    justify-content: flex-start;
  }
  &__socials {
    display: flex;
    flex-wrap: wrap;
    max-width: 380px;
    margin-top: 40px;
    @include lg {
      margin-top: 60px;
    }
  }
  &__social.iconText {
    @extend %reset-a;
    display: flex;
    justify-content: flex-start;
    flex: 0 0 50%;
    margin-bottom: 20px;

    @include lg {
      flex: 1 0 100%;
    }
  }
  &__rightBottom {
    display: flex;
    width: 100%;
    margin-top: 4px;

    @include lg {
      margin-top: -5px;
      flex: 1;
    }
  }
}

.subNav__listItem {
  @extend %reset-a;
  display: block;
  line-height: 1.4;
  color: $footer-list-item-color;
  &:hover {
    color: $footer-list-item-hover-color;
    text-decoration: underline;
  }
}

.socialIconText {
  line-height: 1.14;
  font-size: 14px;
  color: $footer-icon-text-color;
  .iconText-icon {
    margin-right: 8px;
  }
}
</style>
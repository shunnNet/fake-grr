<template lang='pug'>
footer.foot-bar
  .foot-bar__site-infos
    .foot-bar__copyright
      | Copyright © 2014-2021 Gogoro Inc. All rights reserved.
    ul.foot-bar__links
      li.foot-bar__link-item
        a.foot-bar__link-text Privacy Policy
      li.foot-bar__link-item
        a.foot-bar__link-text Terms of Use

  select.foot-bar__region(v-model="region")
    option(value="Region", disabled) Region
    option(:value="region", v-for="region in regions", :key="region") {{ region }}
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const regions = ref(["Global", "Taiwan"]);
    const region = ref("Region");
    watch(region, (now, previous) => {
      console.log("now", now);
      switch (now) {
        case "Global":
          window.location.href = "https://www.gogoro.com/";
          break;
        case "Taiwan":
          window.location.href = "https://www.gogoro.com/tw/";
          break;
      }
    });
    return {
      regions,
      region,
    };
  },
};
</script>

<style lang='scss'>
.foot-bar {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 30px 0;
  font-size: 12px;
  @include lg {
    flex-direction: row;
    justify-content: space-between;
  }
  &__site-infos {
    @include lg {
      display: flex;
    }
  }
  &__copyright {
    color: #888;
    margin-bottom: 10px;
    @include lg {
      margin-bottom: 0;
      margin-right: 25px;
    }
  }
  &__links {
    display: flex;
    justify-content: center;
  }
  &__link-item {
    &:last-child {
      margin-left: 20px;
    }
  }
  &__link-text {
    @extend %reset-a;
    cursor: pointer;
    color: #737d82;
    &:hover {
      color: #b9bcbf;
      text-decoration: underline;
    }
  }
  &__region {
    @extend %reset-select;
    font-size: 12px;
    width: auto;
    outline: none;
    background-color: #323237;
    border: none;
    color: #fff;
    padding-right: 15px;
    background-image: url("~@/assets/images/icon/Arrow.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    margin-bottom: 30px;
    @include lg {
      margin-bottom: 0;
    }
  }
}
</style>
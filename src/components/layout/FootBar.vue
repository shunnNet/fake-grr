<template lang='pug'>
footer.footBar
  .footBar__infos
    .footBar__copyright
      | Copyright © 2014-2021 Gogoro Inc. All rights reserved.
    ul.footBar__links
      li.footBar__linkItem
        a.footBar__linkText(href="https://www.gogoro.com/privacy-policy") Privacy Policy
      li.footBar__linkItem
        a.footBar__linkText(href="https://www.gogoro.com/terms-of-use") Terms of Use

  select.footBar__region(v-model="region")
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
.footBar {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 30px 0;
  font-size: 12px;
  @include lg {
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
  }
  &__infos {
    @include lg {
      display: flex;
    }
  }
  &__copyright {
    color: #888;
    margin-bottom: 10px;
    @include lg {
      line-height: 64px;
      margin-bottom: 0;
      margin-right: 25px;
    }
  }
  &__links {
    display: flex;
    justify-content: center;
  }
  &__linkItem {
    &:last-child {
      margin-left: 20px;
    }
  }
  &__linkText {
    @extend %reset-a;
    cursor: pointer;
    color: #737d82;
    &:hover {
      color: #b9bcbf;
      text-decoration: underline;
    }
    @include lg {
      line-height: 64px;
    }
  }
  &__region {
    @extend %reset-select;
    width: auto;
    margin-bottom: 30px;
    padding-right: 15px;
    border: none;
    background-color: #323237;
    background-image: url("~@/assets/images/icon/Arrow.svg");
    background-size: 0.8em;
    background-repeat: no-repeat;
    background-position: right center;
    outline: none;
    color: #fff;
    font-size: 12px;
    @include lg {
      margin-bottom: 0;
    }
  }
}
</style>
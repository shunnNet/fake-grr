<template lang='pug'>
section.index__entryBanner
.index__box
  section.index__campaigns
    ul.campaignList
      li.campaignList__item(v-for="item in campaignList", :key="item.title")
        a.campaignList__poster(
          :href="item.link",
          :style="{ backgroundImage: item.background }"
        )
          h3.campaignList__title {{ item.title }}
          p.campaignList__desc {{ item.desc }}
  section.index__battery.battery
    .battery__content
      span.battery__titleSub Gogoro Network
      h2.battery__title The largest battery swapping network in the world
      p.battery__desc
        | Gogoro Network® manages over
        span.battery__em 200,000 battery swaps a day
        |
        | at 2,088 GoStation® across Taiwan, that's enough power to ride 15,000,000 km.
      IconText.battery__more.moreContent(
        tag="a",
        href="https://network.gogoro.com/tw/en/coverage/",
        icon="Arrow2",
        reverse
      ) SEE OUR NETWORK
    .battery__figure

  section.index__photos
    ul.photoList
      li.photoList__item(
        v-for="item in photoList",
        :key="item.title",
        :style="{ backgroundImage: item.background }"
      )
        a.photoList__poster(:href="item.link")
          p.photoList__desc {{ item.desc }}
          h3.photoList__title {{ item.title }}
            br
            | {{ item.title2 }}

  section.index__eeyo.eeyo
    .eeyo__content
      h3.eeyo__title Introducing
        br.eeyo__titleWrap 
        |
        | Gogoro Eeyo
      p.eeyo__desc From the cloud to the road, this is eBike reimagined. Ultralight, totally digital, and an absolute blast to ride.
      IconText.eeyo__more.moreContent(
        tag="a",
        href="https://eeyo.bike",
        icon="Arrow2",
        reverse
      ) LEARN MORE

  section.index__appreciate
  section.index__impact
</template>

<script>
import { ref } from "vue";
import IconText from "@/components/IconText.vue";
export default {
  components: { IconText },
  setup() {
    const campaignList = ref([
      {
        title: "Smarter Energy",
        desc: "Battery swapping is cleaner, faster & easier",
        link: "http://www.gogoro.com/gogoro-network/",
        background: `url(" ${require("@/assets/images/campaign-bg.png")} ")`,
      },
      {
        title: "Smarter Rides",
        desc: "Experience a ride like no other",
        link: "http://www.gogoro.com/smartscooter/2-series/plus/",
        background: `url(" ${require("@/assets/images/campaign2-bg.png")} ")`,
      },
      {
        title: "Smarter Sharing",
        desc: "Ride when you like, swap as you go",
        link: "https://www.ridegoshare.com/",
        background: `url(" ${require("@/assets/images/campaign3-bg.png")} ")`,
      },
    ]);
    const photoList = ref([
      {
        title: "Powered by",
        title2: "Gogoro Network",
        desc: "5 Partners and Growing",
        link: "https://network.gogoro.com/tw/en/scooter/",
        background: `url(" ${require("@/assets/images/blog_post_bg1.png")} ")`,
      },
      {
        title: "Hero & Gogoro",
        title2: "heads to India",
        desc: "Blog",
        link: "https://www.gogoro.com/news/Gogoro-Battery-Swapping-India-Hero/",
        background: `url(" ${require("@/assets/images/social_post_bg1.jpg")} ")`,
      },
    ]);
    return {
      campaignList,
      photoList,
    };
  },
};
</script>

<style lang='scss'>
$gutter: 6px;

.index {
  &__box {
    max-width: 1120px;
    margin: 0 auto;
  }
  &__campaigns {
    margin-top: $gutter;
  }
  &__photos {
    margin-top: $gutter;
  }
  &__eeyo {
    margin-top: $gutter;
  }
  &__battery {
    margin-top: $gutter;
  }
}

.campaignList {
  display: flex;
  flex-direction: column;
  color: #323237;
  text-align: center;

  &__item {
    margin-top: $gutter;

    &:first-child {
      margin-top: 0;
    }
  }
  &__poster {
    @extend %reset-a;
    display: block;
    height: 510px;
    padding-top: 60px;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &__title {
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
  }
  &__desc {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.125;
  }
  @include lg {
    flex-direction: row;
    &__item {
      flex: 1;
      margin-top: 0;
      margin-left: $gutter;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}

.battery {
  position: relative;
  overflow: hidden;

  height: 703px;
  padding-top: 40px;
  background-image: linear-gradient(52deg, #40fdcb, #40fdcb 7%, #24ee2c);
  @include sm {
    background-image: linear-gradient(40deg, #40fdcb, #40fdcb 7%, #24ee2c);
  }
  @include md {
    display: flex;
    justify-content: flex-end;
    height: auto;
    padding-top: 0;
    background-image: linear-gradient(60deg, #40fdcb, #40fdcb 7%, #24ee2c);
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
    text-align: center;
    @include md {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      align-items: flex-start;
      text-align: left;
      padding: 0 60px;
      left: 0;
    }
    @include xl {
      padding: 0 100px;
    }
  }
  &__titleSub {
    opacity: 0.7;
    font-weight: 600;
    font-size: 18px;
  }
  &__title {
    width: 100%;
    max-width: 380px;
    margin-top: 28px;
    line-height: 1.1;
    font-weight: 500;
    font-size: 28px;
    letter-spacing: -0.5px;
    @include md {
      margin-top: 46px;
      font-size: 32px;
      max-width: 9em;
    }
    @include lg {
      font-size: 42px;
    }
  }
  &__desc {
    font-weight: 400;
    margin-top: 20px;
    max-width: 400px;
    line-height: 1.25;
  }
  &__em {
    font-weight: bold;
    display: inline-block;
  }
  &__more {
    margin-top: 32px;
  }
  &__figure {
    &::before {
      content: "";
      position: absolute;
      width: 380px;
      height: 360px;

      background-image: url("~@/assets/images/station-gn.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center bottom;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      @include md {
        position: static;
        display: block;
        padding-bottom: 94.54409567%;
        width: auto;
        height: auto;
        background-image: url("~@/assets/images/station-gn@2x.png");
        transform: none;
      }
    }
    @include md {
      width: 70%;
      transform: translateX(20%);
    }
    @include lg {
      width: 688px;
      transform: none;
    }
  }
}

.photoList {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #fff;
  &__item {
    margin-top: $gutter;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &:first-child {
      margin-top: 0;
    }
  }
  &__poster {
    @extend %reset-a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 510px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &__desc {
    position: absolute;
    top: 40px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.28;
  }
  &__title {
    line-height: 1.1;
    font-size: 27px;
    font-weight: 700;
    text-align: center;
    @include sm {
      font-size: 32px;
    }
    @include lg {
      font-size: 42px;
    }
  }
  @include md {
    flex-direction: row;
    &__item {
      flex: 1;
      margin-top: 0;
      margin-left: $gutter;
      &:first-child {
        margin-left: 0;
      }
    }
    &__poster {
      height: 340px;
    }
  }
}
.eeyo {
  background-color: #f2f2f2;
  background-image: url("~@/assets/images/profile_shot_bicycle.png");
  background-repeat: no-repeat;
  background-size: 500px 300px;
  background-position: center bottom 16px;
  height: 625px;
  padding-top: 40px;

  @include sm {
    height: 748px;
    padding-top: 60px;
    background-size: 700px 420px;
    background-position: center bottom 10px;
  }
  @include md {
    height: 680px;
    background-size: 900px 540px;
    background-position: center bottom -132px;
  }
  &__content {
    padding: 0 32px;
    text-align: center;
  }

  &__title {
    line-height: 1.1;
    letter-spacing: -0.012em;
    font-size: 42px;
    font-weight: 500;
  }
  &__titleWrap {
    display: block;
    @include md {
      display: none;
    }
  }
  &__desc {
    font-size: 16px;
    max-width: 464px;
    margin: 0 auto;
    margin-top: 20px;
    font-weight: light;
  }
  &__more {
    margin-top: 36px;
  }
}
.moreContent {
  @extend %reset-a;
  font-style: italic;
  font-weight: 800;
  letter-spacing: 0.1668em;
  opacity: 0.7;
  .iconText-icon {
    margin-left: 7px;
  }
}
</style>
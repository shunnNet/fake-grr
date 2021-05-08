<template lang='pug'>
Swiper.index__entryBanner(
  effect="fade",
  loop,
  pagination,
  :autoplay="{ delay: 10000, disableOnInteraction: false }"
)
  SwiperSlide.movie(key="video")
    video(
      :src="require('@/assets/images/home_vision_1080_v02.mp4')",
      autoplay="autoplay",
      loop,
      control,
      muted
    )
    .movie__content
      h2.movie__title 
        | A Better Way Forward to
        br
        | Smarter, Cleaner Cities
      p.movie__desc
        | Gogoro is reinventing urban transportation with an ecosystem of sustainable energy solutions for the world’s modern cities.
  SwiperSlide.vivaMix(key="vivaMix")
    .vivaMix__content
      .vivaMix__slogan MIX IT UP
      a.vivaMix__more(href="https://www.gogoro.com/smartscooter/viva/mix/") LEARN MORE

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
  Quotes

  section.index__impact
    Impact
</template>

<script>
import { ref } from "vue";
import IconText from "@/components/IconText.vue";
import SwitchBg from "@/components/SwitchBg.vue";
import Quotes from "@/components/Quotes.vue";
import Impact from "@/components/Impact.vue";

export default {
  components: {
    IconText,
    SwitchBg,
    Quotes,
    Impact,
  },
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
  &__entryBanner {
    position: relative;
    height: calc(100vh - 80px);
    min-height: 420px;
    max-height: 760px;

    @include sm {
      height: calc(100vh - 120px);
      min-height: 560px;
      max-height: 1140px;
    }
    @include md {
      height: calc(100vh - 120px);
      min-height: 680px;
      max-height: 1200px;
    }
    @include xl {
      height: calc(100vh - 200px);
      max-height: 1640px;
      min-height: 820px;
    }
    &.swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 20px;
    }
    .swiper-pagination-bullet {
      opacity: 1 !important; // overwrite library default
      border: 2px solid #737d82;
      background-color: #737d82;
      height: 8px;
      width: 8px;
      margin: 0 10px !important;
      @include lg {
        height: 12px;
        width: 12px;
      }
      &-active {
        border: 2px solid #fff;
        background-color: rgba(115, 125, 130, 0);
      }
    }
  }
  &__box {
    max-width: 1140px;
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
  &__appreciate {
    margin-top: $gutter;
  }
  &__impact {
    margin-top: $gutter;
  }
}


.movie {
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  &__content {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    max-width: 660px;
    text-align: center;
    padding: 0 16px;
  }
  &__title {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.1;

    @include sm {
      font-size: 36px;
    }
    @include md {
      font-size: 54px;
    }
  }
  &__desc {
    font-size: 16px;
    line-height: 1.25;
    max-width: 18.5em;
    margin: 0 auto;
    margin-top: 20px;

    @include sm {
      font-size: 18px;
      max-width: 20em;
    }
    @include md {
      margin-top: 24px;
      max-width: 500px;
      font-size: 20px;
      line-height: 1.2;
    }
  }
}

.vivaMix {
  user-select: none;
  position: relative;
  background-image: url("~@/assets/images/viva.png"),
    url("~@/assets/images/banner.jpg");
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: 180%, cover;
  color: #ffffff;
  @include md {
    background-image: url("~@/assets/images/viva_lg.png"),
      url("~@/assets/images/banner_lg.png");

    background-size: contain, cover;
  }

  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    top: 72%;
    @include sm {
      top: 76%;
    }
    @include md {
      top: 66%;
    }
    @include lg {
      top: 70%;
    }
    @include xl {
      top: 74%;
    }
  }

  &__slogan {
    color: #ffffff;
    font-size: 0;
    width: 90vw;
    max-width: 305px;
    height: 70px;
    overflow: hidden;
    text-indent: -199%;
    background: url("~@/assets/images/viva-mix-slogan.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @include hide-text();
    @include xl {
      max-width: 402px;
    }
  }
  &__more {
    @extend %reset-a;
    display: flex;
    border: 2px solid #fff;
    border-radius: 20px;
    margin-top: 16px;
    border: 2px solid #ffffff;
    border-radius: 20px;
    height: 40px;
    cursor: pointer;
    transition: color 0.25s, background-color 0.25s;
    padding: 0 1.66em 0 1.8em;
    align-items: center;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.15em;

    @include sm {
      padding: 0 1.86em 0 2em;
      height: 48px;
      border-radius: 24px;
    }

    &:hover {
      background-color: #ffffff;
      color: #323237;
    }
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
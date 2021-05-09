<template lang='pug'>
Swiper.index__entryBanner(
  effect="fade",
  loop,
  pagination,
  :autoplay="{ delay: 10000, disableOnInteraction: false }"
)
  SwiperSlide.entryMovie(tag="a", href="https://www.gogoro.com/about")
    video(
      :src="require('@/assets/images/home_vision_1080_v02.mp4')",
      autoplay="autoplay",
      loop,
      control,
      muted
    )
    .entryMovie__content
      h2.entryMovie__title 
        | A Better Way Forward to
        br
        | Smarter, Cleaner Cities
      p.entryMovie__desc
        | Gogoro is reinventing urban transportation with an ecosystem of sustainable energy solutions for the world’s modern cities.
  SwiperSlide.vivaMix
    .vivaMix__content
      h2.vivaMix__slogan MIX IT UP
      a.vivaMix__more(href="https://www.gogoro.com/smartscooter/viva/mix/") LEARN MORE

.index__box
  section.index__campaigns
    ul.campaignList
      li.campaignList__item(v-for="item in campaignList", :key="item.title")
        CampaignCard(:campaign="item")

  section.index__battery
    BannerStation

  section.index__photos
    ul.photoList
      li.photoList__item(v-for="item in photoList", :key="item.title")
        PhotoCard.photoList__card(:info="item")

  section.index__eeyo
    BannerEeyo

  section.index__quotes
    BannerQuotes(:quotes="quotesList")

  section.index__impact
    Impact
</template>

<script>
import { ref } from "vue";
import BannerQuotes from "@/components/layout/sub/BannerQuotes.vue";
import Impact from "@/components/layout/sub/Impact.vue";
import CampaignCard from "@/components/layout/sub/CampaignCard.vue";
import PhotoCard from "@/components/layout/sub/PhotoCard.vue";
import BannerStation from "@/components/layout/sub/BannerStation.vue";
import BannerEeyo from "@/components/layout/sub/BannerEeyo.vue";

export default {
  components: {
    BannerQuotes,
    Impact,
    CampaignCard,
    PhotoCard,
    BannerStation,
    BannerEeyo,
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
    const quotesList = ref([
      {
        quote: "You have to see it to really appreciate how cool it is,",
        sub: "Al Gore, Wired, December 2017",
        iconOff: require("@/assets/images/quotes_logo_wired_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_wired_on.jpg"),
      },
      {
        quote: "The 9 Coolest Gadgets from CES 2016",
        sub: "Time",
        iconOff: require("@/assets/images/quotes_logo_time_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_time_on.jpg"),
      },
      {
        quote: "2018 Asian Company of the Year",
        sub: "Cleantech 100",
        iconOff: require("@/assets/images/quotes_logo_cleantech_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_cleantech_on.jpg"),
      },
      {
        quote: "2015 CES Best In Show Award",
        sub: "The Verge",
        iconOff: require("@/assets/images/quotes_logo_verge_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_verge_on.jpg"),
      },

      {
        quote: "2017 Nikkei Asian Review Award for Excellence",
        sub: "Nikkei Asian Review",
        iconOff: require("@/assets/images/quotes_logo_nikkei_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_nikkei_on.jpg"),
      },
      {
        quote: "Selected for the 2016 Sustainia 1000",
        sub: "Sustainia",
        iconOff: require("@/assets/images/quotes_logo_sustania_off.jpg"),
        iconOn: require("@/assets/images/quotes_logo_sustania_on.jpg"),
      },
    ]);

    return {
      campaignList,
      photoList,
      quotesList,
    };
  },
};
</script>

<style lang='scss'>
$gutter: 6px;

.index {
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
  &__quotes {
    margin-top: $gutter;
  }
  &__impact {
    margin-top: $gutter;
  }
}

.index__entryBanner {
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

.entryMovie {
  @extend %reset-a;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #ffffff;
  user-select: none;

  &__content {
    @include absoluteCenter();
    width: 100%;
    max-width: 660px;
    padding: 0 16px;
    text-align: center;
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
    max-width: 18.5em;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.25;

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
  position: relative;
  background-image: url("~@/assets/images/viva.png"),
    url("~@/assets/images/banner.jpg");
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: 180%, cover;
  user-select: none;
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
    @include hide-text();
    width: 90vw;
    height: 70px;
    max-width: 305px;
    color: #ffffff;
    background: url("~@/assets/images/viva-mix-slogan.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @include xl {
      max-width: 402px;
    }
  }
  &__more {
    @extend %reset-a;
    display: flex;
    align-items: center;
    height: 40px;
    margin-top: 16px;
    padding: 0 1.66em 0 1.8em;
    border: 2px solid #fff;
    border-radius: 20px;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.15em;
    cursor: pointer;
    transition: color 0.25s, background-color 0.25s;

    @include sm {
      height: 48px;
      padding: 0 1.86em 0 2em;
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

  &__item {
    margin-top: $gutter;
  }
  &__item:first-child {
    margin-top: 0;
  }
  @include lg {
    flex-direction: row;
    &__item {
      flex: 1;
      margin-top: 0;
      margin-left: $gutter;
    }
    &__item:first-child {
      margin-left: 0;
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
  }
  &__item:first-child {
    margin-top: 0;
  }
  @include md {
    flex-direction: row;
    &__item {
      flex: 1;
      margin-top: 0;
      margin-left: $gutter;
    }
    &__item:first-child {
      margin-left: 0;
    }
  }
  &__card {
    height: 510px;
    @include md {
      height: 340px;
    }
  }
}
</style>
<template lang='pug'>
.station
  .station__content
    span.station__titleSub Gogoro Network
    h2.station__title The largest battery swapping network in the world
    p.station__desc
      | Gogoro Network® manages over
      span.station__em 200,000 battery swaps a day
      |
      | at 2,088 GoStation® across Taiwan, that's enough power to ride 15,000,000 km.
    IconText.iconText--more.station__more(
      tag="a",
      href="https://network.gogoro.com/tw/en/coverage/",
      icon="Arrow2",
      reverse
    ) SEE OUR NETWORK
  .station__figure
</template>

<script>
export default {
};
</script>

<style lang='scss'>
.station {
  position: relative;
  height: 703px;
  padding-top: 40px;
  background-image: linear-gradient(52deg, #40fdcb, #40fdcb 7%, #24ee2c);
  overflow: hidden;
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
      @include absoluteCenter($x: false, $y: true);
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
      max-width: 9em;
      margin-top: 46px;
      font-size: 32px;
    }
    @include lg {
      font-size: 42px;
    }
  }
  &__desc {
    margin-top: 20px;
    max-width: 400px;
    line-height: 1.25;
    font-weight: 400;
  }
  &__em {
    font-weight: bold;
    display: inline-block;
  }
  &__more {
    margin-top: 32px;
  }
  &__figure {
    @include md {
      width: 70%;
      transform: translateX(20%);
    }
    @include lg {
      width: 688px;
      transform: none;
    }
    &::before {
      @include absoluteCenter(true, false);
      bottom: 0;
      content: "";
      width: 380px;
      height: 360px;

      background-image: url("~@/assets/images/station-gn.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center bottom;

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
  }
}
</style>
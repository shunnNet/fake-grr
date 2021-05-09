<template lang='pug'>
.eeyo
  .eeyo__content
    h3.eeyo__title Introducing
      br.eeyo__titleWrap 
      |
      | Gogoro Eeyo
    p.eeyo__desc From the cloud to the road, this is eBike reimagined. Ultralight, totally digital, and an absolute blast to ride.
    IconText.eeyo__more.iconText--more(
      tag="a",
      href="https://eeyo.bike",
      icon="Arrow2",
      reverse
    ) LEARN MORE
</template>

<script>
export default {};
</script>

<style lang='scss'>
.eeyo {
  height: 625px;
  padding-top: 40px;
  background-color: #f2f2f2;
  background-image: url("~@/assets/images/profile_shot_bicycle.png");
  background-repeat: no-repeat;
  background-size: 500px 300px;
  background-position: center bottom 16px;

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
</style>
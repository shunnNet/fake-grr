<template lang='pug'>
.photoCard(:style="{ backgroundImage: info.background }")
  a.photoCard__content(:href="info.link")
    p.photoCard__desc {{ info.desc }}
    h3.photoCard__title {{ info.title }}
      br
      | {{ info.title2 }}
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss'>
.photoCard {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  &__content {
    @extend %reset-a;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 510px;
    background-color: rgba(0, 0, 0, 0.4);
    @include md {
      height: 340px;
    }
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

    @include sm {
      font-size: 32px;
    }
    @include lg {
      font-size: 42px;
    }
  }
}
</style>
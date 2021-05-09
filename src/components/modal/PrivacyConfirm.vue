<template lang='pug'>
section.privacyConfirm
  .privacyConfirm__wrap
    p.privacyConfirm__info
      | I consent to allow Gogoro.com to store and process my personal data in order to personalizecontent and ads, to provide social media features and to analyze our traffic.
      a.privacyConfirm__more(href="https://www.gogoro.com/cookie-policy") READ MORE
    .privacyConfirm__btnGroup
      button.privacyConfirm__btn(type="button", @click="confirmPolicy(false)") REJECT
      button.privacyConfirm__btn.privacyConfirm__btn--accept(
        type="button",
        @click="confirmPolicy(true)"
      ) ACCEPT
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modalValue: Boolean,
  },
  setup(props, { emit }) {
    const confirmPolicy = (response) => {
      localStorage.setItem("acceptPolicy", response);
      emit("update:modelValue", true);
    };
    return {
      confirmPolicy,
    };
  },
};
</script>

<style lang='scss'>
.privacyConfirm {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  color: #fff;
  background-color: rgba(18, 18, 21, 0.95);
  border-top: 1px solid hsla(0, 0%, 100%, 0.15);
  z-index: 9999;
  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 40px;
    

    @include md {
      padding: 20px 80px;
    }
    @include lg {
      max-width: 1200px;
      flex-direction: row;
      padding: 20px 30px;
    }
  }
  &__info {
    font-size: 14px;
    margin: 0 0 10px;
    text-align: center;
    max-width: 640px;
    line-height: 1.5;

    @include lg {
      margin: 0;
      text-align: left;
      font-size: 16px;
      max-width: 100%;
    }
  }
  &__more {
    @extend %reset-a;
    font-weight: 600;
    text-decoration: underline;
    display: inline-block;
    margin-left: 5px;
  }
  &__btnGroup {
    display: flex;
    @include lg {
      margin-left: 40px;
    }
  }
  &__btn {
    @extend %reset-btn;

    display: block;
    padding: 10px;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    cursor: pointer;
    @include lg {
      font-size: 18px;
    }
    @include xl {
      font-size: 20px;
    }
    &--accept {
      color: #1088ff;
      margin-left: 40px;
    }
  }
}
</style>
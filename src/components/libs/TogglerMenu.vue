<template lang='pug'>

label.toggler-menu(:class="{'toggler-menu--active': active}")
  span.toggler-menu__crust.toggler-menu__crust--top
  span.toggler-menu__crust.toggler-menu__crust--middle
  span.toggler-menu__crust.toggler-menu__crust--bottom

</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss'>
.toggler-menu {
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;
  &__crust {
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    left: 15px;
    background-color: #737d82;
    transition: all 0.6s cubic-bezier(0.6, 0, 0, 1);
    &--top {
      top: 19px;
    }
    &--middle {
      top: 24px;
    }
    &--bottom {
      top: 29px;
    }
  }
}
.toggler-menu--active {
  .toggler-menu {
    &__crust {
      &--top {
        top: 24px;
        transform: rotate(135deg);
      }
      &--middle {
        top: 29px;
        opacity: 0;
      }
      &--bottom {
        top: 24px;
        transform: rotate(-135deg);
      }
    }
  }
}
</style>
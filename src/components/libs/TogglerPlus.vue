<template lang='pug'>
.toggler
  span.toggler-line
  span.toggler-line(:class="{'toggler-line--vertical': !active}")
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang='scss'>
.toggler {
  cursor: pointer;
  position: relative;
  width: 12px;
  height: 12px;
  &-line {
    width: 12px;
    height: 2px;
    position: absolute;
    background-color: #737d82;
    top: 50%;
    margin: -1px 0 0 -6px;
    transform: scaleY(0.6);
    transition: transform 0.3s;
    &--vertical {
      transform: rotate(90deg) scaleY(0.6);
    }
  }
}
</style>
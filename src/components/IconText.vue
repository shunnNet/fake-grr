<template lang='pug'>
div(v-is="tag" class="iconText" :class="{'iconText--reverse': reverse}")
  component(:is="icon", :class="['iconText-icon', iconClass]")
  slot
</template>

<script>
export default {
  props: {
    // slot
    tag: {
      type: String,
      default: "div",
    },
    iconClass: {
      type: String,
    },
    icon: {
      type: String,
    },
    reverse :{
      type: Boolean,
      default: false
    }
  },
  
};
</script>

<style lang="scss">
.iconText {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &-icon {
    max-height: 1.5em;
    max-width: 1.5em;
    margin-right: 5px;
  }
  &--reverse {
    flex-direction: row-reverse;
    .iconText-icon {
      margin-right: 0;
      margin-left: 5px;
    }
  }
}
</style>
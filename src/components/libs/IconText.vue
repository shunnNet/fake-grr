<template lang='pug'>
.iconText(v-is="tag", :class="{ 'iconText--reverse': reverse }")
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
    reverse: {
      type: Boolean,
      default: false,
    },
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
.iconText--more {
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
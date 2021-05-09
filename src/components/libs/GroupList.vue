<template>
  <ul class="group">
    <li class="group__group" v-for="group in groups" :key="group.title">
      <slot name="title" :group="group">
        <span class="group__title">
          {{ group.title }}
        </span>
      </slot>
      <ul class="group__list">
        <li
          class="group__listItem"
          v-for="item in group.items"
          :key="item.text"
        >
          <slot :item="item" name="item">
            <a :href="item.link" class="group__item">{{ item.text }}</a>
          </slot>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    groups: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss'>
.group {
  --footer-title-color: #737d82;

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @include xl {
    flex-wrap: nowrap;
  }
  &__group {
    flex: 1 0 33%;
    margin-bottom: 60px;

    @include xl {
      flex: 1;
    }
  }
  &__list {
    &::before {
      content: "";
      display: block;
      height: 16px;
    }
  }
  &__title {
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--footer-title-color);
  }

  &__listItem {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
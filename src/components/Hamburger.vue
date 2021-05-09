<template>
  <ul class="hamburger">
    <li
      class="hamburger__group"
      v-for="group in groupList"
      :key="group.title"
      @click="toggleGroup(group)"
    >
      <slot name="title" :group="group">
        <span class="hamburger__title">
          {{ group.title }}
          <slot :active="group.show">
            <TogglerPlus :active="group.show" />
          </slot>
        </span>
      </slot>
      <TransitionSlide :min="0">
        <ul class="hamburger__list" v-if="group.show" @click.stop="">
          <li
            v-for="item in group.items"
            :key="item.text"
            class="hamburger__listItem"
          >
            <slot :item="item" name="item">
              {{ item.text }}
            </slot>
          </li>
        </ul>
      </TransitionSlide>
    </li>
  </ul>
</template>

<script>
import TogglerPlus from "@/components/TogglerPlus.vue";
import TransitionSlide from "@/components/TransitionSlide.vue";
import { ref } from "vue";
import { deepCopy } from "@/assets/scripts/helpers/object.js";

export default {
  components: { TransitionSlide, TogglerPlus },
  props: {
    groups: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const groupList = ref(
      deepCopy(props.groups).map((group) =>
        Object.assign({ show: false }, group)
      )
    );
    const toggleGroup = (group) => {
      group.show = !group.show;
    };

    return {
      toggleGroup,
      groupList,
    };
  },
};
</script>

<style lang='scss'>
.hamburger {
  --footer-border-style: 1px solid hsla(0, 0%, 100%, 0.08);
  --footer-title-color: #737d82;

  width: 100%;
  border-top: var(--footer-border-style);
  line-height: 1.5;

  &__group {
    padding: 14px 0;
    border-bottom: var(--footer-border-style);
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--footer-title-color);
    cursor: pointer;
  }

  &__list {
    &::before {
      content: "";
      display: block;
      height: 16px;
    }
  }
  &__listItem {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
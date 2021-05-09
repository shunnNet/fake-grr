<template lang="pug">
.layout-nav
  NavBar

main.layout-main
  Index

.layout-footer
  .box-sm
    NavSub
    FootBar

transition(name="privacy", appear)
  PrivacyConfirm(v-if="!isPolicyConfirmed", v-model="isPolicyConfirmed")
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import NavSub from "@/components/layout/NavSub.vue";
import FootBar from "@/components/layout/FootBar.vue";
import Index from "@/components/pages/Index.vue";
import PrivacyConfirm from "@/components/modal/PrivacyConfirm.vue";
import { ref } from "vue";

export default {
  setup() {
    const isPolicyConfirmed = ref(
      localStorage.getItem("acceptPolicy") !== null
    );

    return {
      isPolicyConfirmed,
    };
  },
  name: "App",
  components: {
    NavBar,
    NavSub,
    FootBar,
    Index,
    PrivacyConfirm,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.layout {
  &-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
  }

  &-main {
    flex: 1 0 auto;
  }
  &-footer {
    width: 100%;
    margin-top: 10px;
    background-color: #323237;
  }
}
.privacy {
  &-enter-from,
  &-leave-to {
    bottom: 0;
    transform: translateY(100%);
  }
  &-enter-to,
  &-leave-from {
    transform: translateY(0%);
  }
  &-enter-active,
  &-leave-active {
    transition: transform 0.5s;
  }
}
</style>
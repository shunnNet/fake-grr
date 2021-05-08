<template lang="pug">
NavBar.layout-nav

main.layout-main
  Index

.layout-footer
  .box-sm
    NavSub
    FootBar
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import NavSub from "@/components/layout/NavSub.vue";
import FootBar from "@/components/layout/FootBar.vue";
import Index from "@/components/pages/Index.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavSub,
    FootBar,
    Index,
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
  &-nav,
  &-footer {
    width: 100%;
  }
  &-main {
    flex: 1 0 1800px;
  }
  &-footer {
    margin-top: 10px;
    background-color: #323237;
  }
}
</style>
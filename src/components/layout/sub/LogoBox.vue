<template lang='pug'>
a.logo-box(:href="link")
  Logo.logo-box__logo
</template>

<script>
// import logoUrl from '@/assets/images/icon/Logo.svg';
export default {
  props: {
    link: {
      type: String,
      default: () => "https://www.gogoro.com/",
    },
    // height: {
    //   type: String,
      
    // }
  },
};
</script>

<style lang='scss'>
.logo-box {
  display: flex;
  // width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
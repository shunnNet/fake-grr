<template lang='pug'>
a.campaignCard(
  :href="campaign.link",
  :style="{ backgroundImage: campaign.background }"
)
  h3.campaignCard__title {{ campaign.title }}
  p.campaignCard__desc {{ campaign.desc }}
</template>

<script>
export default {
  props: {
    campaign: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss'>
.campaignCard {
  @extend %reset-a;
  color: #323237;
  text-align: center;
  display: block;
  height: 510px;
  padding-top: 60px;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  &__title {
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
  }
  &__desc {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.125;
  }
}
</style>
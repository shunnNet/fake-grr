import { computed, ref, onUnmounted } from "vue";

export function useCommunityImpactInfo() {
  const CO2 = ref(276156838);
  const treeCost = computed(() => Math.floor(CO2.value / 10));
  const battery = ref(182570168);
  const distance = ref(3348609768);
  const distancePerEarth = computed(() => Math.floor(distance.value / 40000));
  
  const toFormatString = (number) => number.toLocaleString("en-US");

  let addNumberInterval = setInterval(() => {
    CO2.value += 10;
    battery.value += 6;
    distance.value += 120;
  }, 800);

  onUnmounted(() => {
    clearInterval(addNumberInterval)
  })

  const communities = computed(() => [
    {
      name: "co2",
      img: require("@/assets/images/green/Green_co2.svg"),
      number: toFormatString(CO2.value),
      unit: "KG",
      numberDesc: "CO2 saved",
      desc: `As many as the amount of CO2 that ${toFormatString(
        treeCost.value
      )} trees consume every year.`,
    },
    {
      name: "battery",
      img: require("@/assets/images/green/Green_battery.svg"),
      number: toFormatString(battery.value),
      unit: "",
      numberDesc: "Battery's swapped",
      desc: `There are more than 279,965 batteries swapped per day in the last 30 days.`,
    },
    {
      name: "earth",
      img: require("@/assets/images/green/Green_earth.svg"),
      number: toFormatString(distance.value),
      unit: "KM",
      numberDesc: "Total distance covered",
      desc: `As long as the distance traveling around the Earth via equator ${toFormatString(
        distancePerEarth.value
      )} times.`,
    },
  ]);

  return {
    communities
  }
  

}

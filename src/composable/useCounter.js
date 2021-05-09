import { ref, onUnmounted } from "vue";

export function useCounter(valueRef = ref(0)) {
  const modifyCounter = (value) => {
    valueRef.value = value;
  };
  const addCounter = (step = 1) => {
    valueRef.value += step;
  };
  let counterInterval = -1;
  const startAutoCounter = (time, step=1) => {
    if (counterInterval == -1) {
      counterInterval = setInterval(() => {
        addCounter(step);
      }, time);
    }
  };
  const stopAutoCounter = () => {
    if (counterInterval !== -1) {
      clearInterval(counterInterval);
      counterInterval = -1;
    }
  };
  onUnmounted(stopAutoCounter);

  return {
    counter: valueRef,
    modifyCounter,
    addCounter,
    startAutoCounter,
    stopAutoCounter,
  };
}

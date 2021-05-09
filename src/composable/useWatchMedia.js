import { onUnmounted, watch } from "vue";
import { watchMedia } from "@/assets/scripts/mediaStore.js";

export function useWatchMedia(watchList = []) {
  const unWatchList = watchList.map(({ name, cb }) => watchMedia(name, cb));
  onUnmounted(() => {
    unWatchList.forEach((unwatch) => unwatch());
  });
}

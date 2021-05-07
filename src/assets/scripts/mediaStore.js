const medias = {
  "992": {
    watch: "(min-width: 992px)",
    callbacks: [],
    mql: null,
  },
};

for (const key in medias) {
  const { watch, callbacks } = medias[key];
  medias[key].mql = matchMedia(watch);

  medias[key].mql.addEventListener("change", (event) => {
    callbacks.forEach((cb) => cb(event.matches));
  });
}

export function watchMedia(name, callback, runInit = true) {
  if (medias[name] && typeof callback === "function") {
    medias[name].callbacks.push(callback);
    console.log(medias[name].mql.matches);
    runInit && callback(medias[name].mql.matches);
  }
}

export function unwatchMedia(name, callback) {
  if (medias[name] && typeof callback === "function") {
    const pos = medias[name].callbacks.findIndex(callback);
    medias[name.callbacks].splice(pos, 1);
  }
}

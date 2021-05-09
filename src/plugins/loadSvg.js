export default {
  install: (app) => {
    const requireFunction = require.context(
      "@/assets/images/icon?inline",
      false,
      /\.svg$/
    );

    requireFunction.keys().forEach((req) => {
      const component = requireFunction(req).default;
      const componentName = extractComponentName(req);
      app.component(componentName, component)
    });
  },
};

function extractComponentName(path) {
  let filename = path.replace("./", "").replace(".svg", "");
  let firstLetter = filename[0].toUpperCase();
  return firstLetter + filename.slice(1);
}

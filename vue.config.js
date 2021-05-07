module.exports = {
  css:{
    sourceMap: process.env !== "production",
    loaderOptions:{
      scss:{
        prependData: "@import '~@/assets/scss/env.scss';"
      }
    }

  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader");
  },
};

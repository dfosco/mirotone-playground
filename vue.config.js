module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mirotone-playground" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
};

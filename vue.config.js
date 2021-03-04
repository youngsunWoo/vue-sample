// 경로: 루트 디렉토리/vue.config.js
const path = require('path');
// const webpack = require('webpack');

module.exports = {

  devServer: {
    overlay: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      }
    },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jquery: 'jquery',
    //     'window.jQuery': 'jquery',
    //     jQuery: 'jquery'
    //   })
    // ]
  },
}
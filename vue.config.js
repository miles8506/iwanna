const path = require('path');
const webpack = require("webpack");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/iwanna/'
    : '/',


  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
    externals: {
      './cptable': 'var cptable'
    }
  },
};
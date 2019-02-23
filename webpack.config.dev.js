const merge = require('webpack-merge');
const path = require('path');
const baseConf = require('./webpack.config.base');

module.exports = merge(baseConf, {
  mode: 'development',
  devServer: {
    port: 9000
  },
  devtool: 'source-map'
});

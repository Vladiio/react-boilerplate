const merge = require('webpack-merge');
const baseConf = require('./webpack.config.base');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
module.exports = merge(baseConf, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_analytics.html'
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
});

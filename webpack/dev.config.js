const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./common.config');

module.exports = () => {
  return merge(common, {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3010,
      historyApiFallback: true,
    },
    output: {
      publicPath: '/',
    },
  });
};

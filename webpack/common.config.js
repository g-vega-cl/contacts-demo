const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotEnv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { alias } = require('../alias.config');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  module: {
    rules: [
      {
        include: path.resolve(__dirname, '../src'),
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'index-[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: () => 'chunk-[name]-[contenthash].js',
    publicPath: '',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new dotEnv(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias,
  },
};

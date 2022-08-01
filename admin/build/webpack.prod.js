const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");
const resolve = (filePath) => path.resolve(__dirname, "../", filePath);

module.exports = merge(common, {
  mode: "production",
  devtool: 'hidden-source-map',
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
});

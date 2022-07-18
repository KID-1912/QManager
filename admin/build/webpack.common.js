// loaders
const { VueLoaderPlugin } = require('vue-loader');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");
const resolve = (filePath) => path.resolve(__dirname, "../", filePath);

module.exports = {
  entry: resolve("./src/main.js"),
  output: {
    path: resolve("./dist"),
    filename: "QManager.bundle.js",
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("./public/index.html"),
    }),
  ],
}
// loaders
const { VueLoaderPlugin } = require("vue-loader");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

const path = require("path");
const resolve = (filePath) => path.resolve(__dirname, "../", filePath);

module.exports = {
  entry: resolve("./src/main.js"),
  output: {
    clean: true,
    path: resolve("./dist"),
    filename: "QManager.bundle.js",
  },
  resolve: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src/components"),
      "@views": resolve("src/views"),
    },
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", 'css-loader'] },
      { test: /\.vue$/, loader: "vue-loader" }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    new HtmlWebpackPlugin({
      template: resolve("./public/index.html"),
    }),
  ],
}
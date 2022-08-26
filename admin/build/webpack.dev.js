const { merge } = require("webpack-merge");

const path = require("path");
const resolve = (filePath) => path.resolve(__dirname, "../", filePath);
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: resolve("./dist"),
    client: {
      logging: "warn",
    },
    historyApiFallback: true,
  },
  module: {rules: []}
});

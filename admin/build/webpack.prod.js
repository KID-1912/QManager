const common = require("./webpack.common.js");

const { mergeWithRules } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const resolve = (filePath) => path.resolve(__dirname, "../", filePath);

const config = {
  mode: "production",
  devtool: "hidden-source-map",
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader] },
      { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader] },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = mergeWithRules({
  module: {
    rules: { test: "match", use: "prepend" },
  },
})(common, config);

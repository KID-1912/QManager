const common = require("./webpack.common.js");

const { mergeWithRules } = require("webpack-merge");
const path = require("path");
const resolve = (filePath) => path.resolve(__dirname, "../", filePath);

const config = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  stats: "minimal",
  devServer: {
    static: resolve("./dist"),
    client: {
      logging: "warn",
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader"] },
      { test: /\.s[ac]ss$/, use: ["style-loader"] },
    ],
  },
};

module.exports = mergeWithRules({
  module: {
    rules: { test: "match", use: "prepend" },
  },
})(common, config);

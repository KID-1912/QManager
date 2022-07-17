const path = require("path");
const resolve = (filePath) => path.resolve(__dirname, "../", filePath);

// depend plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: resolve("./src/main.js"),
  output: {
    path: resolve("./dist"),
    filename: "QManager.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("./public/index.html"),
    }),
  ],
};

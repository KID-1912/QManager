// loaders
const { VueLoaderPlugin } = require("vue-loader");

// plugins
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const Icons = require("unplugin-icons/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const IconsResolver = require("unplugin-icons/resolver");
const { FileSystemIconLoader } = require("unplugin-icons/loaders");
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

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
    extensions: [".js", ".json", ".wasm", ".vue"],
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["css-loader"] },
      {
        test: /\.s[ac]ss$/,
        use: [
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: (content) => {
                const additionalData = `
                  @import "~@/style/variables.scss";
                  $env: "${process.env.NODE_ENV}";
                  $staticUrl: "${process.env.VUE_APP_STATIC_URL}";
                `;
                return additionalData + content;
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { cacheDirectory: true },
        },
      },
      { test: /\.vue$/, loader: "vue-loader" },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new WindiCSSWebpackPlugin(),
    new VueLoaderPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
          alias: { "el-svg": "ep" },
          enabledCollections: ["ep"],
          customCollections: ["svg"],
        }),
        ElementPlusResolver(),
      ],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
      customCollections: {
        svg: FileSystemIconLoader(resolve("src/icons/svg")),
      },
    }),
    new HtmlWebpackPlugin({
      template: resolve("./public/index.html"),
    }),
  ],
};

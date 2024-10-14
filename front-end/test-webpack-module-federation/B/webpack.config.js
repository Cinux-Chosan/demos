const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "appB",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./utils": "./src/utils.js",
      },
    }),
  ],
};

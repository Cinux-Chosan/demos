const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      remotes: {
        'B': 'appB@http://localhost:3002/remoteEntry.js' // 声明使用 B 的模块，B 是本地名称，当前主应用中使用 B 来导入远程模块，appB 是远程模块 webpack 中配置的名称， remoteEntry.js 是远程模块配置的 filename
      },
    }),
  ],
};

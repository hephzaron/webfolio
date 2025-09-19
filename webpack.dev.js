const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { join } = require("path");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "/", // 👈 local dev
  },
  devServer: {
    static: {
      directory: join(__dirname, "dist"),
    },
    port: 9000,
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/404.html" }],
    },
  },
  devtool: "inline-source-map",
});

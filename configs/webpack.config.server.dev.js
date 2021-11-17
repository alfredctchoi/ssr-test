const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "..", "src", "server", "index.tsx"),
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-env",
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "..", "dist/server"),
    filename: "server.js",
  },
};

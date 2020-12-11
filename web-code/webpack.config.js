const path = require("path");
module.exports = {
  entry: "./app/app",
  output: {
    filename: "myBundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
};

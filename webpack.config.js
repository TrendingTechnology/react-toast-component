var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Toast/index.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "Toast.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

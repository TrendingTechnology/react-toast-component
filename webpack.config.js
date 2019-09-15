var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Toast/index.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "Toast.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

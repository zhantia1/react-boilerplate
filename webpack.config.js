const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"]},
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js"
  }
}
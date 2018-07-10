/* jshint node:true */
var webpack = require("webpack");

module.exports = {
  entry: "./src/mickey.js",
  output: {
    library: "Mickey",
    libraryTarget: "commonjs",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules\/.*/], loader: "webpack-traceur" },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
};

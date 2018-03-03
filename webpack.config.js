const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  resolve: {
    extensions: [".js", ".less", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader'},
          {loader: 'less-loader'}]
        })
      },
      {
        test: /\.png$/,
        loader: "file-loader",
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
  ]
};

const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const styleBuild = {
  name: 'style',
  entry: {
    'style': './scss/index.scss'
  },
  module: {
    rules: [
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      { 
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }]
        }),
      },
    ]
  },
  output: {
    path: path.resolve('./dist/'),
    filename: "[name].js",
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ]
}

module.exports = styleBuild;

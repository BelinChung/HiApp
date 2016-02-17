var webpack = require('webpack');
var webpackConfig = require('./_base');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.plugins.push(
  new ExtractTextPlugin('[name].[hash].min.css'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: 'production'
    }
  })
);

webpackConfig.output.filename = '[name].[hash].min.js';

module.exports = webpackConfig;

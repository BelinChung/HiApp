var webpack = require('webpack');
var webpackConfig = require('./_base');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: 'development'
    }
    }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./www'] }
    })
);

webpackConfig.devtool = 'source-map';

module.exports = webpackConfig;

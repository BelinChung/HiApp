var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
    addVendor: function(name, path) {
        this.resolve.alias[name] = path;
    },
    entry: {
        app: ['./src/modules/main.js']
    },
    resolve: {alias: {}},
    output: {
        path: path.join(__dirname, 'www'),
        contentBase: 'www/',
        filename: 'app.js'
        //chunkFilename: '[chunkhash].build.js'
    },
    module: {
        noParse: [],
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader!autoprefixer-loader')},
            {test: /\.html$/, loader: 'html'},
            {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
            {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
            {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},

            // We just expose the global variable $ or jQuery, then file doesn't need to write require('jquery') every where
            //{test: /i18next\.js$/, loader: 'expose?i18n'}
        ]
    },
    plugins: [
        // This plugin will extract the css into app.css
        new ExtractTextPlugin('app.css', {
            allChunks: true             // This means extract all css files in app.css
        }),

        // webpack server build in livereload plugin
        new webpack.HotModuleReplacementPlugin(),

        // Get filenames from stats
        function() {
            this.plugin('done', function(stats) {
                require('fs').writeFileSync(
                    path.join(__dirname, 'stats.json'),
                    JSON.stringify(stats.toJson())
                );
            });
        }
    ]
};

config.addVendor('framework7', bower_dir + '/framework7/dist/js/framework7.js');
config.addVendor('framework7.ios.css', bower_dir + '/framework7/dist/css/framework7.ios.css');
config.addVendor('framework7.ios.colors.css', bower_dir + '/framework7/dist/css/framework7.ios.colors.css');

module.exports = config;
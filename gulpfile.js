var path = require('path');
var fse = require('fs-extra');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

// The development server (the recommended option for development)
gulp.task('default', ['webpack-dev-server']);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task('build-dev', ['webpack:build-dev','webpack-dev-server'], function() {
    gulp.watch(['src/**/*'], ['webpack:build-dev']);
});

// Production build
gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function(callback) {
    // modify some webpack config options
    var buildConfig = Object.create(webpackConfig);
    buildConfig.output.filename = '[hash].app.js';
    buildConfig.output.chunkFilename = '[chunkhash].app.js';

    buildConfig.plugins = buildConfig.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            warnings: false
        })
    );

    // remove www directory
    fse.ensureDirSync('www');
    fse.emptyDirSync('www');

    var prodCompiler = webpack(buildConfig);
    prodCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));

        // copy files to www directory
        fse.copySync('src/index.html', 'www/index.html');
        fse.copySync('src/api', 'www/api');
        fse.copySync('src/res', 'www/res');
        fse.copySync('src/page', 'www/page');

        fse.move('www/app.css', 'www/' + stats.hash + '.app.css', function (err) {
            if (err) return console.error('[webpack:build]: rename app.css failed');
        });

        fse.readFile(path.join('www', 'index.html'), 'utf-8', function(err, html) {
            if (err) return console.error('[webpack:build]: read index.html failed');

            fse.readJson('stats.json', function(err, stats) {
                if (err) return console.error('[webpack:build]: read stats.json failed');

                var content = html.replace('app.js', stats.hash + '.app.js')
                                    .replace('app.css', stats.hash + '.app.css')
                                        .replace('<script src="http://localhost:3000/webpack-dev-server.js"></script>','');

                fse.writeFileSync(path.join('www', 'index.html'), content, 'utf-8');
            });
        });

        callback();
    });
});

// modify some webpack config options
var devConfig = Object.create(webpackConfig);
devConfig.devtool = 'sourcemap';
devConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(devConfig);

gulp.task('webpack:build-dev', function(callback) {
    // run webpack
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError('webpack:build-dev', err);
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));

        // copy files to www directory
        fse.copySync('src/index.html', 'www/index.html');
        fse.copySync('src/api', 'www/api');
        fse.copySync('src/res', 'www/res');
        fse.copySync('src/page', 'www/page');

        callback();
    });
});

gulp.task('webpack-dev-server', function(callback) {
    // modify some webpack config options
    var serverConfig = Object.create(webpackConfig);
    serverConfig.devtool = 'eval';
    serverConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(serverConfig), {
        contentBase: serverConfig.output.contentBase,
        stats: {
            colors: true
        }
    }).listen(3000, 'localhost', function(err) {
            if(err) throw new gutil.PluginError('webpack-dev-server', err);
            gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');
        });
});
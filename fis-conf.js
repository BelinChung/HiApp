/* global fis */

fis.hook('commonjs', {

});

fis.hook('relative');
fis.match('**', {
    relative: true
});

fis.match('::package', {
        postpackager: fis.plugin('loader', {
            resourceType: 'mod'
        })
    })

    /**
     * 语言能力拓展相关
     * */
    .match('*.{html,js}', {
        useSameNameRequire: true
    })
    .match('**/*.less', {
        rExt: '.css',
        parser: fis.plugin('less-2.x', {

        })
    })

    /**
     * 模块化相关
     * */
    .match('/components/**/*.js', {
        isMod: true
    })
    .match(/^\/modules\/(.*)\.(js)$/i, {
        id: '$1',
        isMod: true
    })
    // 支出N层的短名引用
    // 'modules/a/b/c/c.js' => require('a/b/c');
    .match(/\/modules\/(((.*)\/)?([^\/]+))\/\4\.js/i, {
        id : '$1',
        isMod: true
    })

    /**
     * 基础文件的路径设置及拷贝
     * */
    .match('/api/**/*',{
        release: '$0'
    })
    .match('/res/**/*',{
        release: '$0'
    })
    .match('/page/**/*',{
        release: '$0'
    })
    .match('/style/**/*',{
        release: '$0'
    })
    .match('/res/**/*',{
        release: '$0'
    });

// fis3 release prod 产品发布，进行合并
fis.media('prod')
    .match('::package', {
        postpackager: fis.plugin('loader', {
            allInOne: {
                css: 'pkg/web_app_${hash}.css',
                js: 'pkg/web_app_${hash}.js'
            }
        })
    })
    .match('*.js', {
        useHash: true,
        optimizer: fis.plugin('uglify-js')
    })
    .match('*.css', {
        useHash: true,
        optimizer: fis.plugin('clean-css')
    })
    .match('*.png', {
        optimizer: fis.plugin('png-compressor')
    })
    /**
     * 独立声明异步加载的组件
     * */
    .match(/^\/modules\/lang\/(.*)\.(js)$/,{
        release: 'pkg/$1'
    });
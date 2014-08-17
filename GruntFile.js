module.exports = function(grunt) {
    /*jshint -W014 */
    'use strict';
    
    var cfg = {
        src: 'src/',
        // Change 'localhost' to '0.0.0.0' to access the server from outside.
        serverHost: '0.0.0.0',
        serverPort: 8088,
        livereload: 35729
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Metadata
        banner: '<!-- \n'

            + '                         ..,co88oc.oo8888cc,..\n'
            + '  o8o.               ..,o8889689ooo888o"88888888oooc..\n'
            + '.88888             .o888896888".88888888o\'?888888888889ooo....\n'
            + 'a888P          ..c6888969""..,"o888888888o.?8888888888"".ooo8888oo.\n'
            + '088P        ..atc88889"".,oo8o.86888888888o 88988889",o888888888888.\n'
            + '888t  ...coo688889"\'.ooo88o88b.\'86988988889 8688888\'o8888896989^888o\n'
            + ' 888888888888"..ooo888968888888  "9o688888\' "888988 8888868888\'o88888\n'
            + '  ""G8889""\'ooo888888888888889 .d8o9889""\'   "8688o."88888988"o888888o .\n'
            + '           o8888\'""""""""""\'   o8688"          88868. 888888.68988888"o8o.\n'
            + '           88888o.              "8888ooo.        \'8888. 88888.8898888o"888o.\n'
            + '           "888888\'               "888888\'          \'""8o"8888.8869888oo8888o .\n'
            + '      . :.:::::::::::.: .     . :.::::::::.: .   . : ::.:."8888 "888888888888o\n'
            + '                                                        :..8888,. "88888888888.\n'
            + '                                                        .:o888.o8o.  "866o9888o\n'
            + '                        HiApp V<%= pkg.version %>                     :888.o8888.  "88."89".\n'
            + '                 Build On <%= grunt.template.today("yyyy-mm-dd HH:MM") %>              . 89  888888    "88":.\n'
            + '                   By BelinChung[at]Gmail               :.     \'8888o\n'
            + '                                                         .       "8888..\n'
            + '                                                                   888888o.\n'
            + '                                                                    "888889,\n'
            + '           它是荒野中的尊贵象征,它是风中的舞者,优雅而孤傲            . : :.:::::::.: :.\n'
            + '-->\n',

        clean: {
            build: ['www/*','!www/cordova.js','!www/cordova_plugins.js']
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'src/script/main.js',
                    name: 'main',
                    out: 'www/script/<%=pkg.name%>.min.js',
                    preserveLicenseComments:false,
                    locale:false
                }
            }
        },

        uglify: {
            options: {
                compress: true
            },
            build: {
                src: 'src/vendors/require/require.js',
                dest: 'www/script/require.min.js'
            }
        },
        
        copy: {
            build: {
                files:[
                    {
                        expand: true,
                        cwd: 'src/api',
                        src: ['**'],
                        dest: 'www/api'
                    },
                    {
                        expand: true,
                        cwd: 'src/style/img',
                        src: ['**'],
                        dest: 'www/style/img'
                    },
                    {
                        expand: true,
                        cwd: 'src/style/fonts',
                        src: ['**'],
                        dest: 'www/style/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'src/page',
                        src: ['**.html'],
                        dest: 'www/page'
                    },
                    {
                        expand: true,
                        cwd: 'src/script/nls',
                        src: ['**'],
                        dest: 'www/script/nls'
                    },
                    {
                        expand: true,
                        cwd: 'src/res',
                        src: ['**'],
                        dest: 'www/res'
                    }
                ]
            },
            development:{
                expand: true,
                cwd: 'src/',
                src: ['**'],
                dest: 'www/'
            }
        },

        targethtml: {
            options: {
                curlyTags: {
                    version:'<%=pkg.version%>',
                    rlsdate: '<%= grunt.template.today("yyyymmddHHMM") %>',
                    rlsdate2:'<%= grunt.template.today("yyyy.mm.dd HH:MM") %>',
                    banner: '<%= banner %>'
                }
            },
            dist: {
                files: {
                    'www/index.html': 'src/index.html'
                }
            }
        },

        cfg: cfg,

        connect: {
            server: {
                options: {
                    port: cfg.serverPort,
                    base: cfg.src
                }
            }
        },

        open: {
          server: {
            url: 'http://localhost:' + cfg.serverPort
          }
        },

        watch: {
          options: {
            livereload: cfg.livereload
          },
          server: {
            files: [ cfg.src + '/**'],
            tasks: ['less:development']
          },
          clean: {
                files: ['src/style/less/**'],
                tasks: ['clean:source']
          }
        },

        less: {
            development: {
                options: {
                    strictImports:false
                },
                files: {
                    'src/style/css/app.css' : 'src/style/less/app.less'
                }
            },
            production:{
                options: {
                    cleancss: true,
                    strictImports:false,
                    report: 'min'
                },
                files: {
                    'www/style/css/<%=pkg.name%>.min.css': 'src/style/less/app.less'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', 'src/script/*']
        }
    });

    //load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['clean', 'requirejs','less:production', 'uglify', 'targethtml:dist', 'copy:build']);
    grunt.registerTask('phonegap',['clean','less:development','copy:development']);
    grunt.registerTask('test','Test of <%= pkg.name %>', ['clean', 'requirejs','less:production', 'uglify', 'targethtml:dist','jshint']);
    grunt.registerTask('server', ['connect:server', 'open:server', 'watch:server','less:development']);

};  
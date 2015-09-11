require('framework7');
require('framework7.ios.css');
require('../style/less/app.less');

var appFunc = require('./utils/appFunc'),
    appService = require('./services/appService'),
    router = require('./router'),
    index = require('./app/app');

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        if(appFunc.isPhonegap()) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }else{
            window.onload = this.onDeviceReady();
        }
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(event) {
        switch (event) {
            case 'deviceready':
                app.initMainView();
                break;
        }
    },
    initMainView:function(){
        var lang = appService.getLocal();

        switch (lang){
            case 'en-us':
                require(['./lang/en-us'], function(lang){
                    window.i18n = lang;
                    app.initFramework7();
                });
                break;
            case 'zh-cn':
                require(['./lang/zh-cn'], function(lang){
                    window.i18n = lang;
                    app.initFramework7();
                });
                break;
        }

    },
    initFramework7: function(){

        //Register custom Template7 helpers
        Template7.registerHelper('t', function (options){
            var key = options.hash.i18n || '';
            var keys = key.split('.');

            var value;
            for (var idx = 0, size = keys.length; idx < size; idx++)
            {
                if (value != null)
                {
                    value = value[keys[idx]];
                } else {
                    value = i18n[keys[idx]];
                }

            }
            return value;
        });

        window.$$ = Dom7;
        window.hiApp = new Framework7({
            pushState: false,
            popupCloseByOutside:false,
            animateNavBackIcon: true,
            modalTitle: i18n.global.modal_title,
            modalButtonOk: i18n.global.modal_button_ok,
            modalButtonCancel: i18n.global.cancel,
            preprocess: router.preprocess
        });

        window.mainView = hiApp.addView('#homeView', {
            dynamicNavbar: true
        });

        window.contactView = hiApp.addView('#contactView', {
            dynamicNavbar: true
        });

        // init app
        index.init();
    }
};

app.initialize();

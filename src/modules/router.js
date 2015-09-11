var index = require('./app/app'),
    appFunc = require('./utils/appFunc'),
    tweetModule = require('./tweet/tweet'),
    messageModule = require('./message/message');

module.exports = {
    init: function() {
        var that = this;
        $$(document).on('pageBeforeInit', function (e) {
            var page = e.detail.page;
            that.pageBeforeInit(page);
        });

        $$(document).on('pageAfterAnimation', function (e) {
            var page = e.detail.page;
            that.pageAfterAnimation(page);
        });
    },
    pageAfterAnimation: function(page){
        var name = page.name;
        var from = page.from;

        if(name === 'homeView' || name === 'contactView' || name === 'settingView' ){
            if(from === 'left'){
                appFunc.showToolbar();
            }
        }
    },
    pageBeforeInit: function(page) {
        var name = page.name;
        var query = page.query;
        var from = page.from;

        switch (name) {
            case 'about':
                //CM.module('aboutCtrl').init();
                break;
            case 'feedback':
                //CM.module('feedbackCtrl').init();
                break;
            case 'item':
                tweetModule.init(query);
                break;
            case 'message':
                messageModule.init(query);
                break;
            case 'language':
                //CM.module('languageCtrl').init(query);
                break;
        }
    }
};
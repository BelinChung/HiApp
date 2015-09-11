var index = require('./app/app'),
    appFunc = require('./utils/appFunc'),
    tweetModule = require('./tweet/tweet'),
    feedbackModule = require('./feedback/feedback'),
    aboutModule = require('./about/about'),
    languageModule = require('./language/language'),
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

        if(name === 'homeView' || name === 'contactView' || name === 'setting' ){
            if(from === 'left'){
                appFunc.showToolbar();
            }
        }
    },
    pageBeforeInit: function(page) {
        var name = page.name;
        var query = page.query;

        switch (name) {
            case 'about':
                aboutModule.init();
                break;
            case 'feedback':
                feedbackModule.init();
                break;
            case 'item':
                tweetModule.init(query);
                break;
            case 'message':
                messageModule.init(query);
                break;
            case 'language':
                languageModule.init();
                break;
        }
    }
};
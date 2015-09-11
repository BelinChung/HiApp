var appFunc = require('../utils/appFunc');

module.exports = {
    init: function(){
        appFunc.hideToolbar();

        this.bindEvents();
    },
    sendFeedback: function(){
        hiApp.showPreloader(i18n.index.sending);
        setTimeout(function(){
            hiApp.hidePreloader();
            hiApp.alert(i18n.setting.feed_back_result);
        },1000);
    },
    bindEvents: function(){
        var bindings = [{
            element: '.send-feedback',
            event: 'click',
            handler: this.sendFeedback
        }];

        appFunc.bindEvents(bindings);
    }
};
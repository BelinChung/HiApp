require('./language.less');

var appFunc = require('../utils/appFunc'),
    appService = require('../services/appService');

module.exports = {
    init: function(){
        appFunc.hideToolbar();

        this.bindEvents();
        this.setDefaultLanguage();
    },
    setDefaultLanguage: function(){
        var lang = appService.getLocal();
        $$('.language-page .language-radio[data-lang="' + lang + '"]').attr('checked','checked');
    },
    switchLanguage: function(){
        var lang = $$('.language-page .language-radio:checked').data('lang');
        appService.setLocal(lang);
        window.location.reload();
    },
    bindEvents: function(){
        var bindings = [{
            element: '.set-language',
            event: 'click',
            handler: this.switchLanguage
        }];
        appFunc.bindEvents(bindings);
    }
};
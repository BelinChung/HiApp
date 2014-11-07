define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var languageView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
            this.setDefaultLanguage();
            appFunc.hideToolbar();

            var from = params.query.from;
            if(from === 'setting'){
                var bindings = [{
                    element: '.back2language',
                    event: 'click',
                    handler: languageView.showToolbar
                }];
                appFunc.bindEvents(bindings);
            }
        },

        setDefaultLanguage: function(){
            var lang = this.getLanguage();
            lang = lang || 'en-us';
            $$('.language-page .language-radio[data-lang="' + lang + '"]').attr('checked','checked');
        },

        switchLanguage: function(){
            var lang = $$('.language-page .language-radio:checked').data('lang');
            languageView.setLanguage(lang);
            window.location.reload();
        },

        i18next: function(content){
            var renderData = {
                back: i18n.global.back,
                done: i18n.global.done,
                switchLanguage: i18n.global.switch_language
            };

            var output = TM.renderTpl(content,renderData);

            return output;
        },

        getLanguage: function(){
            return localStorage.getItem('lang');
        },

        setLanguage: function(lang){
            localStorage.setItem('lang',lang);
        },

        showToolbar: function(){
            appFunc.showToolbar();
        }

    };

    return languageView;
});
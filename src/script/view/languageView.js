define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    function init(params){
        appFunc.bindEvents(params.bindings);
        setDefaultLanguage();
        appFunc.hideToolbar('.views');

        var from = params['query']['from'];
        if(from === "setting"){
            var bindings = [{
                element: '.back2language',
                    event: 'click',
                handler: showToolbar
            }];
            appFunc.bindEvents(bindings);
        }
    }

    function setDefaultLanguage(){
        var lang = getLanguage();
        lang = lang || "en-us";
        $$('.language-page .language-radio[data-lang="' + lang + '"]').attr('checked','checked')
    }

    function switchLanguage(){
        var lang = $$('.language-page .language-radio:checked').data('lang');
        setLanguage(lang);
        window.location.reload();
    }

    function i18next(content){
        var renderData = [];
        renderData['back'] = i18n.global.back;
        renderData['done'] = i18n.global.done;
        renderData['switchLanguage'] = i18n.global.switch_language;

        var output = TM.renderTpl(content,renderData);

        return output;
    }

    function getLanguage(){
        return localStorage.getItem('lang');
    }

    function setLanguage(lang){
        localStorage.setItem('lang',lang);
    }

    function showToolbar(){
        appFunc.showToolbar('.views');
    }

    return{
        init:init,
        setDefaultLanguage:setDefaultLanguage,
        switchLanguage:switchLanguage,
        i18next:i18next
    }
});
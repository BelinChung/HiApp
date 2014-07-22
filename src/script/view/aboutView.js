define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){
    /* global $CONFIG */

    function init(params){
        appFunc.bindEvents(params.bindings);

        var version = $CONFIG.version;

        $$('.my-product .version').html('V' + version + ' For Web');
        appFunc.hideToolbar('.views');
    }

    function i18next(content){
        var renderData = [];
        renderData.appName = i18n.app.name;
        renderData.about = i18n.setting.about;

        var output = TM.renderTpl(content,renderData);

        return output;
    }

    return{
        init:init,
        i18next:i18next
    };
});
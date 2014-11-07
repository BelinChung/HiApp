define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){
    /* global $CONFIG */

    var aboutView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);

            var version = $CONFIG.version;

            $$('.my-product .version').html('V' + version + ' For Love');
            appFunc.hideToolbar();
        },

        i18next: function(content){
            var renderData = {
                appName: i18n.app.name,
                about: i18n.setting.about
            };

            var output = TM.renderTpl(content,renderData);

            return output;
        }

    };

    return aboutView;
});
define(['utils/appFunc','view/module'],function(appFunc,VM){

    var appCtrl = {

        i18next: function(viewName,content){
            var output = VM.module(viewName).i18next(content);
            return output;
        },

        bindEven: function(){
            var bindings = [{
                element:document,
                selector:'div.item-image>img',
                event: 'click',
                handler: VM.module('appView').photoBrowser
            }];

            appFunc.bindEvents(bindings);
        },
        showToolbar: function(){
            appFunc.showToolbar();
        }

    };

    appCtrl.bindEven();

    return appCtrl;
});
define(['utils/appFunc','view/module'],function(appFunc,VM){

    var appCtrl = {

        i18next: function(viewName,content){
            var output = VM.module(viewName).i18next(content);
            return output;
        }

    };

    return appCtrl;
});
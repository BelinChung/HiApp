define(['utils/appFunc','view/module'],function(appFunc,VM){

    function i18next(viewName,content){
        var output = VM.module(viewName).i18next(content);
        return output;
    }

    return{
        i18next:i18next
    };
});
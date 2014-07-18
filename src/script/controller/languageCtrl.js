define(['utils/appFunc','view/module'],function(appFunc,VM){

    var bindings = [{
        element:'.set-language',
        event: 'click',
        handler:VM.module('languageView').switchLanguage
    }];

    function init(){
        VM.module('languageView').init({
            bindings:bindings
        });
    }

    return{
        init:init
    }
});
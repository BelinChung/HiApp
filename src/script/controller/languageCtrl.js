define(['utils/appFunc','view/module'],function(appFunc,VM){

    var langyageCtrl = {

        init: function(query){

            var bindings = [{
                element:'.set-language',
                event: 'click',
                handler:VM.module('languageView').switchLanguage
            }];

            VM.module('languageView').init({
                bindings:bindings,
                query:query
            });
        }

    };

    return langyageCtrl;
});
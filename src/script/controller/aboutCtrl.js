define(['utils/appFunc','view/module'],function(appFunc,VM){

    var aboutCtrl = {

        init: function(){

            var bindings = [{
                element: '.back2setting',
                event: 'click',
                handler: VM.module('appView').showToolbar
            }];

            VM.module('aboutView').init({
                bindings:bindings
            });
        }

    };

    return aboutCtrl;
});
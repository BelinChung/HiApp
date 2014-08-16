define(['utils/appFunc','view/module'],function(appFunc,VM){

    var itemCtrl = {

        init: function(query){
            var bindings = [{
                element: '.back2home',
                event: 'click',
                handler: VM.module('appView').showToolbar
            }];

            VM.module('itemView').init({
                bindings:bindings,
                query:query
            });
        }

    };

    return itemCtrl;
});
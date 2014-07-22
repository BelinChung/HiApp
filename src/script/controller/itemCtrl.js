define(['utils/appFunc','view/module'],function(appFunc,VM){

    var bindings = [{
        element: '.back2home',
        event: 'click',
        handler: VM.module('appView').showToolbar
    }];

    function init(query){
        VM.module('itemView').init({
            bindings:bindings,
            query:query
        });
    }

    return{
        init:init
    };
});
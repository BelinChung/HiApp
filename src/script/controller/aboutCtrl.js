define(['utils/appFunc','view/module'],function(appFunc,VM){

    var bindings = [{
        element: '.back2setting',
        event: 'click',
        handler: VM.module('appView').showToolbar
    }];

    function init(){
        VM.module('aboutView').init({
            bindings:bindings
        });
    }

    return{
        init:init
    };
});
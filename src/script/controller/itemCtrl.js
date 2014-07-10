define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element: '.back2home',
        event: 'click',
        handler: VM.module('itemView').showToolbar
    }];

    function init(query){
        VM.module('itemView').init({
            bindings:bindings,
            query:query
        });
    }

    return{
        init:init
    }
});
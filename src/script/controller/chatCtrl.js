define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element: '.back2contact',
        event: 'click',
        handler: VM.module('chatView').showToolbar
    },{
        element: '.ks-messages-form',
        event: 'submit',
        handler: VM.module('chatView').submitChat
    },{
        element: '.ks-send-message',
        event: 'click',
        handler: VM.module('chatView').triggerSubmit
    }];

    function init(query){
        VM.module('chatView').init({
            bindings:bindings,
            query:query
        });

    }

    return{
        init:init
    }
});
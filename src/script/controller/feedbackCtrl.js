define(['utils/appFunc','view/module'],function(appFunc,VM){

    var bindings = [{
        element: '.back2setting',
        event: 'click',
        handler: VM.module('appView').showToolbar
    },{
        element: '.send-feedback',
        event: 'click',
        handler: sendFeedback
    }];

    function init(){
        VM.module('feedbackView').init({
            bindings:bindings
        });
    }

    function sendFeedback(){
        VM.module('feedbackView').sendFeedback();
    }

    return{
        init:init
    }
});
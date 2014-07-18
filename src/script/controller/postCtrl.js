define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element: '.send-popup',
        event: 'open',
        handler: VM.module('postView').clearSendPopup
    }];

    function init(){
        VM.module('postView').init({
            bindings:bindings
        });
    }

    return{
        init:init
    }
});
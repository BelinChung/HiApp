define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var postCtrl = {

        bindEvent: function(){
            var bindings = [{
                element: '.send-popup',
                event: 'open',
                handler: VM.module('postView').clearSendPopup
            }];

            appFunc.bindEvents(bindings);
        }

    };

    postCtrl.bindEvent();

    return postCtrl;
});
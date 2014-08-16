define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var postCtrl = {

        init: function(){

            var bindings = [{
                element: '.send-popup',
                event: 'open',
                handler: VM.module('postView').clearSendPopup
            }];

            VM.module('postView').init({
                bindings:bindings
            });
        }

    };

    return postCtrl;
});
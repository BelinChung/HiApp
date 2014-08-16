define(['utils/appFunc','view/module'],function(appFunc,VM){

    var feedBackCtrl = {

        init:function(){
            var bindings = [{
                element: '.back2setting',
                event: 'click',
                handler: VM.module('appView').showToolbar
            },{
                element: '.send-feedback',
                event: 'click',
                handler: feedBackCtrl.sendFeedback
            }];
            VM.module('feedbackView').init({
                bindings:bindings
            });
        },

        sendFeedback: function(){
            VM.module('feedbackView').sendFeedback();
        }

    };

    return feedBackCtrl;
});
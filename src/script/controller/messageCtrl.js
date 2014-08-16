define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var messageCtrl = {

        init: function(query){
            xhr.simpleCall({
                func:'answers'
            },function(response) {
                if (response.err_code === 0) {

                    var bindings = [{
                        element: '.back2contact',
                        event: 'click',
                        handler: VM.module('appView').showToolbar
                    },{
                        element: '.ks-messages-form',
                        event: 'submit',
                        handler: VM.module('messageView').submitMessage
                    },{
                        element: '.ks-send-message',
                        event: 'click',
                        handler: VM.module('messageView').triggerSubmit
                    }];

                    VM.module('messageView').init({
                        bindings: bindings,
                        query: query,
                        answers:response.data
                    });

                    messageCtrl.renderMessages();

                }
            });
        },

        renderMessages: function(){
            xhr.simpleCall({
                func:'message'
            },function(response) {
                if (response.err_code === 0) {
                    VM.module('messageView').renderMessages(response.data);
                }
            });
        }

    };

    return messageCtrl;
});
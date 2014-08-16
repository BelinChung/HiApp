define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var commentCtrl = {

        init: function(){

            var bindings = [{
                element:'.item-comment-btn',
                event: 'click',
                handler:VM.module('commentView').commentPopup
            }];

            VM.module('commentView').init({
                bindings:bindings
            });

            this.getComments();
        },

        getComments: function(){
            xhr.simpleCall({
                func: 'comments'
            }, function (response) {
                if (response.err_code === 0) {
                    var random = Math.floor(Math.random()*2);
                    if(!random)
                        response.data = null;

                    VM.module('commentView').render({
                        comments: response.data
                    });
                }
            });
        }

    };

    return commentCtrl;
});
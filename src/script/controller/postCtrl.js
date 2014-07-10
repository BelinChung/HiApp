define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element: '#sendWeiboBtn',
        event: 'click',
        handler: postMsg
    }];

    function init(){
        VM.module('postView').init({
            bindings:bindings
        });
    }

    function postMsg(){
        VM.module('postView').postMsg();
    }

    return{
        init:init
    }
});
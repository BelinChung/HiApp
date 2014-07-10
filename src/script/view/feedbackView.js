define(['utils/appFunc'],function(appFunc){

    function init(params){
        appFunc.bindEvents(params.bindings);

        appFunc.hideToolbar('.views');
    }

    function showToolbar(){
        appFunc.showToolbar('.views');
    }

    function sendFeedback(){
        hiApp.showPreloader('正在发送...');
        setTimeout(function(){
            hiApp.hidePreloader();
            hiApp.alert('感谢您的反馈，我们将尽快与您联系！');
        },1000);
    }

    return{
        init:init,
        showToolbar:showToolbar,
        sendFeedback:sendFeedback
    }
});
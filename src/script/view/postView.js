define(['utils/appFunc','utils/tplManager'],function(appFunc,TM){

    function init(params){
        appFunc.bindEvents(params.bindings);
    }

    function postMsg(){
        var text = $$('#messageText').val();

        if(appFunc.getCharLength(text) < 4){
            hiApp.alert('Er,内容有点短哦，再写点吧...');
            return;
        }

        hiApp.showPreloader('正在发送中...');

        setTimeout(function(){
            hiApp.hidePreloader();
            hiApp.closeModal('.send-popup');
            //Refresh Timeline
        },1800)
    }

    return{
        init:init,
        postMsg:postMsg
    }
});
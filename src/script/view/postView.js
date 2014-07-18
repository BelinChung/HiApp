define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    function init(params){
        appFunc.bindEvents(params.bindings);
    }

    function openSendPopup(){
        var renderData = [];
        renderData['cancel'] = i18n.global.cancel;
        renderData['send'] = i18n.global.send;
        renderData['senTweet'] = i18n.index.sen_tweet;
        renderData['sendPlaceholder'] = i18n.index.send_placeholder;

        var output = TM.renderTplById('sendPopupTemplate', renderData);
        hiApp.popup($$.trim(output));

        var bindings = [{
            element: '#sendWeiboBtn',
            event: 'click',
            handler: postMsg
        }];

        appFunc.bindEvents(bindings);
    }

    function clearSendPopup(){
        $$('#messageText').val('');
    }

    function postMsg(){
        var text = $$('#messageText').val();

        if(appFunc.getCharLength(text) < 4){
            hiApp.alert(i18n.index.err_text_too_short);
            return;
        }

        hiApp.showPreloader(i18n.index.sending);

        setTimeout(function(){
            hiApp.hidePreloader();
            hiApp.closeModal('.send-popup');
            //Refresh Timeline
        },1300)
    }

    return{
        init:init,
        postMsg:postMsg,
        openSendPopup:openSendPopup,
        clearSendPopup:clearSendPopup
    }
});
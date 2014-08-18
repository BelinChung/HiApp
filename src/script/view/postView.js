define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var postView = {

        openSendPopup: function(){
            var renderData = [];
            renderData.cancel = i18n.global.cancel;
            renderData.send = i18n.global.send;
            renderData.senTweet = i18n.index.sen_tweet;
            renderData.sendPlaceholder = i18n.index.send_placeholder;

            var output = TM.renderTplById('sendPopupTemplate', renderData);
            hiApp.popup($$.trim(output));

            var bindings = [{
                element: '#sendWeiboBtn',
                event: 'click',
                handler: postView.postMsg
            }];

            appFunc.bindEvents(bindings);
        },

        clearSendPopup: function(){
            $$('#messageText').val('');
        },

        postMsg: function(){
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
            },1300);
        }
    };

    return postView;
});
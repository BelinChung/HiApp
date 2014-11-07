define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var feedbackView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);

            appFunc.hideToolbar();
        },

        sendFeedback: function(){
            hiApp.showPreloader(i18n.index.sending);
            setTimeout(function(){
                hiApp.hidePreloader();
                hiApp.alert(i18n.setting.feed_back_result);
            },1000);
        },

        i18next: function(content){
            var renderData = {
                feedBack: i18n.setting.feed_back,
                feedBackPlaceholder: i18n.setting.feed_back_placeholder
            };

            var output = TM.renderTpl(content,renderData);

            return output;
        }

    };

    return feedbackView;
});
define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var conversationStarted = false;
    var answers = [];
    var answerTimeout;

    function init(params){
        answers = params.answers;
        appFunc.bindEvents(params.bindings);

        var name = params['query']['nickname'];
        $$('.chat-name').html(name);

        hideToolbar();

        hiApp.showIndicator();
    }

    function submitMessage(e){

        e.preventDefault();
        var input = $$(this).find('.ks-messages-input');
        var messageText = input.val();
        if (messageText.length === 0) return;

        // Empty input
        input.val('');

        // Add Message
        hiApp.addMessage({
            text: messageText,
            type: 'sent',
            day: !conversationStarted ? 'Today' : false,
            time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
        });
        conversationStarted = true;

        // Add answer after timeout
        if (answerTimeout) clearTimeout(answerTimeout);
        answerTimeout = setTimeout(function () {
            hiApp.addMessage({
                text: answers[Math.floor(Math.random() * answers.length)],
                type: 'received'
            });
        }, 1000);
    }

    function triggerSubmit(){
        $$('.ks-messages-form').trigger('submit');
    }

    function renderMessages(message){
        setTimeout(function(){
            var renderData = {
                message:message
            };
            var output = TM.renderTplById('messageTemplate',renderData);
            $$('.page[data-page="message"] .messages').html(output);

            hiApp.hideIndicator();

        },600);
    }

    function i18next(content){
        var renderData = [];
        renderData['chat'] = i18n.chat.title;
        renderData['chatPlaceholder'] = i18n.chat.chatPlaceholder;
        renderData['send'] = i18n.global.send;

        var output = TM.renderTpl(content,renderData);

        return output;
    }

    function hideToolbar(){
        appFunc.hideToolbar('.views');
    }

    return{
        init:init,
        submitMessage:submitMessage,
        triggerSubmit:triggerSubmit,
        renderMessages:renderMessages,
        i18next:i18next
    }
});
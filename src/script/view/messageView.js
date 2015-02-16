define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var conversationStarted = false;
    var answers = {};
    var answerTimeout;

    var messageView = {

        init: function(params){
            answers = params.answers;
            appFunc.bindEvents(params.bindings);

            var name = params.query.nickname;
            $$('.chat-name').html(name);

            this.hideToolbar();

            hiApp.showIndicator();
        },

        submitMessage: function(e){

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
        },

        triggerSubmit: function(){
            $$('.ks-messages-form').trigger('submit');
        },

        renderMessages: function(message){
            setTimeout(function(){
                var renderData = {
                    message:message
                };
                var output = TM.renderTplById('messageTemplate',renderData);
                $$('.page[data-page="message"] .messages').html(output);

                hiApp.hideIndicator();

            },600);
        },

        i18next: function(content){
            var renderData = {
                chat: i18n.chat.title,
                chatPlaceholder: i18n.chat.chatPlaceholder,
                send: i18n.global.send
            };

            var output = TM.renderTpl(content,renderData);

            return output;
        },

        hideToolbar: function(){
            appFunc.hideToolbar();
        }
    };

    return messageView;
});
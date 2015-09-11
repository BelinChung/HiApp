require('./message.less');

var appFunc = require('../utils/appFunc'),
    service = require('./service'),
    template = require('./message.tpl.html');

var conversationStarted = false,
    answers = {},
    answerTimeout,
    messageLayout;

module.exports = {
    init: function(query){
        var that = this;

        appFunc.hideToolbar();

        service.getAnswers(function(a){
            answers = a;

            var bindings = [{
                element: '.ks-messages-form',
                event: 'submit',
                handler: that.submitMessage
            },{
                element: '.ks-send-message',
                event: 'click',
                handler: that.triggerSubmit
            }];

            appFunc.bindEvents(bindings);

            var name = query.nickname;
            $$('.chat-name').html(name);

            // render messages
            that.renderMessages();

            // Init Messages
            messageLayout = hiApp.messages('#contactView .messages', {
                autoLayout:true
            });
        });
    },
    renderMessages: function(message){
        hiApp.showIndicator();

        service.getMessages(function(m){
            setTimeout(function(){
                var renderData = {
                    message: m
                };
                var output = appFunc.renderTpl(template, renderData);
                $$('.page[data-page="message"] .messages').html(output);

                hiApp.hideIndicator();

            },600);
        });
    },
    submitMessage: function(e){

        e.preventDefault();
        var input = $$(this).find('.ks-messages-input');
        var messageText = input.val();
        if (messageText.length === 0) return;

        // Empty input
        input.val('');

        // Add Message
        messageLayout.addMessage({
            text: messageText,
            type: 'sent',
            day: !conversationStarted ? 'Today' : false,
            time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
        });
        conversationStarted = true;

        // Add answer after timeout
        if (answerTimeout) clearTimeout(answerTimeout);
        answerTimeout = setTimeout(function () {
            messageLayout.addMessage({
                text: answers[Math.floor(Math.random() * answers.length)],
                type: 'received'
            });
        }, 1000);
    },
    triggerSubmit: function(){
        $$('.ks-messages-form').trigger('submit');
    }
};

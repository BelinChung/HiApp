define(['utils/appFunc','utils/tplManager'],function(appFunc,TM){

    var conversationStarted = false;
    var answers = [
        '不好意思，我吃饭去了，88',
        '您好，我现在有事不在，一会再和您联系。',
        '我要睡觉了，明天再聊！',
        '先洗澡去，洗完澡回头聊',
        '这话说的我不知道该怎么说好了',
        '呵呵，我先去吹个头发！',
        '我先去接个电话，等下哦',
        '有事，先下了',
        '我妈妈喊我吃饭,.等会聊.'
    ];
    var answerTimeout;

    function init(params){
        appFunc.bindEvents(params.bindings);

        var name = params['query']['nickname'];
        $$('.chat-name').html(name);

        hideToolbar();
    }

    function submitChat(e){

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
            avatar:'style/img/avatar/avatar01.jpg',
            day: !conversationStarted ? 'Today' : false,
            time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
        });
        conversationStarted = true;

        // Add answer after timeout
        if (answerTimeout) clearTimeout(answerTimeout);
        answerTimeout = setTimeout(function () {
            hiApp.addMessage({
                text: answers[Math.floor(Math.random() * answers.length)],
                avatar:'style/img/avatar/avatar02.jpg',
                type: 'received'
            });
        }, 1300);
    }

    function triggerSubmit(){
        $$('.ks-messages-form').trigger('submit');
    }

    function hideToolbar(){
        appFunc.hideToolbar('.views');
    }

    function showToolbar(){
        appFunc.showToolbar('.views');
    }

    return{
        init:init,
        showToolbar:showToolbar,
        submitChat:submitChat,
        triggerSubmit:triggerSubmit
    }
});
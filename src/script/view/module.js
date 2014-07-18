define(['view/appView',
        'view/loginView',
        'view/settingView',
        'view/aboutView',
        'view/feedbackView',
        'view/timelineView',
        'view/itemView',
        'view/postView',
        'view/contactView',
        'view/commentView',
        'view/messageView',
        'view/languageView'],function(appView,loginView,settingView,aboutView,feedbackView,timelineView,itemView,postView,contactView,commentView,messageView,languageView) {

    function module (name){

        switch (name){
            case 'appView':
                return appView;
                break;
            case 'loginView':
                return loginView;
                break;
            case 'settingView':
                return settingView;
                break;
            case 'aboutView':
                return aboutView;
                break;
            case 'feedbackView':
                return feedbackView;
                break;
            case 'timelineView':
                return timelineView;
                break;
            case 'itemView':
                return itemView;
                break;
            case 'postView':
                return postView;
                break;
            case 'contactView':
                return contactView;
                break;
            case 'commentView':
                return commentView;
                break;
            case 'messageView':
                return messageView;
                break;
            case 'languageView':
                return languageView;
                break;
        }
    }

    return{
        module:module
    }

});
define(['view/loginView',
        'view/settingView',
        'view/aboutView',
        'view/feedbackView',
        'view/timelineView',
        'view/itemView',
        'view/postView',
        'view/contactView',
        'view/commentView',
        'view/chatView'],function(loginView,settingView,aboutView,feedbackView,timelineView,itemView,postView,contactView,commentView,chatView) {

    function module (name){

        switch (name){
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
            case 'chatView':
                return chatView;
                break;
        }
    }

    return{
        module:module
    }

});
define(['controller/loginCtrl',
        'controller/settingCtrl',
        'controller/aboutCtrl',
        'controller/feedbackCtrl',
        'controller/timelineCtrl',
        'controller/itemCtrl',
        'controller/postCtrl',
        'controller/contactCtrl',
        'controller/commentCtrl',
        'controller/chatCtrl'],function(loginCtrl,settingCtrl,aboutCtrl,feedbackCtrl,timelineCtrl,itemCtrl,postCtrl,contactCtrl,commentCtrl,chatCtrl) {

     function module (name){

        switch (name){
            case 'loginCtrl':
                return loginCtrl;
                break;
            case 'settingCtrl':
                return settingCtrl;
                break;
            case 'aboutCtrl':
                return aboutCtrl;
                break;
            case 'feedbackCtrl':
                return feedbackCtrl;
                break;
            case 'timelineCtrl':
                return timelineCtrl;
                break;
            case 'itemCtrl':
                return itemCtrl;
                break;
            case 'postCtrl':
                return postCtrl;
                break;
            case 'contactCtrl':
                return contactCtrl;
                break;
            case 'commentCtrl':
                return commentCtrl;
                break;
            case 'chatCtrl':
                return chatCtrl;
                break;
        }
    }

    return{
        module:module
    }

});
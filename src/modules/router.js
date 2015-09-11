var index = require('./app/app');

module.exports = {
    preprocess: function(content,url){
        if(!url) return false;

        url = url.split('?')[0] ;

        var viewName, output;

        switch (url) {
            case 'index.html':
                viewName = 'appView';
                output = index.i18next(content);
                break;
            case 'page/login.html':
                viewName = 'loginView';
                break;
            case 'page/about.html':
                viewName = 'aboutView';
                break;
            case 'page/feedback.html':
                viewName = 'feedbackView';
                break;
            case 'page/item.html':
                viewName = 'itemView';
                break;
            case 'page/message.html':
                viewName = 'messageView';
                break;
            case 'page/language.html':
                viewName = 'languageView';
                break;
            default :
                return content;
        }
        return output;
    }
};
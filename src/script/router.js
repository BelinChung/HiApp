define(['GS','controller/module'],function(GS,CM) {

    function init() {
        $$(document).on('pageBeforeInit', function (e) {
            var page = e.detail.page;
            pageBeforeInit(page);
        });

        $$(document).on('pageAfterAnimation', function (e) {
            var page = e.detail.page;
            console.log(page);
            pageAfterAnimation(page);
        });

        if(!GS.isLogin()){
            mainView.loadPage('page/login.html');
        }else{
            mainView.loadPage('index.html')
        }
    }

    function pageAfterAnimation(page){
        var name = page.name;
        var query = page.query;
        var from = page.from;
        switch (name) {
            case 'login':
                if (from === 'left') return;
                CM.module('loginCtrl').setCopyRightPosition();
                break;
        }
    }


	function pageBeforeInit(page) {
        var name = page.name;
        var query = page.query;
        var from = page.from;
        switch (name) {
            case 'login':
                if(from === 'left') return;
                CM.module('loginCtrl').init();
                break;
            case 'ourView':
                if(from === 'left') return;
                CM.module('timelineCtrl').init();
                CM.module('postCtrl').init();
                CM.module('contactCtrl').init();
                CM.module('settingCtrl').init();
                break;
            case 'about':
                CM.module('aboutCtrl').init();
                break;
            case 'feedback':
                CM.module('feedbackCtrl').init();
                break;
            case 'item':
                CM.module('itemCtrl').init(query);
                CM.module('commentCtrl').init();
                break;
            case 'message':
                CM.module('messageCtrl').init(query);
                break;
            case 'language':
                CM.module('languageCtrl').init(query);
                break;
        }
	}

    function preprocess(content,url){
        if(!url) return false;

        url = url.split('?')[0] ;

        switch (url) {
            case 'index.html':
                var viewName = 'appView';
                break;
            case 'page/login.html':
                var viewName = 'loginView';
                break;
            case 'page/about.html':
                var viewName = 'aboutView';
                break;
            case 'page/feedback.html':
                var viewName = 'feedbackView';
                break;
            case 'page/item.html':
                var viewName = 'itemView';
                break;
            case 'page/message.html':
                var viewName = 'messageView';
                break;
            case 'page/language.html':
                var viewName = 'languageView';
                break;
            default :
                return content;
        }
        var output = CM.module('appCtrl').i18next(viewName,content);
        return output;

    }

    return {
        init: init,
        preprocess:preprocess
    };
});
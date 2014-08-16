define(['GS','controller/module'],function(GS,CM) {

    var router = {

        init: function() {
            $$(document).on('pageBeforeInit', function (e) {
                var page = e.detail.page;
                router.pageBeforeInit(page);
            });

            $$(document).on('pageAfterAnimation', function (e) {
                var page = e.detail.page;
                console.log(page);
                router.pageAfterAnimation(page);
            });

            if(!GS.isLogin()){
                mainView.loadPage('page/login.html');
            }else{
                mainView.loadPage('index.html',false);
            }

            //remove 'hidden-navbar' class
            $$('div.views').removeClass('hidden-navbar');
        },

        pageAfterAnimation: function(page){
            var name = page.name;
            var query = page.query;
            var from = page.from;
            switch (name) {
                case 'login':
                    if (from === 'left') return;
                    CM.module('loginCtrl').setCopyRightPosition();
                    break;
            }
        },

        pageBeforeInit: function(page) {
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
        },

        preprocess: function(content,url){
            if(!url) return false;

            url = url.split('?')[0] ;

            var viewName;

            switch (url) {
                case 'index.html':
                    viewName = 'appView';
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
            var output = CM.module('appCtrl').i18next(viewName,content);
            return output;

        }

    };

    return router;
});
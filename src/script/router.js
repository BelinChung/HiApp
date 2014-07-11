define(['GS','controller/module'],function(GS,CM) {

    function init() {
        $$(document).on('pageBeforeInit', function (e) {
            var page = e.detail.page;
            console.log(page);
            load(page);
        });

        if(!GS.isLogin()){
            mainView.loadPage('page/login.html');
        }else{
            mainView.loadPage('index.html');
        }
    }

	function load(page) {
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
            case 'chat':
                CM.module('chatCtrl').init(query);
                break;
        }
	}

    return {
        init: init
    };
});
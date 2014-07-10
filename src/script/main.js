require.config({
    paths: {
    	text:'../vendors/require/text',
        Framework7:'../vendors/framework7/framework7',
        mustache:'../vendors/mustache/mustache',
        fileUpload:'../vendors/plugin/fileupload',
        GTPL:'../page/global.tpl.html',
        GS:'services/globalService'
    },
    shim: {
        'Framework7':{exports: 'Framework7'}
    }
});

require(['Framework7','router'], function(Framework7,router) {

    window.$$ = Framework7.$;

    window.hiApp = new Framework7({
        pushState: false,
        popupCloseByOutside:false,
        animateNavBackIcon: true,
        modalTitle:'系统消息',
        modalButtonOk:'确定',
        modalButtonCancel:'取消'
    });

    window.mainView = hiApp.addView('#ourView', {
        dynamicNavbar: true
    });

    window.contatcView = hiApp.addView('#contatcView', {
        dynamicNavbar: true
    });

    window.settingView = hiApp.addView('#settingView', {
        dynamicNavbar: true
    });

    router.init();
});

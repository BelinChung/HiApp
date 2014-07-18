(function() {
    var lang = localStorage.getItem('lang') || 'en-us';
    require.config({
        locale: lang,
        paths: {
            text:'../vendors/require/text',
            i18n:'../vendors/require/i18n',
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

    require(['Framework7','router','i18n!nls/lang'], function(Framework7,router,i18n) {

        window.$$ = Framework7.$;

        window.hiApp = new Framework7({
            pushState: false,
            popupCloseByOutside:false,
            animateNavBackIcon: true,
            modalTitle: i18n.global.modal_title,
            modalButtonOk: i18n.global.modal_button_ok,
            modalButtonCancel: i18n.global.cancel,
            preprocess:router.preprocess
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
})();

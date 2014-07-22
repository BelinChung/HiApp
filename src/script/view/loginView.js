define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){


    function init(params){
        appFunc.hideToolbar('.views');
        appFunc.bindEvents(params.bindings);
    }

    function setCopyRightPosition(){
        var documentHeight = $$('html').height() - 44;
        var contentHeight = 0;
        $$('.page-content .content-block').each(function(){
            contentHeight += $$(this).outerHeight();
        });

        var copyRightHeight = $$('.page-content .copyright').outerHeight(true);

        var paddingTop = documentHeight - contentHeight - 140 - copyRightHeight;

        $$('.page-content .copyright').css('top',paddingTop + 'px').transition(300);
    }

    function i18next(content){
        var renderData = [];
        renderData.appName = i18n.app.name;
        renderData.loginnamePlaceholder = i18n.login.loginname_placeholder;
        renderData.passwordPlaceholder = i18n.login.password_placeholder;
        renderData.loginBtn = i18n.login.login_btn;
        renderData.signUp = i18n.login.sign_up;
        renderData.forgotPwd = i18n.login.forgot_pwd;
        renderData.language = i18n.global.language;

        var output = TM.renderTpl(content,renderData);
        return output;
    }

    return{
        init:init,
        setCopyRightPosition:setCopyRightPosition,
        i18next:i18next
    };
});
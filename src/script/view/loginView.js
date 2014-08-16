define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var loginView = {

        init: function(params){
            appFunc.hideToolbar('.views');
            appFunc.bindEvents(params.bindings);
        },

        setCopyRightPosition: function(){
            var documentHeight = $$('html').height() - 44;
            var contentHeight = 0;
            $$('.page-content .content-block').each(function(){
                contentHeight += $$(this).outerHeight();
            });

            var copyRightHeight = $$('.page-content .copyright').outerHeight(true);

            var paddingTop = documentHeight - contentHeight - 140 - copyRightHeight;

            $$('.page-content .copyright').css('top',paddingTop + 'px').transition(300);
        },

        i18next: function(content){
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

    };

    return loginView;
});
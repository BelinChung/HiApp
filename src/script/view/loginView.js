define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var loginView = {

        init: function(params){
            appFunc.hideToolbar('.views');
            appFunc.bindEvents(params.bindings);
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
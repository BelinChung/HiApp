define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var loginView = {

        init: function(params){
            appFunc.hideToolbar();
            appFunc.bindEvents(params.bindings);
        },

        i18next: function(content){
            var renderData = {
                appName: i18n.app.name,
                loginnamePlaceholder: i18n.login.loginname_placeholder,
                passwordPlaceholder: i18n.login.password_placeholder,
                loginBtn: i18n.login.login_btn,
                signUp: i18n.login.sign_up,
                forgotPwd: i18n.login.forgot_pwd,
                language: i18n.global.language
            };

            var output = TM.renderTpl(content,renderData);
            return output;
        }

    };

    return loginView;
});
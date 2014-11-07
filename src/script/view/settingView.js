define(['utils/appFunc','utils/tplManager','GS','i18n!nls/lang'],function(appFunc,TM,GS,i18n){

    /* global $CONFIG */

    var settingView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
        },

        renderSetting: function(user){
            var renderData = {
                avatarUrl: user.avatarUrl,
                nickName: user.nickName,
                points: user.points,
                i18nNickName: i18n.setting.nickname,
                i18nPoints: i18n.setting.points,
                feedBack: i18n.setting.feed_back,
                checkUpdate: i18n.setting.check_update,
                about: i18n.setting.about,
                language: i18n.global.language,
                loginOut: i18n.setting.login_out
            };

            var output = TM.renderTplById('settingTemplate', renderData);
            $$('#settingView .page[data-page="setting"]').html(output);

            var bindings = [{
                element: '.logout-button',
                event: 'click',
                handler: settingView.logOut
            },{
                element: '#settingView .update-button',
                event: 'click',
                handler: settingView.checkVersion
            }];

            appFunc.bindEvents(bindings);

            hiApp.hideIndicator();
        },

        logOut: function(){
            hiApp.confirm(i18n.setting.confirm_logout,function(){
                GS.removeCurrentUser();

                mainView.router.loadPage('page/login.html');
                hiApp.showTab('#ourView');
            });
        },

        checkVersion: function(){
            var version = $CONFIG.version;
            var releaseTime = $CONFIG.release_time;
            hiApp.alert(i18n.setting.current_version + ' V' + version + '<br/>[ ' + releaseTime + ' ]');
        }

    };

    return settingView;
});
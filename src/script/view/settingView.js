define(['utils/appFunc','utils/tplManager','GS','i18n!nls/lang'],function(appFunc,TM,GS,i18n){

    /* global $CONFIG */

    var settingView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
        },

        renderSetting: function(user){
            var renderData = [];
            renderData.avatarUrl = user.avatarUrl;
            renderData.nickName = user.nickName;
            renderData.points = user.points;

            //i18n
            renderData.i18nNickName = i18n.setting.nickname;
            renderData.i18nPoints = i18n.setting.points;
            renderData.feedBack = i18n.setting.feed_back;
            renderData.checkUpdate = i18n.setting.check_update;
            renderData.about = i18n.setting.about;
            renderData.language = i18n.global.language;
            renderData.loginOut = i18n.setting.login_out;

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

                mainView.loadPage('page/login.html');
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
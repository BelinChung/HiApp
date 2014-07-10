define(['utils/appFunc','utils/tplManager','GS'],function(appFunc,TM,GS){

    function init(params){
        appFunc.bindEvents(params.bindings);
    }

    function renderUser(renderData){
        var output = TM.renderTplById('userInfoTemplate', renderData);
        $$('#userInfo').html(output);
    }

    function logOut(){
        hiApp.confirm("你确定要退出登录吗？",function(){
            GS.removeCurrentUser();

            mainView.loadPage('page/login.html');
            hiApp.showTab('#ourView');
        });
    }

    return{
        init:init,
        logOut:logOut,
        renderUser:renderUser
    }
});
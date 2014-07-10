define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element: '.logout-button',
        event: 'click',
        handler: logout
    },{
        element: '#settingView .update-button',
        event: 'click',
        handler: checkVersion
    }];

    function init(){
        VM.module('settingView').init({
            bindings:bindings
        });

        renderUser();
    }

    function renderUser(){
        xhr.simpleCall({
            query:{
                callback:'?'
            },
            func:'user_login'
        },function(response) {
            if (response['err_code'] === 0) {
                var user = response['data']['user'];
                var renderData = {
                    user: user
                };
                VM.module('settingView').renderUser(renderData);
            }
        })
    }

    function logout(){
        VM.module('settingView').logOut();
    }

    function checkVersion(){
        var version = $CONFIG['version'];
        var releaseTime = $CONFIG['release_time'];
        hiApp.alert("当前版本为 V"+version+"<br/>[ "+releaseTime+" ]");
    }

    return{
        init:init
    }
});
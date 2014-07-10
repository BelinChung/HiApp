define(['utils/appFunc','utils/xhr','view/module','GS'],function(appFunc,xhr,VM,GS){

    var bindings = [{
        element: '.login-submit',
        event: 'click',
        handler: loginSubmit
    }];

    function init(){
        VM.module('loginView').init({
            bindings:bindings
        });
    }

    function loginSubmit(){
        var loginName = $$('input.login-name').val();
        var password = $$('input.password').val();
        if(loginName === "" || password === ""){
            hiApp.alert("账户或密码不能为空！");
        }else if(!appFunc.isEmail(loginName)){
            hiApp.alert("登录账户必须是Email");
        }else{
            hiApp.showPreloader('正在登录...');

            xhr.simpleCall({
                query:{
                    callback:'?'
                },
                func:'user_login',
                data:{
                    loginname:loginName,
                    password:password
                }
            },function(response){
                if(response['err_code'] === 0){

                    var login = response['data'];
                    GS.setCurrentUser(login['sid'],login['user']);
                    mainView.loadPage('index.html');
                    hiApp.hidePreloader();
                }else{
                    hiApp.hidePreloader();
                    hiApp.alert(response['err_msg']);
                }
            });
        }
    }

    return{
        init:init
    }
});
define([], function() {
    var CONFIG = null;

    function _init(){
        if (!CONFIG) {
            CONFIG = {};
            CONFIG.currentUser = {};
            if (localStorage.getItem('sid')) {
                CONFIG.currentUser.sid = localStorage.getItem('sid');
            }
            if(localStorage.getItem('user')){
                CONFIG.currentUser = JSON.parse(localStorage.getItem('user'));
            }
        }
    }

    _init();

    function getCurrentUser(){
        return CONFIG.currentUser;
    }

    function getSid(){
        var m = $$.parseUrlQuery(window.location.href || '');
        return m.sid || localStorage.getItem('sid');
    }

    function setCurrentUser(sid,user){
        CONFIG.currentUser = user;
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('sid',sid);
    }

    function removeCurrentUser(){
        CONFIG.currentUser = {};
        localStorage.removeItem('user');
        localStorage.removeItem('sid');
    }

    function isLogin(){
        if( CONFIG.currentUser && localStorage.getItem('sid'))
            return true;
        else
            return false;
    }

    return{
        getCurrentUser:getCurrentUser,
        setCurrentUser:setCurrentUser,
        removeCurrentUser:removeCurrentUser,
        isLogin:isLogin,
        getSid:getSid
    };
});
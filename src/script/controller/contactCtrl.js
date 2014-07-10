define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element:'#contatcView',
        event: 'show',
        handler:loadContacts
    },{
        element:'#contatcView .contact-page',
        event: 'search',
        handler:VM.module('contactView').filterResult
    }];

    function init(){
        VM.module('contactView').init({
            bindings:bindings
        });
    }

    function loadContacts() {
        if(VM.module('contactView').beforeLoadContacts()) {
            xhr.simpleCall({
                query: {
                    callback: '?'
                },
                func: 'contacts'
            }, function (response) {
                if (response['err_code'] === 0) {
                    VM.module('contactView').render({
                        contacts: response['data']
                    });
                }
            })
        }
    }

    return{
        init:init
    }
});
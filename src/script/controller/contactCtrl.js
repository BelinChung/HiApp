define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var contactCtrl = {

        init: function(){

            var bindings = [{
                element:'#contatcView',
                event: 'show',
                handler:contactCtrl.loadContacts
            },{
                element:'#contatcView .contact-page',
                event: 'search',
                handler:VM.module('contactView').filterResult
            }];

            VM.module('contactView').init({
                bindings:bindings
            });
        },

        loadContacts: function() {
            if(VM.module('contactView').beforeLoadContacts()) {
                xhr.simpleCall({
                    query: {
                        callback: '?'
                    },
                    func: 'contacts'
                }, function (response) {
                    if (response.err_code === 0) {
                        VM.module('contactView').render({
                            contacts: response.data
                        });
                    }
                });
            }
        }

    };

    return contactCtrl;
});
define(['utils/appFunc',
        'utils/xhr',
        'view/module',
        'i18n!nls/lang'],function(appFunc,xhr,VM,i18n){

    var postCtrl = {

        bindEvent: function(){
            var bindings = [{
                element: '.send-popup',
                event: 'open',
                handler: VM.module('postView').clearSendPopup
            },{
                element: document,
                selector: '#uploadPicPreview>img',
                event: 'click',
                handler: postCtrl.clearChosenImage
            }];

            appFunc.bindEvents(bindings);
        },

        clearChosenImage: function(){
            hiApp.confirm(i18n.camera.confirm_clear_image,function(){
                $$('#uploadPicPreview>img').attr('src','');
                $$('#uploadPicPreview').hide();

                localStorage.removeItem('imageUrl');
            });
        }
    };

    postCtrl.bindEvent();

    return postCtrl;
});
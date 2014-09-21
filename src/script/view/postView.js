define(['utils/appFunc',
        'i18n!nls/lang',
        'utils/tplManager',
        'components/geolocation',
        'components/camera'],function(appFunc,i18n,TM,geo,camera){

    var postView = {

        openSendPopup: function(){
            var renderData = {
                cancel: i18n.global.cancel,
                send: i18n.global.send,
                senTweet: i18n.index.sen_tweet,
                sendPlaceholder: i18n.index.send_placeholder,
                loadingGeo: i18n.geo.loading_geo
            };

            var output = TM.renderTplById('sendPopupTemplate', renderData);
            hiApp.popup($$.trim(output));

            var bindings = [{
                element: '#sendWeiboBtn',
                event: 'click',
                handler: postView.postMsg
            },{
                element: 'div.message-tools .get-position',
                event: 'click',
                handler: geo.catchGeoInfo
            },{
                element: '#geoInfo',
                event: 'click',
                handler: geo.cleanGeo
            },{
                element: 'div.message-tools .image-upload',
                event: 'click',
                handler: camera.getPicture
            }];

            appFunc.bindEvents(bindings);
        },

        clearSendPopup: function(){
            $$('#messageText').val('');
            $$('#uploadPicPreview>img').attr('src','');
            $$('#uploadPicPreview').hide();
        },

        postMsg: function(){
            var text = $$('#messageText').val();

            if(appFunc.getCharLength(text) < 4){
                hiApp.alert(i18n.index.err_text_too_short);
                return;
            }

            var imgSrc = $$('#uploadPicPreview>img').attr('src');

            if(imgSrc.length > 4){
                camera.startUpload(imgSrc);
            }else {

                hiApp.showPreloader(i18n.index.sending);

                setTimeout(function () {
                    hiApp.hidePreloader();
                    hiApp.closeModal('.send-popup');
                    //Refresh Timeline
                }, 1300);
            }
        }
    };

    return postView;
});
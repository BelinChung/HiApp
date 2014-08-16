define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var timelineCtrl = {

        init: function(){

            var bindings = [{
                element: '#ourView .pull-to-refresh-content',
                event: 'refresh',
                handler: timelineCtrl.refreshTimeline
            },{
                element: '#ourView .pull-to-refresh-content',
                event: 'infinite',
                handler: timelineCtrl.infiniteTimeline
            },{
                element: '#ourView .refresh-click',
                event: 'click',
                handler: VM.module('timelineView').refreshTimelineByClick
            },{
                element: '#ourView .open-send-popup',
                event: 'click',
                handler:VM.module('postView').openSendPopup
            }];

            VM.module('timelineView').init({
                bindings:bindings
            });

            this.getTimeline();
        },

        getTimeline: function(){
            xhr.simpleCall({
                func:'timeline'
            },function(response){
                VM.module('timelineView').getTimeline(response.data);
            });
        },

        refreshTimeline: function(){
            xhr.simpleCall({
                func:'refresh_timeline'
            },function(response){
                VM.module('timelineView').refreshTimeline(response.data);
            });
        },

        infiniteTimeline: function(){
            var $dom = $$(this);
            xhr.simpleCall({
                func:'more_timeline'
            },function(response){
                VM.module('timelineView').infiniteTimeline({
                    data:response.data,
                    $dom:$dom
                });
            });
        }
    };

    return timelineCtrl;
});
define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element: '#ourView .pull-to-refresh-content',
        event: 'refresh',
        handler:refreshTimeline
    },{
        element: '#ourView .pull-to-refresh-content',
        event: 'infinite',
        handler:infiniteTimeline
    },{
        element: '#ourView .refresh-click',
        event: 'click',
        handler:refreshTimelineByClick
    },{
        element: '#ourView .open-send-popup',
        event: 'click',
        handler:VM.module('postView').openSendPopup
    }];

    function init(){
        VM.module('timelineView').init({
            bindings:bindings
        });
        getTimeline();
    }

    function getTimeline(){
        xhr.simpleCall({
            func:'timeline'
        },function(response){
            VM.module('timelineView').getTimeline(response['data']);
        })
    }

    function refreshTimeline(){
        xhr.simpleCall({
            func:'refresh_timeline'
        },function(response){
            VM.module('timelineView').refreshTimeline(response['data']);
        })
    }

    function refreshTimelineByClick(){
        VM.module('timelineView').beforeRefreshTimelineByClick();
        $$('#ourView .pull-to-refresh-content').scrollTop(0,300);
        refreshTimeline();
    }

    function infiniteTimeline(){
        var $dom = $$(this);
        xhr.simpleCall({
            func:'more_timeline'
        },function(response){
            VM.module('timelineView').infiniteTimeline({
                data:response['data'],
                $dom:$dom
            });
        })
    }

    return{
        init:init
    }
});
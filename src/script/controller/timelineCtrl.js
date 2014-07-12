define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element: '.send-popup',
        event: 'open',
        handler: VM.module('timelineView').clearSendPopup
    },{
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
    }
    ];

    function init(){
        VM.module('timelineView').init({
            bindings:bindings
        });
        getTimeline();
    }

    function getTimeline(){
        xhr.simpleCall({
            query:{
                callback:'?'
            },
            func:'timeline'
        },function(response){
            VM.module('timelineView').getTimeline(response['data']);
        })
    }

    function refreshTimeline(){
        xhr.simpleCall({
            query:{
                callback:'?'
            },
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
            query:{
                callback:'?'
            },
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
require('./home.less');

var service = require('./service'),
    appFunc = require('../utils/appFunc'),
    template = require('./home.tpl.html'),
    inputModule = require('../input/input');

var home = {
    init: function(){
        this.getTimeline();
        this.bindEvent();
    },
    getTimeline: function(){
        var that = this;

        service.getTimeline(function(tl){
            that.renderTimeline(tl);

            hiApp.hideIndicator();

            //Unlock scroll loading status
            var ptrContent = $$('#homeView').find('.pull-to-refresh-content');
            ptrContent.data('scrollLoading','unloading');
        });
    },
    refreshTimeline: function(){

        service.refreshTimeline(function(tl){
            // Find newest msg id in ptrContent;

            home.refreshItemTime();

            var newestId = $$('#homeView').find('.home-timeline .card'). eq(0).data('id');

            setTimeout(function () {

                $$('#homeView .refresh-click').find('i').removeClass('ios7-reloading');

                if(parseInt(newestId) === 48) {
                    home.showLoadResult(i18n.index.nothing_loaded);
                    hiApp.pullToRefreshDone();
                    return false;
                }

                var length = tl.length;

                if(length >= 15){
                    home.renderTimeline(tl);
                }else if(length > 0){
                    home.renderTimeline(tl, 'prepend');
                }else{
                    home.showLoadResult(i18n.index.nothing_loaded);
                }

                hiApp.pullToRefreshDone();

            },1500);

        });
    },
    infiniteTimeline: function(){
        var $this = $$(this);

        hiApp.showIndicator();
        service.infiniteTimeline(function(tl){
            var status = $this.data('scrollLoading');
            if (status === 'loading') return;

            $this.data('scrollLoading','loading');

            var items = $this.find('.home-timeline .card');
            var length = items.length;
            var lastId = items.eq(length - 1).data('id');
            if(parseInt(lastId) === 24){
                hiApp.detachInfiniteScroll($this);
                hiApp.hideIndicator();
            }else{

                setTimeout(function(){
                    $this.data('scrollLoading','unloading');
                    home.renderTimeline(tl, 'append');

                    hiApp.hideIndicator();
                },1500);
            }
        });
    },
    refreshTimelineByClick: function(){
        setTimeout(function(){
            $$('#homeView .refresh-click').find('i').addClass('ios7-reloading');
        },350);

        $$('#homeView .pull-to-refresh-content').scrollTop(0,300);

        hiApp.pullToRefreshTrigger('#homeView .pull-to-refresh-content');
    },
    showLoadResult: function(text){
        setTimeout(function(){
            $$('#homeView .load-result').html(text).css('opacity','1').transition(1000);

            setTimeout(function(){
                $$('#homeView .load-result').css('opacity','0').transition(1000);
            },2100);
        },400);
    },
    refreshItemTime:function(){
        $$('#homeView').find('.card .ks-facebook-date').each(function(){
            var nowTime = appFunc.timeFormat($$(this).data('time'));
            $$(this).html(nowTime);
        });
    },
    photoBrowser: function(){

        var url = $$(this).attr('src');

        var myPhotoBrowser = hiApp.photoBrowser({
            photos: [url],
            toolbar: false,
            backLinkText: i18n.global.close
        });

        myPhotoBrowser.open();

    },
    renderTimeline: function(tl, type){
        var renderData = {
            timeline: tl,
            finalText: function(){
                return appFunc.matchUrl(this.text);
            },
            time: function(){
                return appFunc.timeFormat(this.created_at);
            }
        };
        var output = appFunc.renderTpl(template, renderData);
        if(type === 'prepend'){
            $$('#homeView').find('.home-timeline').prepend(output);
        }else if(type === 'append') {
            $$('#homeView').find('.home-timeline').append(output);
        }else {
            $$('#homeView').find('.home-timeline').html(output);
        }
    },
    openItemPage: function(e){
        if(e.target.nodeName === 'A' || e.target.nodeName === 'IMG'){
            return false;
        }
        var itemId = $$(this).data('id');
        homeF7View.router.loadPage('page/tweet.html?id=' + itemId);
    },
    bindEvent: function(){

        var bindings = [{
            element: '#homeView',
            selector: '.pull-to-refresh-content',
            event: 'refresh',
            handler: this.refreshTimeline
        },{
            element: '#homeView',
            selector: '.pull-to-refresh-content',
            event: 'infinite',
            handler: this.infiniteTimeline
        },{
            element: '#homeView',
            selector: '.refresh-click',
            event: 'click',
            handler: this.refreshTimelineByClick
        },{
            element: '#homeView',
            selector: 'a.open-send-popup',
            event: 'click',
            handler: inputModule.openSendPopup
        },{
            element: '#homeView',
            selector: '.home-timeline .ks-facebook-card',
            event: 'click',
            handler: this.openItemPage
        },{
            element: '#homeView',
            selector:'div.card-content .item-image>img',
            event: 'click',
            handler: this.photoBrowser
        }];

        appFunc.bindEvents(bindings);
    }
};

module.exports = home;
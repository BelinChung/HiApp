define(['utils/appFunc','utils/tplManager'],function(appFunc,TM){

    function init(params){
        appFunc.bindEvents(params.bindings);
    }

    function commentPopup(params){
        var renderData = [];
        if(params.name){
            renderData['title'] = '回复评论';
            renderData['placeholder'] = '回复@' + params.name + ':';
        }else {
            renderData['title'] = '评论';
            renderData['placeholder'] = 'Er,评论...';
        }

        var output = TM.renderTplById('commentPopupTemplate', renderData);
        hiApp.popup($$.trim(output));

        var bindings = [{
            element:'#commentBtn',
            event: 'click',
            handler:sendComment
        }];

        appFunc.bindEvents(bindings);
    }

    function sendComment(){

        var text = $$('#commentText').val();

        if(appFunc.getCharLength(text) < 4){
            hiApp.alert('评论内容有点少哦！');
            return false;
        }

        hiApp.showPreloader('评论中...');

        setTimeout(function(){
            hiApp.hidePreloader();
            hiApp.closeModal('.comment-popup');

            //Refresh comment content
        },1500)

    }

    function render(params){
        setTimeout(function(){
            var renderData = {
                comments:params.comments,
                rtime:function(){
                    return appFunc.timeFormat(this.time);
                }
            };
            var output = TM.renderTplById('commentsTemplate',renderData);
            $$('#commentContent').html(output);

            var bindings = [{
                element:'#commentContent .comment-item',
                event: 'click',
                handler:createActionSheet
            }];

            appFunc.bindEvents(bindings);

        },1500);
    }

    function createActionSheet(){
        var replyName = $$(this).find('.comment-detail .name').html();
        var buttons1 = [
            {
                text: '回复评论',
                bold: true,
                onClick:function(){
                    commentPopup({name:replyName});
                }
            },
            {
                text: '复制评论',
                bold: true
            }
        ];
        var buttons2 = [
            {
                text: '取消',
                red: true
            }
        ];

        var groups = [buttons1, buttons2];
        hiApp.actions(groups);
    }

    return{
        init:init,
        render:render,
        commentPopup:commentPopup,
        createActionSheet:createActionSheet
    }
});
define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var commentView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
        },

        commentPopup: function(params){
            var renderData = {
                cancel: i18n.global.cancel,
                comment: i18n.timeline.comment,
                send: i18n.global.send
            };

            if(params.name){
                renderData.title = i18n.comment.reply_comment;
                renderData.placeholder = i18n.comment.reply + '@' + params.name + ':';
            }else {
                renderData.title = i18n.timeline.comment;
                renderData.placeholder = i18n.comment.placeholder;
            }

            var output = TM.renderTplById('commentPopupTemplate', renderData);
            hiApp.popup($$.trim(output));

            var bindings = [{
                element:'#commentBtn',
                event: 'click',
                handler: commentView.sendComment
            }];

            appFunc.bindEvents(bindings);
        },

        sendComment: function(){

            var text = $$('#commentText').val();

            if(appFunc.getCharLength(text) < 4){
                hiApp.alert(i18n.index.err_text_too_short);
                return false;
            }

            hiApp.showPreloader(i18n.comment.commenting);

            setTimeout(function(){
                hiApp.hidePreloader();
                hiApp.closeModal('.comment-popup');

                //Refresh comment content
            },1500);

        },

        render: function(params){
            setTimeout(function(){
                var renderData = {
                    comments:params.comments,
                    emptyComment:i18n.comment.empty_comment,
                    rtime:function(){
                        return appFunc.timeFormat(this.time);
                    }
                };
                var output = TM.renderTplById('commentsTemplate',renderData);
                $$('#commentContent').html(output);

                var bindings = [{
                    element:'#commentContent .comment-item',
                    event: 'click',
                    handler: commentView.createActionSheet
                }];

                appFunc.bindEvents(bindings);

            },1500);
        },

        createActionSheet: function(){
            var replyName = $$(this).find('.comment-detail .name').html();
            var buttons1 = [
                {
                    text: i18n.comment.reply_comment,
                    bold: true,
                    onClick:function(){
                        commentView.commentPopup({name:replyName});
                    }
                },
                {
                    text: i18n.comment.copy_comment ,
                    bold: true
                }
            ];
            var buttons2 = [
                {
                    text: i18n.global.cancel,
                    color: 'red'
                }
            ];

            var groups = [buttons1, buttons2];
            hiApp.actions(groups);
        }

    };

    return commentView;
});
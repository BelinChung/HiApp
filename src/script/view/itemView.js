define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var itemView = {

        init: function(params){
            appFunc.hideToolbar();
            appFunc.bindEvents(params.bindings);

            var id = params.query.id;
            this.getItem(id);
        },

        getItem: function(id){

            var $this = $$('.time-line-content .item-content[data-id="'+ id +'"]');

            var item = {
                id: $this.data('id'),
                nickname: $this.find('.item-header .detail .nickname').html(),
                avatar: $this.find('.item-header .avatar>img').data('avatarid'),
                time: appFunc.timeFormat($this.find('.item-header .detail .create-time').data('time')),
                text: $this.find('.item-subtitle').html()
            };

            if($this.find('.item-image img')[0])
                item.image = $this.find('.item-image img').attr('src');

            var output = TM.renderTplById('itemTemplate',item);

            $$('#itemContent').html(output);
        },

        i18next: function(content){
            var renderData = {
                back: i18n.global.back,
                title: i18n.item.title,
                comment: i18n.timeline.comment,
                forward: i18n.timeline.forward
            };

            var output = TM.renderTpl(content,renderData);

            return output;
        }

    };

    return itemView;
});
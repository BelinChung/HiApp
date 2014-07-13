define(['utils/appFunc','utils/tplManager'],function(appFunc,TM){

    function init(params){
        appFunc.hideToolbar('.views');
        appFunc.bindEvents(params.bindings);

        var id = params['query']['id'];
        getItem(id);
    }

    function getItem(id){

        var $this = $$('.time-line-content .item-content[data-id="'+ id +'"]');

        var item = [];
        item['id'] = $this.data('id');
        item['nickname'] = $this.find('.item-header .detail .nickname').html();
        item['avatar'] = $this.find('.item-header .avatar>img').data('avatarid');
        item['time'] = appFunc.timeFormat($this.find('.item-header .detail .create-time').data('time'));
        item['text'] = $this.find('.item-subtitle').html();

        if($this.find('.item-image img')[0])
            item['image'] = $this.find('.item-image img').attr('src');

        var output = TM.renderTplById('itemTemplate',item);

        $$('#itemContent').html(output);
    }

    function showToolbar(){
        appFunc.showToolbar('.views');
    }

    return{
        init:init,
        showToolbar:showToolbar
    }
});
define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    function i18next(content){
        var renderData = [];
        renderData['i'] = i18n.app.name;

        var output = TM.renderTpl(content,renderData);

        $$('.views .i18n').each(function(){
            var i18nKey = $$(this).data('i18n');
            var handle = i18nKey.split(']');
            if(handle.length > 1 ){
                var attr = handle[0].replace('[','');
                var value = i18nValue(handle[1]);
                $$(this).attr(attr,value);
            }else{
                var value = i18nValue(i18nKey);
                $$(this).html(value);
            }
        });

        return output;
    }

    function i18nValue(key){

        var keys = key.split(".");

        var value;
        for (var idx = 0, size = keys.length; idx < size; idx++)
        {
            if (value != null)
            {
                value = value[keys[idx]];
            } else {
                value = i18n[keys[idx]];
            }

        }
        return value;
    }

    function showToolbar(){
        appFunc.showToolbar('.views');
    }

    function hideToolbar(){
        appFunc.hideToolbar('.views');
    }

    return{
        i18next:i18next,
        showToolbar:showToolbar,
        hideToolbar:hideToolbar
    }
});
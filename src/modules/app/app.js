var appFunc = require('../utils/appFunc'),
    home = require('../home/home');

module.exports = {
    init: function(){
        this.i18next('');
        home.init();
    },

    i18next: function(content){
        var that = this;

        var renderData = {};

        var output = appFunc.renderTpl(content,renderData);

        $$('.views .i18n').each(function(){
            var value;
            var i18nKey = $$(this).data('i18n');
            var handle = i18nKey.split(']');
            if(handle.length > 1 ){
                var attr = handle[0].replace('[','');
                value = that.i18nValue(handle[1]);
                $$(this).attr(attr,value);
            }else{
                value = that.i18nValue(i18nKey);
                $$(this).html(value);
            }
        });

        return output;
    },

    i18nValue: function(key){

        var keys = key.split('.');

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
};
define(['text!GTPL'],function(GTPL){

    var $$ = Dom7;
    var t7 = Template7;

    var tplManager = {

        init: function(){
            $$('body').append(GTPL);
        },

        loadTpl: function(id){
            var tpl = $$('#' + id).html();
            return tpl;
        },

        renderRemoteTpl: function(tplName,renderData,callback){
            tplName = tplName || '';
            $$.get('page/' + tplName + '.tpl.html' ,function(markup){
                var compiledTemplate = t7.compile(markup);
                var output = compiledTemplate(renderData);

                typeof(callback === 'function') ? callback(output) : null;
            });

        },

        renderTpl: function(markup,renderData){
            var compiledTemplate = t7.compile(markup);
            var output = compiledTemplate(renderData);
            return output;
        },

        renderTplById: function(tplId,renderData){
            var markup = this.loadTpl(tplId);
            var compiledTemplate = t7.compile(markup);
            var output = compiledTemplate(renderData);
            return output;
        }

    };

    tplManager.init();

    return tplManager;
});
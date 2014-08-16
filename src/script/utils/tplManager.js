define(['text!GTPL','mustache'],function(GTPL,mustache){

    var $$ = Dom7;

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
                var output = mustache.render(markup,renderData);

                typeof(callback === 'function') ? callback(output) : null;
            });

        },

        renderTpl: function(markup,renderData){
            var output = mustache.render(markup,renderData);
            return output;
        },

        renderTplById: function(tplId,renderData){
            var markup = this.loadTpl(tplId);
            var output = mustache.render(markup,renderData);
            return output;
        }

    };

    tplManager.init();

    return tplManager;
});
define(['text!GTPL','mustache'],function(GTPL,mustache){

    var $$ = Framework7.$;

    $$('body').append(GTPL);

    function loadTpl(id){
        var tpl = $$("#"+id).html();
        return tpl;
    }

    function renderRemoteTpl(tplName,renderData,callback){
        tplName = tplName || "";
        $$.get('page/' + tplName + '.tpl.html' ,function(markup){
            var output = mustache.render(markup,renderData);

            typeof(callback === 'function') ? callback(output):null;
        })
        
    }

    function renderTpl(markup,renderData){
        var output = mustache.render(markup,renderData);
        return output;
    }

    function renderTplById(tplId,renderData){
        var markup = loadTpl(tplId);
        var output = mustache.render(markup,renderData);
        return output;
    }
    
    return {
        loadTpl:loadTpl,
        renderRemoteTpl:renderRemoteTpl,
        renderTpl:renderTpl,
        renderTplById:renderTplById
    }
});
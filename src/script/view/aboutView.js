define(['utils/appFunc'],function(appFunc){

    function init(params){
        appFunc.bindEvents(params.bindings);

        var version = $CONFIG['version'];

        $$('.my-product .version').html('V' + version + ' For Web');
        appFunc.hideToolbar('.views');
    }

    function showToolbar(){
        appFunc.showToolbar('.views');
    }

    return{
        init:init,
        showToolbar:showToolbar
    }
});
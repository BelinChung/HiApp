define(['utils/appFunc','utils/tplManager'],function(appFunc,TM){

    function init(params){
        appFunc.bindEvents(params.bindings);
    }

    function beforeLoadContacts(){
        if($$('.contacts-list .list-group .contact-item').length > 0) {
            return false;
        }else {
            hiApp.showIndicator();
            return true;
        }
    }

    function render(params){
        hiApp.initSearchbar('.contact-page');

        setTimeout(function(){
            var renderData = {
                contacts:params.contacts
            };
            var output = TM.renderTplById('contactListTemplate',renderData);
            $$('#contatcView .contacts-list ul').html(output);

            hiApp.hideIndicator();

        },500);

    }

    function filterResult(e){
        $$('.contacts-list .list-group-title').each(function(){
            if($$(this).next('.contact-item').css('display') === 'none'){
                $$(this).hide();
            }
        })
    }

    return{
        beforeLoadContacts:beforeLoadContacts,
        render:render,
        init:init,
        filterResult:filterResult
    }
});
define(['utils/appFunc'],function(appFunc){


    function init(params){
        setCopyRightPosition();

        appFunc.hideToolbar('.views');
        appFunc.bindEvents(params.bindings);
    }

    function setCopyRightPosition(){
        var documentHeight = $$('html').height() - 44;
        var contentHeight = 0;
        $$('.page-content .content-block').each(function(){
            contentHeight += $$(this).outerHeight();
        });

        var copyRightHeight = $$('.page-content .copyright').outerHeight(true);

        var paddingTop = documentHeight - contentHeight - 140 - copyRightHeight;

        $$('.page-content .copyright').css('top',paddingTop + 'px');
    }

    return{
        init:init
    }
});
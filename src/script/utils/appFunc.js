define(['i18n!nls/lang'],function(i18n){

    function isEmail(str){
       var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
       return reg.test(str);
    }

    function getPageNameInUrl(url){
        url = url || "";
        var arr = url.split('.');
        return arr[0];
    }

    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    function hideToolbar(viewContainer) {
        $$(viewContainer).addClass('hidden-toolbar');
        return true;
    };
    
    function showToolbar(viewContainer) {
        var vc = $$(viewContainer);
        vc.addClass('hiding-toolbar').removeClass('hidden-toolbar')
        $$('.toolbar').transitionEnd(function () {
            vc.removeClass('hiding-toolbar');
        });
    }; 


    function timeFormat(ms){

        ms = ms * 1000;

        var d_second,d_minutes, d_hours, d_days;
        var timeNow = new Date().getTime();
        var d = (timeNow - ms)/1000;
        d_days = Math.round(d / (24*60*60));
        d_hours = Math.round(d / (60*60));
        d_minutes = Math.round(d / 60);
        d_second = Math.round(d);
        if (d_days > 0 && d_days < 2) {
            return d_days + i18n.global.day_ago;
        } else if (d_days <= 0 && d_hours > 0) {
            return d_hours + i18n.global.hour_ago;
        } else if (d_hours <= 0 && d_minutes > 0) {
            return d_minutes + i18n.global.minute_ago;
        } else if (d_minutes <= 0 && d_second >= 0) {
            return i18n.global.just_now;
        } else {
            var s = new Date();
            s.setTime(ms);
            return (s.getFullYear() + "-" + f(s.getMonth() + 1) + "-" + f(s.getDate()) + " "+ f(s.getHours()) + ":"+ f(s.getMinutes()));
        }

        function f(n){
            if(n < 10)
                return '0' + n;
            else
                return n;
        }
    }

    function getCharLength(str){
        var iLength = 0;
        for(var i = 0;i<str.length;i++)
        {
            if(str.charCodeAt(i) >255)
            {
                iLength += 2;
            }
            else
            {
                iLength += 1;
            }
        }
        return iLength;
    }

    function bindEvents(bindings) {
        for (var i in bindings) {
            $$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
        }
    }

    return {
        isEmail:isEmail,
        isEmpty:isEmpty,
        getPageNameInUrl:getPageNameInUrl,
        hideToolbar:hideToolbar,
        showToolbar:showToolbar,
        timeFormat:timeFormat,
        getCharLength:getCharLength,
        bindEvents:bindEvents
    }
})
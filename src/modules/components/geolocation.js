var GlobalLat = null,
    GlobalLong = null;

var geolocation = {
    initGeo: function(){
        $$('#geoInfo').removeClass('show').hide();

        $$('#geoInfo .location>i').removeClass('ios7-location-outline').addClass('preloader');
        $$('#geoInfo .location>span').html(i18n.geo.loading_geo);

        GlobalLat = null;
        GlobalLong = null;
    },

    catchGeoInfo: function(){
        $$('#geoInfo').addClass('show').show();
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(geolocation.showPosition,geolocation.showGeoError);
        }else{
            $$('#geoInfo .location').html(i18n.geo.position_unavailable);
        }
    },

    showPosition: function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        $$('#geoInfo .location>i').removeClass('preloader').addClass('ios7-location-outline');
        $$('#geoInfo .location>span').html(( Math.round(lat * 10000)/10000) + '/' + ( Math.round(long * 10000)/10000) );

        GlobalLat = lat;
        GlobalLong = long;
    },

    showGeoError: function(error){
        switch(error.code)
        {
            case error.PERMISSION_DENIED:
                $$('#geoInfo .location').html(i18n.geo.permission_denied);
                break;
            case error.POSITION_UNAVAILABLE:
                $$('#geoInfo .location').html(i18n.geo.position_unavailable);
                break;
            case error.TIMEOUT:
                $$('#geoInfo .location').html(i18n.geo.timeout);
                break;
            case error.UNKNOWN_ERROR:
                $$('#geoInfo .location').html(i18n.error.unknown_error);
                break;
        }
    },

    getGeo: function(){
        return {
            lat:GlobalLat,
            long:GlobalLong
        };
    },

    cleanGeo: function(){
        hiApp.confirm(i18n.geo.confirm_clean_geo,geolocation.initGeo);
    }
};

module.exports = geolocation;

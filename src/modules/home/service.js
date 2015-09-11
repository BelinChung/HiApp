var xhr = require('../utils/xhr');

module.exports = {
    getTimeline: function(callback){
        xhr.simpleCall({
            func:'timeline'
        },function(res){
            callback(res.data);
        });
    },
    refreshTimeline: function(callback){
        xhr.simpleCall({
            func:'refresh_timeline'
        },function(res){
            callback(res.data);
        });
    },
    infiniteTimeline: function(callback){
        xhr.simpleCall({
            func:'more_timeline'
        },function(res){
            callback(res.data);
        });
    }
};
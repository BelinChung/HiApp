var xhr = require('../utils/xhr');

module.exports = {
    getComments: function(callback) {
        xhr.simpleCall({
            func: 'comments'
        }, function (res) {
            callback(res.data);
        });
    }
};
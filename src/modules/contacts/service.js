var xhr = require('../utils/xhr');

module.exports = {
    loadContacts: function(callback) {
        xhr.simpleCall({
            func: 'contacts'
        }, function (res) {
            callback(res.data);
        });
    }
};
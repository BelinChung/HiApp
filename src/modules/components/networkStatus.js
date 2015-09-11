module.exports = {

    checkConnection: function () {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'UNKNOWN';
        states[Connection.ETHERNET] = 'ETHERNET';
        states[Connection.WIFI]     = 'WIFI';
        states[Connection.CELL_2G]  = 'CELL_2G';
        states[Connection.CELL_3G]  = 'CELL_3G';
        states[Connection.CELL_4G]  = 'CELL_4G';
        states[Connection.CELL]     = 'CELL';
        states[Connection.NONE]     = 'NoNetwork';

        return states[networkState];
    }
};

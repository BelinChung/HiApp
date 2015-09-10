module.exports = {
    getLocal: function(){
        return localStorage.getItem('lang') || 'en-us';
    },
    setLocal: function(lang){
        localStorage.setItem('lang', lang);
    }
};
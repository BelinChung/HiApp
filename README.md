[![Build Status](https://travis-ci.org/BelinChung/HiApp.svg?branch=master)](https://travis-ci.org/BelinChung/HiApp)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

HiApp
=====

A simple and interesting Framework7 web app.With PhoneGap you can easily convert it to native iOS 7 app.

## Depend

HiApp are developed using these libraries.     
├── Framework: [Framework7]   
├── Task Runner: [Grunt]   
├── Module Loader: [Require.js]  
├── Templating Library: [mustache]  
└── Stylesheet Language: [LESS]  

## Demo

[http://dearb.me/hi/]

![hiapp qrcode](http://dearb.u.qiniudn.com/hiapp_qrcode_small.png)

## Server

HiApp use Grunt's server to develop,Just run it in repo's root:

```
$ grunt server
```

## Build

HiApp uses `grunt` to build a production versions.

First you need to have `grunt-cli` which you should install globally.

```
$ npm install -g grunt-cli
```

Then install all dependencies, in repo's root:

```
$ npm install    
$ grunt
```

The result is available in `build/` folder.

## Thanks
[@philipshurpik]

## License

Copyright (c) 2014 Belin Chung. MIT Licensed, see [LICENSE] for details.


[Framework7]:http://www.idangero.us/framework7/  
[Grunt]:http://gruntjs.com/  
[Require.js]:http://requirejs.org/
[mustache]:https://github.com/janl/mustache.js  
[LESS]:http://lesscss.net/ 
[http://dearb.me/hi/]:http://dearb.me/hi/
[LICENSE]:https://github.com/BelinChung/HiApp/blob/master/LICENSE.md
[@philipshurpik]:https://github.com/philipshurpik/Framework7-Contacts7-MVC
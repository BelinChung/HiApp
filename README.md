[![Build Status](https://travis-ci.org/BelinChung/HiApp.svg?branch=master)](https://travis-ci.org/BelinChung/HiApp)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

HiApp
=====

A simple and interesting Framework7 hybrid app.With PhoneGap you can easily convert it to native iOS 7 app.

## Dependencies

HiApp uses `grunt` to build a production versions.

First you need to have `grunt-cli` which you should install globally.

```
$ npm install -g grunt-cli
```

Then install all dependencies, in repo's root:

```
$ npm install    
```

## PhoneGap App Guides

Install the cordova module using npm utility of Node.js.

```
$ npm install -g cordova
```

### Create App

Go to the directory where you maintain your source code, and run a command such as the following:

```
$ cordova create hiapp com.hiapp.hiapp HiApp
```

### Check out source code

Because the PhoneGap app directory should not already exist, so check out the HiApp source code in this step.

```
$ cd hiapp  
$ git init   
$ git remote add origin git@github.com:BelinChung/HiApp.git  
$ git pull origin master  
$ git reset --hard origin/master  
```

### Add Platforms

Before you can build the project, you need to specify a set of target platforms.

```
$ npm install
$ grunt phonegap
$ cordova platform add ios
```

### Add Plugins

You need to add plugins that provide access to core Cordova APIs.

```
$ cordova plugin add org.apache.cordova.camera org.apache.cordova.geolocation org.apache.cordova.file-transfer org.apache.cordova.inappbrowser org.apache.cordova.network-information
```

### Build the App

Run the following command to iteratively build the project:

```
$ cordova build ios
```

### Test the App on an iOS Device with Xcode

Select an iOS simulator and click the `Run` button


## PhoneGap App Browser Simulator

HiApp use `Ripple` to simulate the test environment.

You also need to have `ripple-emulator` which you should install globally.

```
$ npm install -g ripple-emulator
```

Run it in repo's root:

```
$ grunt phonegap
$ ripple emulate
```

## Web App Preview

HiApp use Grunt's server to develop,Just run it in repo's root:

```
$ grunt server
```

## Web App Release / PhoneGap App Release

```
$ grunt
```

The result is available in `www/` folder.

## Demo

[http://dearb.me/hi/]

[![App Store](http://dearb.u.qiniudn.com/appstore-button.png)](https://itunes.apple.com/us/app/hi-liao-gao-xiao-shu-dong/id917320045?mt=8)

![hiapp qrcode](http://dearb.u.qiniudn.com/hiapp_qrcode_small.png)

## License

Copyright (c) 2014 Belin Chung. MIT Licensed, see [LICENSE] for details.

[http://dearb.me/hi/]:http://dearb.me/hi/
[LICENSE]:https://github.com/BelinChung/HiApp/blob/master/LICENSE.md
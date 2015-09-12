HiApp
=====

A simple and interesting Framework7 hybrid app.With PhoneGap you can easily convert it to native iOS app.

Other languages: [中文文档](https://github.com/BelinChung/HiApp/blob/fis3/README_CN.md)

## Requirements

* fis3 `^3.2.0`
* cordova `^5.0.0`
* framework7 `^1.2.0`

## Dependencies

HiApp use `fis3` to build a production versions,

First you need to have `fis3` which you should install globally.

```
$ npm install -g fis3
```

Then install all dependencies, in repo's root:

```
$ npm install 
$ fis3 install -r src
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
$ cordova platform add ios
```

### Add Plugins

You need to add plugins that provide access to core Cordova APIs.

```
$ cordova plugin add cordova-plugin-whitelist cordova-plugin-camera cordova-plugin-geolocation cordova-plugin-file-transfer cordova-plugin-inappbrowser cordova-plugin-network-information
```

### Build the App

Run the following command to iteratively build the project:

```
$ cordova build ios
```

### Test the App on an iOS Device with Xcode

Double-click to open the `platforms/ios/HiApp.xcodeproj` file

Press the `Run` button to deploy the application in the emulator

## Web App Preview

HiApp use FIS build-in server to develop, Just run it in repo's root:

```
$ fis3 server start -p 3000
$ fis3 release -wL -r src/
```

WebApp will be available on `http://localhost:3000/`

## Web App Release / PhoneGap App Release

```
$ fis3 release prod -r src/ -d www/
```

The result is available in `www/` folder.

## Demo

[http://hi.dearb.me/]

[![App Store](http://dearb.u.qiniudn.com/appstore-button.png)](https://itunes.apple.com/us/app/hi-liao-gao-xiao-shu-dong/id917320045?mt=8)

## License

Copyright (c) 2014-2015 Belin Chung. MIT Licensed, see [LICENSE] for details.

[http://hi.dearb.me/]: http://hi.dearb.me/
[LICENSE]:https://github.com/BelinChung/HiApp/blob/master/LICENSE.md
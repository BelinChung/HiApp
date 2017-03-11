HiApp
=====

A simple and interesting Framework7 hybrid app.With Cordova you can easily convert it to native iOS app.

## React Native

HiApp is also written in React Native. [BelinChung/react-native-hiapp](https://github.com/BelinChung/react-native-hiapp)

Unlike Cordova, React Native provides bindings for native UI controls which totally outclass HTML-based hybrid solutions. so it is simple to write high-performance UI by React Native. 

## Build Tools

HiApp use different build tools to build the same project, Hope it will helps you select a suitable build tool.

* `f7-vue-webpack` at origin/master
* `f7-webpack` at [origin/f7-webpack](https://github.com/BelinChung/HiApp/tree/f7-webpack)
* `fis3` at [origin/fis3](https://github.com/BelinChung/HiApp/tree/fis3)

## Requirements

* cordova `^6.5.0`
* framework7 `^1.5.0`
* framework7-vue `^0.8.5`

To build and run apps, you need to install SDKs for each platform you wish to target.  
To check if you satisfy requirements for building the platform:

``` bash
$ cordova requirements

Requirements check results for ios:
Apple OS X: installed darwin
Xcode: installed 8.2.1
ios-deploy: installed 1.9.1
CocoaPods: installed

```

## Dependencies

HiApp use `npm` to manage third-party packages now.

Then install all dependencies, in repo's root:

```
$ npm install 
```

## Mock Server

Before create your first cordova app, please install `http-server` globally so that you can run a mock server with zero configuration.

```
$ npm install http-server -g
```

in repo's root:

```
$ http-server ./mock_api -p 4000 --cors
```

## Cordova App Guides

Install the cordova as globally.

```
$ npm install -g cordova
```

### Create App

Go to the directory where you maintain your source code, and run a command such as the following:

```
$ cordova create hiapp com.hiapp.hiapp HiApp
```

### Check out source code

Because the Cordova app directory should not already exist, so check out the HiApp source code in this step.

```
$ cd hiapp  
$ git init   
$ git remote add origin https://github.com/BelinChung/HiApp.git  
$ git fetch  
$ git reset --hard origin/master  
```

### Add Platforms

Before you can build the project, you need to specify a set of target platforms.

```
$ cordova platform add ios --save
```

### Add Plugins

You need to add plugins that provide access to core Cordova APIs.

```
$ cordova plugin add cordova-plugin-statusbar cordova-plugin-camera cordova-plugin-geolocation cordova-plugin-file-transfer cordova-plugin-inappbrowser cordova-plugin-network-information
```

### Build the App

Run the following command to iteratively build the project:

```
$ npm run build
$ cordova build ios
```

### Test the App on an iOS Device with Xcode

Double-click to open the `platforms/ios/HiApp.xcodeproj` file

Press the `Run` button to deploy the application in the emulator or iOs device

## Web App Guides

### Preview

HiApp use webpack browser sync server to develop, Just run it in repo's root:

```
$ npm run dev
```

Web app will be available on `http://localhost:3000/`

### Release

```
$ npm run build
```

The result is available in `www/` folder.

## Demo

[https://hi.dearb.me/]

[![App Store](http://dearb.u.qiniudn.com/appstore-button.png)](https://itunes.apple.com/us/app/hi-liao-gao-xiao-shu-dong/id917320045?mt=8)

## License

Copyright (c) 2017 Belin Chung. MIT Licensed, see [LICENSE] for details.

[https://hi.dearb.me/]: https://hi.dearb.me/
[LICENSE]:https://github.com/BelinChung/HiApp/blob/master/LICENSE.md
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

* cordova `^8.0.0`
* framework7 `^2.0.7`
* framework7-vue `^2.0.7`

To build and run apps, you need to install SDKs for each platform you wish to target.  
To check if you satisfy requirements for building the platform:

``` bash
$ cordova requirements

Requirements check results for ios:
Apple OS X: installed darwin
Xcode: installed 9.2
ios-deploy: installed 1.9.2
CocoaPods: installed

```

## Dependencies

HiApp use `npm` to manage third-party packages now.

Then install all dependencies, in repo's root:

```
$ npm install 
```

## Cordova App Guides

Install the cordova as globally.

```
$ npm install cordova -g
```

### 1. Create App

Go to the directory where you maintain your source code, and run a command such as the following:

```
$ cordova create hiapp com.hiapp.hiapp HiApp
```

### 2. Check out source code

Because the Cordova app directory should not already exist, so check out the HiApp source code in this step.

```
$ cd hiapp  
$ git init   
$ git remote add origin https://github.com/BelinChung/HiApp.git  
$ git fetch  
$ git reset --hard origin/master  
```

### 3. Add Platforms

Before you can build the project, you need to specify a set of target platforms.

```
$ cordova platform add ios --save
```

### 4. Add Plugins

You need to add plugins that provide access to core Cordova APIs.

```
$ cordova plugin add cordova-plugin-whitelist cordova-plugin-statusbar cordova-plugin-camera cordova-plugin-geolocation cordova-plugin-file-transfer cordova-plugin-inappbrowser cordova-plugin-network-information
```

### 5. Build the App

Run the following command to iteratively build the project:

```
$ npm run build
$ cordova build ios
```

### 6. Test the App on an iOS Device with Xcode

Double-click to open the `platforms/ios/HiApp.xcodeproj` file

Press the `Run` button to deploy the application in the emulator or iOS device

## Web App Guides

### 1. Preview

HiApp use webpack browser sync server to develop, Just run it in repo's root:

```
$ npm run dev
```

Web app will be available on `http://localhost:3000/`

### 2. Release

```
$ npm run build
```

The result is available in `www/` folder.

## Demo

[https://hi.dearb.me/]

## License

Copyright (c) 2016 - 2018 Belin Chung. MIT Licensed, see [LICENSE] for details.

[https://hi.dearb.me/]: https://hi.dearb.me/
[LICENSE]:https://github.com/BelinChung/HiApp/blob/master/LICENSE.md
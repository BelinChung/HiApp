HiApp
=====

HiApp 是一个简单有趣的混合 APP，你可以通过 `PhoneGap/Cordova` 将它转化成原生的 iOS APP。

## Requirements

* fis3 `^3.2.0`
* cordova `^5.0.0`
* framework7 `^1.2.0`

## Dependencies

HiApp 使用 `fis3` 来构建一个生产版本

首先你得确保全局安装了 `fis3`

```
$ npm install -g fis3
```

在项目的根目录，通过以下命令可以安装项目的一些依赖:

```
$ npm install 
$ fis3 install -r src
```

## PhoneGap App Guides

使用 `npm` 全局安装好 `cordova` 

```
$ npm install -g cordova
```

### Create App

在一个你想放置项目源码的目录，执行以下的命令：

```
$ cordova create hiapp com.hiapp.hiapp HiApp
```

### Check out source code

因为 `PhoneGap app` 不允许在一个已经存在的目录中创建 APP，你可以通过以下的命令来 checkout HiApp 的源码。

```
$ cd hiapp  
$ git init   
$ git remote add origin git@github.com:BelinChung/HiApp.git  
$ git pull origin fis3  
$ git reset --hard origin/fis3    
```

### Add Platforms

在开始构建项目的之前，你需要指定一个目标平台

```
$ cordova platform add ios
```

### Add Plugins

你需要安装如下的插件来访问一些原生的 API

```
$ cordova plugin add cordova-plugin-whitelist cordova-plugin-camera cordova-plugin-geolocation cordova-plugin-file-transfer cordova-plugin-inappbrowser cordova-plugin-network-information
```

### Build the App

通过运行以下的命令来构建一个可运行的项目

```
$ cordova build ios
```

### Test the App on an iOS Device with Xcode

双击 `platforms/ios` 下的 `HiApp.xcodeproj` 文件，在 Xcode 中打开 iOS 项目，选择一个模拟器点击运行按钮即可

## Web App Preview

HiApp 使用 FIS 内置的服务器进行开发，在项目的根目录运行以下命令：

```
$ fis3 server start -p 3000
$ fis3 release -wL -r src/
```

可以通过 `http://localhost:3000/` 访问 WebApp

## Web App Release / PhoneGap App Release

```
$ fis3 release prod -r src/ -d www/
```

构建的生产版本代码将会放置在 `www/` 文件夹内

## Demo

[http://hi.dearb.me/]

[![App Store](http://dearb.u.qiniudn.com/appstore-button.png)](https://itunes.apple.com/us/app/hi-liao-gao-xiao-shu-dong/id917320045?mt=8)

## License

Copyright (c) 2014-2015 Belin Chung. MIT Licensed, see [LICENSE] for details.

[http://hi.dearb.me/]: http://hi.dearb.me/
[LICENSE]:https://github.com/BelinChung/HiApp/blob/master/LICENSE.md
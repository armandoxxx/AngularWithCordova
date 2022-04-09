# Angular + Angular material web app with Cordova sandbox    
this is a test PWA with:
 - angular
 - angular-material
 - cordova
 - cordova plugins (cordova-plugin-camera, [@havesource/cordova-plugin-push](https://github.com/havesource/cordova-plugin-push)).    
 
Testing PWA without ionic and other mainly mobile frameworks. Just Angular and Angular material as UI lib, to check if mobile and web app can have same codebase without any major hustle.   

get it by cloning repo   
git clone ...
cd into each subfolder and run **npm install**   

To run app:
```
cd AngularCordovaNg 
ng build  #to build app which will build app in MobileApp/www folder 
cd ../MobileApp
cordova platform add android
cordova build android
cordova run android 
#or
cordova run browser 
```

## IOS

run **cordova platforms add ios**
run **cordova prepare ios**

Open project in XCode in platform/ios/ folder 
do not forget to select development team in XCode    
  
run **cordova build ios**

###troubleshooting 

if you run into problem with blank page when app is loaded then do this (usualy Access-allow-origin stuff problems)   

Search the code in workspace for the following line: (might be in several files, so do it for all of them)
```
 WKWebViewConfiguration* configuration = [[WKWebViewConfiguration alloc] init];
```
And add the following two lines after it:
```
[configuration.preferences setValue:@TRUE forKey:@"allowFileAccessFromFileURLs"];
[configuration setValue:@"TRUE" forKey:@"allowUniversalAccessFromFileURLs"];
```
(still figuring out how to do this with configs ...)

If you run into the problem of **doc.find is not a function** when building IOS app goto **platform/ios/** and open **ios.json** file. Remove "-info.plist" key from json file, store it and try again. 


# Angular + Angular material web app with Cordova sandbox    
this is a test PWA with:
 - angular
 - angular-material
 - cordova
 - cordova plugins (cordova-plugin-camera, @havesource/cordova-plugin-push).    
 
Testing PWA without iconic and other mainly mobile frameworks. Just Angular and Angular material as UI lib, to check if mobile and web app can have same codebase without any major hustle.   
Currently only browser and android platforms work, will post iOS code when available.

get it by cloning repo   
git clone ...
cd into each subfolder and run **npm install**   

To run app:
```
cd AngularCordovaNg 
ng build  #to build app which will build app in AngularCordova/www folder 
cd ../AngularCordova
cordova run android 
#or
cordova run browser 
```

## IOS

run **cordova platforms add ios**
run **cordova prepare ios**

do not forget to set settings in XCode for signing dev app (select team and enter bundle identifier-you have to create in your account  in developer.apple.com)    
  
run **cordova build ios**

###troubleshooting 

if you run into problem with blank page when app is loaded then do this (usualy access-allow-origin stuff)   

Search the code for the following line: (might be in several files, so do it for all of them)
```
 WKWebViewConfiguration* configuration = [[WKWebViewConfiguration alloc] init];
```
And add the following two lines after it:
```
[configuration.preferences setValue:@TRUE forKey:@"allowFileAccessFromFileURLs"];
[configuration setValue:@"TRUE" forKey:@"allowUniversalAccessFromFileURLs"];
```

If you run into the proble of **doc.find is not a function** when building IOS goto **platform/ios/** and open **ios.json**.   
remove "-info.plist" key from json file, store it and try again. 


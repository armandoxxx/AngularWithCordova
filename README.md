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


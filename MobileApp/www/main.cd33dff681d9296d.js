"use strict";
(self["webpackChunkAngularCordovaNg"] = self["webpackChunkAngularCordovaNg"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/camera/camera.component */ 9236);
/* harmony import */ var _pages_notify_notify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/notify/notify.component */ 6168);
/* harmony import */ var _pages_data_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/data/data.component */ 9917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: 'camera', component: _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_0__.CameraComponent },
    { path: 'data', component: _pages_data_data_component__WEBPACK_IMPORTED_MODULE_2__.DataComponent },
    { path: 'notify', component: _pages_notify_notify_component__WEBPACK_IMPORTED_MODULE_1__.NotifyComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/broadcast.service */ 2544);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/notification.service */ 2013);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);







function AppComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const topicName_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](topicName_r1);
} }
class AppComponent {
    constructor(cdRef, broadcastService, notificationService) {
        this.cdRef = cdRef;
        this.broadcastService = broadcastService;
        this.notificationService = notificationService;
        this.title = 'AngularCordovaNg';
        this.subscribedTopics = [];
        this.data = '';
        this.currentTime = new Date();
        this.disableSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.notificationService.initPush();
        this.initEvents();
    }
    ngOnDestroy() {
        this.disableSubscriptions.next();
    }
    initEvents() {
        this.notificationService.onNotify.subscribe(this.handlePushNotification.bind(this));
    }
    handlePushNotification(data) {
        this.data = JSON.stringify(data);
        this.currentTime = new Date();
        this.cdRef.detectChanges();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_broadcast_service__WEBPACK_IMPORTED_MODULE_0__.BroadcastService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 6, consts: [["mat-button", "", "routerLink", "/camera", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/data", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/notify", "routerLinkActive", "active"], [1, "pages"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Test angular cordova application");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\nSubscribed topics:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AppComponent_ng_container_17_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subscribedTopics);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Notification data: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 3, ctx.currentTime, "dd.MM.yyyy hh:mm:ss"), " - ", ctx.data, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["nav[_ngcontent-%COMP%] {\n  clear: both;\n  display: block;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  display: inline-block;\n}\n.pages[_ngcontent-%COMP%] {\n  clear: both;\n  display: block;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLHFCQUFBO0FBRUo7QUFBSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUVOO0FBR0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUFGO0FBSUE7RUFDRSxhQUFBO0FBREYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB1bHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZXMge1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/camera/camera.component */ 9236);
/* harmony import */ var _pages_data_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/data/data.component */ 9917);
/* harmony import */ var _pages_notify_notify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/notify/notify.component */ 6168);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/layout/layout.component */ 7703);
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/broadcast.service */ 2544);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/notification.service */ 2013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__.BroadcastService,
        _services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_2__.CameraComponent,
        _pages_data_data_component__WEBPACK_IMPORTED_MODULE_3__.DataComponent,
        _pages_notify_notify_component__WEBPACK_IMPORTED_MODULE_4__.NotifyComponent,
        _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule] }); })();


/***/ }),

/***/ 9236:
/*!**************************************************!*\
  !*** ./src/app/pages/camera/camera.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraComponent": () => (/* binding */ CameraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);



class CameraComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.cameraImage = "";
        this.galleryImage = "";
        this.cameraOpen = false;
        this.galleryOpen = false;
    }
    set image(img) {
        this.galleryImage = img;
    }
    ngOnInit() {
    }
    openCamera() {
        if (this.cameraOpen) {
            return;
        }
        console.log(this);
        this.cameraOpen = true;
        let options = {
            quality: 100,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        };
        let me = this;
        navigator.camera.getPicture(function (imageData) {
            console.log(me);
            console.log(imageData);
            me.cameraImage = "data:image/jpeg;base64," + imageData;
            me.cameraOpen = false;
            me.cdRef.detectChanges();
        }, function () {
            console.log(arguments);
            me.cameraOpen = false;
        }, options);
    }
    browseGallery() {
        if (this.galleryOpen) {
            return;
        }
        this.galleryOpen = true;
        let me = this;
        let options = {
            quality: 100,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE
        };
        console.log(me);
        console.log(me.galleryOpen);
        navigator.camera.getPicture(function (imageData) {
            console.log(me);
            console.log(imageData);
            me.image = "data:image/jpeg;base64," + imageData;
            me.galleryOpen = false;
            me.cdRef.detectChanges();
        }, function () {
            console.log(arguments);
            me.galleryOpen = false;
        }, options);
        //this.galleryOpen = true;
    }
}
CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
CameraComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], decls: 18, vars: 2, consts: [[3, "src"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Camera image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_7_listener() { return ctx.openCamera(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Take photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gallery image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_16_listener() { return ctx.browseGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cameraImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.galleryImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardFooter, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1lcmEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9917:
/*!**********************************************!*\
  !*** ./src/app/pages/data/data.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataComponent": () => (/* binding */ DataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/articles.service */ 1577);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);






function DataComponent_mat_card_3_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function DataComponent_mat_card_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataComponent_mat_card_3_ng_container_9_ng_container_1_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const author_r4 = ctx.$implicit;
    const idx_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", idx_r5 > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", author_r4.name, "");
} }
function DataComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Author: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DataComponent_mat_card_3_ng_container_9_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", article_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", article_r1.authors);
} }
class DataComponent {
    constructor(articleService) {
        this.articleService = articleService;
        this.articles = [];
    }
    ngOnInit() {
    }
    loadData() {
        this.articleService.getData().subscribe((data) => this.articles = data);
    }
}
DataComponent.ɵfac = function DataComponent_Factory(t) { return new (t || DataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_0__.ArticlesService)); };
DataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataComponent, selectors: [["app-data"]], decls: 4, vars: 1, consts: [["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "article", 4, "ngFor", "ngForOf"], [1, "article"], [1, "header"], [1, "content"], ["inset", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function DataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataComponent_Template_button_click_0_listener() { return ctx.loadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Load data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataComponent_mat_card_3_Template, 10, 3, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".article[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.article[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #bbb;\n}\n.article[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxzQkFBQTtBQUVKO0FBSUU7RUFDRSxzQkFBQTtBQUZKIiwiZmlsZSI6ImRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgfVxuICAuY29udGVudCB7XG5cblxuICB9XG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7703:
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 1, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6168:
/*!**************************************************!*\
  !*** ./src/app/pages/notify/notify.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyComponent": () => (/* binding */ NotifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/broadcast.service */ 2544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);



class NotifyComponent {
    constructor(broadcastService) {
        this.broadcastService = broadcastService;
    }
    ngOnInit() {
    }
    isSubscribed(topicName) {
        return true;
    }
    subscribeTo(topicName) {
        this.broadcastService.subscribeToTopic(topicName);
    }
    unSubscribeFrom(topicName) {
        this.broadcastService.unSubscribeFromTopic(topicName);
    }
}
NotifyComponent.ɵfac = function NotifyComponent_Factory(t) { return new (t || NotifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_broadcast_service__WEBPACK_IMPORTED_MODULE_0__.BroadcastService)); };
NotifyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotifyComponent, selectors: [["app-notify"]], decls: 4, vars: 4, consts: [["mat-button", "", 3, "click"]], template: function NotifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotifyComponent_Template_button_click_0_listener() { return ctx.subscribeTo("user_topic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Subscribe to [user_topic]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotifyComponent_Template_button_click_2_listener() { return ctx.unSubscribeFrom("user_topic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Unsubscribe from [user_topic]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx.isSubscribed("user_topic"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.isSubscribed("user_topic"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1577:
/*!**********************************************!*\
  !*** ./src/app/services/articles.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesService": () => (/* binding */ ArticlesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ArticlesService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        let url = 'https://www.klipingmap.com/v3.0/ws/Articles?dcStringToken=48d427c6-f103-46de-9718-eca79ab09136&format=json&provider=presscut';
        return this.http.get(url);
    }
}
ArticlesService.ɵfac = function ArticlesService_Factory(t) { return new (t || ArticlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ArticlesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticlesService, factory: ArticlesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2544:
/*!***********************************************!*\
  !*** ./src/app/services/broadcast.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BroadcastService": () => (/* binding */ BroadcastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class BroadcastService {
    constructor() {
        this.pushSubscriptionsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.pushSubscriptionsEvent = this.pushSubscriptionsSource.asObservable();
    }
    subscribeToTopic(topicName) {
        const data = {
            action: 'subscribe',
            topicName: topicName
        };
        this.pushSubscriptionsSource.next(data);
    }
    unSubscribeFromTopic(topicName) {
        const data = {
            action: 'unsubscribe',
            topicName: topicName
        };
        this.pushSubscriptionsSource.next(data);
    }
}
BroadcastService.ɵfac = function BroadcastService_Factory(t) { return new (t || BroadcastService)(); };
BroadcastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BroadcastService, factory: BroadcastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class NotificationService {
    constructor() {
        this.disableSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.registrationsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.notifySource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.afterRegistrationsEvent = this.registrationsSource.asObservable();
        this.push = undefined;
        this.subscribedTopics = [];
        this.topicSubscriptionInitTimer = undefined;
        //work flags
        this.pushInitialized = false;
        this.subscribing = false;
        this.eventsInitialized = false;
        //public members
        this.onNotify = this.notifySource.asObservable();
    }
    ngOnDestroy() {
        this.disableSubscriptions.next();
    }
    initPush() {
        if (this.pushInitialized) {
            console.log('Push plugin initialized.');
            return;
        }
        console.log('Initializing push plugin.');
        let config = {
            android: {
                vibrate: true,
                clearNotifications: true
            },
            ios: {
                fcmSandbox: true,
                alert: true,
                badge: true,
                sound: true
            }
        };
        this.push = PushNotification.init(config);
        this.enableNotificationEvents();
        PushNotification.hasPermission(() => {
            console.log("Notification permission granted");
            //this.subscribeToTopic('user_topic'); //commented out to try and replace with registration observable.
        }, () => {
            console.log("not permitted to receive notifications!");
        });
        this.initEvents();
        this.pushInitialized = true;
    }
    initEvents() {
        this.afterRegistrationsEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.disableSubscriptions)).subscribe(() => {
            if (this.topicSubscriptionInitTimer != undefined) {
                clearTimeout(this.topicSubscriptionInitTimer);
            }
            let me = this;
            this.topicSubscriptionInitTimer = setTimeout(() => {
                console.log('Executing timer');
                me.subscribeToTopic('user_topic');
            }, 2000);
        });
    }
    subscribeToTopic(topicName) {
        if (this.subscribedTopics.indexOf(topicName) !== -1) {
            console.log('Already subscribed to topic [%s]', topicName);
            return;
        }
        if (this.subscribing) {
            console.log('Already subscribing to topic [%s]', topicName);
            return;
        }
        console.log("Will subscribe to topic: [%s]", topicName);
        this.subscribing = true;
        this.push.subscribe(topicName, () => {
            console.log('Subscribed to [%s]', topicName);
            this.addTopic(topicName);
            this.subscribing = false;
        }, () => {
            console.log("Cannot subscribe to [%s]", topicName);
            this.removeTopic(topicName);
            this.subscribing = false;
        });
    }
    unSubscribeFromTopic(topicName) {
        if (this.subscribedTopics.indexOf(topicName) === -1) {
            console.log('Not subscribed to topic [%s]', topicName);
            return;
        }
        this.push.unsubscribe(topicName, () => {
            console.log('Successfully unsubscribed from topic [%s]', topicName);
            this.removeTopic(topicName);
        }, (e) => {
            console.log('Cannot unsubscribe from topic [%s] error [%o]', topicName, e);
        });
    }
    onNotificationEvent(data) {
        console.log("Got notification data: %o", data);
        this.notifySource.next(data);
    }
    onNotificationError(data) {
        console.log("Got notification error data: %o", data);
    }
    onRegistration(data) {
        console.log("Got registration data: %o", data);
        this.registrationsSource.next();
    }
    enableNotificationEvents() {
        if (this.eventsInitialized) {
            console.log('Events already initialized');
            return;
        }
        this.push.on('registration', this.onRegistration.bind(this));
        this.push.on('notification', this.onNotificationEvent.bind(this));
        this.push.on('error', this.onNotificationError.bind(this));
        this.eventsInitialized = true;
    }
    disableNotificationEvents() {
        if (!this.eventsInitialized) {
            console.log('Events not initialized!');
            return;
        }
        this.push.off('registration', this.onRegistration.bind(this));
        this.push.off('notification', this.onNotificationEvent.bind(this));
        this.push.off('error', this.onNotificationError.bind(this));
        console.log("Events disabled");
        this.eventsInitialized = false;
    }
    addTopic(topicName) {
        this.subscribedTopics.push(topicName);
        console.log('added topic [%s]', topicName);
    }
    removeTopic(topicName) {
        if (this.subscribedTopics.indexOf(topicName) !== -1) {
            this.subscribedTopics.splice(this.subscribedTopics.indexOf(topicName), 1);
            console.log('removed topic [%s]', topicName);
        }
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
const bootstrap = () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
};
if (typeof window['cordova'] !== 'undefined') {
    document.addEventListener('deviceready', () => {
        bootstrap();
    }, false);
}
else {
    bootstrap();
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.cd33dff681d9296d.js.map
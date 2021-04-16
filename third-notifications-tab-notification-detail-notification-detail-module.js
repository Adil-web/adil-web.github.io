(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["third-notifications-tab-notification-detail-notification-detail-module"],{

/***/ "B80+":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/notification-detail/notification-detail.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "LFNo":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/notification-detail/notification-detail.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NotificationDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailModule", function() { return NotificationDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _notification_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-detail.component */ "b99/");







let NotificationDetailModule = class NotificationDetailModule {
};
NotificationDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _notification_detail_component__WEBPACK_IMPORTED_MODULE_6__["NotificationDetailComponent"] }]),
        ],
        declarations: [_notification_detail_component__WEBPACK_IMPORTED_MODULE_6__["NotificationDetailComponent"]]
    })
], NotificationDetailModule);



/***/ }),

/***/ "b99/":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/notification-detail/notification-detail.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NotificationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailComponent", function() { return NotificationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification-detail.component.html */ "uL91");
/* harmony import */ var _notification_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-detail.component.scss */ "B80+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab3.service */ "Zr5Q");






let NotificationDetailComponent = class NotificationDetailComponent {
    constructor(activatedRoute, notificationService) {
        this.activatedRoute = activatedRoute;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('id')) {
                return;
            }
            const id = paramMap.get('id');
            this.loadedNotification = this.notificationService.getNotification(id);
        });
    }
};
NotificationDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _tab3_service__WEBPACK_IMPORTED_MODULE_5__["tab3Service"] }
];
NotificationDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notification-detail',
        template: _raw_loader_notification_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationDetailComponent);



/***/ }),

/***/ "uL91":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/third-notifications-tab/notification-detail/notification-detail.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-start\">Оповещение</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-label>\n        <h2>{{ loadedNotification.title }}</h2>\n        <ion-label color=\"medium\">\n          <h6>{{ loadedNotification.date }}</h6>\n        </ion-label>\n        <p>{{ loadedNotification.text }}</p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=third-notifications-tab-notification-detail-notification-detail-module.js.map
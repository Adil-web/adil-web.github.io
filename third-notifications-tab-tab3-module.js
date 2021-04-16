(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["third-notifications-tab-tab3-module"],{

/***/ "0VoY":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/third-notifications-tab/tab3.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"success\">\n    <ion-title class=\"ion-text-center\">\n      Оповещения\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <app-notification-item\n      *ngFor=\"let notification of notifications\"\n      [routerLink]=\"notification.id\"\n      [newTitle]=\"notification.title\"\n      [text]=\"notification.text\"\n      [date]=\"notification.date\">\n    </app-notification-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "SqDI":
/*!**********************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/tab3.page.ts ***!
  \**********************************************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "0VoY");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "TD04");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab3.service */ "Zr5Q");





let Tab3Page = class Tab3Page {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.notifications = this.notificationService.getAllNotifications();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.notificationService.setNotification({
                id: Date.now().toString(),
                title: 'Test',
                text: 'test',
                date: '08.04.21'
            });
            console.log('Async operation has ended');
            this.notificationService.getCounter();
            this.notifications = this.notificationService.getAllNotifications();
            event.target.complete();
        }, 2000);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _tab3_service__WEBPACK_IMPORTED_MODULE_4__["tab3Service"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "TD04":
/*!************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/tab3.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "U8Yo":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/third-notifications-tab/notification-item/notification-item.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item button=\"true\">\n  <ion-thumbnail class=\"ion-margin\">\n    <ion-img src=\"https://hdqwalls.com/wallpapers/thumb/green-blue-violet-gradient-8k-xv.jpg\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h3>{{ newTitle }}</h3>\n    <p>{{ text }}</p>\n    <ion-label color=\"medium\">\n      <h6>{{ date }}</h6>\n    </ion-label>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "WfZY":
/*!************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/tab3.module.ts ***!
  \************************************************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "SqDI");
/* harmony import */ var _notification_item_notification_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification-item/notification-item.component */ "u8hw");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "Zi+Q");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _notification_item_notification_item_component__WEBPACK_IMPORTED_MODULE_7__["NotificationItemComponent"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "Zi+Q":
/*!********************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/tab3-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "SqDI");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "aZTx":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/notification-item/notification-item.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "u8hw":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/notification-item/notification-item.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NotificationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationItemComponent", function() { return NotificationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification-item.component.html */ "U8Yo");
/* harmony import */ var _notification_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-item.component.scss */ "aZTx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotificationItemComponent = class NotificationItemComponent {
    constructor() { }
    ngOnInit() { }
};
NotificationItemComponent.ctorParameters = () => [];
NotificationItemComponent.propDecorators = {
    newTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NotificationItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notification-item',
        template: _raw_loader_notification_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationItemComponent);



/***/ })

}]);
//# sourceMappingURL=third-notifications-tab-tab3-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-appeals-appeal-detail-appeal-detail-module"],{

/***/ "Afvp":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/fourth-profile-tab/my-appeals/appeal-detail/appeal-detail.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-start\">Обращение</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{ loadedAppeal['title'] }}</h2>\n          <ion-label color=\"medium\">\n            <p>{{ loadedAppeal['date'] }}</p>\n          </ion-label>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <p>{{ loadedAppeal['text'] }}</p>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "Ce4J":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/my-appeals/appeal-detail/appeal-detail.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AppealDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppealDetailModule", function() { return AppealDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _appeal_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appeal-detail.component */ "uhU7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let AppealDetailModule = class AppealDetailModule {
};
AppealDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _appeal_detail_component__WEBPACK_IMPORTED_MODULE_5__["AppealDetailComponent"] }]),
        ],
        declarations: [_appeal_detail_component__WEBPACK_IMPORTED_MODULE_5__["AppealDetailComponent"]]
    })
], AppealDetailModule);



/***/ }),

/***/ "hmQ3":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/my-appeals/appeal-detail/appeal-detail.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBlYWwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uhU7":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/my-appeals/appeal-detail/appeal-detail.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AppealDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppealDetailComponent", function() { return AppealDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_appeal_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./appeal-detail.component.html */ "Afvp");
/* harmony import */ var _appeal_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appeal-detail.component.scss */ "hmQ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tab4.service */ "xqI/");






let AppealDetailComponent = class AppealDetailComponent {
    constructor(activatedRoute, appealService) {
        this.activatedRoute = activatedRoute;
        this.appealService = appealService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('id')) {
                return;
            }
            const id = paramMap.get('id');
            this.loadedAppeal = this.appealService.getAppeal(id);
        });
    }
};
AppealDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _tab4_service__WEBPACK_IMPORTED_MODULE_5__["tab4Service"] }
];
AppealDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appeal-detail',
        template: _raw_loader_appeal_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appeal_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppealDetailComponent);



/***/ })

}]);
//# sourceMappingURL=my-appeals-appeal-detail-appeal-detail-module.js.map
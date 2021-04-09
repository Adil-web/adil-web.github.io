(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fourth-profile-tab-tab4-module"],{

/***/ "0wZo":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/edit-profile/edit-profile.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "2qmH":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/fourth-profile-tab/tab4.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"success\">\n    <ion-title>Профиль</ion-title>\n    <ion-icon (click)=\"openModalProfileEdit()\" slot=\"end\" size=\"large\" name=\"create-outline\" class=\"ion-padding-end\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-list>\n          <ion-item>\n            <ion-label>E-mail</ion-label>\n            <ion-label>test@gmail.com</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Имя</ion-label>\n            <ion-label>Иван</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Фамилия</ion-label>\n            <ion-label>Иванов</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>ИИН</ion-label>\n            <ion-label>123456789000</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-list>\n        <ion-item routerLink=\"my-appeals\">Мои обращения</ion-item>\n        <ion-item routerLink=\"about-app\">О приложении</ion-item>\n        <ion-item (click)=\"chooseLanguage()\" class=\"ion-justify-content-between\">\n          <ion-label>Язык</ion-label>\n          <ion-badge color=\"medium\">{{ currentLanguage }}</ion-badge>\n        </ion-item>\n      </ion-list>\n      <ion-button fill=\"clear\" (click)=\"openModalAuth()\">Выйти из приложения</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "61vq":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/my-appeals/my-appeals.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MyAppealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAppealsComponent", function() { return MyAppealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_appeals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-appeals.component.html */ "x17J");
/* harmony import */ var _my_appeals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-appeals.component.scss */ "cAfj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MyAppealsComponent = class MyAppealsComponent {
    constructor() {
        this.appeals = [{
                id: '1',
                title: 'Обращение по поводу земельного участка',
                date: '07.04.2021'
            }, {
                id: '2',
                title: 'Обращение',
                date: '07.04.2021'
            }];
    }
    ngOnInit() { }
};
MyAppealsComponent.ctorParameters = () => [];
MyAppealsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-appeals',
        template: _raw_loader_my_appeals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_appeals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyAppealsComponent);



/***/ }),

/***/ "Czqi":
/*!*******************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/tab4.module.ts ***!
  \*******************************************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "HGUf");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab4-routing.module */ "GUhH");








let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab4PageRoutingModule"],
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]],
    })
], Tab4PageModule);



/***/ }),

/***/ "FPxC":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/fourth-profile-tab/edit-profile/edit-profile.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Редактирование профиля</ion-title>\n    <ion-icon size=\"large\" name='close' (click)='dismiss()' slot=\"end\" style=\"float: right\" class=\"ion-padding-end\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--  <form #editForm=\"editForm\">-->\n  <form>\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-padding\">\n            <ion-item class=\"ion-text-center\">\n              <ion-label color=\"medium\" position=\"floating\">Имя</ion-label>\n              <ion-input name=\"name\" type=\"text\" value=\"Иван\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item class=\"ion-text-center\">\n              <ion-label color=\"medium\" position=\"floating\">Фамилия</ion-label>\n              <ion-input name=\"lastname\" type=\"text\" value=\"Иванов\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item class=\"ion-text-center\">\n              <ion-label color=\"medium\" position=\"floating\">E-mail</ion-label>\n              <ion-input name=\"email\" type=\"email\" value=\"test@gmail.com\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item class=\"ion-text-center\">\n              <ion-label color=\"medium\" position=\"floating\">ИИН</ion-label>\n              <ion-input name=\"ИИН\" type=\"number\" value=\"123456789000\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n<!--            <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Регистрация</ion-button>-->\n            <ion-button size=\"large\" type=\"submit\" expand=\"block\">Сохранить изменения</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "GUhH":
/*!***************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/tab4-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "HGUf");
/* harmony import */ var _my_appeals_my_appeals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-appeals/my-appeals.component */ "61vq");
/* harmony import */ var _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-app/about-app.component */ "a8ZE");






const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"],
    },
    {
        path: 'my-appeals',
        component: _my_appeals_my_appeals_component__WEBPACK_IMPORTED_MODULE_4__["MyAppealsComponent"],
    },
    {
        path: 'about-app',
        component: _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_5__["AboutAppComponent"],
    },
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "HGUf":
/*!*****************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/tab4.page.ts ***!
  \*****************************************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab4.page.html */ "2qmH");
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ "yis9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.component */ "qrmE");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "tudv");
/* harmony import */ var _my_appeals_my_appeals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-appeals/my-appeals.component */ "61vq");








let Tab4Page = class Tab4Page {
    constructor(actionSheetController, modalCtrl) {
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.currentLanguage = 'Русский';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.openModalAuth()
        });
    }
    openModalAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const authModal = yield this.modalCtrl.create({
                component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
            });
            yield authModal.present();
        });
    }
    openModalProfileEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const editModal = yield this.modalCtrl.create({
                component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]
            });
            yield editModal.present();
        });
    }
    openModalMyAppeals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const appealsModal = yield this.modalCtrl.create({
                component: _my_appeals_my_appeals_component__WEBPACK_IMPORTED_MODULE_7__["MyAppealsComponent"]
            });
            yield appealsModal.present();
        });
    }
    chooseLanguage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Выберите язык',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Русский',
                        handler: () => {
                            this.currentLanguage = 'Русский';
                            console.log('Ru clicked');
                        }
                    }, {
                        text: 'Казахский',
                        handler: () => {
                            this.currentLanguage = 'Казахский';
                            console.log('Kz clicked');
                        }
                    }, {
                        text: 'Английский',
                        handler: () => {
                            this.currentLanguage = 'Английский';
                            console.log('En clicked');
                        }
                    }, {
                        text: 'Отмена',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab4Page);



/***/ }),

/***/ "a8ZE":
/*!*************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/about-app/about-app.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AboutAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppComponent", function() { return AboutAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-app.component.html */ "fLff");
/* harmony import */ var _about_app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-app.component.scss */ "sYoX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutAppComponent = class AboutAppComponent {
    constructor() { }
    ngOnInit() { }
};
AboutAppComponent.ctorParameters = () => [];
AboutAppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-app',
        template: _raw_loader_about_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutAppComponent);



/***/ }),

/***/ "cAfj":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/my-appeals/my-appeals.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hcHBlYWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "fLff":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/fourth-profile-tab/about-app/about-app.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <!--    <ion-buttons slot=\"start\">-->\n    <!--      <ion-back-button icon=\"add\" defaultHref=\"profile\"></ion-back-button>-->\n    <!--    </ion-buttons>-->\n    <ion-tab-button tab=\"profile\" style=\"float: left; background: transparent\">\n      <ion-icon size=\"large\" color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-title>О приложений</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>О приложений</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore et obcaecati quibusdam quod saepe tempora temporibus voluptate. Amet doloribus ducimus facilis fuga fugiat illo iusto modi mollitia odit, omnis placeat porro recusandae sed sint unde voluptas voluptatibus? A ab aliquid delectus fugiat nam natus necessitatibus nesciunt nobis vel voluptate. Ducimus nihil praesentium quis sed. A accusantium amet aperiam consectetur culpa doloremque earum est fugiat illum ipsa libero, maiores minima molestias, natus, nemo nulla pariatur perferendis porro praesentium sapiente tempora voluptate voluptatibus voluptatum. Aliquam, animi at consectetur ea fugiat laborum nam necessitatibus nobis placeat quam repudiandae sequi tempore veniam voluptatibus.</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "sYoX":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/about-app/about-app.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1hcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "tudv":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "FPxC");
/* harmony import */ var _edit_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.component.scss */ "0wZo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let EditProfileComponent = class EditProfileComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
EditProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditProfileComponent);



/***/ }),

/***/ "x17J":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/fourth-profile-tab/my-appeals/my-appeals.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n<!--    <ion-buttons slot=\"start\">-->\n<!--      <ion-back-button icon=\"add\" defaultHref=\"profile\"></ion-back-button>-->\n<!--    </ion-buttons>-->\n    <ion-tab-button tab=\"profile\" style=\"float: left; background: transparent\">\n      <ion-icon size=\"large\" color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-title class=\"ion-text-start\">Мои обращения</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-list class=\"ion-text-start\">\n<!--        <app-appeal-item-->\n<!--          *ngFor=\"let appeal of appeals\"-->\n<!--          [appealTitle]=\"appeal.title\"-->\n<!--          [date]=\"appeal.date\"-->\n<!--        ></app-appeal-item>-->\n<!--        <app-appeal-item></app-appeal-item>-->\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            <ion-text>\n              <!--        <h2>{{ appealTitle }}</h2>-->\n              <h2>test</h2>\n            </ion-text>\n            <ion-text color=\"medium\">\n              <!--        <p>{{ date }}</p>-->\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae itaque sapiente.</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "yis9":
/*!*******************************************************************!*\
  !*** ./src/app/components/tabs/fourth-profile-tab/tab4.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=fourth-profile-tab-tab4-module.js.map
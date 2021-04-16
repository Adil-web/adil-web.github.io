(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tabs-tabs-module"],{

/***/ "86nL":
/*!**********************************************!*\
  !*** ./src/app/components/tabs/tabs.page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "X/NE");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "P735");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _third_notifications_tab_tab3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./third-notifications-tab/tab3.service */ "Zr5Q");





let TabsPage = class TabsPage {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    ngOnInit() {
        setInterval(() => {
            this.counter = this.notificationService.getCounter();
        }, 1000);
    }
    ngOnChanges(changes) {
        console.log(changes);
        this.counter = this.notificationService.getCounter();
    }
};
TabsPage.ctorParameters = () => [
    { type: _third_notifications_tab_tab3_service__WEBPACK_IMPORTED_MODULE_4__["tab3Service"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "LyKk":
/*!********************************************************!*\
  !*** ./src/app/components/tabs/tabs-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "86nL");




// import { isPlatform } from '@ionic/angular';
const routes = [
    {
        path: 'mobile',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'menu',
                loadChildren: () => __webpack_require__.e(/*! import() | first-menu-tab-tab1-module */ "first-menu-tab-tab1-module").then(__webpack_require__.bind(null, /*! ./first-menu-tab/tab1.module */ "MxkV")).then(m => m.Tab1PageModule)
                // children: [
                //   {
                //     path: '',
                //     loadChildren: () => import('./first-menu-tab/tab1.module').then(m => m.Tab1PageModule)
                //   }
                // ]
            },
            {
                path: 'widgets',
                loadChildren: () => __webpack_require__.e(/*! import() | second-widgets-tab-tab2-module */ "second-widgets-tab-tab2-module").then(__webpack_require__.bind(null, /*! ./second-widgets-tab/tab2.module */ "odRj")).then(m => m.Tab2PageModule)
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | third-notifications-tab-tab3-module */ "third-notifications-tab-tab3-module").then(__webpack_require__.bind(null, /*! ./third-notifications-tab/tab3.module */ "WfZY")).then(m => m.Tab3PageModule),
                    },
                    {
                        path: ':id',
                        loadChildren: () => __webpack_require__.e(/*! import() | third-notifications-tab-notification-detail-notification-detail-module */ "third-notifications-tab-notification-detail-notification-detail-module").then(__webpack_require__.bind(null, /*! ./third-notifications-tab/notification-detail/notification-detail.module */ "LFNo")).then(m => m.NotificationDetailModule)
                    }
                ]
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | fourth-profile-tab-tab4-module */ "fourth-profile-tab-tab4-module").then(__webpack_require__.bind(null, /*! ./fourth-profile-tab/tab4.module */ "Czqi")).then(m => m.Tab4PageModule)
            }
        ]
    },
    // {
    //   path: 'web',
    //   component: MainComponent,
    //   children: [{}]
    // },
    {
        path: '',
        redirectTo: 'mobile/profile',
        pathMatch: 'full'
    }
];
// function checkPlatform() {
//   return isPlatform('desktop') ? 'web':'mobile/fourth-profile-tab'
// }
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "P735":
/*!************************************************!*\
  !*** ./src/app/components/tabs/tabs.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VM0K":
/*!************************************************!*\
  !*** ./src/app/components/tabs/tabs.module.ts ***!
  \************************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "LyKk");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "86nL");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "X/NE":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/tabs.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"menu\">\n      <ion-icon name=\"apps-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"widgets\">\n      <ion-icon name=\"extension-puzzle-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notifications\">\n      <ion-badge color=\"danger\">{{ counter }}</ion-badge>\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "Zr5Q":
/*!*************************************************************************!*\
  !*** ./src/app/components/tabs/third-notifications-tab/tab3.service.ts ***!
  \*************************************************************************/
/*! exports provided: tab3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tab3Service", function() { return tab3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let tab3Service = class tab3Service {
    constructor() {
        this.notifications = [
            {
                id: '1',
                title: 'Уважаемые жители и гости',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi aperiam autem beatae cupiditate delectus dicta, dolor dolore ea, enim est, et eveniet harum hic id illum in incidunt libero magnam magni maxime minus mollitia natus necessitatibus nobis nostrum obcaecati odit recusandae rerum sed vel voluptatem voluptatibus. Distinctio, rem?',
                date: '11 Ноября 2018 09:40'
            },
            {
                id: '2',
                title: 'Уведомление',
                text: 'enim est, et eveniet harum hic id illum in incidunt libero magnam magni maxime minus mollitia natus necessitatibus nobis nostrum obcaecati odit recusandae rerum sed vel voluptatem voluptatibus. Distinctio, rem?',
                date: '11 Ноября 2018 09:40'
            },
        ];
    }
    getCounter() {
        return this.notifications.length;
    }
    getAllNotifications() {
        return [...this.notifications];
    }
    getNotification(id) {
        return Object.assign({}, this.notifications.find(item => {
            return item.id === id;
        }));
    }
    setNotification(data) {
        this.notifications.push(data);
        console.log(this.notifications);
    }
};
tab3Service.ctorParameters = () => [];
tab3Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], tab3Service);



/***/ })

}]);
//# sourceMappingURL=components-tabs-tabs-module.js.map
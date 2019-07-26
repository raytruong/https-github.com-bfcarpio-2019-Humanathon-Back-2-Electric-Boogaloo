(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");







var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
                    }
                ])
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/map/map.page.html":
/*!***********************************!*\
  !*** ./src/app/map/map.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Map\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div id=\"map\" style=\"width:100%; height:100%;\"></div>\n"

/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/map/map.page.ts":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapPage = /** @class */ (function () {
    function MapPage() {
        this.icons = [
            "flask",
            "wifi",
            "beer",
            "football",
            "basketball",
            "paper-plane",
            "american-football",
            "boat",
            "bluetooth",
            "build"
        ];
        this.items = [];
        this.lat = 5;
        this.lng = 5;
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: "Item " + i,
                note: "This is item #" + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    MapPage.prototype.ngOnInit = function () { };
    MapPage.prototype.ionViewDidEnter = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var map = L.map('map', {
            crs: L.CRS.Simple,
            maxBounds: [[-10, -25], [1050, 1050]],
            maxBoundsViscosity: 1.0,
        });
        var bounds = [[-26.5, -25], [1021.5, 1023]];
        var image = L.imageOverlay('assets/floorplan.svg', bounds).addTo(map);
        L.marker([120, 30]).addTo(map).on('click', function (e) {
            alert(this.getLatLng());
        });
        map.fitBounds(bounds);
    };
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-map",
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MapPage = /** @class */ (function () {
    function MapPage(toastController, route) {
        this.toastController = toastController;
        this.route = route;
    }
    //Lifecycle hooks
    MapPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id"); //bind marker param
    };
    MapPage.prototype.ionViewDidEnter = function () {
        this.loadMap();
    };
    //Functions
    MapPage.prototype.loadMap = function () {
        //API get id marker info
        var label = "Raymond Truong";
        var desc = "Intern General 2";
        var phone = "123-456-7890";
        var mapPath = "assets/floorplan.svg";
        var lat = 0;
        var lng = 0;
        var bounds = [[-26.5, -25], [1021.5, 1023]];
        var map = L.map("map", {
            crs: L.CRS.Simple,
            maxBounds: [[-1000, -1000], [2000, 2000]],
            maxBoundsViscosity: 1.0
        });
        L.imageOverlay(mapPath, bounds).addTo(map);
        map.fitBounds(bounds);
        if (label && desc && phone && mapPath && lat && lng) {
            //Begin plotting marker
            this.plotPoint(map, lat, lng, label, desc, phone);
            //Fly to marker and show info
            map.flyTo([lat, lng], 1, {});
            this.showMarkerInfo(label, desc, phone);
            map.on("click", function (e) {
                var mp = new L.Marker([e.latlng.lat, e.latlng.lng]);
                alert(mp.getLatLng());
            });
        }
    };
    MapPage.prototype.showMarkerInfo = function (label, desc, phone) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: label + " | " + desc + " | " + phone,
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.plotPoint = function (map, lat, lng, label, desc, phone) {
        var _this = this;
        L.marker([lat, lng])
            .addTo(map)
            .on("click", function () {
            map.flyTo([lat, lng], 1, {});
            _this.showMarkerInfo(label, desc, phone);
        });
    };
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-map",
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map
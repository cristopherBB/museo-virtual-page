function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _virtual_museum_virtual_museum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./virtual-museum/virtual-museum.component */
    "./src/app/virtual-museum/virtual-museum.component.ts");

    var routes = [{
      path: '',
      component: _virtual_museum_virtual_museum_component__WEBPACK_IMPORTED_MODULE_2__["VirtualMuseumComponent"],
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'museum';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _virtual_museum_virtual_museum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./virtual-museum/virtual-museum.component */
    "./src/app/virtual-museum/virtual-museum.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _virtual_museum_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./virtual-museum/canvas/canvas.component */
    "./src/app/virtual-museum/canvas/canvas.component.ts");
    /* harmony import */


    var _virtual_museum_virtual_view_virtual_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./virtual-museum/virtual-view/virtual-view.component */
    "./src/app/virtual-museum/virtual-view/virtual-view.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _virtual_museum_virtual_museum_component__WEBPACK_IMPORTED_MODULE_6__["VirtualMuseumComponent"], _virtual_museum_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__["CanvasComponent"], _virtual_museum_virtual_view_virtual_view_component__WEBPACK_IMPORTED_MODULE_11__["VirtualViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _virtual_museum_virtual_museum_component__WEBPACK_IMPORTED_MODULE_6__["VirtualMuseumComponent"], _virtual_museum_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__["CanvasComponent"], _virtual_museum_virtual_view_virtual_view_component__WEBPACK_IMPORTED_MODULE_11__["VirtualViewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/toolbar/toolbar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.ts ***!
    \**********************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)();
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 7,
      vars: 0,
      consts: [[1, "spacer"], ["mat-icon-button", ""]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Museum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci9DOlxcVXNlcnNcXGFsdmFyb1xcRG9jdW1lbnRzXFxhbmd1bGFyXFxtdXNldW0vc3JjXFxhcHBcXHRvb2xiYXJcXHRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiIsIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/virtual-museum/canvas/canvas.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/virtual-museum/canvas/canvas.component.ts ***!
    \***********************************************************/

  /*! exports provided: CanvasComponent */

  /***/
  function srcAppVirtualMuseumCanvasCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasComponent", function () {
      return CanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["map"];

    function CanvasComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick.emit(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "location_on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pin_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", pin_r1.x + "%")("top", pin_r1.y + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "pin-" + i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", i_r2 === ctx_r0.selectedPin ? "28px" : "24px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", i_r2 === ctx_r0.selectedPin ? "warn" : "primary");
      }
    }

    var CanvasComponent = /*#__PURE__*/function () {
      function CanvasComponent() {
        _classCallCheck(this, CanvasComponent);

        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CanvasComponent;
    }();

    CanvasComponent.ɵfac = function CanvasComponent_Factory(t) {
      return new (t || CanvasComponent)();
    };

    CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CanvasComponent,
      selectors: [["app-canvas"]],
      viewQuery: function CanvasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      inputs: {
        pins: "pins",
        selectedPin: "selectedPin"
      },
      outputs: {
        onClick: "onClick"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "map-size"], [1, "map"], ["class", "pin", 3, "id", "left", "top", "click", 4, "ngFor", "ngForOf"], [1, "pin", 3, "id", "click"], [3, "color"]],
      template: function CanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CanvasComponent_div_2_Template, 3, 8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pins);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: [".map[_ngcontent-%COMP%] {\n  background-image: url('HaciendaTrinidad.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 350px;\n  height: 460px;\n  display: block;\n  margin: auto;\n  background-size: 350px 350px;\n}\n\n.pin[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n}\n\n.map-size[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlydHVhbC1tdXNldW0vY2FudmFzL0M6XFxVc2Vyc1xcYWx2YXJvXFxEb2N1bWVudHNcXGFuZ3VsYXJcXG11c2V1bS9zcmNcXGFwcFxcdmlydHVhbC1tdXNldW1cXGNhbnZhc1xcY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aXJ0dWFsLW11c2V1bS9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aXJ0dWFsLW11c2V1bS9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL0hhY2llbmRhVHJpbmlkYWQuc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogNDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzUwcHggMzUwcHg7XHJcbn1cclxuXHJcbi5waW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYXAtc2l6ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG4iLCIubWFwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9IYWNpZW5kYVRyaW5pZGFkLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogNDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogMzUwcHggMzUwcHg7XG59XG5cbi5waW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hcC1zaXplIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-canvas',
          templateUrl: './canvas.component.html',
          styleUrls: ['./canvas.component.scss']
        }]
      }], function () {
        return [];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['map']
        }],
        pins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedPin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/virtual-museum/virtual-museum.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/virtual-museum/virtual-museum.component.ts ***!
    \************************************************************/

  /*! exports provided: VirtualMuseumComponent */

  /***/
  function srcAppVirtualMuseumVirtualMuseumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualMuseumComponent", function () {
      return VirtualMuseumComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _virtual_view_virtual_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./virtual-view/virtual-view.component */
    "./src/app/virtual-museum/virtual-view/virtual-view.component.ts");
    /* harmony import */


    var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./canvas/canvas.component */
    "./src/app/virtual-museum/canvas/canvas.component.ts");

    var _c0 = ["virtualView"];

    var VirtualMuseumComponent = /*#__PURE__*/function () {
      function VirtualMuseumComponent() {
        var _this = this;

        _classCallCheck(this, VirtualMuseumComponent);

        this.tour = {
          pins: [],
          views: []
        };
        this.selectedPin = 0;

        this.onPinClick = function (viewPosition) {
          _this.selectedPin = viewPosition;
          _this.selectedView = _this.tour.views[viewPosition];
        };
      }

      _createClass(VirtualMuseumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var pins = []; // caminadora

          pins.push({
            x: 15.5,
            y: 51.5
          });
          pins.push({
            x: 23.5,
            y: 51.5
          });
          pins.push({
            x: 33,
            y: 51.5
          });
          pins.push({
            x: 44.5,
            y: 51.5
          });
          pins.push({
            x: 56.5,
            y: 51.5
          });
          pins.push({
            x: 66,
            y: 51.5
          });
          pins.push({
            x: 75.8,
            y: 52.3
          }); // Puesto 2

          pins.push({
            x: 36.7,
            y: 40
          }); // Puesto 4

          pins.push({
            x: 62,
            y: 40
          }); // puesto 7

          pins.push({
            x: 84,
            y: 56
          });
          this.tour.pins = pins;
          var views = [];
          views.push('pasillo-1');
          views.push('pasillo-2');
          views.push('pasillo-3');
          views.push('pasillo-4');
          views.push('pasillo-5');
          views.push('pasillo-6');
          views.push('pasillo-7');
          views.push('sala-2');
          views.push('tienda-chocolate');
          views.push('sala-fotografia');
          this.tour.views = views;
          this.selectedView = this.tour.views[0];
        }
      }]);

      return VirtualMuseumComponent;
    }();

    VirtualMuseumComponent.ɵfac = function VirtualMuseumComponent_Factory(t) {
      return new (t || VirtualMuseumComponent)();
    };

    VirtualMuseumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VirtualMuseumComponent,
      selectors: [["app-virtual-museum"]],
      viewQuery: function VirtualMuseumComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.virtualView = _t.first);
        }
      },
      decls: 5,
      vars: 3,
      consts: [[1, "container"], [3, "viewId"], ["virtualView", ""], [1, "croquis-content"], [1, "croquis", 3, "pins", "selectedPin", "onClick"]],
      template: function VirtualMuseumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-virtual-view", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-canvas", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function VirtualMuseumComponent_Template_app_canvas_onClick_4_listener($event) {
            return ctx.onPinClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewId", ctx.selectedView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pins", ctx.tour.pins)("selectedPin", ctx.selectedPin);
        }
      },
      directives: [_virtual_view_virtual_view_component__WEBPACK_IMPORTED_MODULE_1__["VirtualViewComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__["CanvasComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlydHVhbC1tdXNldW0vQzpcXFVzZXJzXFxhbHZhcm9cXERvY3VtZW50c1xcYW5ndWxhclxcbXVzZXVtL3NyY1xcYXBwXFx2aXJ0dWFsLW11c2V1bVxcdmlydHVhbC1tdXNldW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpcnR1YWwtbXVzZXVtL3ZpcnR1YWwtbXVzZXVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpcnR1YWwtbXVzZXVtL3ZpcnR1YWwtbXVzZXVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualMuseumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-virtual-museum',
          templateUrl: './virtual-museum.component.html',
          styleUrls: ['./virtual-museum.component.scss']
        }]
      }], function () {
        return [];
      }, {
        virtualView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['virtualView']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/virtual-museum/virtual-view/virtual-view.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/virtual-museum/virtual-view/virtual-view.component.ts ***!
    \***********************************************************************/

  /*! exports provided: VirtualViewComponent */

  /***/
  function srcAppVirtualMuseumVirtualViewVirtualViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualViewComponent", function () {
      return VirtualViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var VirtualViewComponent = /*#__PURE__*/function () {
      function VirtualViewComponent(sanitizer) {
        _classCallCheck(this, VirtualViewComponent);

        this.sanitizer = sanitizer;
      }

      _createClass(VirtualViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getMuseumUrl",
        value: function getMuseumUrl() {
          var url = "https://alvdeveloper.com/pannellum?scene=".concat(this.viewId);
          console.log(url);
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return VirtualViewComponent;
    }();

    VirtualViewComponent.ɵfac = function VirtualViewComponent_Factory(t) {
      return new (t || VirtualViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    VirtualViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VirtualViewComponent,
      selectors: [["app-virtual-view"]],
      inputs: {
        viewId: "viewId"
      },
      decls: 3,
      vars: 2,
      consts: [["width", "1020", "height", "680", "allowfullscreen", "", 3, "src"]],
      template: function VirtualViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing ", ctx.viewId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getMuseumUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpcnR1YWwtbXVzZXVtL3ZpcnR1YWwtdmlldy92aXJ0dWFsLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-virtual-view',
          templateUrl: './virtual-view.component.html',
          styleUrls: ['./virtual-view.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        viewId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\alvaro\Documents\angular\museum\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
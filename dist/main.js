(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<body *ngIf=\"!authService.isLoggedIn()\" class=\"vertical-layout vertical-menu 2-columns   fixed-navbar\" data-open=\"click\"\r\n   data-menu=\"vertical-menu\" data-color=\"bg-gradient-x-purple-blue\" data-col=\"2-columns\">\r\n   <app-auth-navbar></app-auth-navbar>\r\n   <router-outlet></router-outlet>\r\n</body>-->\r\n\r\n<body *ngIf=\"authService.isAdmin() && authService.isLoggedIn()\" class=\"vertical-layout vertical-menu 2-columns   menu-expanded fixed-navbar\"\r\n   data-open=\"click\" data-menu=\"vertical-menu\" data-color=\"bg-gradient-x-purple-blue\" data-col=\"2-columns\">\r\n   <app-admin-navbar></app-admin-navbar>\r\n   <router-outlet></router-outlet>\r\n</body>\r\n\r\n<body *ngIf=\"!authService.isAdmin()\" class=\"vertical-layout vertical-menu 2-columns   menu-expanded fixed-navbar\"\r\n   data-open=\"click\" data-menu=\"vertical-menu\" data-color=\"bg-gradient-x-purple-blue\" data-col=\"2-columns\">\r\n   <app-user-navbar></app-user-navbar>\r\n   <router-outlet></router-outlet>\r\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'GyanMitra19';
        this.href = "";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-select2 */ "./node_modules/ng2-select2/ng2-select2.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_select2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes_app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes/app.routes */ "./src/routes/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/user/login/login.component */ "./src/app/component/user/login/login.component.ts");
/* harmony import */ var _component_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/user/activation/activation.component */ "./src/app/component/user/activation/activation.component.ts");
/* harmony import */ var _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/user/register/register.component */ "./src/app/component/user/register/register.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/admin/admin-event/admin-event.component */ "./src/app/component/admin/admin-event/admin-event.component.ts");
/* harmony import */ var _component_admin_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/admin/admin-navbar/admin-navbar.component */ "./src/app/component/admin/admin-navbar/admin-navbar.component.ts");
/* harmony import */ var _component_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/admin/admin-sidebar/admin-sidebar.component */ "./src/app/component/admin/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _component_admin_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/admin/home/home.component */ "./src/app/component/admin/home/home.component.ts");
/* harmony import */ var _component_admin_college_college_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/admin/college/college.component */ "./src/app/component/admin/college/college.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _services_accomodation_accomodation_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/accomodation/accomodation.service */ "./src/app/services/accomodation/accomodation.service.ts");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _services_college_college_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/college/college.service */ "./src/app/services/college/college.service.ts");
/* harmony import */ var _component_admin_category_category_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/admin/category/category.component */ "./src/app/component/admin/category/category.component.ts");
/* harmony import */ var _component_admin_degree_degree_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/admin/degree/degree.component */ "./src/app/component/admin/degree/degree.component.ts");
/* harmony import */ var _component_admin_department_department_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/admin/department/department.component */ "./src/app/component/admin/department/department.component.ts");
/* harmony import */ var _services_degree_degree_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/degree/degree.service */ "./src/app/services/degree/degree.service.ts");
/* harmony import */ var _services_department_department_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/department/department.service */ "./src/app/services/department/department.service.ts");
/* harmony import */ var _component_admin_course_course_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/admin/course/course.component */ "./src/app/component/admin/course/course.component.ts");
/* harmony import */ var _pipes_searchfilter_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/searchfilter.pipe */ "./src/app/pipes/searchfilter.pipe.ts");
/* harmony import */ var _pipes_resolve_category_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/resolve-category.pipe */ "./src/app/pipes/resolve-category.pipe.ts");
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/registration/registration.service */ "./src/app/services/registration/registration.service.ts");
/* harmony import */ var _services_role_role_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/role/role.service */ "./src/app/services/role/role.service.ts");
/* harmony import */ var _services_role_user_role_user_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/role_user/role-user.service */ "./src/app/services/role_user/role-user.service.ts");
/* harmony import */ var _services_team_team_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/team/team.service */ "./src/app/services/team/team.service.ts");
/* harmony import */ var _services_team_member_team_member_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/team_member/team-member.service */ "./src/app/services/team_member/team-member.service.ts");
/* harmony import */ var _pipes_resolvecollege_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/resolvecollege.pipe */ "./src/app/pipes/resolvecollege.pipe.ts");
/* harmony import */ var _services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/eventRegistration/event-registration.service */ "./src/app/services/eventRegistration/event-registration.service.ts");
/* harmony import */ var _component_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./component/admin/registration/registration.component */ "./src/app/component/admin/registration/registration.component.ts");
/* harmony import */ var _component_admin_participantstatus_participantstatus_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./component/admin/participantstatus/participantstatus.component */ "./src/app/component/admin/participantstatus/participantstatus.component.ts");
/* harmony import */ var _component_admin_new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./component/admin/new-registration/new-registration.component */ "./src/app/component/admin/new-registration/new-registration.component.ts");
/* harmony import */ var _component_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./component/admin/admin-users/admin-users.component */ "./src/app/component/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _component_user_user_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./component/user/user.component */ "./src/app/component/user/user.component.ts");
/* harmony import */ var _component_user_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./component/user/user-navbar/user-navbar.component */ "./src/app/component/user/user-navbar/user-navbar.component.ts");
/* harmony import */ var _component_user_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./component/user/user-sidebar/user-sidebar.component */ "./src/app/component/user/user-sidebar/user-sidebar.component.ts");
/* harmony import */ var _component_user_about_about_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./component/user/about/about.component */ "./src/app/component/user/about/about.component.ts");
/* harmony import */ var _component_user_events_events_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./component/user/events/events.component */ "./src/app/component/user/events/events.component.ts");
/* harmony import */ var _component_user_workshops_workshops_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./component/user/workshops/workshops.component */ "./src/app/component/user/workshops/workshops.component.ts");
/* harmony import */ var _component_user_cart_cart_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./component/user/cart/cart.component */ "./src/app/component/user/cart/cart.component.ts");
/* harmony import */ var src_app_component_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! src/app/component/user/user-home/user-home.component */ "./src/app/component/user/user-home/user-home.component.ts");
/* harmony import */ var _guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./guard/auth/auth.guard */ "./src/app/guard/auth/auth.guard.ts");
/* harmony import */ var _component_admin_year_year_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./component/admin/year/year.component */ "./src/app/component/admin/year/year.component.ts");
/* harmony import */ var _component_admin_admin_accomodation_admin_accomodation_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./component/admin/admin-accomodation/admin-accomodation.component */ "./src/app/component/admin/admin-accomodation/admin-accomodation.component.ts");
/* harmony import */ var _component_user_user_accomodation_user_accomodation_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./component/user/user-accomodation/user-accomodation.component */ "./src/app/component/user/user-accomodation/user-accomodation.component.ts");
/* harmony import */ var _component_admin_role_role_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./component/admin/role/role.component */ "./src/app/component/admin/role/role.component.ts");
/* harmony import */ var _component_admin_event_participants_event_participants_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./component/admin/event-participants/event-participants.component */ "./src/app/component/admin/event-participants/event-participants.component.ts");
/* harmony import */ var _component_admin_event_participants_team_event_participants_team_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./component/admin/event-participants-team/event-participants-team.component */ "./src/app/component/admin/event-participants-team/event-participants-team.component.ts");
/* harmony import */ var _component_user_team_register_team_register_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./component/user/team-register/team-register.component */ "./src/app/component/user/team-register/team-register.component.ts");
/* harmony import */ var _pipes_filter_events_based_on_department_pipe__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pipes/filter-events-based-on-department.pipe */ "./src/app/pipes/filter-events-based-on-department.pipe.ts");
/* harmony import */ var _component_admin_admin_cart_confirmation_admin_cart_confirmation_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./component/admin/admin-cart-confirmation/admin-cart-confirmation.component */ "./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.ts");
/* harmony import */ var _component_user_gyan_mitra18_gyan_mitra18_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./component/user/gyan-mitra18/gyan-mitra18.component */ "./src/app/component/user/gyan-mitra18/gyan-mitra18.component.ts");
/* harmony import */ var _component_admin_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./component/admin/configurations/configurations.component */ "./src/app/component/admin/configurations/configurations.component.ts");
/* harmony import */ var _pipes_rules_transform_pipe__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pipes/rules-transform.pipe */ "./src/app/pipes/rules-transform.pipe.ts");
/* harmony import */ var _component_user_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./component/user/payment-success/payment-success.component */ "./src/app/component/user/payment-success/payment-success.component.ts");
/* harmony import */ var _component_user_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./component/user/payment-failure/payment-failure.component */ "./src/app/component/user/payment-failure/payment-failure.component.ts");
/* harmony import */ var _component_user_acc_failure_acc_failure_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./component/user/acc-failure/acc-failure.component */ "./src/app/component/user/acc-failure/acc-failure.component.ts");
/* harmony import */ var _component_user_acc_success_acc_success_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./component/user/acc-success/acc-success.component */ "./src/app/component/user/acc-success/acc-success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////




















///////////////////////////////////////////////////////////////////////////////////////












////////////////////////////////////////////////////////////////

















/////////////////////////////////////////////////////////////////
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _component_admin_college_college_component__WEBPACK_IMPORTED_MODULE_19__["CollegeComponent"],
                _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _component_admin_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _component_admin_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__["AdminNavbarComponent"],
                _component_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["AdminSidebarComponent"],
                _component_admin_category_category_component__WEBPACK_IMPORTED_MODULE_25__["CategoryComponent"],
                _component_admin_degree_degree_component__WEBPACK_IMPORTED_MODULE_26__["DegreeComponent"],
                _component_admin_department_department_component__WEBPACK_IMPORTED_MODULE_27__["DepartmentComponent"],
                _component_admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_15__["AdminEventComponent"],
                _component_admin_course_course_component__WEBPACK_IMPORTED_MODULE_30__["CourseComponent"],
                _pipes_searchfilter_pipe__WEBPACK_IMPORTED_MODULE_31__["SearchfilterPipe"],
                _pipes_resolve_category_pipe__WEBPACK_IMPORTED_MODULE_32__["ResolveCategoryPipe"],
                _component_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_40__["RegistrationComponent"],
                _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _pipes_resolvecollege_pipe__WEBPACK_IMPORTED_MODULE_38__["ResolvecollegePipe"],
                _component_admin_participantstatus_participantstatus_component__WEBPACK_IMPORTED_MODULE_41__["ParticipantstatusComponent"],
                _component_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_12__["ActivationComponent"],
                _component_admin_new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_42__["NewRegistrationComponent"],
                _component_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_43__["AdminUsersComponent"],
                _component_user_user_component__WEBPACK_IMPORTED_MODULE_44__["UserComponent"],
                _component_user_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_45__["UserNavbarComponent"],
                _component_user_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_46__["UserSidebarComponent"],
                _component_user_about_about_component__WEBPACK_IMPORTED_MODULE_47__["AboutComponent"],
                _component_user_events_events_component__WEBPACK_IMPORTED_MODULE_48__["EventsComponent"],
                _component_user_workshops_workshops_component__WEBPACK_IMPORTED_MODULE_49__["WorkshopsComponent"],
                _component_user_cart_cart_component__WEBPACK_IMPORTED_MODULE_50__["CartComponent"],
                _component_admin_year_year_component__WEBPACK_IMPORTED_MODULE_53__["YearComponent"],
                _component_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_12__["ActivationComponent"],
                _component_admin_admin_accomodation_admin_accomodation_component__WEBPACK_IMPORTED_MODULE_54__["AdminAccomodationComponent"],
                _component_user_user_accomodation_user_accomodation_component__WEBPACK_IMPORTED_MODULE_55__["UserAccomodationComponent"],
                _component_admin_role_role_component__WEBPACK_IMPORTED_MODULE_56__["RoleComponent"],
                _component_admin_event_participants_event_participants_component__WEBPACK_IMPORTED_MODULE_57__["EventParticipantsComponent"],
                _component_admin_event_participants_team_event_participants_team_component__WEBPACK_IMPORTED_MODULE_58__["EventParticipantsTeamComponent"],
                src_app_component_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_51__["UserHomeComponent"],
                _component_user_team_register_team_register_component__WEBPACK_IMPORTED_MODULE_59__["TeamRegisterComponent"],
                _pipes_filter_events_based_on_department_pipe__WEBPACK_IMPORTED_MODULE_60__["FilterEventsBasedOnDepartmentPipe"],
                _component_admin_admin_cart_confirmation_admin_cart_confirmation_component__WEBPACK_IMPORTED_MODULE_61__["AdminCartConfirmationComponent"],
                _component_user_gyan_mitra18_gyan_mitra18_component__WEBPACK_IMPORTED_MODULE_62__["GyanMitra18Component"],
                _component_admin_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_63__["ConfigurationsComponent"],
                _pipes_rules_transform_pipe__WEBPACK_IMPORTED_MODULE_64__["RulesTransformPipe"],
                _component_user_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_65__["PaymentSuccessComponent"],
                _component_user_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_66__["PaymentFailureComponent"],
                _component_user_acc_failure_acc_failure_component__WEBPACK_IMPORTED_MODULE_67__["AccFailureComponent"],
                _component_user_acc_success_acc_success_component__WEBPACK_IMPORTED_MODULE_68__["AccSuccessComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routes_app_routes__WEBPACK_IMPORTED_MODULE_7__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_select2__WEBPACK_IMPORTED_MODULE_6__["Select2Module"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeModule"],
                angular2_qrscanner__WEBPACK_IMPORTED_MODULE_10__["NgQrScannerModule"]
            ],
            providers: [
                angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelper"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _services_app_app_service__WEBPACK_IMPORTED_MODULE_21__["AppService"],
                _services_college_college_service__WEBPACK_IMPORTED_MODULE_24__["CollegeService"],
                _services_degree_degree_service__WEBPACK_IMPORTED_MODULE_28__["DegreeService"],
                _services_department_department_service__WEBPACK_IMPORTED_MODULE_29__["DepartmentService"],
                _services_accomodation_accomodation_service__WEBPACK_IMPORTED_MODULE_22__["AccomodationService"],
                _services_course_course_service__WEBPACK_IMPORTED_MODULE_23__["CourseService"],
                _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_33__["RegistrationService"],
                _services_role_role_service__WEBPACK_IMPORTED_MODULE_34__["RoleService"],
                _services_role_user_role_user_service__WEBPACK_IMPORTED_MODULE_35__["RoleUserService"],
                _services_team_team_service__WEBPACK_IMPORTED_MODULE_36__["TeamService"],
                _services_team_member_team_member_service__WEBPACK_IMPORTED_MODULE_37__["TeamMemberService"],
                _guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_52__["AuthGuard"],
                _services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_39__["EventRegistrationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/admin/admin-accomodation/admin-accomodation.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/admin/admin-accomodation/admin-accomodation.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi1hY2NvbW9kYXRpb24vYWRtaW4tYWNjb21vZGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/admin/admin-accomodation/admin-accomodation.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/admin/admin-accomodation/admin-accomodation.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n        <h3 class=\"content-header-title\">Accomodation Requests</h3>\r\n      </div>\r\n      <div class=\"content-header-right col-md-8 col-12\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item\"><a href=\"#\">Accomodation</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">Requests\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height justify-content-md-center\">\r\n          <div class=\"col-xl-6 col-md-12\">\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <!-- Modal -->\r\n      <div id=\"DDModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Demand Draft - {{selectedTransactionID}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <img src=\"{{ddImage}}\" class=\"width-100 height-100\" alt=\"Loading...\" />\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div class=\"btn-group\">\r\n                <button type=\"button\" (click)=\"confirmAccomodation(selectedID)\" class=\"btn btn-success\">Approve\r\n                  Payment</button>\r\n                <button type=\"button\" (click)=\"refusePayment(selectedID)\" class=\"btn btn-danger\">Refuse Payment</button>\r\n                <a href=\"{{ddImage}}\" target=\"_blank\" class=\"btn btn-success\"><i class=\"fas fa-plus-circle\"></i>&nbsp;Magnify</a>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Accomodation Requests</h4>\r\n              <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n              <div class=\"heading-elements\">\r\n                <ul class=\"list-inline mb-0\">\r\n                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                  <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\" (click)=\"loadAllAccomodations()\"></i></a></li>\r\n                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content collapse show\">\r\n              <div class=\"card-body\">\r\n                <h4>Filter</h4>\r\n                <hr />\r\n                <form name=\"frmFilter\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                      Search Name\r\n                      <input type=\"text\" name=\"selectedName\" [(ngModel)]=\"selectedName\" class=\"form-control\"\r\n                        placeholder=\"Name\">\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                      College <select name=\"selectedCollege\" [(ngModel)]=\"selectedCollege\" class=\"custom-select\">\r\n                        <option *ngFor=\"let item of colleges\" value={{item._id}}>{{item.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                      Department <select name=\"selectedDepartment\" [(ngModel)]=\"selectedDepartment\" class=\"custom-select\">\r\n                        <option *ngFor=\"let item of departments\" value={{item._id}}>{{item.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                      Mode of Payment <select name=\"selectedModeOfPayment\" [(ngModel)]=\"selectedModeOfPayment\" class=\"custom-select\">\r\n                        <option value=\"Online\">Online</option>\r\n                        <option value=\"Demand Draft\">Demand Draft</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                      Days <select [(ngModel)]=\"selectedDays\" name=\"selectedDays\" class=\"custom-select\">\r\n                        <option value=\"1\">1</option>\r\n                        <option value=\"2\">2</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                      <br />\r\n                      <button (click)=\"filter()\" class=\"btn btn-success\">Filter</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <br />\r\n                <hr />\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Sl. No</th>\r\n                        <th>Name</th>\r\n                        <th>College</th>\r\n                        <th>Mobile Number</th>\r\n                        <th>Days of Accomodation</th>\r\n                        <th>Payment Status</th>\r\n                        <th>Accomodation Status</th>\r\n                        <th>Remove Accomodation</th>\r\n                        <th>Manage Request</th>\r\n                        <th>Payment</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let accomodation of filteredAccomodations; let i = index;\" [ngClass]=\"{'table-success': accomodation.acc_payment_status=='Paid' && accomodation.acc_status == 'Confirmed'}\"\r\n                        [ngClass]=\"{'table-warning': accomodation.acc_payment_status=='Paid' && accomodation.acc_status == 'Not Confirmed'}\"\r\n                        [ngClass]=\"{'table-danger': accomodation.acc_payment_status=='Not Paid' && accomodation.acc_status == 'Not Confirmed'}\">\r\n                        <th scope=\"row\">{{i+1}}</th>\r\n                        <td>{{accomodation.user_id.name}}</td>\r\n                        <td>{{accomodation.user_id.college_id.name}}</td>\r\n                        <td>{{accomodation.user_id.mobile_number}}</td>\r\n                        <td>{{accomodation.acc_days}}</td>\r\n                        <td>{{accomodation.acc_payment_status}}</td>\r\n                        <td>{{accomodation.acc_status}}</td>\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteRequest(accomodation._id)\">\r\n                            <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-success\" *ngIf=\"accomodation.acc_status == 'Not Confirmed'\"\r\n                            (click)=\"approveAccomodation(accomodation._id)\">\r\n                            <a> <i class=\"la la-check la-2x\"></i></a>\r\n                          </div>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" *ngIf=\"accomodation.acc_status == 'Approved'\"\r\n                            (click)=\"deproveAccomodation(accomodation._id)\">\r\n                            <a> <i class=\"la la-close la-2x\"></i></a> </div>\r\n                        </td>\r\n                        <td>\r\n                          <div *ngIf=\"accomodation.acc_mode_of_payment == 'Demand Draft' && accomodation.acc_payment_status=='Paid' && accomodation.acc_status == 'Approved' \"\r\n                            class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#DDModal\" (click)=\"loadDD(accomodation._id,accomodation.acc__transaction_id, accomodation.acc_file_name)\">\r\n                            Verify DD\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/admin-accomodation/admin-accomodation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/admin/admin-accomodation/admin-accomodation.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminAccomodationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccomodationComponent", function() { return AdminAccomodationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/college/college.service */ "./src/app/services/college/college.service.ts");
/* harmony import */ var src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/department/department.service */ "./src/app/services/department/department.service.ts");
/* harmony import */ var src_app_services_accomodation_accomodation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accomodation/accomodation.service */ "./src/app/services/accomodation/accomodation.service.ts");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminAccomodationComponent = /** @class */ (function () {
    function AdminAccomodationComponent(appService, collegeService, departmentService, accommodationService) {
        this.appService = appService;
        this.collegeService = collegeService;
        this.departmentService = departmentService;
        this.accommodationService = accommodationService;
    }
    AdminAccomodationComponent.prototype.ngOnInit = function () {
        this.loadColleges();
        this.loadDepartments();
        this.loadAllAccomodations();
        this.selectedName = "";
        this.selectedCollege = "";
        this.selectedDays = "";
        this.selectedDepartment = "";
        this.selectedModeOfPayment = "";
        this.selectedTransactionID = "";
        this.ddImage = "";
        this.selectedID = "";
    };
    AdminAccomodationComponent.prototype.loadDD = function (id, tId, imgLoc) {
        this.selectedTransactionID = tId;
        this.selectedID = id;
        this.ddImage = this.appService.getFrontEndUrl() + '/' + imgLoc;
    };
    AdminAccomodationComponent.prototype.filter = function () {
        var _this = this;
        this.filteredAccomodations = this.accomodations.filter(function (item) {
            var name = item.user_id.name;
            return name.toLowerCase().includes(_this.selectedName.toLowerCase()) && _this.selectedCollege == item.user_id.college_id._id && _this.selectedDays == item.acc_days && _this.selectedDepartment == item.user_id.department_id._id && _this.selectedModeOfPayment == item.acc_mode_of_payment;
        });
    };
    AdminAccomodationComponent.prototype.deleteRequest = function (id) {
        var _this = this;
        this.accommodationService.deleteAccomodation(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
        });
    };
    AdminAccomodationComponent.prototype.confirmAccomodation = function (id) {
        var _this = this;
        this.accommodationService.confirmAccomodation(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
        });
    };
    AdminAccomodationComponent.prototype.refusePayment = function (id) {
        var _this = this;
        this.accommodationService.refusePayment(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
        });
    };
    AdminAccomodationComponent.prototype.deproveAccomodation = function (id) {
        var _this = this;
        this.accommodationService.deproveAccomodation(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
        });
    };
    AdminAccomodationComponent.prototype.approveAccomodation = function (id) {
        var _this = this;
        this.accommodationService.approveAccomodation(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadAllAccomodations();
            }
        });
    };
    AdminAccomodationComponent.prototype.loadAllAccomodations = function () {
        var _this = this;
        this.accommodationService.populateAccomodation().subscribe(function (response) {
            _this.filteredAccomodations = response;
            _this.accomodations = response;
        });
    };
    AdminAccomodationComponent.prototype.loadDepartments = function () {
        var _this = this;
        this.departmentService.readDepartment(0).subscribe(function (response) {
            _this.departments = response;
        });
    };
    AdminAccomodationComponent.prototype.loadColleges = function () {
        var _this = this;
        this.collegeService.readCollege(0).subscribe(function (response) {
            _this.colleges = response;
        });
    };
    AdminAccomodationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-accomodation',
            template: __webpack_require__(/*! ./admin-accomodation.component.html */ "./src/app/component/admin/admin-accomodation/admin-accomodation.component.html"),
            styles: [__webpack_require__(/*! ./admin-accomodation.component.css */ "./src/app/component/admin/admin-accomodation/admin-accomodation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_1__["CollegeService"], src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"], src_app_services_accomodation_accomodation_service__WEBPACK_IMPORTED_MODULE_3__["AccomodationService"]])
    ], AdminAccomodationComponent);
    return AdminAccomodationComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi1jYXJ0LWNvbmZpcm1hdGlvbi9hZG1pbi1jYXJ0LWNvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n        <h3 class=\"content-header-title\">Confirm DD Payment</h3>\r\n      </div>\r\n      <div class=\"content-header-right col-md-8 col-12\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item\"><a href=\"#\">Cart</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">Payments\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height justify-content-md-center\">\r\n          <div class=\"col-xl-6 col-md-12\">\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <!-- Modal -->\r\n      <div id=\"DDModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Demand Draft - Rs. {{amount}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <img src=\"{{ddImage}}\" class=\"width-100 height-100\" alt=\"Loading...\" />\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div class=\"btn-group\">\r\n                <button type=\"button\" (click)=\"confirmPayment(selectedID)\" class=\"btn btn-success\">Approve\r\n                  Payment</button>\r\n                <button type=\"button\" (click)=\"refusePayment(selectedID)\" class=\"btn btn-danger\">Refuse Payment</button>\r\n                <a href=\"{{ddImage}}\" target=\"_blank\" class=\"btn btn-success\"><i class=\"fas fa-plus-circle\"></i>&nbsp;Magnify</a>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Payment Requests</h4>\r\n              <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n              <div class=\"heading-elements\">\r\n                <ul class=\"list-inline mb-0\">\r\n                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                  <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content collapse show\">\r\n              <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Sl. No</th>\r\n                        <th>Name</th>\r\n                        <th>College</th>\r\n                        <th>Mobile Number</th>\r\n                        <th>Demand Draft</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let user of unconfirmedUsers; let i = index;\">\r\n                        <th scope=\"row\">{{i+1}}</th>\r\n                        <td>{{user.name}}</td>\r\n                        <td>{{user.college_id.name}}</td>\r\n                        <td>{{user.mobile_number}}</td>\r\n                        <td>\r\n                          <div class=\"btn btn-bg-gradient-x-blue-cyan\" data-toggle=\"modal\" data-target=\"#DDModal\" (click)=\"loadDD(user._id, user.cart_dd_image)\">\r\n                            View\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdminCartConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCartConfirmationComponent", function() { return AdminCartConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/eventRegistration/event-registration.service */ "./src/app/services/eventRegistration/event-registration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminCartConfirmationComponent = /** @class */ (function () {
    function AdminCartConfirmationComponent(eventRegistrtationService) {
        this.eventRegistrtationService = eventRegistrtationService;
        this.events = [];
        this.workshops = [];
        this.unconfirmedUsers = [];
    }
    AdminCartConfirmationComponent.prototype.ngOnInit = function () {
        this.loadUnconfirmedDDPayments();
    };
    AdminCartConfirmationComponent.prototype.loadDD = function (user_id, dd_image) {
        this.loadEvents(user_id);
        this.loadWorkshops(user_id);
        this.selectedUser = user_id;
        this.ddImage = "http://localhost:3000/assests/images/cart/" + dd_image;
    };
    AdminCartConfirmationComponent.prototype.confirmPayment = function (_id) {
        var _this = this;
        this.eventRegistrtationService.confirmPayment(this.selectedUser).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadUnconfirmedDDPayments();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadUnconfirmedDDPayments();
            }
        });
    };
    AdminCartConfirmationComponent.prototype.refusePayment = function (_id) {
    };
    AdminCartConfirmationComponent.prototype.loadUnconfirmedDDPayments = function () {
        var _this = this;
        this.eventRegistrtationService.getUnconfirmedDDPayments().subscribe(function (response) {
            _this.unconfirmedUsers = response;
        });
    };
    AdminCartConfirmationComponent.prototype.loadEvents = function (_id) {
        // this.eventRegistrtationService.getEventRegistrations(_id).subscribe((response: any) => {
        //   this.events = response;
        //   this.calculateAmount();
        // })
    };
    AdminCartConfirmationComponent.prototype.loadWorkshops = function (_id) {
        // this.eventRegistrtationService.getWorkshops(_id).subscribe((response: any) => {
        //   this.workshops = response;
        //   this.calculateAmount();
        // })
    };
    AdminCartConfirmationComponent.prototype.calculateAmount = function () {
        var _this = this;
        this.amount = 0;
        this.workshops.forEach(function (workshop) {
            _this.amount += workshop.event_id.amount;
        });
        if (this.events.length != 0) {
            this.amount += 200;
        }
    };
    AdminCartConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-cart-confirmation',
            template: __webpack_require__(/*! ./admin-cart-confirmation.component.html */ "./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./admin-cart-confirmation.component.css */ "./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_1__["EventRegistrationService"]])
    ], AdminCartConfirmationComponent);
    return AdminCartConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/admin-event/admin-event.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/admin/admin-event/admin-event.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi1ldmVudC9hZG1pbi1ldmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/admin/admin-event/admin-event.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/admin/admin-event/admin-event.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n        <h3 class=\"content-header-title\">Manage Events</h3>\r\n      </div>\r\n      <div class=\"content-header-right col-md-8 col-12\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">Event\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"uploadModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"uploadModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"uploadModalLabel\">Upload Image</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <label class=\"image-upload-container btn btn-bwm\">\r\n              <input #imageInput placeholder=\"Select an Image\" type=\"file\" accept=\"image/*\" (change)=\"processFile($event)\">\r\n            </label>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <span class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n              Close\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height justify-content-md-center\">\r\n          <div class=\"col-xl-6 col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Event</h4>\r\n                  <h6 class=\"card-subtitle text-muted\">Add Event</h6>\r\n                  <form class=\"form\" [formGroup]=\"eventForm\" (ngSubmit)=onSubmit(eventForm)>\r\n                    <input type=\"hidden\" formControlName=\"_id\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          Event Name\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Event Name\" formControlName=\"title\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                          Conducted By\r\n                          <select class=\"custom-select\" formControlName=\"department_id\">\r\n                            <option disabled value=\"\">Department</option>\r\n                            <option *ngFor=\"let department of departments\" value={{department._id}}>{{department.name}}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          Event Category\r\n                          <select class=\"custom-select\" placeholder=\"Category\" formControlName=\"category_id\" (change)=\"ChangeBoxes()\">\r\n                            <option disabled value=\"\">Category</option>\r\n                            <option *ngFor=\"let category of categories\" value={{category._id}}>{{category.name}}</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          Description\r\n                          <textarea class=\"form-control\" placeholder=\"Describe the Event Here\" formControlName=\"description\"\r\n                            [ngClass]=\"{'is-invalid': submitted && f.title.errors}\">\r\n                            </textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          Rules of The Event\r\n                          <textarea class=\"form-control\" placeholder=\"Rules\" formControlName=\"rules\" [ngClass]=\"{'is-invalid': submitted && f.title.errors}\">\r\n                        </textarea>\r\n                        <div class=\"form-control-feedback\">\r\n                          Use $ symbol for nextLine.Dont use $ at the Last line\r\n                        </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"workshop\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          Resourse Person\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Details of Resourse person\" formControlName=\"resourse_person\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"form-group\">\r\n                      <h4 class=\"card-title\">Time Details</h4>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-4\">\r\n                          Starting Time\r\n                          <input type=\"time\" class=\"form-control\" value=\"\" placeholder=\"Start Time\" formControlName=\"start_time\">\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          Ending Time\r\n                          <input type=\"time\" class=\"form-control\" value=\"\" placeholder=\"Ending Time\" formControlName=\"end_time\">\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          Event Date\r\n                          <input type=\"date\" class=\"form-control\" value=\"\" placeholder=\"Event Date\" formControlName=\"event_date\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr *ngIf=\"event\">\r\n                    <div class=\"form-group\" *ngIf=\"event\">\r\n                      <h4 class=\"card-title\">Round Details</h4>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-3\">\r\n                          Prelims\r\n                          <input type=\"time\" class=\"form-control\" placeholder=\"Prelims\" formControlName=\"prelims\">\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                          Round 1\r\n                          <input type=\"time\" class=\"form-control\" placeholder=\"Round 1\" formControlName=\"round_1\">\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                          Round 2\r\n                          <input type=\"time\" class=\"form-control\" placeholder=\"Round 2\" formControlName=\"round_2\">\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                          Finals\r\n                          <input type=\"time\" class=\"form-control\" placeholder=\"Finals\" formControlName=\"finals\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"form-group\">\r\n                      <h4 class=\"card-title\">Count Details</h4>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-4\" *ngIf=\"event\">\r\n                          Minimum Members\r\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Minimum Members\" formControlName=\"min_members\">\r\n                        </div>\r\n                        <div class=\"col-4\" *ngIf=\"event\">\r\n                          Maximum Members\r\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Maximum Members\" formControlName=\"max_members\">\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          Maximum Limit\r\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Maximum Limit\" formControlName=\"max_limit\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                          Contact Email Address\r\n                          <input type=\"email\" class=\"form-control\" placeholder=\"Contact mail Address\" formControlName=\"contact_email\">\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          <br />\r\n                          <span class=\"btn left\" [ngClass]=\"{'btn-danger' : allow_gender_mixing , 'btn-success' : !allow_gender_mixing }\">\r\n                            <span (click)=\"changeGenderMixing()\" *ngIf=\"allow_gender_mixing\">\r\n                              Disable Gender Mixing\r\n                            </span>\r\n                            <span (click)=\"changeGenderMixing()\" *ngIf=\"!allow_gender_mixing\">\r\n                              Enable Gender Mixing\r\n                            </span>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                          Venue\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Venue\" formControlName=\"venue\">\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          Amount\r\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Amount\" formControlName=\"amount\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-action left row\">\r\n                          <div class=\"col-6\">\r\n                            <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Events</h4>\r\n              <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n              <div class=\"heading-elements\">\r\n                <ul class=\"list-inline mb-0\">\r\n                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                  <li><a data-action=\"reload\" (click)=\"reloadEvents()\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content collapse show\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <input [(ngModel)]=\"searchText\" placeholder=\"Search Events\" class=\"form-control\" />\r\n                  </div>\r\n                  <div class=\"col-2\">\r\n                    <span class=\"fonticon-wrap success\">\r\n                      <a (click)=\"loadFull()\">\r\n                        <i class=\"la la-search la-2x\"></i>\r\n                      </a>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-4 \">\r\n                    <div class=\"right\">\r\n                      <span *ngIf=\"this.currentPage != 1\">\r\n                        <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span>\r\n                      </span>\r\n                      &nbsp; Page {{currentPage}} &nbsp;\r\n                      <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br />\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Sl. No</th>\r\n                        <th>Event Name</th>\r\n                        <th>Event Category</th>\r\n                        <th>Update</th>\r\n                        <th>Upload Image</th>\r\n                        <th>Delete</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let event of events | searchfilter : searchText ; let i = index;   \">\r\n                        <th scope=\"row\">{{i+1}}</th>\r\n                        <td>{{event.title}}</td>\r\n                        <td>{{event.category_id.name}}</td>\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                            <a (click)=\"updateEvent(event._id,event.category_id.name)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-primary\" (click)=\"selectEvent(event._id)\"\r\n                            data-toggle=\"modal\" data-target=\"#uploadModal\">\r\n                            <a> <i class=\"la la-upload la-2x\"></i></a>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteEvent(event._id)\">\r\n                            <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                          </div>\r\n                        </td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/admin-event/admin-event.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/admin/admin-event/admin-event.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEventComponent", function() { return AdminEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_event_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event/event.service */ "./src/app/services/event/event.service.ts");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/department/department.service */ "./src/app/services/department/department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminEventComponent = /** @class */ (function () {
    function AdminEventComponent(eventService, formBuilder, categoryService, departmentService) {
        this.eventService = eventService;
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.departmentService = departmentService;
    }
    AdminEventComponent.prototype.ngOnInit = function () {
        this.workshop = true;
        this.event = true;
        this.currentPage = 1;
        this.selectedEventID = '';
        this.getCategories();
        this.createForm();
        this.getEvents(1);
        this.getDepartments();
        this.submitted = false;
        this.allow_gender_mixing = false;
    };
    AdminEventComponent.prototype.reloadEvents = function () {
        this.searchText = '';
        this.getEvents(1);
    };
    AdminEventComponent.prototype.getEvents = function (page) {
        var _this = this;
        this.eventService.readWithPage(page).subscribe(function (response) {
            if (response.error == false) {
                _this.events = response.msg;
            }
            else {
                _this.currentPage -= 1;
            }
        });
    };
    AdminEventComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getEvents(this.currentPage);
    };
    AdminEventComponent.prototype.previousPage = function () {
        this.currentPage = this.currentPage - 1;
        this.getEvents(this.currentPage);
    };
    AdminEventComponent.prototype.changeGenderMixing = function () {
        this.allow_gender_mixing = !this.allow_gender_mixing;
    };
    AdminEventComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.readCategory().subscribe(function (response) {
            _this.categories = response.docs;
        });
    };
    AdminEventComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.readDepartment(0).subscribe(function (response) {
            _this.departments = response;
        });
    };
    AdminEventComponent.prototype.selectEvent = function (_id) {
        this.selectedEventID = _id;
    };
    Object.defineProperty(AdminEventComponent.prototype, "f", {
        get: function () { return this.eventForm.controls; },
        enumerable: true,
        configurable: true
    });
    AdminEventComponent.prototype.processFile = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            formData.append('_id', this.selectedEventID);
            this.eventService.uploadFile(formData).subscribe(function (response) {
                console.log(response);
            });
        }
    };
    AdminEventComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.value._id === '') {
            var data = form.value;
            this.eventService.createEvent(data.title, data.category_id, data.department_id, data.description, 'Not Uploaded', data.rules, data.start_time, data.end_time, data.event_date, data.prelims, data.round_1, data.round_2, data.finals, data.min_members, data.max_members, data.max_limit, data.contact_email, data.venue, data.amount, this.allow_gender_mixing, data.resourse_person).subscribe(function (response) {
                if (response.error) {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                    _this.getEvents(_this.currentPage);
                    _this.createForm();
                }
                else {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                    _this.getEvents(_this.currentPage);
                    _this.createForm();
                }
            });
        }
        else {
            var data = form.value;
            this.eventService.updateEvent(data._id, data.title, data.category_id, data.department_id, data.description, 'Not Uploaded', data.rules, data.start_time, data.end_time, data.event_date, data.prelims, data.round_1, data.round_2, data.finals, data.min_members, data.max_members, data.max_limit, data.contact_email, data.venue, data.amount, this.allow_gender_mixing, data.resourse_person).subscribe(function (response) {
                if (response.error) {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                    _this.getEvents(_this.currentPage);
                    _this.createForm();
                }
                else {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                    _this.getEvents(_this.currentPage);
                    _this.createForm();
                }
            });
        }
    };
    AdminEventComponent.prototype.createForm = function () {
        this.event = true;
        this.workshop = true;
        this.submitted = false;
        this.eventForm = this.formBuilder.group({
            _id: '',
            title: '',
            category_id: '',
            department_id: '',
            description: '',
            rules: '',
            image_name: '',
            start_time: '',
            end_time: '',
            event_date: '',
            prelims: '',
            round_1: '',
            round_2: '',
            finals: '',
            min_members: '',
            max_members: '',
            max_limit: '',
            contact_email: '',
            venue: '',
            amount: '',
            allow_gender_mixing: '',
            resourse_person: ''
        });
        this.Button = 'Create';
    };
    AdminEventComponent.prototype.deleteEvent = function (id) {
        var _this = this;
        this.eventService.deleteEvent(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.events = [];
                _this.getEvents(_this.currentPage);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.events = [];
                _this.getEvents(_this.currentPage);
                _this.createForm();
            }
        });
    };
    AdminEventComponent.prototype.updateEvent = function (id, type) {
        this.Button = 'Update';
        var data = this.events.filter(function (eventName) {
            return eventName._id === id;
        });
        data[0].image_name = '';
        if (type == "Workshop") {
            this.event = false;
            this.workshop = true;
        }
        else if (type == "Event") {
            data[0].resourse_person = '';
            this.event = true;
            this.workshop = false;
        }
        this.eventForm.setValue(data[0]);
    };
    AdminEventComponent.prototype.ChangeBoxes = function () {
        var _this = this;
        this.categoryService.ReadACategory(this.f.category_id.value).subscribe(function (response) {
            if (!response.error) {
                _this.category = response.msg;
                if (_this.category.name == "Workshop") {
                    _this.event = false;
                    _this.workshop = true;
                }
                else if (_this.category.name == "Event") {
                    _this.event = true;
                    _this.workshop = false;
                }
            }
        });
    };
    AdminEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-event',
            template: __webpack_require__(/*! ./admin-event.component.html */ "./src/app/component/admin/admin-event/admin-event.component.html"),
            styles: [__webpack_require__(/*! ./admin-event.component.css */ "./src/app/component/admin/admin-event/admin-event.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]])
    ], AdminEventComponent);
    return AdminEventComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/admin-navbar/admin-navbar.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/admin/admin-navbar/admin-navbar.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi1uYXZiYXIvYWRtaW4tbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/admin/admin-navbar/admin-navbar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/admin/admin-navbar/admin-navbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light\">\r\n  <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-container content\">\r\n          <div class=\"collapse navbar-collapse show\" id=\"navbar-mobile\">\r\n              <ul class=\"nav navbar-nav mr-auto float-left\">\r\n                  <li class=\"nav-item d-none d-md-block\"><a class=\"nav-link nav-menu-main menu-toggle hidden-xs\" href=\"#\"><i class=\"ft-menu\"></i></a></li>\r\n                  <li class=\"nav-item d-none d-md-block\"><a class=\"nav-link nav-link-expand\" href=\"#\"><i class=\"ficon ft-maximize\"></i></a></li>\r\n                  <li class=\"nav-item dropdown navbar-search\"><a class=\"nav-link dropdown-toggle hide\" data-toggle=\"dropdown\" href=\"#\"><i class=\"ficon ft-search\"></i></a>\r\n                      <ul class=\"dropdown-menu\">\r\n                          <li class=\"arrow_box\">\r\n                              <form>\r\n                                  <div class=\"input-group search-box\">\r\n                                      <div class=\"position-relative has-icon-right full-width\">\r\n                                          <input class=\"form-control\" id=\"search\" type=\"text\" placeholder=\"Search here...\">\r\n                                          <div class=\"form-control-position navbar-search-close\"><i class=\"ft-x\">   </i></div>\r\n                                      </div>\r\n                                  </div>\r\n                              </form>\r\n                          </li>\r\n                      </ul>\r\n                  </li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav float-right\">\r\n                  <li class=\"dropdown dropdown-user nav-item\">\r\n                      <a class=\"dropdown-toggle nav-link dropdown-user-link\" href=\"#\" data-toggle=\"dropdown\"> <span class=\"avatar avatar-online\"><img src=\"theme-assets/images/portrait/small/avatar-s-19.png\" alt=\"avatar\"><i></i></span></a>\r\n                      <div class=\"dropdown-menu dropdown-menu-right\">\r\n                          <div class=\"arrow_box_right\"><a class=\"dropdown-item\" href=\"#\"><span class=\"avatar avatar-online\"><img src=\"theme-assets/images/portrait/small/avatar-s-19.png\" alt=\"avatar\"><span class=\"user-name text-bold-700 ml-1\">{{user.name}}</span></span></a>\r\n                              <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\"><i class=\"ft-user\"></i> Edit Profile</a><a class=\"dropdown-item\" href=\"#\"><i class=\"ft-mail\"></i> My Inbox</a><a class=\"dropdown-item\" href=\"#\"><i class=\"ft-check-square\"></i> Task</a>\r\n                              <div class=\"dropdown-divider\" *ngIf=\" authService.isLoggedIn()\"></div><a class=\"dropdown-item\" *ngIf=\" authService.isLoggedIn()\" (click)=\"onLogoutClick() \" href=\"#\"><i class=\"ft-power\"></i> Logout</a>\r\n                          </div>\r\n                      </div>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</nav>\r\n<app-admin-sidebar></app-admin-sidebar>"

/***/ }),

/***/ "./src/app/component/admin/admin-navbar/admin-navbar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/admin/admin-navbar/admin-navbar.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminNavbarComponent = /** @class */ (function () {
    function AdminNavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    AdminNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            this.authService.getCurrentUser().subscribe(function (res) {
                _this.user = res.profile;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    AdminNavbarComponent.prototype.onLogoutClick = function () {
        this.authService.destroySession();
        this.router.navigate(['/user/login']);
    };
    AdminNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-navbar',
            template: __webpack_require__(/*! ./admin-navbar.component.html */ "./src/app/component/admin/admin-navbar/admin-navbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-navbar.component.css */ "./src/app/component/admin/admin-navbar/admin-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminNavbarComponent);
    return AdminNavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/admin-sidebar/admin-sidebar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/admin/admin-sidebar/admin-sidebar.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/admin/admin-sidebar/admin-sidebar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/admin/admin-sidebar/admin-sidebar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-menu menu-fixed menu-light menu-accordion menu-shadow \" data-scroll-to-active=\"true\" data-img='public/images/backgrounds/02.jpg'>\r\n  <div class=\"navbar-header\">\r\n    <ul class=\"nav navbar-nav flex-row\">\r\n      <li class=\"nav-item mr-auto\">\r\n        <a class=\"navbar-brand\" href=\"index.html\">\r\n          <h3 class=\"brand-text\">GyanMitraAdmin </h3>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item d-md-none\"><a class=\"nav-link close-navbar\"><i class=\"ft-x\"></i></a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"main-menu-content ps-container ps-theme-dark ps-active-y\">\r\n    <ul class=\"navigation navigation-main\" id=\"main-menu-navigation\" data-menu=\"menu-navigation\">\r\n      <li class=\"active\"><a [routerLink]=\"['/admin/home']\"><i class=\"ft-home\"></i><span class=\"menu-title\" data-i18n=\"\">Home</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a><i class=\"fas fa-bed\"></i><span class=\"menu-title\" data-i18n=\"\">Accomodation</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><span\r\n                class=\"menu-title\" data-i18n=\"\">New Accomodation</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/accomodation']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Requests</span></a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a><i class=\"far fa-registered\"></i><span class=\"menu-title\" data-i18n=\"\">Registration</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/new_registration']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">New Registration</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/cartConfirmation']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Cart Payment</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/registration']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">All Registration</span></a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a><i class=\"fas fa-cog\"></i><span class=\"menu-title\" data-i18n=\"\">EventForm</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/events']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Events</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/category']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Event Category</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/department']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Department</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/participationstatus']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Participation Status</span></a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a><i class=\"fas fa-cog\"></i><span class=\"menu-title\" data-i18n=\"\">RegistrationForm</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/college']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">College</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/degree']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Degree</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/course']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Course</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/year']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Year</span></a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a> <i class=\"fas fa-users-cog\"></i><span class=\"menu-title\" data-i18n=\"\">Make Users</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/users']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Users</span></a></li>\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/role']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Roles</span></a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a><i class=\"fas fa-cube\"></i><span class=\"menu-title\" data-i18n=\"\">Events</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\" *ngFor=\"let event of events\"><a [routerLink]=\"['/admin/eventParticipants', event._id]\"\r\n              [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\"\r\n                data-i18n=\"\">{{ event.title }}</span></a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a><i class=\"fas fa-graduation-cap\"></i><span class=\"menu-title\" data-i18n=\"\">Workshops</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\" *ngFor=\"let workshop of workshops\"><a [routerLink]=\"['/admin/eventParticipants', workshop._id ]\"\r\n              [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\"\r\n                data-i18n=\"\">{{ workshop.title }} </span></a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item has-sub\"><a><i class=\"fas fa-cogs\"></i><span class=\"menu-title\" data-i18n=\"\">Control Panel</span></a>\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\"><a [routerLink]=\"['/admin/configurations']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"menu-title\" data-i18n=\"\">Configurations</span></a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n    <div class=\"ps-scrollbar-x-rail\" style=\"left: 0px; bottom: 3px;\">\r\n      <div class=\"ps-scrollbar-x\" tabindex=\"0\" style=\"left: 0px; width: 0px;\"></div>\r\n    </div>\r\n    <div class=\"ps-scrollbar-y-rail\" style=\"top: 0px; height: 625px; right: 3px;\">\r\n      <div class=\"ps-scrollbar-y\" tabindex=\"0\" style=\"top: 0px; height: 473px;\"></div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"navigation-background\" style=\"background-image: url('../../../../../src/public/images/backgrounds/08.jpg')\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/admin-sidebar/admin-sidebar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/admin/admin-sidebar/admin-sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/event/event.service */ "./src/app/services/event/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminSidebarComponent = /** @class */ (function () {
    function AdminSidebarComponent(eventService) {
        this.eventService = eventService;
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
        this.loadEvents();
        this.loadWorkshops();
    };
    AdminSidebarComponent.prototype.loadEvents = function () {
        var _this = this;
        this.eventService.readWithEventCategory('Event', 0).subscribe(function (response) {
            _this.events = response;
        });
    };
    AdminSidebarComponent.prototype.loadWorkshops = function () {
        var _this = this;
        this.eventService.readWithEventCategory('Workshop', 0).subscribe(function (response) {
            _this.workshops = response;
        });
    };
    AdminSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-sidebar',
            template: __webpack_require__(/*! ./admin-sidebar.component.html */ "./src/app/component/admin/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/component/admin/admin-sidebar/admin-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/admin-users/admin-users.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/admin/admin-users/admin-users.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi11c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/admin/admin-users/admin-users.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/admin/admin-users/admin-users.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n        <h3 class=\"content-header-title\">Manage AdminUser</h3>\r\n      </div>\r\n      <div class=\"content-header-right col-md-8 col-12\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">AdminUser\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height justify-content-md-center\">\r\n          <div class=\"col-xl-6 col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">AdminUser</h4>\r\n                  <h6 class=\"card-subtitle text-muted\">Add AdminUser</h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=onSubmit(userForm.value)>\r\n                    <input type=\"hidden\" formControlName=\"_id\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" formControlName=\"name\"\r\n                            required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n                          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">User Name is required</div>\r\n                            <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Email Id\" formControlName=\"email_id\"\r\n                            required [ngClass]=\"{'is-invalid': submitted && f.email_id.errors}\">\r\n                          <div *ngIf=\"submitted && f.email_id.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.email_id.errors.required\">fa-exclamation-circle is required</div>\r\n                            <div *ngIf=\"f.email_id.errors && !f.email_id.errors.required\">Email is not Correct</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\r\n                            [ngClass]=\"{'is-invalid': submitted &&f.password.errors}\">\r\n                          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.password.errors.required\">Password is required\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\"\r\n                            [ngClass]=\"{'is-invalid': submitted &&f.confirm_password.errors}\">\r\n                          <div *ngIf=\"submitted && f.confirm_password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.confirm_password.errors.required\">Confirm Password is required\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xl-6 col-lg-12\">\r\n                        <div class=\"form-group\">\r\n                          <p class=\"text-bold-600 font-medium-2\">\r\n                    \r\n                          </p>\r\n\r\n                         \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-action left row\">\r\n                      <div class=\"col\">\r\n                        <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">AdminUser Tables</h4>\r\n              <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n              <div class=\"heading-elements\">\r\n                <ul class=\"list-inline mb-0\">\r\n                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                  <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content collapse show\">\r\n              <div class=\"card-body\">\r\n                Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search Users\" class=\"form-control\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Sl. No</th>\r\n                        <th>AdminUser Name</th>\r\n                        <th>Email_id</th>\r\n                        <th>Roles</th>\r\n                        <th>Update</th>\r\n                        <th>Delete</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let user of users | searchfilter : searchText ; let i = index;   \">\r\n\r\n                        <th scope=\"row\">{{i+1}}</th>\r\n                        <td>{{user.name}}</td>\r\n                        <td>{{user.email_id}}</td>\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                            <a (click)=\"updateUser(user._id,user.name)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteUser(user._id)\">\r\n                            <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/admin/admin-users/admin-users.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/admin/admin-users/admin-users.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/role/role.service */ "./src/app/services/role/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(userService, formBuilder, roleService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.roleService = roleService;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.selectedRoles = [];
        this.getRoles();
        this.createForm();
        this.getAdmins();
        //this.addRoleCheckBox();
    };
    Object.defineProperty(AdminUsersComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    AdminUsersComponent.prototype.append = function (_id) {
        if (this.selectedRoles.includes(_id)) {
            this.selectedRoles.splice(this.selectedRoles.indexOf(_id), 1);
        }
        else {
            this.selectedRoles.push(_id);
        }
        //console.log(this.selectedRoles);
    };
    AdminUsersComponent.prototype.createForm = function () {
        this.Button = "Create";
        this.submitted = false;
        this.userForm = this.formBuilder.group({
            _id: [''],
            name: [''],
            email_id: [''],
            password: [''],
            confirm_password: [''],
            roles_form: this.formBuilder.array([])
        });
    };
    AdminUsersComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.readRoles().subscribe(function (response) {
            _this.roles = response.docs;
        });
    };
    AdminUsersComponent.prototype.onSubmit = function (value) {
        this.submitted = true;
        console.log(value);
    };
    AdminUsersComponent.prototype.addRoleCheckBox = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var role = _a[_i];
            this.roles_form = this.userForm.get('roles_form');
            this.roles_form.push(this.createRoleCheckBox());
        }
    };
    AdminUsersComponent.prototype.createRoleCheckBox = function () {
        return this.formBuilder.group({
            role_id: ['']
        });
    };
    AdminUsersComponent.prototype.getAdmins = function () {
        var _this = this;
        this.userService.getAdmin().subscribe(function (response) {
            _this.users = response.msg;
        });
    };
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/component/admin/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/component/admin/admin-users/admin-users.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/admin/admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/admin/admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/admin/admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/component/admin/admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/admin/admin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
        /* var urlParams = [];
           window.location.search.replace("?", "").split("&").forEach(function (e, i) {
               var p = e.split("=");
               urlParams[p[0]] = p[1];
          });
      
           // We have all the params now -> you can access it by name
           console.log(urlParams["loaded"]);
      
           if(urlParams["loaded"]) {}else{
      
               let win = (window as any);
              win.location.search = '?loaded=1';
              //win.location.reload('?loaded=1');
           }*/
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/component/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/component/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/category/category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/admin/category/category.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/admin/category/category.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/admin/category/category.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content-wrapper-before\"></div>\r\n        <div class=\"content-header row\">\r\n            <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n                <h3 class=\"content-header-title\">Manage Category</h3>\r\n            </div>\r\n            <div class=\"content-header-right col-md-8 col-12\">\r\n                <div class=\"breadcrumbs-top float-md-right\">\r\n                    <div class=\"breadcrumb-wrapper mr-1\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\">Category\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-body\">\r\n            <section id=\"content-types\">\r\n                <div class=\"row match-height justify-content-md-center\">\r\n                    <div class=\"col-xl-6 col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-content\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">Category</h4>\r\n                                    <h6 class=\"card-subtitle text-muted\">Add Category</h6>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <form class=\"form\" [formGroup]=\"categoryForm\" (ngSubmit)=onSubmit(categoryForm)>\r\n                                        <input type=\"hidden\" formControlName=\"_id\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\"\r\n                                                formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n                                            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.name.errors.required\">Category Name is required</div>\r\n                                                <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-action left row\">\r\n                                            <div class=\"col\">\r\n                                                <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Category Tables</h4>\r\n                            <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                            <div class=\"heading-elements\">\r\n                                <ul class=\"list-inline mb-0\">\r\n                                    <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                                    <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                                    <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-content collapse show\">\r\n                            <div class=\"card-body\">\r\n                                Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search Categories\" class=\"form-control\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Sl. No</th>\r\n                                                <th>Category Name</th>\r\n                                                <th>Update</th>\r\n                                                <th>Delete</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let category of categories | searchfilter : searchText ; let i = index;   \">\r\n\r\n                                                <th scope=\"row\">{{i+1}}</th>\r\n                                                <td>{{category.name}}</td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                                                        <a (click)=\"updateCategory(category._id,category.name)\"> <i\r\n                                                                class=\"la la-pencil la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteCategory(category._id)\">\r\n                                                        <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/category/category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/admin/category/category.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, formBuilder) {
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.createForm();
        this.getCategorys();
    };
    Object.defineProperty(CategoryComponent.prototype, "f", {
        get: function () { return this.categoryForm.controls; },
        enumerable: true,
        configurable: true
    });
    CategoryComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.categoryService.createCategory(this.categoryForm.get('name').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCategorys();
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCategorys();
                        _this.createForm();
                    }
                });
            }
            else {
                this.categoryService.updateCategory(form.value._id, form.value.name).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCategorys();
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCategorys();
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    CategoryComponent.prototype.createForm = function () {
        this.submitted = false;
        this.categoryForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    CategoryComponent.prototype.getCategorys = function () {
        var _this = this;
        this.categoryService.readCategory().subscribe(function (response) {
            _this.categories = response.docs;
        });
        //if(this.categories)
    };
    CategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this.categoryService.deleteCategory(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getCategorys();
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getCategorys();
                _this.createForm();
            }
        });
    };
    CategoryComponent.prototype.updateCategory = function (id, name, locale) {
        this.Button = 'Update';
        this.categoryForm.setValue({
            _id: id,
            name: name
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/component/admin/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/component/admin/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/college/college.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/admin/college/college.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jb2xsZWdlL2NvbGxlZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/admin/college/college.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/admin/college/college.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n     <div class=\"content-wrapper\">\r\n         <div class=\"content-wrapper-before\"></div>\r\n         <div class=\"content-header row\">\r\n             <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n                 <h3 class=\"content-header-title\">Manage College</h3>\r\n             </div>\r\n             <div class=\"content-header-right col-md-8 col-12\">\r\n                 <div class=\"breadcrumbs-top float-md-right\">\r\n                     <div class=\"breadcrumb-wrapper mr-1\">\r\n                         <ol class=\"breadcrumb\">\r\n                             <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                             </li>\r\n                             <li class=\"breadcrumb-item active\">College\r\n                             </li>\r\n                         </ol>\r\n                     </div>\r\n                 </div>\r\n             </div>\r\n         </div>\r\n         <div class=\"content-body\">\r\n             <section id=\"content-types\">\r\n                 <div class=\"row match-height justify-content-md-center\">\r\n                     <div class=\"col-xl-6 col-md-12\">\r\n                         <div class=\"card\">\r\n                             <div class=\"card-content\">\r\n                                 <div class=\"card-body\">\r\n                                     <h4 class=\"card-title\">College</h4>\r\n                                     <h6 class=\"card-subtitle text-muted\">Add College</h6>\r\n                                 </div>\r\n                                 <div class=\"card-body\">\r\n                                     <form class=\"form\" [formGroup]=\"collegeForm\" (ngSubmit)=onSubmit(collegeForm)>\r\n                                         <input type=\"hidden\" formControlName=\"_id\">\r\n                                         <div class=\"form-group\">\r\n                                             <input type=\"text\" class=\"form-control\" placeholder=\"College Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted &&f.name.errors}\">\r\n                                             <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.name.errors.required\">College Name is required</div>\r\n                                                <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n                                            </div>\r\n                                        </div>\r\n                                         <div class=\"form-group\">\r\n                                             <input type=\"text\" class=\"form-control\" placeholder=\"College Locale\" formControlName=\"locale\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted &&f.locale.errors}\">\r\n                                             <div *ngIf=\"submitted && f.locale.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.locale.errors.required\">College locale is required</div>\r\n                                                <div *ngIf=\"f.locale.errors&& !f.locale.errors.required\">Only Alpahabets</div>\r\n                                            </div>\r\n                                         </div>\r\n                                         <div class=\"form-action left row\">\r\n                                             <div class=\"col\">\r\n                                                 <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n \r\n                                             </div>\r\n                                             <div class=\"col\">\r\n                                                 <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                                             </div>\r\n                                         </div>\r\n                                     </form>\r\n                                 </div>\r\n                             </div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n             </section>\r\n             <div class=\"row\">\r\n                 <div class=\"col-12\">\r\n                     <div class=\"card\">\r\n                         <div class=\"card-header\">\r\n                             <h4 class=\"card-title\">College Tables</h4>\r\n                             <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                             <div class=\"heading-elements\">\r\n                                 <ul class=\"list-inline mb-0\">\r\n                                     <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                                     <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                                     <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                                 </ul>\r\n                             </div>\r\n                         </div>\r\n                         \r\n                         <div class=\"card-content collapse show\">\r\n                             <div class=\"card-body\">\r\n                            Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search Colleges\" class=\"form-control\">\r\n                            <div class = \"row\">\r\n                                    <div class=\"col-6\">\r\n                                    </div>\r\n                                    <div class=\"col-6\" style=\"margin-top:5px; margin-bottom:10px;\">\r\n                                      <div class=\"right\">\r\n                                          <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp; Page {{page}} &nbsp;  \r\n                                          <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                 <div class=\"table-responsive\">\r\n                                     <table class=\"table\">\r\n                                         <thead>\r\n                                             <tr>\r\n                                                 <th>#</th>\r\n                                                 <th>College Name</th>\r\n                                                 <th>College Locale</th>\r\n                                                 <th>Update</th>\r\n                                                 <th>Delete</th>\r\n                                             </tr>\r\n                                         </thead>\r\n                                         <tbody>\r\n                                             <tr *ngFor=\"let college of colleges | searchfilter : searchText ; let i = index;\">\r\n \r\n                                                 <th scope=\"row\">{{i+1}}</th>\r\n                                                 <td>{{college.name}}</td>\r\n                                                 <td>{{college.locale}}</td>\r\n                                                 <td>\r\n                                                     <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                                                         <a (click)=\"updateCollege(college._id,college.name,college.locale)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n                                                     </div>\r\n                                                 </td>\r\n                                                 <td>\r\n                                                     <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteCollege(college._id)\">\r\n                                                         <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                                                     </div>\r\n                                                 </td>\r\n                                             </tr>\r\n                                         </tbody>\r\n                                     </table>\r\n                                 </div>\r\n                             </div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n             </div>\r\n         </div>\r\n     </div>\r\n </div>"

/***/ }),

/***/ "./src/app/component/admin/college/college.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/admin/college/college.component.ts ***!
  \**************************************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/college/college.service */ "./src/app/services/college/college.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollegeComponent = /** @class */ (function () {
    function CollegeComponent(collegeService, authService, formBuilder) {
        this.collegeService = collegeService;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    CollegeComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.page = 1;
        this.createForm();
        this.getColleges(1);
    };
    CollegeComponent.prototype.nextPage = function () {
        this.page = this.page + 1;
        this.getColleges(this.page);
    };
    CollegeComponent.prototype.previousPage = function () {
        if (this.page == 1) {
        }
        else {
            this.page = this.page - 1;
            this.getColleges(this.page);
        }
    };
    Object.defineProperty(CollegeComponent.prototype, "f", {
        get: function () { return this.collegeForm.controls; },
        enumerable: true,
        configurable: true
    });
    CollegeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.collegeService.createCollege(this.collegeForm.get('name').value, this.collegeForm.get('locale').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getColleges(_this.page);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getColleges(_this.page);
                        _this.createForm();
                    }
                });
            }
            else {
                this.collegeService.updateCollege(form.value._id, form.value.name, form.value.locale).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getColleges(_this.page);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getColleges(_this.page);
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    CollegeComponent.prototype.createForm = function () {
        this.submitted = false;
        this.collegeForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    CollegeComponent.prototype.getColleges = function (page) {
        var _this = this;
        this.collegeService.readCollege(page).subscribe(function (response) {
            if (response.docs.length == 0) {
                _this.page -= 1;
            }
            else {
                _this.colleges = response.docs;
            }
        });
    };
    CollegeComponent.prototype.deleteCollege = function (id) {
        var _this = this;
        this.collegeService.deleteCollege(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getColleges(_this.page);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getColleges(_this.page);
                _this.createForm();
            }
        });
    };
    CollegeComponent.prototype.updateCollege = function (id, name, locale) {
        this.Button = 'Update';
        this.collegeForm.setValue({
            _id: id,
            name: name,
            locale: locale
        });
    };
    CollegeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/component/admin/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/component/admin/college/college.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_2__["CollegeService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CollegeComponent);
    return CollegeComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/configurations/configurations.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/component/admin/configurations/configurations.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Montserrat', 'Lato', 'Open Sans', 'Helvetica Neue', Helvetica, Calibri, Arial, sans-serif;\r\n    color: #6b7381;\r\n    background: #f2f2f2;\r\n  }\r\n  .jumbotron {\r\n    background: #6b7381;\r\n    color: #bdc1c8;\r\n  }\r\n  .jumbotron h1 {\r\n    color: #fff;\r\n  }\r\n  .example {\r\n    margin: 4rem auto;\r\n  }\r\n  .example > .row {\r\n    margin-top: 2rem;\r\n    height: 5rem;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    border: 1px solid rgba(189, 193, 200, 0.5);\r\n  }\r\n  .example > .row:first-of-type {\r\n    border: none;\r\n    height: auto;\r\n    text-align: left;\r\n  }\r\n  .example h3 {\r\n    font-weight: 400;\r\n  }\r\n  .example h3 > small {\r\n    font-weight: 200;\r\n    font-size: 0.75em;\r\n    color: #939aa5;\r\n  }\r\n  .example h6 {\r\n    font-weight: 700;\r\n    font-size: 0.65rem;\r\n    letter-spacing: 3.32px;\r\n    text-transform: uppercase;\r\n    color: #bdc1c8;\r\n    margin: 0;\r\n    line-height: 5rem;\r\n  }\r\n  .example .btn-toggle {\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n  }\r\n  .btn-toggle {\r\n    margin: 0 4rem;\r\n    padding: 0;\r\n    position: relative;\r\n    border: none;\r\n    height: 1.5rem;\r\n    width: 3rem;\r\n    border-radius: 1.5rem;\r\n    color: #6b7381;\r\n    background: #bdc1c8;\r\n  }\r\n  .btn-toggle:focus,\r\n  .btn-toggle.focus,\r\n  .btn-toggle:focus.active,\r\n  .btn-toggle.focus.active {\r\n    outline: none;\r\n  }\r\n  .btn-toggle:before,\r\n  .btn-toggle:after {\r\n    line-height: 1.5rem;\r\n    width: 4rem;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    transition: opacity 0.25s;\r\n  }\r\n  .btn-toggle:before {\r\n    content: 'Off';\r\n    left: -4rem;\r\n  }\r\n  .btn-toggle:after {\r\n    content: 'On';\r\n    right: -4rem;\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle > .handle {\r\n    position: absolute;\r\n    top: 0.1875rem;\r\n    left: 0.1875rem;\r\n    width: 1.125rem;\r\n    height: 1.125rem;\r\n    border-radius: 1.125rem;\r\n    background: #fff;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.active {\r\n    transition: background-color 0.25s;\r\n  }\r\n  .btn-toggle.active > .handle {\r\n    left: 1.6875rem;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.active:before {\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-sm:before,\r\n  .btn-toggle.btn-sm:after {\r\n    line-height: -0.5rem;\r\n    color: #fff;\r\n    letter-spacing: 0.75px;\r\n    left: 0.4125rem;\r\n    width: 2.325rem;\r\n  }\r\n  .btn-toggle.btn-sm:before {\r\n    text-align: right;\r\n  }\r\n  .btn-toggle.btn-sm:after {\r\n    text-align: left;\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-sm.active:before {\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-sm.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-xs:before,\r\n  .btn-toggle.btn-xs:after {\r\n    display: none;\r\n  }\r\n  .btn-toggle:before,\r\n  .btn-toggle:after {\r\n    color: #6b7381;\r\n  }\r\n  .btn-toggle.active {\r\n    background-color: #29b5a8;\r\n  }\r\n  .btn-toggle.btn-lg {\r\n    margin: 0 5rem;\r\n    padding: 0;\r\n    position: relative;\r\n    border: none;\r\n    height: 2.5rem;\r\n    width: 5rem;\r\n    border-radius: 2.5rem;\r\n  }\r\n  .btn-toggle.btn-lg:focus,\r\n  .btn-toggle.btn-lg.focus,\r\n  .btn-toggle.btn-lg:focus.active,\r\n  .btn-toggle.btn-lg.focus.active {\r\n    outline: none;\r\n  }\r\n  .btn-toggle.btn-lg:before,\r\n  .btn-toggle.btn-lg:after {\r\n    line-height: 2.5rem;\r\n    width: 5rem;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    transition: opacity 0.25s;\r\n  }\r\n  .btn-toggle.btn-lg:before {\r\n    content: 'Off';\r\n    left: -5rem;\r\n  }\r\n  .btn-toggle.btn-lg:after {\r\n    content: 'On';\r\n    right: -5rem;\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle.btn-lg > .handle {\r\n    position: absolute;\r\n    top: 0.3125rem;\r\n    left: 0.3125rem;\r\n    width: 1.875rem;\r\n    height: 1.875rem;\r\n    border-radius: 1.875rem;\r\n    background: #fff;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.btn-lg.active {\r\n    transition: background-color 0.25s;\r\n  }\r\n  .btn-toggle.btn-lg.active > .handle {\r\n    left: 2.8125rem;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.btn-lg.active:before {\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle.btn-lg.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-lg.btn-sm:before,\r\n  .btn-toggle.btn-lg.btn-sm:after {\r\n    line-height: 0.5rem;\r\n    color: #fff;\r\n    letter-spacing: 0.75px;\r\n    left: 0.6875rem;\r\n    width: 3.875rem;\r\n  }\r\n  .btn-toggle.btn-lg.btn-sm:before {\r\n    text-align: right;\r\n  }\r\n  .btn-toggle.btn-lg.btn-sm:after {\r\n    text-align: left;\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-lg.btn-sm.active:before {\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-lg.btn-sm.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-lg.btn-xs:before,\r\n  .btn-toggle.btn-lg.btn-xs:after {\r\n    display: none;\r\n  }\r\n  .btn-toggle.btn-sm {\r\n    margin: 0 0.5rem;\r\n    padding: 0;\r\n    position: relative;\r\n    border: none;\r\n    height: 1.5rem;\r\n    width: 3rem;\r\n    border-radius: 1.5rem;\r\n  }\r\n  .btn-toggle.btn-sm:focus,\r\n  .btn-toggle.btn-sm.focus,\r\n  .btn-toggle.btn-sm:focus.active,\r\n  .btn-toggle.btn-sm.focus.active {\r\n    outline: none;\r\n  }\r\n  .btn-toggle.btn-sm:before,\r\n  .btn-toggle.btn-sm:after {\r\n    line-height: 1.5rem;\r\n    width: 0.5rem;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 0.55rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    transition: opacity 0.25s;\r\n  }\r\n  .btn-toggle.btn-sm:before {\r\n    content: 'Off';\r\n    left: -0.5rem;\r\n  }\r\n  .btn-toggle.btn-sm:after {\r\n    content: 'On';\r\n    right: -0.5rem;\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle.btn-sm > .handle {\r\n    position: absolute;\r\n    top: 0.1875rem;\r\n    left: 0.1875rem;\r\n    width: 1.125rem;\r\n    height: 1.125rem;\r\n    border-radius: 1.125rem;\r\n    background: #fff;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.btn-sm.active {\r\n    transition: background-color 0.25s;\r\n  }\r\n  .btn-toggle.btn-sm.active > .handle {\r\n    left: 1.6875rem;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.btn-sm.active:before {\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle.btn-sm.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-sm.btn-sm:before,\r\n  .btn-toggle.btn-sm.btn-sm:after {\r\n    line-height: -0.5rem;\r\n    color: #fff;\r\n    letter-spacing: 0.75px;\r\n    left: 0.4125rem;\r\n    width: 2.325rem;\r\n  }\r\n  .btn-toggle.btn-sm.btn-sm:before {\r\n    text-align: right;\r\n  }\r\n  .btn-toggle.btn-sm.btn-sm:after {\r\n    text-align: left;\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-sm.btn-sm.active:before {\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-sm.btn-sm.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-sm.btn-xs:before,\r\n  .btn-toggle.btn-sm.btn-xs:after {\r\n    display: none;\r\n  }\r\n  .btn-toggle.btn-xs {\r\n    margin: 0 0;\r\n    padding: 0;\r\n    position: relative;\r\n    border: none;\r\n    height: 1rem;\r\n    width: 2rem;\r\n    border-radius: 1rem;\r\n  }\r\n  .btn-toggle.btn-xs:focus,\r\n  .btn-toggle.btn-xs.focus,\r\n  .btn-toggle.btn-xs:focus.active,\r\n  .btn-toggle.btn-xs.focus.active {\r\n    outline: none;\r\n  }\r\n  .btn-toggle.btn-xs:before,\r\n  .btn-toggle.btn-xs:after {\r\n    line-height: 1rem;\r\n    width: 0;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    transition: opacity 0.25s;\r\n  }\r\n  .btn-toggle.btn-xs:before {\r\n    content: 'Off';\r\n    left: 0;\r\n  }\r\n  .btn-toggle.btn-xs:after {\r\n    content: 'On';\r\n    right: 0;\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle.btn-xs > .handle {\r\n    position: absolute;\r\n    top: 0.125rem;\r\n    left: 0.125rem;\r\n    width: 0.75rem;\r\n    height: 0.75rem;\r\n    border-radius: 0.75rem;\r\n    background: #fff;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.btn-xs.active {\r\n    transition: background-color 0.25s;\r\n  }\r\n  .btn-toggle.btn-xs.active > .handle {\r\n    left: 1.125rem;\r\n    transition: left 0.25s;\r\n  }\r\n  .btn-toggle.btn-xs.active:before {\r\n    opacity: 0.5;\r\n  }\r\n  .btn-toggle.btn-xs.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-xs.btn-sm:before,\r\n  .btn-toggle.btn-xs.btn-sm:after {\r\n    line-height: -1rem;\r\n    color: #fff;\r\n    letter-spacing: 0.75px;\r\n    left: 0.275rem;\r\n    width: 1.55rem;\r\n  }\r\n  .btn-toggle.btn-xs.btn-sm:before {\r\n    text-align: right;\r\n  }\r\n  .btn-toggle.btn-xs.btn-sm:after {\r\n    text-align: left;\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-xs.btn-sm.active:before {\r\n    opacity: 0;\r\n  }\r\n  .btn-toggle.btn-xs.btn-sm.active:after {\r\n    opacity: 1;\r\n  }\r\n  .btn-toggle.btn-xs.btn-xs:before,\r\n  .btn-toggle.btn-xs.btn-xs:after {\r\n    display: none;\r\n  }\r\n  .btn-toggle.btn-secondary {\r\n    color: #6b7381;\r\n    background: #bdc1c8;\r\n  }\r\n  .btn-toggle.btn-secondary:before,\r\n  .btn-toggle.btn-secondary:after {\r\n    color: #6b7381;\r\n  }\r\n  .btn-toggle.btn-secondary.active {\r\n    background-color: #ff8300;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkbWluL2NvbmZpZ3VyYXRpb25zL2NvbmZpZ3VyYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3R0FBd0c7SUFDeEcsZUFBZTtJQUNmLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7R0FDaEI7RUFDRDtJQUNFLFlBQVk7R0FDYjtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkNBQTJDO0dBQzVDO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7R0FDaEI7RUFDRDtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsU0FBUztJQUNULG9DQUE0QjtZQUE1Qiw0QkFBNEI7R0FDN0I7RUFDRDtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0JBQW9CO0dBQ3JCO0VBQ0Q7Ozs7SUFJRSxjQUFjO0dBQ2Y7RUFDRDs7SUFFRSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwwQkFBMEI7R0FDM0I7RUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0dBQ2I7RUFDRDtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxtQ0FBbUM7R0FDcEM7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7O0lBRUUscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEOztJQUVFLGNBQWM7R0FDZjtFQUNEOztJQUVFLGVBQWU7R0FDaEI7RUFDRDtJQUNFLDBCQUEwQjtHQUMzQjtFQUNEO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0dBQ3ZCO0VBQ0Q7Ozs7SUFJRSxjQUFjO0dBQ2Y7RUFDRDs7SUFFRSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwwQkFBMEI7R0FDM0I7RUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0dBQ2I7RUFDRDtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxtQ0FBbUM7R0FDcEM7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7O0lBRUUsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEOztJQUVFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0dBQ3ZCO0VBQ0Q7Ozs7SUFJRSxjQUFjO0dBQ2Y7RUFDRDs7SUFFRSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwwQkFBMEI7R0FDM0I7RUFDRDtJQUNFLGVBQWU7SUFDZixjQUFjO0dBQ2Y7RUFDRDtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxtQ0FBbUM7R0FDcEM7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7O0lBRUUscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEOztJQUVFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0dBQ3JCO0VBQ0Q7Ozs7SUFJRSxjQUFjO0dBQ2Y7RUFDRDs7SUFFRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwwQkFBMEI7R0FDM0I7RUFDRDtJQUNFLGVBQWU7SUFDZixRQUFRO0dBQ1Q7RUFDRDtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxtQ0FBbUM7R0FDcEM7RUFDRDtJQUNFLGVBQWU7SUFDZix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7O0lBRUUsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7R0FDaEI7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7R0FDWjtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDs7SUFFRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLGVBQWU7SUFDZixvQkFBb0I7R0FDckI7RUFDRDs7SUFFRSxlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYWRtaW4vY29uZmlndXJhdGlvbnMvY29uZmlndXJhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ0xhdG8nLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBDYWxpYnJpLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNmI3MzgxO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICB9XHJcbiAgLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmI3MzgxO1xyXG4gICAgY29sb3I6ICNiZGMxYzg7XHJcbiAgfVxyXG4gIC5qdW1ib3Ryb24gaDEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5leGFtcGxlIHtcclxuICAgIG1hcmdpbjogNHJlbSBhdXRvO1xyXG4gIH1cclxuICAuZXhhbXBsZSA+IC5yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4OSwgMTkzLCAyMDAsIDAuNSk7XHJcbiAgfVxyXG4gIC5leGFtcGxlID4gLnJvdzpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5leGFtcGxlIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5leGFtcGxlIGgzID4gc21hbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6ICM5MzlhYTU7XHJcbiAgfVxyXG4gIC5leGFtcGxlIGg2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMy4zMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjYmRjMWM4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDVyZW07XHJcbiAgfVxyXG4gIC5leGFtcGxlIC5idG4tdG9nZ2xlIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZSB7XHJcbiAgICBtYXJnaW46IDAgNHJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgY29sb3I6ICM2YjczODE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmRjMWM4O1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZTpmb2N1cyxcclxuICAuYnRuLXRvZ2dsZS5mb2N1cyxcclxuICAuYnRuLXRvZ2dsZTpmb2N1cy5hY3RpdmUsXHJcbiAgLmJ0bi10b2dnbGUuZm9jdXMuYWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlOmJlZm9yZSxcclxuICAuYnRuLXRvZ2dsZTphZnRlciB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ09mZic7XHJcbiAgICBsZWZ0OiAtNHJlbTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ09uJztcclxuICAgIHJpZ2h0OiAtNHJlbTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUgPiAuaGFuZGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMC4xODc1cmVtO1xyXG4gICAgbGVmdDogMC4xODc1cmVtO1xyXG4gICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMTI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5hY3RpdmUgPiAuaGFuZGxlIHtcclxuICAgIGxlZnQ6IDEuNjg3NXJlbTtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtOmJlZm9yZSxcclxuICAuYnRuLXRvZ2dsZS5idG4tc206YWZ0ZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IC0wLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XHJcbiAgICBsZWZ0OiAwLjQxMjVyZW07XHJcbiAgICB3aWR0aDogMi4zMjVyZW07XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbTpiZWZvcmUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbTphZnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZTphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4teHM6YmVmb3JlLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14czphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZTpiZWZvcmUsXHJcbiAgLmJ0bi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM2YjczODE7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjliNWE4O1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tbGcge1xyXG4gICAgbWFyZ2luOiAwIDVyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnOmZvY3VzLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1sZy5mb2N1cyxcclxuICAuYnRuLXRvZ2dsZS5idG4tbGc6Zm9jdXMuYWN0aXZlLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1sZy5mb2N1cy5hY3RpdmUge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnOmJlZm9yZSxcclxuICAuYnRuLXRvZ2dsZS5idG4tbGc6YWZ0ZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnT2ZmJztcclxuICAgIGxlZnQ6IC01cmVtO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tbGc6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ09uJztcclxuICAgIHJpZ2h0OiAtNXJlbTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnID4gLmhhbmRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuMzEyNXJlbTtcclxuICAgIGxlZnQ6IDAuMzEyNXJlbTtcclxuICAgIHdpZHRoOiAxLjg3NXJlbTtcclxuICAgIGhlaWdodDogMS44NzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjg3NXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMjVzO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tbGcuYWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1sZy5hY3RpdmUgPiAuaGFuZGxlIHtcclxuICAgIGxlZnQ6IDIuODEyNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1sZy5hY3RpdmU6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnLmFjdGl2ZTphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tbGcuYnRuLXNtOmJlZm9yZSxcclxuICAuYnRuLXRvZ2dsZS5idG4tbGcuYnRuLXNtOmFmdGVyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XHJcbiAgICBsZWZ0OiAwLjY4NzVyZW07XHJcbiAgICB3aWR0aDogMy44NzVyZW07XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1sZy5idG4tc206YmVmb3JlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tbGcuYnRuLXNtOmFmdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tbGcuYnRuLXNtLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnLmJ0bi1zbS5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnLmJ0bi14czpiZWZvcmUsXHJcbiAgLmJ0bi10b2dnbGUuYnRuLWxnLmJ0bi14czphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc20ge1xyXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc206Zm9jdXMsXHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmZvY3VzLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbTpmb2N1cy5hY3RpdmUsXHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmZvY3VzLmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc206YmVmb3JlLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbTphZnRlciB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDAuNTVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ09mZic7XHJcbiAgICBsZWZ0OiAtMC41cmVtO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc206YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ09uJztcclxuICAgIHJpZ2h0OiAtMC41cmVtO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc20gPiAuaGFuZGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMC4xODc1cmVtO1xyXG4gICAgbGVmdDogMC4xODc1cmVtO1xyXG4gICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMTI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbS5hY3RpdmUge1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZSA+IC5oYW5kbGUge1xyXG4gICAgbGVmdDogMS42ODc1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjI1cztcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc20uYWN0aXZlOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbS5idG4tc206YmVmb3JlLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbS5idG4tc206YWZ0ZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IC0wLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XHJcbiAgICBsZWZ0OiAwLjQxMjVyZW07XHJcbiAgICB3aWR0aDogMi4zMjVyZW07XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zbS5idG4tc206YmVmb3JlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc20uYnRuLXNtOmFmdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4tc20uYnRuLXNtLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmJ0bi1zbS5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmJ0bi14czpiZWZvcmUsXHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNtLmJ0bi14czphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4teHMge1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4teHM6Zm9jdXMsXHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzLmZvY3VzLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14czpmb2N1cy5hY3RpdmUsXHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzLmZvY3VzLmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4teHM6YmVmb3JlLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14czphZnRlciB7XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnT2ZmJztcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14czphZnRlciB7XHJcbiAgICBjb250ZW50OiAnT24nO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14cyA+IC5oYW5kbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwLjEyNXJlbTtcclxuICAgIGxlZnQ6IDAuMTI1cmVtO1xyXG4gICAgd2lkdGg6IDAuNzVyZW07XHJcbiAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14cy5hY3RpdmUge1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzLmFjdGl2ZSA+IC5oYW5kbGUge1xyXG4gICAgbGVmdDogMS4xMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMjVzO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4teHMuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14cy5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzLmJ0bi1zbTpiZWZvcmUsXHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzLmJ0bi1zbTphZnRlciB7XHJcbiAgICBsaW5lLWhlaWdodDogLTFyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XHJcbiAgICBsZWZ0OiAwLjI3NXJlbTtcclxuICAgIHdpZHRoOiAxLjU1cmVtO1xyXG4gIH1cclxuICAuYnRuLXRvZ2dsZS5idG4teHMuYnRuLXNtOmJlZm9yZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzLmJ0bi1zbTphZnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXhzLmJ0bi1zbS5hY3RpdmU6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14cy5idG4tc20uYWN0aXZlOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14cy5idG4teHM6YmVmb3JlLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi14cy5idG4teHM6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmJ0bi10b2dnbGUuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogIzZiNzM4MTtcclxuICAgIGJhY2tncm91bmQ6ICNiZGMxYzg7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zZWNvbmRhcnk6YmVmb3JlLFxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zZWNvbmRhcnk6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM2YjczODE7XHJcbiAgfVxyXG4gIC5idG4tdG9nZ2xlLmJ0bi1zZWNvbmRhcnkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgzMDA7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/component/admin/configurations/configurations.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/admin/configurations/configurations.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n      <div class=\"content-wrapper-before\"></div>\r\n      <div class=\"content-header row\">\r\n          <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n              <h3 class=\"content-header-title\">Manage Configuration</h3>\r\n          </div>\r\n          <div class=\"content-header-right col-md-8 col-12\">\r\n              <div class=\"breadcrumbs-top float-md-right\">\r\n                  <div class=\"breadcrumb-wrapper mr-1\">\r\n                      <ol class=\"breadcrumb\">\r\n                          <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\">Configuration\r\n                          </li>\r\n                      </ol>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"content-body\">\r\n          <section id=\"content-types\">\r\n              <div class=\"row match-height justify-content-md-center\">\r\n                  <div class=\"col-xl-6 col-md-12\">\r\n                      <div class=\"card\">\r\n                          <div class=\"card-content\">\r\n                              <div class=\"card-body\">\r\n                                  <h4 class=\"card-title\">Configuration</h4>\r\n                                  <h6 class=\"card-subtitle text-muted\">Add Configuration</h6>\r\n                              </div>\r\n                              <div class=\"card-body\">\r\n                                  <form class=\"form\" [formGroup]=\"ConfigurationForm\" (ngSubmit)=onSubmit(ConfigurationForm)>\r\n                                      <input type=\"hidden\" formControlName=\"_id\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-9\">    \r\n                                          <div class=\"form-group\">\r\n                                              <input type=\"text\" class=\"form-control\" placeholder=\"Configuration Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n                                              <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.name.errors.required\">Configuration Name is required</div>\r\n                                                <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n                                            </div>\r\n                                         </div>\r\n                                        </div>\r\n                                        <div class=\"col-3\">\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-sm-5\">\r\n                                                    <button (click)=\"toggle()\" type=\"button\" class=\"btn btn-lg btn-toggle\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\"> \r\n                                                      <div class=\"handle\"></div>\r\n                                                    </button>\r\n                                                  </div>\r\n                                             </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"form-action left row\">\r\n                                          <div class=\"col\">\r\n                                              <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                                          </div>\r\n                                          <div class=\"col\">\r\n                                              <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                                          </div>\r\n                                      </div>\r\n                                  </form>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </section>\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                  <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                          <h4 class=\"card-title\">Configuration Tables</h4>\r\n                          <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                          <div class=\"heading-elements\">\r\n                              <ul class=\"list-inline mb-0\">\r\n                                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                                  <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                              </ul>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"card-content collapse show\">\r\n                          <div class=\"card-body\">\r\n                          Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search Categories\" class=\"form-control\">\r\n                              <div class=\"table-responsive\">\r\n                                  <table class=\"table\">\r\n                                      <thead>\r\n                                          <tr>\r\n                                              <th>Sl. No</th>\r\n                                              <th>Configuration Name</th>\r\n                                              <th>Status</th>\r\n                                              <th>Update</th>\r\n                                              <th>Delete</th>\r\n                                          </tr>\r\n                                      </thead>\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let config of configs | searchfilter : searchText ; let i = index;   \">\r\n\r\n                                              <th scope=\"row\">{{i+1}}</th>\r\n                                              <td>{{ config.config}}</td>\r\n                                              <td>{{ config.value }}</td>\r\n                                              <td>\r\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                                                      <a (click)=\"updateConfiguration(config._id,config.config)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>\r\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteConfiguration(config._id)\">\r\n                                                      <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                                                  </div>\r\n                                              </td>\r\n                                          </tr>\r\n                                      </tbody>\r\n                                  </table>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/configurations/configurations.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/admin/configurations/configurations.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfigurationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsComponent", function() { return ConfigurationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/configurations/configurations.service */ "./src/app/services/configurations/configurations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationsComponent = /** @class */ (function () {
    function ConfigurationsComponent(configService, formBuilder) {
        this.configService = configService;
        this.formBuilder = formBuilder;
    }
    ConfigurationsComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.createForm();
        this.getConfigs();
        this.value = false;
    };
    Object.defineProperty(ConfigurationsComponent.prototype, "f", {
        get: function () { return this.ConfigurationForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConfigurationsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.configService.createConfig(this.ConfigurationForm.get('name').value, this.value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getConfigs();
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getConfigs();
                        _this.createForm();
                    }
                });
            }
            else {
                this.configService.updateConfig(form.value._id, form.value.name, this.value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getConfigs();
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getConfigs();
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    ConfigurationsComponent.prototype.createForm = function () {
        this.submitted = false;
        this.ConfigurationForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    ConfigurationsComponent.prototype.getConfigs = function () {
        var _this = this;
        this.configService.readConfig().subscribe(function (response) {
            _this.configs = response.docs;
        });
        //if(this.categories)
    };
    ConfigurationsComponent.prototype.deleteConfiguration = function (id) {
        var _this = this;
        this.configService.deleteConfig(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getConfigs();
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getConfigs();
                _this.createForm();
            }
        });
    };
    ConfigurationsComponent.prototype.updateConfiguration = function (id, name) {
        this.Button = 'Update';
        this.ConfigurationForm.setValue({
            _id: id,
            name: name
        });
    };
    ConfigurationsComponent.prototype.toggle = function () {
        if (this.value == true) {
            this.value = false;
        }
        else {
            this.value = true;
        }
    };
    ConfigurationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configurations',
            template: __webpack_require__(/*! ./configurations.component.html */ "./src/app/component/admin/configurations/configurations.component.html"),
            styles: [__webpack_require__(/*! ./configurations.component.css */ "./src/app/component/admin/configurations/configurations.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ConfigurationsComponent);
    return ConfigurationsComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/course/course.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/admin/course/course.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/admin/course/course.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/admin/course/course.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n      <div class=\"content-wrapper-before\"></div>\r\n      <div class=\"content-header row\">\r\n          <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n              <h3 class=\"content-header-title\">Manage Course</h3>\r\n          </div>\r\n          <div class=\"content-header-right col-md-8 col-12\">\r\n              <div class=\"breadcrumbs-top float-md-right\">\r\n                  <div class=\"breadcrumb-wrapper mr-1\">\r\n                      <ol class=\"breadcrumb\">\r\n                          <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\">Course\r\n                          </li>\r\n                      </ol>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"content-body\">\r\n          <section id=\"content-types\">\r\n              <div class=\"row match-height justify-content-md-center\">\r\n                  <div class=\"col-xl-6 col-md-12\">\r\n                      <div class=\"card\">\r\n                          <div class=\"card-content\">\r\n                              <div class=\"card-body\">\r\n                                  <h4 class=\"card-title\">Course</h4>\r\n                                  <h6 class=\"card-subtitle text-muted\">Add Course</h6>\r\n                              </div>\r\n                              <div class=\"card-body\">\r\n                                  <form class=\"form\" [formGroup]=\"courseForm\" (ngSubmit)=onSubmit(courseForm)>\r\n                                      <input type=\"hidden\" formControlName=\"_id\">\r\n                                      <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Course Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n                                          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                             <div *ngIf=\"f.name.errors.required\">Course Name is required</div>\r\n                                             <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n                                         </div>\r\n                                     </div>\r\n                                      <div class=\"form-action left row\">\r\n                                          <div class=\"col\">\r\n                                              <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                                          </div>\r\n                                          <div class=\"col\">\r\n                                              <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                                          </div>\r\n                                      </div>\r\n                                  </form>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </section>\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                  <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                          <h4 class=\"card-title\">Course Tables</h4>\r\n                          <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                          <div class=\"heading-elements\">\r\n                              <ul class=\"list-inline mb-0\">\r\n                                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                                  <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                              </ul>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"card-content collapse show\">\r\n                          <div class=\"card-body\">\r\n                          Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search Categories\" class=\"form-control\">\r\n                          <div class = \"row\">\r\n                                  <div class=\"col-6\">\r\n                                  </div>\r\n                                  <div class=\"col-6\" style=\"margin-top:5px; margin-bottom:10px;\">\r\n                                    <div class=\"right\">\r\n                                        <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp;Page {{currentPage}} &nbsp;  \r\n                                        <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              <div class=\"table-responsive\">\r\n                                  <table class=\"table\">\r\n                                      <thead>\r\n                                          <tr>\r\n                                              <th>Sl. No</th>\r\n                                              <th>Course Name</th>\r\n                                              <th>Update</th>\r\n                                              <th>Delete</th>\r\n                                          </tr>\r\n                                      </thead>\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let course of courses | searchfilter : searchText; let i = index;\">\r\n\r\n                                              <th scope=\"row\">{{i+1}}</th>\r\n                                              <td>{{course.name}}</td>\r\n                                              <td>\r\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                                                      <a (click)=\"updateCourse(course._id,course.name)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>\r\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteCourse(course._id)\">\r\n                                                      <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                                                  </div>\r\n                                              </td>\r\n                                          </tr>\r\n                                      </tbody>\r\n                                  </table>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/course/course.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/admin/course/course.component.ts ***!
  \************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_course_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseComponent = /** @class */ (function () {
    function CourseComponent(courseService, authService, formBuilder) {
        this.courseService = courseService;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    CourseComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.currentPage = 1;
        this.createForm();
        this.getCourses(this.currentPage);
    };
    CourseComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getCourses(this.currentPage);
    };
    CourseComponent.prototype.previousPage = function () {
        if (this.currentPage == 1) {
        }
        else {
            this.currentPage = this.currentPage - 1;
            this.getCourses(this.currentPage);
        }
    };
    Object.defineProperty(CourseComponent.prototype, "f", {
        get: function () { return this.courseForm.controls; },
        enumerable: true,
        configurable: true
    });
    CourseComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.courseService.createCourse(this.courseForm.get('name').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCourses(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCourses(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
            else {
                this.courseService.updateCourse(form.value._id, form.value.name).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCourses(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getCourses(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    CourseComponent.prototype.createForm = function () {
        this.submitted = false;
        this.courseForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    CourseComponent.prototype.getCourses = function (page) {
        var _this = this;
        this.courseService.readCourse(page).subscribe(function (response) {
            if (response.docs.length == 0) {
                _this.currentPage -= 1;
            }
            else {
                _this.courses = response.docs;
            }
        });
    };
    CourseComponent.prototype.deleteCourse = function (id) {
        var _this = this;
        this.courseService.deleteCourse(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getCourses(_this.currentPage);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getCourses(_this.currentPage);
                _this.createForm();
            }
        });
    };
    CourseComponent.prototype.updateCourse = function (id, name) {
        this.Button = 'Update';
        this.courseForm.setValue({
            _id: id,
            name: name
        });
    };
    CourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/component/admin/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/component/admin/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_course_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/degree/degree.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/admin/degree/degree.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9kZWdyZWUvZGVncmVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/admin/degree/degree.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/admin/degree/degree.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content-wrapper-before\"></div>\r\n        <div class=\"content-header row\">\r\n            <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n                <h3 class=\"content-header-title\">Manage Degree</h3>\r\n            </div>\r\n            <div class=\"content-header-right col-md-8 col-12\">\r\n                <div class=\"breadcrumbs-top float-md-right\">\r\n                    <div class=\"breadcrumb-wrapper mr-1\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\">Degree\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-body\">\r\n            <section id=\"content-types\">\r\n                <div class=\"row match-height justify-content-md-center\">\r\n                    <div class=\"col-xl-6 col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-content\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">Degree</h4>\r\n                                    <h6 class=\"card-subtitle text-muted\">Add Degree</h6>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <form class=\"form\" [formGroup]=\"degreeForm\" (ngSubmit)=onSubmit(degreeForm)>\r\n                                        <input type=\"hidden\" formControlName=\"_id\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Degree Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n                                            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                               <div *ngIf=\"f.name.errors.required\">Degree Name is required</div>\r\n                                               <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n                                           </div>\r\n                                       </div>\r\n                                        <div class=\"form-action left row\">\r\n                                            <div class=\"col\">\r\n                                                <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Degree Tables</h4>\r\n                            <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                            <div class=\"heading-elements\">\r\n                                <ul class=\"list-inline mb-0\">\r\n                                    <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                                    <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                                    <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-content collapse show\">\r\n                            <div class=\"card-body\">\r\n                            Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search Categories\" class=\"form-control\">\r\n                            <div class = \"row\">\r\n                                    <div class=\"col-6\">\r\n                                    </div>\r\n                                    <div class=\"col-6\" style=\"margin-top:5px; margin-bottom:10px;\">\r\n                                      <div class=\"right\">\r\n                                          <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp;Page {{currentPage}} &nbsp;  \r\n                                          <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Sl. No</th>\r\n                                                <th>Degree Name</th>\r\n                                                <th>Update</th>\r\n                                                <th>Delete</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let degree of degrees | searchfilter : searchText; let i = index;\">\r\n  \r\n                                                <th scope=\"row\">{{i+1}}</th>\r\n                                                <td>{{degree.name}}</td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                                                        <a (click)=\"updateDegree(degree._id,degree.name)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteDegree(degree._id)\">\r\n                                                        <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/component/admin/degree/degree.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/admin/degree/degree.component.ts ***!
  \************************************************************/
/*! exports provided: DegreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreeComponent", function() { return DegreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/degree/degree.service */ "./src/app/services/degree/degree.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DegreeComponent = /** @class */ (function () {
    function DegreeComponent(degreeService, authService, formBuilder) {
        this.degreeService = degreeService;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    DegreeComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.currentPage = 1;
        this.createForm();
        this.getDegrees(this.currentPage);
    };
    DegreeComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getDegrees(this.currentPage);
    };
    DegreeComponent.prototype.previousPage = function () {
        if (this.currentPage == 1) {
        }
        else {
            this.currentPage = this.currentPage - 1;
            this.getDegrees(this.currentPage);
        }
    };
    Object.defineProperty(DegreeComponent.prototype, "f", {
        get: function () { return this.degreeForm.controls; },
        enumerable: true,
        configurable: true
    });
    DegreeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.degreeService.createDegree(this.degreeForm.get('name').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDegrees(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDegrees(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
            else {
                this.degreeService.updateDegree(form.value._id, form.value.name).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDegrees(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDegrees(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    DegreeComponent.prototype.createForm = function () {
        this.submitted = false;
        this.degreeForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    DegreeComponent.prototype.getDegrees = function (page) {
        var _this = this;
        this.degreeService.readDegree(page).subscribe(function (response) {
            if (response.docs.legnth == 0) {
                _this.currentPage -= 1;
            }
            else {
                _this.degrees = response.docs;
            }
        });
    };
    DegreeComponent.prototype.deleteDegree = function (id) {
        var _this = this;
        this.degreeService.deleteDegree(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getDegrees(_this.currentPage);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getDegrees(_this.currentPage);
                _this.createForm();
            }
        });
    };
    DegreeComponent.prototype.updateDegree = function (id, name) {
        this.Button = 'Update';
        this.degreeForm.setValue({
            _id: id,
            name: name
        });
    };
    DegreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-degree',
            template: __webpack_require__(/*! ./degree.component.html */ "./src/app/component/admin/degree/degree.component.html"),
            styles: [__webpack_require__(/*! ./degree.component.css */ "./src/app/component/admin/degree/degree.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_2__["DegreeService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DegreeComponent);
    return DegreeComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/department/department.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/admin/department/department.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9kZXBhcnRtZW50L2RlcGFydG1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/admin/department/department.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/admin/department/department.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content-wrapper-before\"></div>\r\n        <div class=\"content-header row\">\r\n            <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n                <h3 class=\"content-header-title\">Manage Department</h3>\r\n            </div>\r\n            <div class=\"content-header-right col-md-8 col-12\">\r\n                <div class=\"breadcrumbs-top float-md-right\">\r\n                    <div class=\"breadcrumb-wrapper mr-1\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\">Department\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-body\">\r\n            <section id=\"content-types\">\r\n                <div class=\"row match-height justify-content-md-center\">\r\n                    <div class=\"col-xl-6 col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-content\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">Department</h4>\r\n                                    <h6 class=\"card-subtitle text-muted\">Add Department</h6>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <form class=\"form\" [formGroup]=\"departmentForm\" (ngSubmit)=onSubmit(departmentForm)>\r\n                                        <input type=\"hidden\" formControlName=\"_id\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Department Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n                                            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                               <div *ngIf=\"f.name.errors.required\">Department Name is required</div>\r\n                                               <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n                                           </div>\r\n                                       </div>\r\n                                        <div class=\"form-action left row\">\r\n                                            <div class=\"col\">\r\n                                                <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Departments</h4>\r\n                            <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                            <div class=\"heading-elements\">\r\n                                <ul class=\"list-inline mb-0\">\r\n                                    <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                                    <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                                    <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-content collapse show\">\r\n                            <div class=\"card-body\">\r\n                                    <input [(ngModel)]=\"searchText\" placeholder=\"Search Departments\" class=\"form-control\">\r\n                                    <div class = \"row\">\r\n                                            <div class=\"col-6\">\r\n                                            </div>\r\n                                            <div class=\"col-6\" style=\"margin-top:5px; margin-bottom:10px;\">\r\n                                              <div class=\"right\">\r\n                                                  <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp; Page {{currentPage}} &nbsp;  \r\n                                                  <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Sl. No</th>\r\n                                                <th>Department Name</th>\r\n                                                <th>Update</th>\r\n                                                <th>Delete</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let department of departments | searchfilter : searchText ; let i = index;\">\r\n  \r\n                                                <th scope=\"row\">{{i+1}}</th>\r\n                                                <td>{{department.name}}</td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                                                        <a (click)=\"updateDepartment(department._id,department.name)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteDepartment(department._id)\">\r\n                                                        <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/component/admin/department/department.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/admin/department/department.component.ts ***!
  \********************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/department/department.service */ "./src/app/services/department/department.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(departmentService, authService, formBuilder) {
        this.departmentService = departmentService;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.currentPage = 1;
        this.createForm();
        this.getDepartments(1);
    };
    DepartmentComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getDepartments(this.currentPage);
    };
    DepartmentComponent.prototype.previousPage = function () {
        if (this.currentPage == 1) {
        }
        else {
            this.currentPage = this.currentPage - 1;
            this.getDepartments(this.currentPage);
        }
    };
    Object.defineProperty(DepartmentComponent.prototype, "f", {
        get: function () { return this.departmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    DepartmentComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.departmentService.createDepartment(this.departmentForm.get('name').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDepartments(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDepartments(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
            else {
                this.departmentService.updateDepartment(form.value._id, form.value.name).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDepartments(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getDepartments(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    DepartmentComponent.prototype.createForm = function () {
        this.submitted = false;
        this.departmentForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    DepartmentComponent.prototype.getDepartments = function (page) {
        var _this = this;
        this.departmentService.readDepartment(page).subscribe(function (response) {
            if (response.docs.length == 0) {
                _this.currentPage -= 1;
            }
            else {
                _this.departments = response.docs;
            }
        });
    };
    DepartmentComponent.prototype.deleteDepartment = function (id) {
        var _this = this;
        this.departmentService.deleteDepartment(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getDepartments(_this.currentPage);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getDepartments(_this.currentPage);
                _this.createForm();
            }
        });
    };
    DepartmentComponent.prototype.updateDepartment = function (id, name, locale) {
        this.Button = 'Update';
        this.departmentForm.setValue({
            _id: id,
            name: name
        });
    };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/component/admin/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.css */ "./src/app/component/admin/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/event-participants-team/event-participants-team.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/component/admin/event-participants-team/event-participants-team.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9ldmVudC1wYXJ0aWNpcGFudHMtdGVhbS9ldmVudC1wYXJ0aWNpcGFudHMtdGVhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/admin/event-participants-team/event-participants-team.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/component/admin/event-participants-team/event-participants-team.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-participants-team works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/admin/event-participants-team/event-participants-team.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/admin/event-participants-team/event-participants-team.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EventParticipantsTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventParticipantsTeamComponent", function() { return EventParticipantsTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventParticipantsTeamComponent = /** @class */ (function () {
    function EventParticipantsTeamComponent() {
    }
    EventParticipantsTeamComponent.prototype.ngOnInit = function () {
    };
    EventParticipantsTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-participants-team',
            template: __webpack_require__(/*! ./event-participants-team.component.html */ "./src/app/component/admin/event-participants-team/event-participants-team.component.html"),
            styles: [__webpack_require__(/*! ./event-participants-team.component.css */ "./src/app/component/admin/event-participants-team/event-participants-team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventParticipantsTeamComponent);
    return EventParticipantsTeamComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/event-participants/event-participants.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/admin/event-participants/event-participants.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9ldmVudC1wYXJ0aWNpcGFudHMvZXZlbnQtcGFydGljaXBhbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/admin/event-participants/event-participants.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/admin/event-participants/event-participants.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content-wrapper-before\"></div>\r\n        <div class=\"content-header row\">\r\n            <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n                <h3 class=\"content-header-title\">Manage Participants</h3>\r\n            </div>\r\n            <div class=\"content-header-right col-md-8 col-12\">\r\n                <div class=\"breadcrumbs-top float-md-right\">\r\n                    <div class=\"breadcrumb-wrapper mr-1\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\">Participants\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-body\">\r\n            <section id=\"content-types\">\r\n                <div class=\"row match-height justify-content-md-center\">\r\n                    <div class=\"col-xl-6 col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-content\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">Participants</h4>\r\n                                    <h6 class=\"card-subtitle text-muted\">Add Participants</h6>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <form class=\"form\" [formGroup]=\"participantForm\" (ngSubmit)=onSubmit(participantForm)>\r\n                                        <input type=\"hidden\" formControlName=\"_id\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Participant mail\"\r\n                                                formControlName=\"email_id\" [ngClass]=\"{'is-invalid': submitted &&f.email_id.errors}\">\r\n                                            <div *ngIf=\"submitted && f.email_id.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.email_id.errors.required\">Email_id is required\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-12\">\r\n                                                    Participant Status\r\n                                                    <select class=\"custom-select\" formControlName=\"participation\">\r\n                                                        <option *ngFor=\"let participantStatus of participantStatuss\" value=\"{{ participantStatus.name }}\">{{ participantStatus.name }}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-action left row\">\r\n                                            <div class=\"col\">\r\n                                                <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Participant Tables</h4>\r\n                            <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                            <div class=\"heading-elements\">\r\n                                <ul class=\"list-inline mb-0\">\r\n                                    <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                                    <li><a data-action=\"reload\" (click)=\"reload()\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                                    <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-content collapse show\">\r\n                            <div class=\"card-body\">\r\n                                Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search participants\" class=\"form-control\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Sl. No</th>\r\n                                                <th>Participant Name</th>\r\n                                                <th>Email</th>\r\n                                                <th>Attendance</th>\r\n                                                <th>Update Attendance</th>\r\n                                                <th>Delete</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let participant of participants | searchfilter : searchText ; let i = index;   \">\r\n                                                <th scope=\"row\">{{i+1}}</th>\r\n                                                <td>{{participant.user_id.name}}</td>\r\n                                                <td>{{participant.user_id.email_id}}</td>\r\n                                                <td>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-12\">\r\n                                                            <select class=\"custom-select\" [(ngModel)]=\"currentAttendance\">\r\n                                                                <option *ngFor=\"let participantStatus of participantStatuss\" value=\"{{ participantStatus.name }}\">{{ participantStatus.name }}</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n                                                        <a (click)=\"updateAttendance(participant._id)\"> <i\r\n                                                                        class=\"la la-upload la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteParticipant(participant._id)\">\r\n                                                        <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/event-participants/event-participants.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/admin/event-participants/event-participants.component.ts ***!
  \************************************************************************************/
/*! exports provided: EventParticipantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventParticipantsComponent", function() { return EventParticipantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/eventRegistration/event-registration.service */ "./src/app/services/eventRegistration/event-registration.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_participationstatus_participationstatus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/participationstatus/participationstatus.service */ "./src/app/services/participationstatus/participationstatus.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventParticipantsComponent = /** @class */ (function () {
    function EventParticipantsComponent(participantStatusService, eventRegistration, authService, formBuilder, route, location) {
        var _this = this;
        this.participantStatusService = participantStatusService;
        this.eventRegistration = eventRegistration;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.location = location;
        this.route.params.subscribe(function (param) {
            _this.event_id = param.id;
        });
    }
    EventParticipantsComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.currentAttendance = '';
        this.createForm();
        this.getParticipants();
        this.getParticipantStatus();
        this.searchText = "";
    };
    EventParticipantsComponent.prototype.reload = function () {
        this.getParticipants();
    };
    Object.defineProperty(EventParticipantsComponent.prototype, "f", {
        get: function () { return this.participantForm.controls; },
        enumerable: true,
        configurable: true
    });
    EventParticipantsComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                //this.event_id, this.participantForm.get('email_id').value, this.participantForm.get('participation').value
                // this.eventRegistration.createEventRegistration(,this.event_id).subscribe((response: any) => {
                //   if (response.error) {
                //     M.toast({ html: response.msg, classes: 'roundeds' });
                //     this.getParticipants();
                //     this.createForm();
                //   } else {
                //     M.toast({ html: response.msg, classes: 'roundeds' });
                //     this.getParticipants();
                //     this.createForm();
                //   }
                // });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    EventParticipantsComponent.prototype.getParticipants = function () {
        var _this = this;
        this.eventRegistration.getEvents(this.event_id).subscribe(function (response) {
            _this.participants = response;
        });
    };
    EventParticipantsComponent.prototype.createForm = function () {
        this.submitted = false;
        this.participantForm = this.formBuilder.group({
            _id: '',
            email_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            participation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.Button = 'Create';
    };
    EventParticipantsComponent.prototype.deleteParticipant = function (id) {
        var _this = this;
        this.eventRegistration.cancelEventRegistration(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getParticipants();
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getParticipants();
                _this.createForm();
            }
        });
    };
    EventParticipantsComponent.prototype.updateAttendance = function (id) {
        this.eventRegistration.updateAttendance(id, this.currentAttendance).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
            }
        });
    };
    EventParticipantsComponent.prototype.getParticipantStatus = function () {
        var _this = this;
        this.participantStatusService.readParticipationStatus(0).subscribe(function (response) {
            _this.participantStatuss = response;
        });
    };
    EventParticipantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-participants',
            template: __webpack_require__(/*! ./event-participants.component.html */ "./src/app/component/admin/event-participants/event-participants.component.html"),
            styles: [__webpack_require__(/*! ./event-participants.component.css */ "./src/app/component/admin/event-participants/event-participants.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_participationstatus_participationstatus_service__WEBPACK_IMPORTED_MODULE_5__["ParticipationstatusService"], src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_3__["EventRegistrationService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], EventParticipantsComponent);
    return EventParticipantsComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/admin/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/admin/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/admin/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/component/admin/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/admin/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/admin/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/admin/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/new-registration/new-registration.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/admin/new-registration/new-registration.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9uZXctcmVnaXN0cmF0aW9uL25ldy1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/admin/new-registration/new-registration.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/admin/new-registration/new-registration.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n      <div class=\"content-wrapper-before\"></div>\r\n      <div class=\"content-header row\">\r\n        <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n          <h3 class=\"content-header-title\">Register</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"content-body\">\r\n        <section id=\"content-types\">\r\n          <div class=\"row match-height justify-content-md-center\">\r\n            <div class=\"col-xl-6 col-md-12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Register</h4>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <form class=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=onSubmit(registerForm.value)>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{'is-invalid': submitted &&f.name.errors}\">\r\n                            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.name.errors.required\">Name is required\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Email ID\" formControlName=\"email_id\" [ngClass]=\"{'is-invalid': submitted &&f.email_id.errors}\">\r\n                            <div *ngIf=\"submitted && f.email_id.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.email_id.errors.required\">Email_id is required\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" [ngClass]=\"{'is-invalid': submitted &&f.password.errors}\">\r\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.password.errors.required\">Password is required\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"conpassword\"\r\n                             [ngClass]=\"{'is-invalid': submitted &&f.conpassword.errors}\">\r\n                            <div *ngIf=\"submitted && f.conpassword.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.conpassword.errors.required\">Password is required\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\" formControlName=\"mobile_number\"\r\n                             [ngClass]=\"{'is-invalid': submitted &&f.mobile_number.errors}\">\r\n                            <div *ngIf=\"submitted && f.mobile_number.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.mobile_number.errors.required\">Mobile Number is required\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            Gender\r\n                            <select class=\"custom-select\" formControlName=\"gender\">\r\n                              <option disabled value=\"\">Gender</option>\r\n                              <option value=\"Male\">Male</option>\r\n                              <option value=\"Female\">Female</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            Year of Studying\r\n                            <select class=\"custom-select\" formControlName=\"year_id\">\r\n                                <option disabled value=\"\">Year of Studying</option>\r\n                                <option *ngFor=\"let year of years\" value={{year._id}}>{{year.name}}</option>\r\n                              </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            College\r\n                            <select class=\"custom-select\" formControlName=\"college_id\">\r\n                              <option disabled value=\"\">College</option>\r\n                              <option *ngFor=\"let college of colleges\" value={{college._id}}>{{college.name}}</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            Degree\r\n                            <select class=\"custom-select\" formControlName=\"degree_id\">\r\n                              <option disabled value=\"\">Degree</option>\r\n                              <option *ngFor=\"let degree of degrees\" value={{degree._id}}>{{degree.name}}</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-12\">\r\n                            Department\r\n                            <select class=\"custom-select\" formControlName=\"department_id\">\r\n                              <option disabled value=\"\">Department</option>\r\n                              <option *ngFor=\"let department of departments\" value={{department._id}}>{{department.name}}</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-action left row\">\r\n                        <div class=\"col\">\r\n                          <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/component/admin/new-registration/new-registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/admin/new-registration/new-registration.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRegistrationComponent", function() { return NewRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_userregistration_userregistration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userregistration/userregistration.service */ "./src/app/services/userregistration/userregistration.service.ts");
/* harmony import */ var src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/department/department.service */ "./src/app/services/department/department.service.ts");
/* harmony import */ var src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/college/college.service */ "./src/app/services/college/college.service.ts");
/* harmony import */ var src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/degree/degree.service */ "./src/app/services/degree/degree.service.ts");
/* harmony import */ var src_app_services_year_year_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/year/year.service */ "./src/app/services/year/year.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewRegistrationComponent = /** @class */ (function () {
    function NewRegistrationComponent(yearService, degreeservice, collegeservice, departmentservice, reg, router, formBuilder) {
        this.yearService = yearService;
        this.degreeservice = degreeservice;
        this.collegeservice = collegeservice;
        this.departmentservice = departmentservice;
        this.reg = reg;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    NewRegistrationComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getDepartments();
        this.getColleges();
        this.getDegrees();
        this.getYears();
    };
    NewRegistrationComponent.prototype.getYears = function () {
        var _this = this;
        this.yearService.readYear(0).subscribe(function (response) {
            _this.years = response;
        });
    };
    Object.defineProperty(NewRegistrationComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    //Create Form is Used to Initalize the Values the Form
    NewRegistrationComponent.prototype.createForm = function () {
        this.Button = "Register";
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            email_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            conpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            degree_id: [''],
            college_id: [''],
            department_id: [''],
            gender: [''],
            year_id: ['']
        });
    };
    //The action performed After the Button is Pressed
    NewRegistrationComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        this.Button = "Checking...";
        if (this.registerForm.valid) {
            var email_id = this.registerForm.get('email_id').value;
            var password = this.registerForm.get('password').value;
            var conpassword = this.registerForm.get('conpassword').value;
            var name_1 = this.registerForm.get('name').value;
            var mobile_number = this.registerForm.get('mobile_number').value;
            var gender = this.registerForm.get('gender').value;
            var college_id = this.registerForm.get('college_id').value;
            var degree_id = this.registerForm.get('degree_id').value;
            var department_id = this.registerForm.get('department_id').value;
            var year_id = this.registerForm.get('year_id').value;
            if (password !== conpassword) {
                M.toast({ html: 'Passwords does not match', classes: 'rounded' });
                this.createForm();
            }
            else {
                this.reg.createUser(name_1, college_id, department_id, degree_id, email_id, gender, mobile_number, password, year_id, true, "offline").subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check the Form', classes: 'rounded' });
            this.Button = "Register";
        }
    };
    NewRegistrationComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentservice.readDepartment(0).subscribe(function (response) {
            console.log(response);
            _this.departments = response;
        });
    };
    NewRegistrationComponent.prototype.getColleges = function () {
        var _this = this;
        this.collegeservice.readCollege(0).subscribe(function (response) {
            _this.colleges = response;
        });
    };
    NewRegistrationComponent.prototype.getDegrees = function () {
        var _this = this;
        this.degreeservice.readDegree(0).subscribe(function (response) {
            _this.degrees = response;
        });
    };
    NewRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-registration',
            template: __webpack_require__(/*! ./new-registration.component.html */ "./src/app/component/admin/new-registration/new-registration.component.html"),
            styles: [__webpack_require__(/*! ./new-registration.component.css */ "./src/app/component/admin/new-registration/new-registration.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_year_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"], src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_6__["DegreeService"], src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_5__["CollegeService"], src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"], src_app_services_userregistration_userregistration_service__WEBPACK_IMPORTED_MODULE_3__["UserregistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NewRegistrationComponent);
    return NewRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/participantstatus/participantstatus.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/component/admin/participantstatus/participantstatus.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9wYXJ0aWNpcGFudHN0YXR1cy9wYXJ0aWNpcGFudHN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/admin/participantstatus/participantstatus.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/component/admin/participantstatus/participantstatus.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n\t<div class=\"content-wrapper\">\r\n\t\t<div class=\"content-wrapper-before\"></div>\r\n\t\t<div class=\"content-header row\">\r\n\t\t\t<div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n\t\t\t\t<h3 class=\"content-header-title\">Manage Participation Status</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"content-header-right col-md-8 col-12\">\r\n\t\t\t\t<div class=\"breadcrumbs-top float-md-right\">\r\n\t\t\t\t\t<div class=\"breadcrumb-wrapper mr-1\">\r\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Participation Status\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"content-body\">\r\n\t\t\t<section id=\"content-types\">\r\n\t\t\t\t<div class=\"row match-height justify-content-md-center\">\r\n\t\t\t\t\t<div class=\"col-xl-6 col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Participation Status</h4>\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-subtitle text-muted\">Add Participation Status</h6>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<form class=\"form\" [formGroup]=\"ParticipationStatusForm\" (ngSubmit)=onSubmit(ParticipationStatusForm)>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"_id\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\"\r\n\t\t\t\t\t\t\t\t\t\t\t [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.name.errors.required\">Participation Status Name is required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Score\" value=\"0\" formControlName=\"score\" required\r\n\t\t\t\t\t\t\t\t\t\t\t pattern=\"[0-9 ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.score.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-action left row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Participation Status Tables</h4>\r\n\t\t\t\t\t\t\t<a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n\t\t\t\t\t\t\t<div class=\"heading-elements\">\r\n\t\t\t\t\t\t\t\t<ul class=\"list-inline mb-0\">\r\n\t\t\t\t\t\t\t\t\t<li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n\t\t\t\t\t\t\t\t\t<li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n\t\t\t\t\t\t\t\t\t<li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-content collapse show\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\tSearch : <input [(ngModel)]=\"searchText\" placeholder=\"Search Categories\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\" style=\"margin-top:5px; margin-bottom:10px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp;Page {{currentPage}} &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Sl. No</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Participation Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Score</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Update</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Delete</th>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let Participation of participantStatus | searchfilter : searchText; let i = index;\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{i+1}}</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{Participation.name}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{Participation.score}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"updateParticipantStatus(Participation._id,Participation.name,Participation.score)\"> <i class=\"la la-pencil la-2x\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteParticipantStatus(Participation._id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a> <i class=\"la la-trash la-2x\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/admin/participantstatus/participantstatus.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/admin/participantstatus/participantstatus.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ParticipantstatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantstatusComponent", function() { return ParticipantstatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_participationstatus_participationstatus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/participationstatus/participationstatus.service */ "./src/app/services/participationstatus/participationstatus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantstatusComponent = /** @class */ (function () {
    function ParticipantstatusComponent(participantservice, authService, formBuilder) {
        this.participantservice = participantservice;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    ParticipantstatusComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.currentPage = 1;
        this.createForm();
        this.getParticipantStatus(this.currentPage);
    };
    ParticipantstatusComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getParticipantStatus(this.currentPage);
    };
    ParticipantstatusComponent.prototype.previousPage = function () {
        if (this.currentPage == 1) {
        }
        else {
            this.currentPage = this.currentPage - 1;
            this.getParticipantStatus(this.currentPage);
        }
    };
    Object.defineProperty(ParticipantstatusComponent.prototype, "f", {
        get: function () { return this.ParticipationStatusForm.controls; },
        enumerable: true,
        configurable: true
    });
    ParticipantstatusComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.participantservice.createParticipationStatus(this.ParticipationStatusForm.get('name').value, this.ParticipationStatusForm.get('score').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getParticipantStatus(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getParticipantStatus(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
            else {
                this.participantservice.updateParticipationStatus(form.value._id, form.value.name, form.value.score).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getParticipantStatus(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getParticipantStatus(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    ParticipantstatusComponent.prototype.createForm = function () {
        this.submitted = false;
        this.ParticipationStatusForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            score: ['0']
        });
        this.Button = 'Create';
    };
    ParticipantstatusComponent.prototype.getParticipantStatus = function (page) {
        var _this = this;
        this.participantservice.readParticipationStatus(page).subscribe(function (response) {
            if (response.docs.length == 0) {
                _this.currentPage -= 1;
            }
            else {
                _this.participantStatus = response.docs;
            }
        });
    };
    ParticipantstatusComponent.prototype.deleteParticipantStatus = function (id) {
        var _this = this;
        this.participantservice.deleteParticipationStatus(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getParticipantStatus(_this.currentPage);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getParticipantStatus(_this.currentPage);
                _this.createForm();
            }
        });
    };
    ParticipantstatusComponent.prototype.updateParticipantStatus = function (id, name, score) {
        this.Button = 'Update';
        this.ParticipationStatusForm.setValue({
            _id: id,
            name: name,
            score: score
        });
    };
    ParticipantstatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-participantstatus',
            template: __webpack_require__(/*! ./participantstatus.component.html */ "./src/app/component/admin/participantstatus/participantstatus.component.html"),
            styles: [__webpack_require__(/*! ./participantstatus.component.css */ "./src/app/component/admin/participantstatus/participantstatus.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_participationstatus_participationstatus_service__WEBPACK_IMPORTED_MODULE_3__["ParticipationstatusService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ParticipantstatusComponent);
    return ParticipantstatusComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/registration/registration.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/admin/registration/registration.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/admin/registration/registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/admin/registration/registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n        <h3 class=\"content-header-title\">Users</h3>\r\n      </div>\r\n      <div class=\"content-header-right col-md-8 col-12\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">Users\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n<!-- Modal \r\n<div class=\"modal fade\" id=\"participantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"participantModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"participantModalLabel\">Participant Details</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Name : {{selectedParticipant.name}} <br />\r\n        College: {{selectedParticipant.college_id | resolvecollege}} <br />\r\n        Gender : {{selectedParticipant.gender}} <br />\r\n        Year : {{selectedParticipant.year}} <br />\r\n        Degree : {{selectedDegree}} <br />\r\n        Department : {{selectedDepartment}} <br />\r\n        Mobile Number : {{selectedParticipant.mobile_number}} <br />\r\n        EMail ID : {{selectedParticipant.email_id}} <br />\r\n        Activated : {{selectedParticipant.activated}} <br />\r\n        Confirmed : {{selectedParticipant.confirmed}}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"confirmPayment()\">Confirm Payment</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"unfreezeEvents()\">Unfreeze Events</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n    <div class=\"content-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Participants</h4>\r\n              <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n              <div class=\"heading-elements\">\r\n                <ul class=\"list-inline mb-0\">\r\n                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\r\n                  <li><a data-action=\"reload\" (click)=\"reload()\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content collapse show\">\r\n              <div class=\"card-body\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                      <input [(ngModel)]=\"searchText\" placeholder=\"Search Participants\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                      <span class=\"fonticon-wrap success\">\r\n                        <a (click)=\"loadFull()\">\r\n                          <i class=\"la la-search la-2x\"></i>\r\n                        </a>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"col-4 \">\r\n                      <div class=\"right\">\r\n                        <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp; Page {{currentPage}}\r\n                        &nbsp;\r\n                        <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <br />\r\n                  College\r\n                  <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                      <select class=\"custom-select\" placeholder=\"College\" [(ngModel)]=\"selectedCollegeId\" id=\"slctCollege\">\r\n                        <option value=\"Disabled\" disabled>College</option>\r\n                        <option *ngFor=\"let college of colleges\" value={{college._id}}>{{college.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                      <select class=\"custom-select\" [(ngModel)]=\"selectedGender\" id=\"slctGender\">\r\n                        <option value=\"Disabled\" disabled>Gender</option>\r\n                        <option value=\"Male\">Male</option>\r\n                        <option value=\"Female\">Female</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                      <input type=\"button\" class=\"btn btn-success\" (click)=\"filter()\" value=\"Filter\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br />\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Sl. No</th>\r\n                        <th>Name</th>\r\n                        <th>College</th>\r\n                        <th>Email</th>\r\n                        <th>MobileNumber</th>\r\n                        <th>Delete</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let participant of participants | searchfilter : searchText ; let i = index;\">\r\n                        <th scope=\"row\">{{i+1}}</th>\r\n                      \r\n                        <td>{{participant.name}}</td>\r\n                        <td>{{participant.college_id | resolvecollege}} </td>\r\n                        <td>{{participant.email_id}}</td>\r\n                        <td>{{participant.mobile_number}}</td>\r\n                        <!--<td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-info\" data-toggle=\"modal\" data-target=\"#participantModal\" (click)=\"moreInfo(participant._id)\">\r\n                            <a> <i class=\"la la-info-circle la-2x\"></i></a>\r\n                          </div>\r\n                        </td>-->\r\n                        <td>\r\n                          <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteParticipant(participant._id)\">\r\n                              <a> <i class=\"la la-trash la-2x\"></i></a>\r\n                          </div>\r\n                      </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/admin/registration/registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/admin/registration/registration.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/college/college.service */ "./src/app/services/college/college.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/degree/degree.service */ "./src/app/services/degree/degree.service.ts");
/* harmony import */ var src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/department/department.service */ "./src/app/services/department/department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(collegeService, userService, degreeService, departmentService) {
        this.collegeService = collegeService;
        this.userService = userService;
        this.degreeService = degreeService;
        this.departmentService = departmentService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.currentPage = 1;
        this.getParticipants(1);
        this.getColleges();
        this.selectedGender = "Male";
        this.selectedParticipant = {
            name: '',
            college_id: '',
            department_id: '',
            degree_id: '',
            gender: '',
            mobile_number: '',
            email_id: '',
            activated: false,
            confirmed: false
        };
    };
    RegistrationComponent.prototype.getSelectedDepartment = function () {
        var _this = this;
        this.departmentService.readDepartment(0).subscribe(function (response) {
            var dept = response;
            dept = dept.filter(function (it) {
                return it._id == _this.selectedParticipant.department_id;
            });
            _this.selectedDepartment = dept[0].name;
        });
    };
    RegistrationComponent.prototype.getSelectedDegree = function () {
        var _this = this;
        this.degreeService.readDegree(0).subscribe(function (response) {
            var degree = response;
            degree = degree.filter(function (it) {
                return it._id == _this.selectedParticipant.degree_id;
            });
            _this.selectedDegree = degree[0].name;
        });
    };
    RegistrationComponent.prototype.getColleges = function () {
        var _this = this;
        this.collegeService.readCollege(0).subscribe(function (response) {
            _this.colleges = response;
        });
    };
    RegistrationComponent.prototype.getAllParticipants = function () {
        var _this = this;
        this.userService.getAllParticipants().subscribe(function (response) {
            _this.participants = response;
        });
    };
    RegistrationComponent.prototype.reload = function () {
        this.searchText = '';
        this.getParticipants(1);
    };
    RegistrationComponent.prototype.loadFull = function () {
        this.getAllParticipants();
    };
    // filter() {
    //   this.loadAllParticipants().((response: any)=>{
    //   })
    // }
    RegistrationComponent.prototype.confirmPayment = function () {
        this.userService.confirmPayment(this.selectedParticipant._id).subscribe(function (response) {
            M.toast({ html: response.msg, classes: 'roundeds' });
        });
    };
    RegistrationComponent.prototype.moreInfo = function (_id) {
        var _this = this;
        this.userService.getParticipant(_id).subscribe(function (response) {
            _this.selectedParticipant = response;
            _this.getSelectedDepartment();
            _this.getSelectedDegree();
        });
    };
    RegistrationComponent.prototype.getParticipants = function (page) {
        var _this = this;
        this.userService.getParticpants(page).subscribe(function (response) {
            if (response.docs.length == 0) {
                _this.currentPage -= 1;
                _this.participants = [];
            }
            else {
                _this.participants = [];
                _this.participants = response.docs;
            }
        });
    };
    RegistrationComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getParticipants(this.currentPage);
    };
    RegistrationComponent.prototype.previousPage = function () {
        if (this.currentPage == 1) {
        }
        else {
            this.currentPage = this.currentPage - 1;
            this.getParticipants(this.currentPage);
        }
    };
    RegistrationComponent.prototype.deleteParticipant = function (id) {
        var _this = this;
        console.log('helo');
        this.userService.deleteUser(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getParticipants(_this.currentPage);
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getParticipants(_this.currentPage);
            }
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/component/admin/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/component/admin/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_1__["CollegeService"], src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_3__["DegreeService"], src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/role/role.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/admin/role/role.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/admin/role/role.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/admin/role/role.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n      <div class=\"content-wrapper-before\"></div>\n      <div class=\"content-header row\">\n          <div class=\"content-header-left col-md-4 col-12 mb-2\">\n              <h3 class=\"content-header-title\">Manage Role</h3>\n          </div>\n          <div class=\"content-header-right col-md-8 col-12\">\n              <div class=\"breadcrumbs-top float-md-right\">\n                  <div class=\"breadcrumb-wrapper mr-1\">\n                      <ol class=\"breadcrumb\">\n                          <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\n                          </li>\n                          <li class=\"breadcrumb-item active\">Role\n                          </li>\n                      </ol>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"content-body\">\n          <section id=\"content-types\">\n              <div class=\"row match-height justify-content-md-center\">\n                  <div class=\"col-xl-6 col-md-12\">\n                      <div class=\"card\">\n                          <div class=\"card-content\">\n                              <div class=\"card-body\">\n                                  <h4 class=\"card-title\">Role</h4>\n                                  <h6 class=\"card-subtitle text-muted\">Add Role</h6>\n                              </div>\n                              <div class=\"card-body\">\n                                  <form class=\"form\" [formGroup]=\"roleForm\" (ngSubmit)=onSubmit(roleForm)>\n                                      <input type=\"hidden\" formControlName=\"_id\">\n                                      <div class=\"form-group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Role Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\n                                          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                             <div *ngIf=\"f.name.errors.required\">Role Name is required</div>\n                                             <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\n                                         </div>\n                                     </div>\n                                      <div class=\"form-action left row\">\n                                          <div class=\"col\">\n                                              <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\n                                          </div>\n                                          <div class=\"col\">\n                                              <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\n                                          </div>\n                                      </div>\n                                  </form>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n          <div class=\"row\">\n              <div class=\"col-12\">\n                  <div class=\"card\">\n                      <div class=\"card-header\">\n                          <h4 class=\"card-title\">Roles</h4>\n                          <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\n                          <div class=\"heading-elements\">\n                              <ul class=\"list-inline mb-0\">\n                                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\n                                  <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                              </ul>\n                          </div>\n                      </div>\n                      <div class=\"card-content collapse show\">\n                          <div class=\"card-body\">\n                                  <input [(ngModel)]=\"searchText\" placeholder=\"Search Roles\" class=\"form-control\">\n                                  <div class = \"row\">\n                                          <div class=\"col-6\">\n                                          </div>\n                                          <div class=\"col-6\" style=\"margin-top:5px; margin-bottom:10px;\">\n                                            <div class=\"right\">\n                                                <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp; Page {{currentPage}} &nbsp;  \n                                                <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\n                                            </div>\n                                          </div>\n                                        </div>\n                              <div class=\"table-responsive\">\n                                  <table class=\"table\">\n                                      <thead>\n                                          <tr>\n                                              <th>Sl. No</th>\n                                              <th>Role Name</th>\n                                              <th>Update</th>\n                                              <th>Delete</th>\n                                          </tr>\n                                      </thead>\n                                      <tbody>\n                                          <tr *ngFor=\"let role of roles | searchfilter : searchText ; let i = index;\">\n\n                                              <th scope=\"row\">{{i+1}}</th>\n                                              <td>{{role.name}}</td>\n                                              <td>\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\n                                                      <a (click)=\"updateRole(role._id,role.name)\"> <i class=\"la la-pencil la-2x\"></i></a>\n                                                  </div>\n                                              </td>\n                                              <td>\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteRole(role._id)\">\n                                                      <a> <i class=\"la la-trash la-2x\"></i></a>\n                                                  </div>\n                                              </td>\n                                          </tr>\n                                      </tbody>\n                                  </table>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/admin/role/role.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/admin/role/role.component.ts ***!
  \********************************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/role/role.service */ "./src/app/services/role/role.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleComponent = /** @class */ (function () {
    function RoleComponent(roleService, authService, formBuilder) {
        this.roleService = roleService;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.currentPage = 1;
        this.createForm();
        this.getRoles(this.currentPage);
    };
    RoleComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getRoles(this.currentPage);
    };
    RoleComponent.prototype.previousPage = function () {
        if (this.currentPage == 1) {
        }
        else {
            this.currentPage = this.currentPage - 1;
            this.getRoles(this.currentPage);
        }
    };
    Object.defineProperty(RoleComponent.prototype, "f", {
        get: function () { return this.roleForm.controls; },
        enumerable: true,
        configurable: true
    });
    RoleComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.roleService.createRole(this.roleForm.get('name').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getRoles(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getRoles(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
            else {
                this.roleService.updateRole(form.value._id, form.value.name).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getRoles(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getRoles(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    RoleComponent.prototype.createForm = function () {
        this.submitted = false;
        this.roleForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    RoleComponent.prototype.getRoles = function (page) {
        var _this = this;
        this.roleService.readRole(page).subscribe(function (response) {
            _this.roles = response.docs;
        });
    };
    RoleComponent.prototype.deleteRole = function (id) {
        var _this = this;
        this.roleService.deleteRole(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getRoles(_this.currentPage);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getRoles(_this.currentPage);
                _this.createForm();
            }
        });
    };
    RoleComponent.prototype.updateRole = function (id, name) {
        this.Button = 'Update';
        this.roleForm.setValue({
            _id: id,
            name: name
        });
    };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/component/admin/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/component/admin/role/role.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_role_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/year/year.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/admin/year/year.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi95ZWFyL3llYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/admin/year/year.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/admin/year/year.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n      <div class=\"content-wrapper-before\"></div>\n      <div class=\"content-header row\">\n          <div class=\"content-header-left col-md-4 col-12 mb-2\">\n              <h3 class=\"content-header-title\">Manage Year</h3>\n          </div>\n          <div class=\"content-header-right col-md-8 col-12\">\n              <div class=\"breadcrumbs-top float-md-right\">\n                  <div class=\"breadcrumb-wrapper mr-1\">\n                      <ol class=\"breadcrumb\">\n                          <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\n                          </li>\n                          <li class=\"breadcrumb-item active\">Year\n                          </li>\n                      </ol>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"content-body\">\n          <section id=\"content-types\">\n              <div class=\"row match-height justify-content-md-center\">\n                  <div class=\"col-xl-6 col-md-12\">\n                      <div class=\"card\">\n                          <div class=\"card-content\">\n                              <div class=\"card-body\">\n                                  <h4 class=\"card-title\">Year</h4>\n                                  <h6 class=\"card-subtitle text-muted\">Add Year</h6>\n                              </div>\n                              <div class=\"card-body\">\n                                  <form class=\"form\" [formGroup]=\"yearForm\" (ngSubmit)=onSubmit(yearForm)>\n                                      <input type=\"hidden\" formControlName=\"_id\">\n                                      <div class=\"form-group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Year Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\n                                          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                             <div *ngIf=\"f.name.errors.required\">Year Name is required</div>\n                                             <div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\n                                         </div>\n                                     </div>\n                                      <div class=\"form-action left row\">\n                                          <div class=\"col\">\n                                              <span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\n                                          </div>\n                                          <div class=\"col\">\n                                              <button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\n                                          </div>\n                                      </div>\n                                  </form>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n          <div class=\"row\">\n              <div class=\"col-12\">\n                  <div class=\"card\">\n                      <div class=\"card-header\">\n                          <h4 class=\"card-title\">Year Tables</h4>\n                          <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\n                          <div class=\"heading-elements\">\n                              <ul class=\"list-inline mb-0\">\n                                  <li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\n                                  <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                                  <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                              </ul>\n                          </div>\n                      </div>\n                      <div class=\"card-content collapse show\">\n                          <div class=\"card-body\">\n                          Search : <input [(ngModel)]=\"searchText\" placeholder=\"Search Categories\" class=\"form-control\">\n                          <div class = \"row\">\n                                  <div class=\"col-6\">\n                                  </div>\n                                  <div class=\"col-6\" style=\"margin-top:5px; margin-bottom:10px;\">\n                                    <div class=\"right\">\n                                        <span class=\"btn btn-info\" (click)=\"previousPage()\"> &lt; </span> &nbsp;Page {{currentPage}} &nbsp;  \n                                        <span class=\"btn btn-info\" (click)=\"nextPage()\"> &gt; </span>\n                                    </div>\n                                  </div>\n                                </div>\n                              <div class=\"table-responsive\">\n                                  <table class=\"table\">\n                                      <thead>\n                                          <tr>\n                                              <th>Sl. No</th>\n                                              <th>Year Name</th>\n                                              <th>Update</th>\n                                              <th>Delete</th>\n                                          </tr>\n                                      </thead>\n                                      <tbody>\n                                          <tr *ngFor=\"let year of years | searchfilter : searchText; let i = index;\">\n\n                                              <th scope=\"row\">{{i+1}}</th>\n                                              <td>{{year.name}}</td>\n                                              <td>\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-warning\">\n                                                      <a (click)=\"updateDegree(year._id,year.name)\"> <i class=\"la la-pencil la-2x\"></i></a>\n                                                  </div>\n                                              </td>\n                                              <td>\n                                                  <div class=\"fonticon-wrap icon-shadow icon-shadow-danger\" (click)=\"deleteDegree(year._id)\">\n                                                      <a> <i class=\"la la-trash la-2x\"></i></a>\n                                                  </div>\n                                              </td>\n                                          </tr>\n                                      </tbody>\n                                  </table>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/admin/year/year.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/admin/year/year.component.ts ***!
  \********************************************************/
/*! exports provided: YearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearComponent", function() { return YearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_year_year_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/year/year.service */ "./src/app/services/year/year.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YearComponent = /** @class */ (function () {
    function YearComponent(yearService, authService, formBuilder) {
        this.yearService = yearService;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    YearComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.currentPage = 1;
        this.createForm();
        this.getYears(this.currentPage);
    };
    YearComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getYears(this.currentPage);
    };
    YearComponent.prototype.previousPage = function () {
        if (this.currentPage == 1) {
        }
        else {
            this.currentPage = this.currentPage - 1;
            this.getYears(this.currentPage);
        }
    };
    Object.defineProperty(YearComponent.prototype, "f", {
        get: function () { return this.yearForm.controls; },
        enumerable: true,
        configurable: true
    });
    YearComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (form.value._id === '') {
                this.yearService.createYear(this.yearForm.get('name').value).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getYears(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getYears(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
            else {
                this.yearService.updateYear(form.value._id, form.value.name).subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getYears(_this.currentPage);
                        _this.createForm();
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.getYears(_this.currentPage);
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check The Form', classes: 'roundeds' });
        }
    };
    YearComponent.prototype.createForm = function () {
        this.submitted = false;
        this.yearForm = this.formBuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.Button = 'Create';
    };
    YearComponent.prototype.getYears = function (page) {
        var _this = this;
        this.yearService.readYear(page).subscribe(function (response) {
            _this.years = response.docs;
        });
    };
    YearComponent.prototype.deleteYear = function (id) {
        var _this = this;
        this.yearService.deleteYear(id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getYears(_this.currentPage);
                _this.createForm();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getYears(_this.currentPage);
                _this.createForm();
            }
        });
    };
    YearComponent.prototype.updateYear = function (id, name) {
        this.Button = 'Update';
        this.yearForm.setValue({
            _id: id,
            name: name
        });
    };
    YearComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-year',
            template: __webpack_require__(/*! ./year.component.html */ "./src/app/component/admin/year/year.component.html"),
            styles: [__webpack_require__(/*! ./year.component.css */ "./src/app/component/admin/year/year.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_year_year_service__WEBPACK_IMPORTED_MODULE_2__["YearService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], YearComponent);
    return YearComponent;
}());



/***/ }),

/***/ "./src/app/component/user/about/about.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/user/about/about.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/user/about/about.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/user/about/about.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-wrapper-before\"></div>\n    <div class=\"content-header row\">\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\n        <h3 class=\"content-header-title\">About</h3>\n      </div>\n      <div class=\"content-header-right col-md-8 col-12\">\n        <div class=\"breadcrumbs-top float-md-right\">\n          <div class=\"breadcrumb-wrapper mr-1\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\"\n                  [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n              </li>\n              <li class=\"breadcrumb-item active\">About\n              </li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-body\">\n      <section id=\"content-types\">\n        <div class=\"row match-height justify-content-md-center\">\n          <div class=\"col-12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <div class=\"card-body\">\n                  <h3 class=\"card-title text-center text-uppercase\">About Us</h3>\n                  <div class=\"divider\"></div>\n                </div>\n                <div class=\"card-body text-center lineheight3\">\n                  <h1 class=\"lineheight3\"><strong>Mepco Schlenk Engineering College (Autonomous), Sivakasi</strong></h1> <h4 class=\"lineheight3\">Mepco\n                  Schlenk\n                  Engineering\n                  College\n                  (Autonomous), Sivakasi is one of the leading\n                  institutions in India, towering high in academic\n                  excellence and research pursuits\n                  ever since its\n                  inception on 1984.\n                  College is accredited with “A”\n                  Grade by National Assessment and Accreditation\n                  Council (NAAC) of UGC, New Delhi.\n                  The Institute\n                  offers under graduate programs in 7 disciplines\n                  and\n                  post\n                  graduate\n                  programs\n                  in\n                  12\n                  specializations. It has collaborations with leading\n                  Industrial, Academic and Research organizations\n                  in India and\n                  abroad.\n                  The college is ISO 9001:2008 certified\n                  and\n                  all its\n                  UG Programs\n                  are accredited by NBA\n                  under\n                  Tier I category\n                  .\n                  Our College\n                  got 5th rank at\n                  National level in Top Engineering Colleges of\n                  Eminence\n                  category\n                  in\n                  the\n                  CSR\n                  -\n                  GHRDC\n                  Engineering Colleges Survey June 2017 and 30th\n                  rank for National Level Engine\n                  ering Colleges\n                  including IITs, NITs by Outlook Survey, June 2017.\n                </h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>"

/***/ }),

/***/ "./src/app/component/user/about/about.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/user/about/about.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/component/user/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/component/user/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/component/user/acc-failure/acc-failure.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/component/user/acc-failure/acc-failure.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL2FjYy1mYWlsdXJlL2FjYy1mYWlsdXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/user/acc-failure/acc-failure.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/user/acc-failure/acc-failure.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  acc-failure works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/user/acc-failure/acc-failure.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/user/acc-failure/acc-failure.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccFailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccFailureComponent", function() { return AccFailureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccFailureComponent = /** @class */ (function () {
    function AccFailureComponent() {
    }
    AccFailureComponent.prototype.ngOnInit = function () {
    };
    AccFailureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acc-failure',
            template: __webpack_require__(/*! ./acc-failure.component.html */ "./src/app/component/user/acc-failure/acc-failure.component.html"),
            styles: [__webpack_require__(/*! ./acc-failure.component.css */ "./src/app/component/user/acc-failure/acc-failure.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccFailureComponent);
    return AccFailureComponent;
}());



/***/ }),

/***/ "./src/app/component/user/acc-success/acc-success.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/component/user/acc-success/acc-success.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL2FjYy1zdWNjZXNzL2FjYy1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/user/acc-success/acc-success.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/user/acc-success/acc-success.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  acc-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/user/acc-success/acc-success.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/user/acc-success/acc-success.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccSuccessComponent", function() { return AccSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccSuccessComponent = /** @class */ (function () {
    function AccSuccessComponent() {
    }
    AccSuccessComponent.prototype.ngOnInit = function () {
    };
    AccSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acc-success',
            template: __webpack_require__(/*! ./acc-success.component.html */ "./src/app/component/user/acc-success/acc-success.component.html"),
            styles: [__webpack_require__(/*! ./acc-success.component.css */ "./src/app/component/user/acc-success/acc-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccSuccessComponent);
    return AccSuccessComponent;
}());



/***/ }),

/***/ "./src/app/component/user/activation/activation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/component/user/activation/activation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/user/activation/activation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/user/activation/activation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_userregistration_userregistration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/userregistration/userregistration.service */ "./src/app/services/userregistration/userregistration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivationComponent = /** @class */ (function () {
    function ActivationComponent(userRegisterService, route, router) {
        this.userRegisterService = userRegisterService;
        this.route = route;
        this.router = router;
    }
    ActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.userRegisterService.activateUser(params.id, params.hash).subscribe(function (response) {
                if (response.sucess) {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                }
                else {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                }
            });
        });
    };
    ActivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activation',
            template: __webpack_require__(/*! ./activation.component.html */ "./src/app/component/user/activation/activation.component.html")
        }),
        __metadata("design:paramtypes", [src_app_services_userregistration_userregistration_service__WEBPACK_IMPORTED_MODULE_1__["UserregistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ActivationComponent);
    return ActivationComponent;
}());



/***/ }),

/***/ "./src/app/component/user/cart/cart.component.css":
/*!********************************************************!*\
  !*** ./src/app/component/user/cart/cart.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/user/cart/cart.component.html":
/*!*********************************************************!*\
  !*** ./src/app/component/user/cart/cart.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content-wrapper-before\"></div>\r\n        <div class=\"content-header row\">\r\n            <div class=\"content-header-left col-4\">\r\n                <h3 class=\"content-header-title\">Cart - Rs. {{totalAmount}}</h3>\r\n            </div>\r\n            <div class=\"content-header-right col-4\">\r\n                <div class=\"breadcrumbs-top float-md-right\">\r\n                    <div class=\"breadcrumb-wrapper mr-1\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\"> Cart\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content-header-left col-4\">\r\n                <span class=\"float-right\" *ngIf=\"workshops.length != 0 || events.length != 0\" style=\"margin:2px\">\r\n                    <ng-container *ngIf=\"!isCartConfirmed; else paymentEnable\">\r\n                        <button class=\"btn btn-bg-gradient-x-purple-red border-white border-2\" (click)=\"confirmCart()\">Confirm\r\n                            Cart</button>\r\n                    </ng-container>\r\n                    <ng-template #paymentEnable>\r\n                        <ng-container *ngIf=\"user.cart_paid; else showPayment\">\r\n                            <span class=\"white\">\r\n                                Cart Confirmed | Paid\r\n                            </span>\r\n                        </ng-container>\r\n                        <ng-template #showPayment>\r\n                            <button class=\"btn btn-bg-gradient-x-orange-yellow border-white border-2\">Pay\r\n                                Online</button>\r\n                            <button class=\"btn btn-bg-gradient-x-blue-cyan border-white border-2  float-right\"\r\n                                data-toggle=\"modal\" data-target=\"#DDModal\">Upload DD</button>\r\n                        </ng-template>\r\n\r\n                    </ng-template>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-body\">\r\n            Modal\r\n            <div class=\"modal fade\" id=\"DDModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n                aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Upload DD - Rs. {{totalAmount}}</h5>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <form>\r\n                                <input #imageInput placeholder=\"Select an Image\" type=\"file\" accept=\"image/*\" (change)=\"processFile($event)\">\r\n                            </form>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <section id=\"content-types\">\r\n                <div class=\"row match-height\">\r\n                    <div class=\"col-4\" *ngFor=\"let workshop of workshops\">\r\n                        <div class=\"card pull-up\">\r\n                            <div class=\"card-body\">\r\n                                <h3 class=\"card-title\"> Workshop - {{workshop.event_id.title}} <span class=\"card-title activator grey-text text-darken-4 float-right\"><i\r\n                                            class=\"fas fa-ellipsis-v right\"></i></span></h3>\r\n                                <h6 class=\"card-subtitle text-muted\">Department of\r\n                                    {{workshop.event_id.department_id.name}}</h6>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <span class=\"card-title grey-text text-darken-4\">Pre Requesites</span> <br />\r\n                                {{workshop.event_id.rules}}\r\n                                <hr />\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <span class=\"card-title grey-text text-darken-4\">Amount</span> <br />\r\n                                Rs. {{workshop.event_id.amount}}\r\n                                <hr />\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                Contact <p class=\"card-text\">\r\n                                    <a href=\"mailto:{{workshop.event_id.contact_email}}\">{{workshop.event_id.contact_email}}</a>\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <span [ngClass]=\"{'danger': workshop.status != 'Paid'}\">\r\n                                    {{workshop.status}}\r\n                                </span>\r\n                                <button *ngIf=\"!isCartConfirmed\" class=\"btn  btn-bg-gradient-x-red-pink float-right\"\r\n                                    (click)=\"cancelEventRegistration(event._id)\">\r\n                                    Remove from Cart\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"card-reveal\">\r\n                                <h4>Timing</h4>\r\n                                Date : {{workshop.event_id.event_date | date}}\r\n                                {{workshop.event_id.start_time}} -\r\n                                {{workshop.event_id.end_time}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row match-height\">\r\n                    <div class=\"col-4\" *ngFor=\"let event of events\">\r\n                        <div class=\"card pull-up\">\r\n                            <div class=\"card-body\">\r\n                                <h3 class=\"card-title\"> Event - {{event.event_id.title}} <span class=\"card-title activator grey-text text-darken-4 float-right\"><i\r\n                                            class=\"fas fa-ellipsis-v right\"></i></span></h3>\r\n                                <h6 class=\"card-subtitle text-muted\">Department of\r\n                                    {{event.event_id.department_id.name}}</h6>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <span class=\"card-title grey-text text-darken-4\">Rules</span> <br />\r\n                                {{event.event_id.rules | rulesTransform}}\r\n                                <hr />\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                Contact <p class=\"card-text\">\r\n                                    <a href=\"mailto:{{event.event_id.contact_email}}\">{{event.event_id.contact_email}}</a>\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <span [ngClass]=\"{'danger': event.status != 'Paid'}\">\r\n                                    {{event.status}}\r\n                                </span>\r\n                                <button *ngIf=\"!isCartConfirmed\" class=\"btn  btn-bg-gradient-x-red-pink float-right\"\r\n                                    (click)=\"cancelEventRegistration(event._id)\">\r\n                                    Remove from Cart\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"card-reveal\">\r\n                                <h4>Timing</h4><i class=\"fas fa-times float-right\"></i>\r\n                                Date : {{event.event_id.event_date | date}}\r\n                                {{event.event_id.start_time}} -\r\n                                {{event.event_id.end_time}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!--   Modal\r\n        <div class=\"modal fade\" id=\"DDModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Upload DD - Rs. {{amount}}</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form>\r\n                            <input #imageInput placeholder=\"Select an Image\" type=\"file\" accept=\"image/*\" (change)=\"processFile($event)\">\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-body\">\r\n            <section id=\"content-types\">\r\n                <div class=\"row match-height justify-content-md-center\">\r\n                    <div class=\"col-xl-6 col-md-12\">\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"card  bg-gradient-x-blue\">\r\n                        <div class=\"card-header\">\r\n                            <span class=\"card-title white h4\">\r\n                                Heres what you added to your Tech Show!\r\n                            </span>\r\n                            <span class=\"float-right\" *ngIf=\"hasWorkshops || hasEvents\" style=\"margin:2px\">\r\n                                <button *ngIf=\"!isCartConfirmed\" class=\"btn btn-bg-gradient-x-blue-green border-white border-2\"\r\n                                    (click)=\"confirmCart()\">Confirm\r\n                                    Cart</button>\r\n                            </span>\r\n                            <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n                            <div class=\"heading-elements\">\r\n                                <ul class=\"list-inline mb-0\">\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <h3 class=\"white\">Workshops</h3>\r\n                                <br />\r\n                                <ng-container *ngIf=\"!hasWorkshops; else hasWorkshop\">\r\n                                        <h5 class=\"white\">You have no workshop registrations. Register in one of our\r\n                                                workshops!!!</h5>\r\n                                </ng-container>\r\n                                <ng-template #hasWorkshop>\r\n                                        <div class=\"row\">\r\n                                                <div *ngFor=\"let workshop of workshops\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"card pull-up\">\r\n                                                            <div class=\"card-header\">\r\n                                                                <div class=\"h4\">{{workshop.event_id.title}}</div>\r\n                                                            </div>\r\n                                                            <div class=\"card-body\">\r\n                                                                <h5 class=\"card-title\">What you need to know</h5>\r\n                                                                <div class=\"row\">\r\n                                                                    <div class=\"col-6\">\r\n                                                                        Date : {{workshop.event_id.event_date}}\r\n                                                                    </div>\r\n                                                                    <div class=\"col-6\">\r\n                                                                        Venue : {{workshop.event_id.venue}}\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"row\">\r\n                                                                    <div class=\"col\">\r\n                                                                        Contact : <a href=\"mailto://{{workshop.event_id.contact_email}}\">{{workshop.event_id.contact_email}}</a>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <span [ngClass]=\"{'danger': workshop.satus != 'Paid'}\">\r\n                                                                    {{workshop.status}}\r\n                                                                </span>\r\n                                                                <button *ngIf=\"!isCartConfirmed\" class=\"btn btn-bg-gradient-x-red-pink float-right\"\r\n                                                                    (click)=\"cancelWorkshopRegistration(workshop._id)\">\r\n                                                                    Remove from Cart\r\n                                                                </button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                </ng-template>\r\n                                    \r\n                                <h3 class=\"white\">Events</h3>\r\n\r\n                                <div *ngIf=\"!hasEvents\">\r\n                                    <h5 class=\"white\">You have no Event registrations. Register in one of our Events!!!</h5>\r\n                                </div>\r\n                                <div *ngIf=\"hasEvents\">\r\n                                    <div class=\"row\">\r\n                                        <div *ngFor=\"let event of events\">\r\n                                             <div class=\"col-12\">\r\n                                                <div class=\"card pull-up\">\r\n                                                    <h5 class=\"card-header\">{{event.event_id.title}}</h5>\r\n                                                    <div class=\"card-body\">\r\n                                                        <h5 class=\"card-title\">What you need to know</h5>\r\n\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-6\">\r\n                                                                Date : {{event.event_id.event_date}}\r\n                                                            </div>\r\n                                                            <div class=\"col-6\">\r\n                                                                Venue : {{event.event_id.venue}}\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col\">\r\n                                                                Contact : <a href=\"mailto://{{event.event_id.contact_email}}\">{{event.event_id.contact_email}}</a>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <hr />\r\n                                                        <span [ngClass]=\"{'danger': event.status != 'Paid'}\">\r\n                                                            {{event.status}}\r\n                                                        </span>\r\n                                                        <button *ngIf=\"!isCartConfirmed\" class=\"btn  btn-bg-gradient-x-red-pink float-right\"\r\n                                                            (click)=\"cancelEventRegistration(event._id)\">\r\n                                                            Remove from Cart\r\n                                                        </button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-footer border-top-blue-grey border-top-lighten-5 text-muted col-12\">\r\n                                    <div *ngIf=\"!paymentConfirmed\">\r\n                                        <div *ngIf=\"isCartConfirmed && !paymentSent\">\r\n                                            <div class=\"col-12 \">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-6\">\r\n                                                        <button class=\"btn btn-bg-gradient-x-blue-cyan border-white border-2 float-right\"\r\n                                                            (click)=payOnline()>Pay\r\n                                                            Online</button>\r\n                                                    </div>\r\n                                                    <div class=\"col-6\">\r\n                                                        <button class=\"btn btn-bg-gradient-x-blue-cyan border-white border-2  float-right\"\r\n                                                            data-toggle=\"modal\" data-target=\"#DDModal\">Pay\r\n                                                            through Demand Draft</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr />\r\n                            <span [ngClass]=\"{'danger': event.status != 'Paid'}\">\r\n                                {{event.status}}\r\n                            </span>\r\n                            <button *ngIf=\"!isCartConfirmed\" class=\"btn  btn-bg-gradient-x-red-pink float-right\"\r\n                                (click)=\"cancelEventRegistration(event._id)\">\r\n                                Remove from Cart\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n-->\r\n        <div class=\"card-footer border-top-blue-grey border-top-lighten-5 text-muted col-12\">\r\n            <div *ngIf=\"!paymentConfirmed\">\r\n                <div *ngIf=\"isCartConfirmed && !paymentSent\">\r\n                    <div class=\"col-12 \">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                    <button class=\"btn btn-bg-gradient-x-blue-cyan border-white border-2  float-right\"\r\n                                   (click)=\"payOnline()\" data-toggle=\"modal\" data-target=\"#PayOnline\">Online</button>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <button class=\"btn btn-bg-gradient-x-blue-cyan border-white border-2  float-right\"\r\n                                    data-toggle=\"modal\" data-target=\"#DDModal\">Pay\r\n                                    through Demand Draft</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <form action=\"https://test.payu.in/_payment\" id=\"frm-payment\" method=\"post\">\r\n                <input type=\"hidden\" name=\"key\" value={{appService.getKey()}}>\r\n                <input type=\"hidden\" name=\"txnid\" value={{txnId}}>\r\n                <input type=\"hidden\" name=\"amount\" value={{totalAmount+(totalAmount*appService.getTransactionFee())}}>\r\n                <input type=\"hidden\" name=\"productinfo\" value={{this.appService.getProductInfo()}}>\r\n                <input type=\"hidden\" name=\"firstname\" value={{user.name}}>\r\n                <input type=\"hidden\" name=\"email\" value={{user.email_id}}>\r\n                <input type=\"hidden\" name=\"phone\" value={{user.mobile_number}}>\r\n                <input type=\"hidden\" name=\"surl\" value=\"http://localhost:3000/payment/success\">\r\n                <input type=\"hidden\" name=\"furl\" value=\"http://localhost:3000/payment/failure\">\r\n                <input type=\"hidden\" name=\"hash\" value={{hashString}}>\r\n\r\n            </form>\r\n            <div class=\"modal fade\" id=\"PayOnline\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n                aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cart Amount - Rs. {{totalAmount+(totalAmount*appService.getTransactionFee())}}</h5>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            DO You Really Want Pay Online?\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" onclick=\"$('#frm-payment').submit()\"class=\"btn btn-secondary\">PAY</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- </div> -->"

/***/ }),

/***/ "./src/app/component/user/cart/cart.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/user/cart/cart.component.ts ***!
  \*******************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/eventRegistration/event-registration.service */ "./src/app/services/eventRegistration/event-registration.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartComponent = /** @class */ (function () {
    function CartComponent(eventRegistrationService, userService, paymentService, appService) {
        this.eventRegistrationService = eventRegistrationService;
        this.userService = userService;
        this.paymentService = paymentService;
        this.appService = appService;
        this.workshops = [];
        this.events = [];
        this.isCartConfirmed = false;
        this.submitted = false;
        var hash = this.hashData.bind(this);
        var transaction = this.genTxnId.bind(this);
        hash(false);
        transaction(false);
    }
    CartComponent.prototype.ngOnInit = function () {
        this.count = 0;
        this.currentUserId = '';
        this.totalAmount = 0;
        this.user = (JSON.parse(localStorage.getItem('user')));
        if (this.user != null) {
            this.currentUserId = this.user.id;
        }
        var data = this.getUserWorkshops.bind(this);
        data(this.currentUserId);
        this.getUserWorkshops(this.user.id);
        this.getUserEvents(this.user.id);
        this.checkCartConfirmation();
    };
    CartComponent.prototype.checkCartConfirmation = function () {
        var _this = this;
        this.userService.isCartConfirmed(this.user.id).subscribe(function (response) {
            _this.isCartConfirmed = response.isCartConfirmed;
        });
    };
    CartComponent.prototype.getUserWorkshops = function (user_id) {
        var _this = this;
        this.eventRegistrationService.getUserWorkshops(user_id).subscribe(function (res) {
            if (res) {
                _this.workshops = res.msg;
                _this.calculateAmount();
            }
        });
    };
    CartComponent.prototype.calculateAmount = function () {
        var _this = this;
        this.totalAmount = 0;
        if (this.events.length != 0) {
            this.totalAmount += 200;
        }
        if (this.workshops.length != 0) {
            this.workshops.forEach(function (workshop) {
                _this.totalAmount += workshop.event_id.amount;
            });
        }
    };
    CartComponent.prototype.removeRegistration = function (registration_id) {
        this.eventRegistrationService.cancelEventRegistration(registration_id).subscribe(function (response) {
        });
    };
    CartComponent.prototype.getUserEvents = function (user_id) {
        var _this = this;
        this.eventRegistrationService.getUserEvents(user_id).subscribe(function (res) {
            if (res) {
                _this.events = res.msg;
                _this.calculateAmount();
            }
        });
    };
    CartComponent.prototype.confirmCart = function () {
        var _this = this;
        this.userService.confirmCart(this.user.id).subscribe(function (response) {
            if (response.error == true) {
                M.toast({ html: response.msg, classes: 'roundeds' });
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.isCartConfirmed = true;
                _this.getUserEvents(_this.user.id);
                _this.getUserWorkshops(_this.user.id);
                _this.calculateAmount();
                _this.userService.isCartConfirmed(_this.user.id).subscribe(function (response) {
                    if (!response.error) {
                        _this.isCartConfirmed = response.isCartConfirmed;
                    }
                });
            }
        });
    };
    CartComponent.prototype.payOnline = function () {
        this.genTxnId(true);
        this.hashData(true);
        //this.finished();
        console.log("Pay " + this.txnId);
        console.log("HASH " + this.hashString);
    };
    CartComponent.prototype.genTxnId = function (value) {
        if (value) {
            this.txnId = '';
            var d = new Date();
            this.txnId = JSON.parse(localStorage.getItem('user')).gmID + '_' + this.reverseString(d.getTime().toString());
            this.txnId = this.txnId.substr(0, 25);
        }
        // console.log("In Gen TXN"+this.txnId);
        //return this.txnId;
    };
    CartComponent.prototype.reverseString = function (str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    };
    CartComponent.prototype.hashData = function (value) {
        var _this = this;
        if (value) {
            var tamount = this.totalAmount + (this.totalAmount * this.appService.getTransactionFee());
            var body = {
                key: this.appService.getKey(),
                salt: this.appService.getSalt(),
                amount: tamount,
                txnId: this.txnId,
                productInfo: this.appService.getProductInfo(),
                name: JSON.parse(localStorage.getItem('user')).name,
                email: JSON.parse(localStorage.getItem('user')).email_id,
                mobile_number: JSON.parse(localStorage.getItem('user')).mobile_number,
            };
            console.log("In Traxn HashData" + this.txnId);
            this.paymentService.genHash(body).subscribe(function (response) {
                if (response.error) {
                    console.log('ehello');
                    _this.hashString = response.hash;
                }
                console.log(_this.hashString);
            });
        }
    };
    CartComponent.prototype.finsish = function () {
    };
    // workshops: Array<any>;
    // events: Array<any>;
    // user_id: string;
    // user_name: string;
    // user_email: string;
    // user_gmID: string;
    // user_mobile_number: number;
    // hasWorkshops: boolean;
    // hasEvents: boolean;
    // amount: number;
    // isCartConfirmed: boolean = false;
    // paymentSent: boolean = false;
    // paymentConfirmed: boolean = false;
    // txnId: string;
    // data: Array<any>;
    // paymentForm: FormGroup;
    // constructor(private eventRegistrationService: EventRegistrationService,
    //   private appService: AppService, private http: HttpClient,
    //   private paymentService: PaymentService,
    //   private userService: UserService,
    //   private formBuilder: FormBuilder) {
    //   this.workshops = []
    //   this.events = []
    //   this.data = [];
    //   this.hasWorkshops = false;
    //   this.hasEvents = false;
    //   this.amount = 0;
    // }
    // ngOnInit() {
    //   this.calculateAmount();
    //   this.getWorkshops();
    //   this.getEvents();
    //   // this.userService.isCartConfirmed(this.user_id).subscribe((response: any) => {
    //   //   if (!response.error) {
    //   //     this.isCartConfirmed = response.isCartConfirmed;
    //   //   }
    //   // });
    //   this.user_id = JSON.parse(localStorage.getItem('user')).id;
    //   this.user_name = JSON.parse(localStorage.getItem('user')).name;
    //   this.user_email = JSON.parse(localStorage.getItem('user')).email_id;
    //   this.user_mobile_number = JSON.parse(localStorage.getItem('user')).mobile_number;
    //   this.user_gmID = JSON.parse(localStorage.getItem('user')).gmID;
    //   this.hashData(this.amount);
    //   console.log(this.amount);
    //   //console.log(this.data);
    // }
    // confirmCart() {
    //   this.userService.confirmCart(this.user_id).subscribe((response: any) => {
    //     if (response.error == true) {
    //       M.toast({ html: response.msg, classes: 'roundeds' });
    //     }
    //     else {
    //       M.toast({ html: response.msg, classes: 'roundeds' });
    //       this.getWorkshops();
    //       this.calculateAmount();
    //       this.userService.isCartConfirmed(this.user_id).subscribe((response: any) => {
    //         if (!response.error) {
    //           this.isCartConfirmed = response.isCartConfirmed;
    //         }
    //       })
    //     }
    //   })
    // }
    // cancelWorkshopRegistration(_id: string) {
    //   this.eventRegistrationService.cancelWorkshopRegistration(_id).subscribe((response: any) => {
    //     if (response.error == true) {
    //       M.toast({ html: response.msg, classes: 'roundeds' });
    //     }
    //     else {
    //       M.toast({ html: response.msg, classes: 'roundeds' });
    //       this.getWorkshops();
    //       this.calculateAmount();
    //     }
    //   })
    // }
    // cancelEventRegistration(_id: string) {
    //   this.eventRegistrationService.cancelEventRegistration(_id).subscribe((response: any) => {
    //     if (response.error == true) {
    //       M.toast({ html: response.msg, classes: 'roundeds' });
    //     }
    //     else {
    //       M.toast({ html: response.msg, classes: 'roundeds' });
    //       this.getEvents();
    //       //this.calculateAmount();
    //     }
    //   })
    // }
    // getWorkshops() {
    //   // this.eventRegistrationService.getWorkshops(this.user_id).subscribe((response: any) => {
    //   //   if (response.error == true) {
    //   //     M.toast({ html: response.msg, classes: 'roundeds danger' });
    //   //   }
    //   //   else {
    //   //     this.workshops = response;
    //   //     console.log(this.workshops);
    //   //     // this.calculateAmount();
    //   //     // if (this.workshops.length == 0) {
    //   //     //   this.hasWorkshops = false;
    //   //     // }
    //   //     // else {
    //   //     //   this.hasWorkshops = true;
    //   //       // if (this.workshops[0].status == 'Verifying Payment') {
    //   //       //   this.paymentSent = true;
    //   //       // }
    //   //       // else {
    //   //       //   this.paymentSent = false;
    //   //       // }
    //   //       // if (this.workshops[0].status == 'Paid') {
    //   //       //   this.paymentConfirmed = true;
    //   //       // } else {
    //   //       //   this.paymentConfirmed = false;
    //   //       // }
    //   //     // }
    //   //   }
    //   // })
    // }
    // getEvents() {
    //   // this.eventRegistrationService.getEventRegistrations(this.user_id).subscribe((response: any) => {
    //   //   if (response.error == true) {
    //   //     M.toast({ html: response.msg, classes: 'roundeds danger' });
    //   //   }
    //   //   else {
    //   //     this.events = response;
    //   //     console.log("Events"+this.events);
    //   //     //this.calculateAmount()
    //   //     //   if (this.events.length == 0) {
    //   //     //     this.hasEvents = false;
    //   //     //   }
    //   //     //   else {
    //   //     //     this.hasEvents = true;
    //   //     //   }
    //   //     //   if (this.events[0].status == 'Paid') {
    //   //     //     this.paymentConfirmed = true;
    //   //     //   } else {
    //   //     //     this.paymentConfirmed = false;
    //   //     //   }
    //   //      }
    //   //   });
    // }
    // // processFile(hadEvent:any) {
    // //   let fileList: FileList = hadEvent.target.files;
    // //   if (fileList.length > 0) {
    // //     let file: File = fileList[0];
    // //     let formData: FormData = new FormData();
    // //     formData.append('uploadFile', file, file.name);
    // //     formData.append('id', this.user_id);
    // //     this.userService.uploadCartDDImage(formData).subscribe((response: any) => {
    // //       if (response.error == true) {
    // //         M.toast({ html: response.msg, classes: 'roundeds danger' });
    // //       }
    // //       else {
    // //         M.toast({ html: response.msg, classes: 'roundeds' });
    // //         this.getEvents();
    // //         this.getWorkshops();
    // //       }
    // //     })
    // //   }
    // // }
    // calculateAmount() {
    //   this.workshops.forEach(workshop => {
    //     this.amount += workshop.event_id.amount;
    //   });
    //   if (this.events.length != 0) {
    //     this.amount += 200;
    //   }
    // }
    //
    // hashData(amount: any) {
    //   var body = {
    //     key: this.appService.getKey(),
    //     salt: this.appService.getSalt(),
    //     totalAmount: amount + (amount * this.appService.getTransactionFee()),
    //     txnId: this.genTxnId(),
    //     productInfo: this.appService.getProductInfo(),
    //     name: JSON.parse(localStorage.getItem('user')).name,
    //     email: JSON.parse(localStorage.getItem('user')).email_id,
    //     mobile_number: JSON.parse(localStorage.getItem('user')).mobile_number,
    //     gmId: JSON.parse(localStorage.getItem('user')).gmID,
    //   }
    //   console.log(this.amount);
    //   this.paymentService.genHash(body).subscribe((response: any) => {
    //     this.data.push(response.hash);
    //     //console.log(hashdata);
    //   });
    // }
    // reverseString(str: String) {
    //   // Step 1. Use the split() method to return a new array
    //   var splitString = str.split(""); // var splitString = "hello".split("");
    //   // ["h", "e", "l", "l", "o"]
    //   // Step 2. Use the reverse() method to reverse the new created array
    //   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    //   // ["o", "l", "l", "e", "h"]
    //   // Step 3. Use the join() method to join all elements of the array into a string
    //   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    //   // "olleh"
    CartComponent.prototype.processFile = function (hadEvent) {
        var _this = this;
        var fileList = hadEvent.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            formData.append('id', this.user.id);
            this.userService.uploadCartDDImage(formData).subscribe(function (response) {
                if (response.error == true) {
                    M.toast({ html: response.msg, classes: 'roundeds danger' });
                }
                else {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                    _this.getUserEvents(_this.user.id);
                    _this.getUserWorkshops(_this.user.id);
                }
            });
        }
    };
    CartComponent.prototype.cancelEventRegistration = function (_id) {
        var _this = this;
        this.eventRegistrationService.cancelEventRegistration(_id).subscribe(function (response) {
            if (response.error == true) {
                M.toast({ html: response.msg, classes: 'roundeds' });
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getUserEvents(_this.user.id);
                _this.getUserWorkshops(_this.user.id);
                _this.calculateAmount();
            }
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/component/user/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/component/user/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_1__["EventRegistrationService"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"],
            src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/component/user/events/events.component.css":
/*!************************************************************!*\
  !*** ./src/app/component/user/events/events.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Form Style */\r\na:hover,a:focus{\r\n text-decoration: none;\r\n outline: none;\r\n}\r\n#accordion .panel{\r\n border: none;\r\n box-shadow: none;\r\n border-radius: 0;\r\n margin-bottom: 5px;\r\n}\r\n#accordion .panel-heading{\r\n padding: 0;\r\n border-radius: 0;\r\n text-align: center;\r\n border: none;\r\n}\r\n#accordion .panel-title a{\r\n display: block;\r\n padding: 15px;\r\n font-size: 16px;\r\n font-weight: bold;\r\n color: #fff;\r\n background: #0C0119;\r\n transition: all 0.5s ease 0s;\r\n}\r\n#accordion .panel-title a:hover{\r\n background: rgba(12, 1, 25, 0.8);\r\n}\r\n#accordion .panel-body{\r\n font-size: 14px;\r\n color: #fff;\r\n background: #29b0a0;\r\n padding: 15px 20px;\r\n line-height: 25px;\r\n border: none;\r\n position: relative;\r\n}\r\n#accordion .panel-body:after{\r\n content: \"\";\r\n position: absolute;\r\n top: -30px;\r\n left: 40px;\r\n border: 15px solid transparent;\r\n border-bottom: 15px solid #29b0a0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXIvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnQkFBZ0I7QUFDaEI7Q0FDQyxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkO0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjtBQUVEO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsNkJBQTZCO0NBQzdCO0FBRUQ7Q0FDQyxpQ0FBaUM7Q0FDakM7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsV0FBVztDQUNYLCtCQUErQjtDQUMvQixrQ0FBa0M7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdXNlci9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogRm9ybSBTdHlsZSAqL1xyXG5hOmhvdmVyLGE6Zm9jdXN7XHJcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uIC5wYW5lbHtcclxuIGJvcmRlcjogbm9uZTtcclxuIGJveC1zaGFkb3c6IG5vbmU7XHJcbiBib3JkZXItcmFkaXVzOiAwO1xyXG4gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jYWNjb3JkaW9uIC5wYW5lbC1oZWFkaW5ne1xyXG4gcGFkZGluZzogMDtcclxuIGJvcmRlci1yYWRpdXM6IDA7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGF7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIHBhZGRpbmc6IDE1cHg7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxuIGNvbG9yOiAjZmZmO1xyXG4gYmFja2dyb3VuZDogIzBDMDExOTtcclxuIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XHJcbn1cclxuXHJcbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGE6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxLCAyNSwgMC44KTtcclxufVxyXG5cclxuI2FjY29yZGlvbiAucGFuZWwtYm9keXtcclxuIGZvbnQtc2l6ZTogMTRweDtcclxuIGNvbG9yOiAjZmZmO1xyXG4gYmFja2dyb3VuZDogIzI5YjBhMDtcclxuIHBhZGRpbmc6IDE1cHggMjBweDtcclxuIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gYm9yZGVyOiBub25lO1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uIC5wYW5lbC1ib2R5OmFmdGVye1xyXG4gY29udGVudDogXCJcIjtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogLTMwcHg7XHJcbiBsZWZ0OiA0MHB4O1xyXG4gYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjMjliMGEwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/user/events/events.component.html":
/*!*************************************************************!*\
  !*** ./src/app/component/user/events/events.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <span class=\"content-header-left h3 col-md-3 col-3 mb-4\">\r\n        <span class=\"content-header-title\">Events\r\n        </span>\r\n      </span>\r\n      <span class=\"content-header-left col-md-3 col-3 mb-3\">\r\n        <select [(ngModel)]=\"searchText\" (change)=\"filter()\" id=\"searchText\" class=\"custom-select float-right\">\r\n          <option value=\"All\">All</option>\r\n          <option *ngFor=\"let dept of departments\" value=\"{{dept.name}}\">\r\n            {{dept.name}}\r\n          </option>\r\n        </select>\r\n      </span>\r\n      <span class=\"content-header-right col-md-3 col-3\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\"\r\n                  [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">Events\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </span>\r\n      <span class=\"content-header-right col-md-3 col-3\">\r\n        <div class=\"row float-right white\">\r\n          <span *ngIf=\"this.currentPage != 1\">\r\n            <span class=\"btn btn-sm btn-info\" (click)=\"previousPage()\"> &lt; </span>\r\n          </span>\r\n          &nbsp; Page {{currentPage}} &nbsp;\r\n          <span class=\"btn btn-sm btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n        </div>\r\n      </span>\r\n\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height\">\r\n          <div class=\"col-4\" *ngFor=\"let event of events\">\r\n            <div class=\"card pull-up\">\r\n              <div class=\"card-body\">\r\n                <h3 class=\"card-title\">{{event.title}} <span class=\"card-title activator grey-text text-darken-4 float-right\"><i\r\n                      class=\"fas fa-ellipsis-v right\"></i></span></h3>\r\n                <h6 class=\"card-subtitle text-muted\">Department of {{event.department_id.name}}</h6>\r\n              </div>\r\n              <img class=\"activator card-image\" src=\"http://www.gyanmitra19.mepcoeng.ac.in/assests/images/events/{{event.image_name}}\">\r\n              <div class=\"card-body\">\r\n                Contact <p class=\"card-text\">\r\n                  <a href=\"mailto:{{event.contact_email}}\">{{event.contact_email}}</a>\r\n                </p>\r\n              </div>\r\n              <div class=\"card-reveal\">\r\n                <span class=\"card-title grey-text text-darken-4\">Description<i class=\"fas fa-times float-right\"></i></span>\r\n                {{event.description}}\r\n                <span class=\"card-title grey-text text-darken-4\">Rules</span>\r\n                <ul>\r\n                  <li *ngFor=\"let rule of (event.rules | rulesTransform)\">{{ rule }}</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"card-footer border-top-blue-grey border-top-lighten-5 text-muted\">\r\n                <span class=\"float-left\"> {{event.event_date | date }}</span>\r\n                <span class=\"float-right\">\r\n                  <ng-container *ngIf=\"user; else notLoggedIn\">\r\n                    <ng-container *ngIf=\"user.cart_confirmed; else cartNotConfirmed\">\r\n                      <button type=\"button\" class=\"btn btn-outline-danger\" style=\"width:100%\">\r\n                        Cart already Confirmed\r\n                      </button>\r\n                    </ng-container>\r\n                    <ng-template #cartNotConfirmed>\r\n                      <div *ngIf=\"event.min_members == event.max_members == 1 && !registeredEvents.includes(event._id)\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"selectEvent(event._id)\" style=\"width:100%\">\r\n                          Register Now <i class=\"la la-angle-right\"></i>\r\n                        </button>\r\n                      </div>\r\n                      <div *ngIf=\"event.min_members != event.max_members && !registeredEvents.includes(event._id)\">\r\n                        <button type=\"button\" [routerLink]=\"['/user/teamRegister',event._id]\" [routerLinkActive]=\"['active']\"\r\n                          [routerLinkActiveOptions]=\"{exact:true}\" class=\"btn btn-outline-primary\" style=\"width:100%\">\r\n                          Register Team <i class=\"la la-angle-right\"></i>\r\n                        </button>\r\n                      </div>\r\n                      <div *ngIf=\"registeredEvents.includes(event._id)\">\r\n                        <button type=\"button\" *ngIf=\"registeredEvents.includes(event._id)d\" class=\"btn btn-sm round btn-bg-gradient-x-purple-red\"\r\n                          style=\"width:100%\">\r\n                          Already Registered\r\n                        </button>\r\n                      </div>\r\n                    </ng-template>\r\n                  </ng-container>\r\n                  <ng-template #notLoggedIn>\r\n                    <a class=\"btn btn-lg btn-glow btn-bg-gradient-x-blue-purple-2\" style=\"width:100%\" [routerLink]=\"['/user/login']\"\r\n                      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Login to Register</a>\r\n                  </ng-template>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/user/events/events.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/user/events/events.component.ts ***!
  \***********************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/event/event.service */ "./src/app/services/event/event.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/department/department.service */ "./src/app/services/department/department.service.ts");
/* harmony import */ var src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/eventRegistration/event-registration.service */ "./src/app/services/eventRegistration/event-registration.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventsComponent = /** @class */ (function () {
    function EventsComponent(userService, eventRegistration, eventService, eventRegistrationService, authService, deptService) {
        this.userService = userService;
        this.eventRegistration = eventRegistration;
        this.eventService = eventService;
        this.eventRegistrationService = eventRegistrationService;
        this.authService = authService;
        this.deptService = deptService;
        this.searchText = 'All';
        this.currentPage = 1;
        this.registeredEvents = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserId != '') {
            this.eventService.readWithPageAndDepartment('Event', 'All', 1).subscribe(function (response) {
                _this.events = response;
            });
        }
        this.currentPage = 1;
        this.currentUserId = '';
        this.user = (JSON.parse(localStorage.getItem('user')));
        if (this.user != null) {
            this.currentUserId = this.user.id;
        }
        this.getRegistrations();
        this.loadFull(this.currentPage);
    };
    EventsComponent.prototype.getRegistrations = function () {
        var _this = this;
        this.eventRegistrationService.getRegisteredEvents(this.currentUserId, 'Event').subscribe(function (response) {
            _this.registeredEvents = response.msg;
        });
    };
    EventsComponent.prototype.filter = function () {
        this.currentPage = 1;
        this.loadFull(this.currentPage);
    };
    EventsComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.loadFull(this.currentPage);
    };
    EventsComponent.prototype.previousPage = function () {
        this.currentPage = this.currentPage - 1;
        this.loadFull(this.currentPage);
    };
    EventsComponent.prototype.selectEvent = function (_id) {
        var _this = this;
        this.eventRegistrationService.createEventRegistration(JSON.parse(localStorage.getItem('user')).id, _id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.loadFull(_this.currentPage);
            }
        });
    };
    EventsComponent.prototype.loadFull = function (page) {
        var _this = this;
        if (this.searchText == 'All') {
            this.eventService.readWithPageAndDepartment('Event', 'All', this.currentPage).subscribe(function (response) {
                if (response.length == []) {
                    _this.currentPage -= 1;
                }
                else {
                    _this.getRegistrations();
                    _this.events = response;
                }
            });
        }
        else {
            this.eventService.readWithPageAndDepartment('Event', this.searchText, page).subscribe(function (response) {
                if (response.length == []) {
                    _this.currentPage -= 1;
                }
                else {
                    _this.getRegistrations();
                    _this.events = response;
                }
            });
        }
        this.deptService.readDepartment(0).subscribe(function (response) {
            _this.departments = response;
        });
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/component/user/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/component/user/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_4__["EventRegistrationService"], src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_4__["EventRegistrationService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/component/user/gyan-mitra18/gyan-mitra18.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/user/gyan-mitra18/gyan-mitra18.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\r\n    height: 55%;\r\n    width: 90%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXIvZ3lhbi1taXRyYTE4L2d5YW4tbWl0cmExOC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0NBRWQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdXNlci9neWFuLW1pdHJhMTgvZ3lhbi1taXRyYTE4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/user/gyan-mitra18/gyan-mitra18.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/user/gyan-mitra18/gyan-mitra18.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n        <h3 class=\"content-header-title\">GyanMitra18</h3>\r\n      </div>\r\n      <div class=\"content-header-right col-md-8 col-12\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\"\r\n                  [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">GyanMitra18\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height justify-content-md-center\">\r\n          <div class=\"col-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                  <h3 class=\"card-title text-center text-uppercase\">Gallery</h3>\r\n                  <div class=\"divider\"></div>\r\n                </div>\r\n                <div class=\"card-body text-center\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-1\"></div>\r\n                    <div class=\"col-11\">\r\n                      <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                        <div class=\"carousel-inner\">\r\n                          <div class=\"carousel-item active\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0465w.jpg\" alt=\"First slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0450(WEB).jpg\" alt=\"Second slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0451w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0452w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0453w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0454w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0455w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0456w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0457w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0458w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0459w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0460w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0461w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0462w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0462w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0463w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0464w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0466w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0467w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0468w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0469w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n\r\n                          <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"public/images/Gallery/DSC_0472w.jpg\" alt=\"Third slide\">\r\n                          </div>\r\n                        </div>\r\n                        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                          <span class=\"sr-only\">Previous</span>\r\n                        </a>\r\n                        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n                          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                          <span class=\"sr-only\">Next</span>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row match-height justify-content-md-center\">\r\n          <div class=\"col-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                  <h3 class=\" size2 card-title text-center text-uppercase \"><i class=\"fas fa-medal\"></i> Winners <i\r\n                      class=\"fas fa-medal\"></i></h3>\r\n                  <div class=\"divider\"></div>\r\n                </div>\r\n                <div class=\"card-body text-center\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Sl. No</th>\r\n                          <th>Domain</th>\r\n                          <th>College</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>\r\n                            1\r\n                          </td>\r\n                          <td>\r\n                            CIVIL\r\n                          </td>\r\n                          <td>\r\n                            Bharathiyar College of Engineering and Technology,Puducherry \r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            2\r\n                          </td>\r\n                          <td>\r\n                            EEE\r\n                          </td>\r\n                          <td>\r\n                            SSM College Of Engineering,Chennai\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            3\r\n                          </td>\r\n                          <td>\r\n                            ECE\r\n                          </td>\r\n                          <td>\r\n                            K.L.N. College of Engineering,Madurai\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            4\r\n                          </td>\r\n                          <td>\r\n                            CSE/IT\r\n                          </td>\r\n                          <td>\r\n                            Kamaraj College of Engineering and Technology,Virudhunagar\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            5\r\n                          </td>\r\n                          <td>\r\n                            MECH\r\n                          </td>\r\n                          <td>\r\n                            Sethu Institute of Technology,Virudhunagar\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            6\r\n                          </td>\r\n                          <td>\r\n                            MATHS\r\n                          </td>\r\n                          <td>\r\n                            PSNA College of Engineering and Technology,Dindigul\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            7\r\n                          </td>\r\n                          <td>\r\n                            Bio Tech\r\n                          </td>\r\n                          <td>\r\n                            Lady Doak College,Madurai\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>"

/***/ }),

/***/ "./src/app/component/user/gyan-mitra18/gyan-mitra18.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/user/gyan-mitra18/gyan-mitra18.component.ts ***!
  \***********************************************************************/
/*! exports provided: GyanMitra18Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GyanMitra18Component", function() { return GyanMitra18Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GyanMitra18Component = /** @class */ (function () {
    function GyanMitra18Component() {
    }
    GyanMitra18Component.prototype.ngOnInit = function () {
    };
    GyanMitra18Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gyan-mitra18',
            template: __webpack_require__(/*! ./gyan-mitra18.component.html */ "./src/app/component/user/gyan-mitra18/gyan-mitra18.component.html"),
            styles: [__webpack_require__(/*! ./gyan-mitra18.component.css */ "./src/app/component/user/gyan-mitra18/gyan-mitra18.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GyanMitra18Component);
    return GyanMitra18Component;
}());



/***/ }),

/***/ "./src/app/component/user/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/user/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/user/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/user/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section class=\"flexbox-container\">\r\n        <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n          <div class=\"col-md-8 col-10 box-shadow-2 p-0\">\r\n            <div class=\"card border-grey border-lighten-3 px-1 py-1 m-0\">\r\n              <div class=\"card-header border-0\">\r\n                <div class=\"font-large-1  text-center\">\r\n                  Login\r\n                  <i class=\"fa fa-sign-in-alt\"></i>\r\n                </div>\r\n                <div class=\"content-header-right col-md-8 col-12\">\r\n                </div>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                  <form class=\"form-horizontal\" [formGroup]=\"loginForm\" (ngSubmit)=onSubmit(loginForm.value)>\r\n                    <fieldset class=\"form-group position-relative has-icon-left\">\r\n                      <input type=\"text\" class=\"form-control round\" placeholder=\"Your Email\" formControlName=\"email_id\"\r\n                        [ngClass]=\"{'is-invalid': submitted &&f.email_id.errors}\">\r\n                      <div *ngIf=\"submitted && f.email_id.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.email_id.errors.required\">Email_id is required\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-control-position\">\r\n                        <i class=\"ft-user\"></i>\r\n                      </div>\r\n                    </fieldset>\r\n                    <fieldset class=\"form-group position-relative has-icon-left\">\r\n                      <input type=\"password\" class=\"form-control round\" placeholder=\"Your Password\" formControlName=\"password\"\r\n                        [ngClass]=\"{'is-invalid': submitted &&f.password.errors}\">\r\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-control-position\">\r\n                        <i class=\"ft-lock\"></i>\r\n                      </div>\r\n                    </fieldset>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-md-6 col-12 text-center text-sm-left\">\r\n\r\n                      </div>\r\n                      <div class=\"col-md-6 col-12 float-sm-left text-center text-sm-right\"><a href=\"#\" class=\"card-link\">Forgot\r\n                          Password?</a></div>\r\n                    </div>\r\n                    <div class=\"form-group text-center\">\r\n                      <button type=\"submit\" class=\"btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1\">Login</button>\r\n                    </div>\r\n\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/user/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/user/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    //Create Form is Used to Initalize the Values the Form
    LoginComponent.prototype.createForm = function () {
        this.Button = "Login";
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            email_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    //The action performed After the Button is Pressed
    LoginComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        this.Button = "Checking.......";
        if (this.loginForm.valid) {
            var email_id = this.loginForm.value.email_id;
            var password = this.loginForm.value.password;
            this.authService.authenticate(email_id, password).subscribe(function (response) {
                if (response.success) {
                    if (response.user.type === 'student') {
                        _this.router.navigate(['/user/home']);
                    }
                    else {
                        _this.router.navigate(['/admin/home']);
                    }
                    _this.authService.createSession(response);
                }
                else {
                    // Create session for the user
                    M.toast({ html: response.msg, classes: 'rounded' });
                    _this.loginForm.reset();
                }
            });
        }
        else {
            M.toast({ html: 'Please Check the Form', classes: 'rounded' });
            this.Button = "Login";
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/user/payment-failure/payment-failure.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/component/user/payment-failure/payment-failure.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3BheW1lbnQtZmFpbHVyZS9wYXltZW50LWZhaWx1cmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/user/payment-failure/payment-failure.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/component/user/payment-failure/payment-failure.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-wrapper-before\"></div>\n    <div class=\"content-header row\">\n      <div class=\"content-header-left col-4\">\n        <h3 class=\"content-header-title\">PaymentFailure</h3>\n      </div>\n      <div class=\"content-header-right col-4\">\n        <div class=\"breadcrumbs-top float-md-right\">\n          <div class=\"breadcrumb-wrapper mr-1\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\n              </li>\n              <li class=\"breadcrumb-item active\">Sorry\n              </li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div classs=\"content-body\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h1 class=\"text-center\">Transcation Failure</h1>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/component/user/payment-failure/payment-failure.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/user/payment-failure/payment-failure.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PaymentFailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFailureComponent", function() { return PaymentFailureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentFailureComponent = /** @class */ (function () {
    function PaymentFailureComponent() {
    }
    PaymentFailureComponent.prototype.ngOnInit = function () {
    };
    PaymentFailureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-failure',
            template: __webpack_require__(/*! ./payment-failure.component.html */ "./src/app/component/user/payment-failure/payment-failure.component.html"),
            styles: [__webpack_require__(/*! ./payment-failure.component.css */ "./src/app/component/user/payment-failure/payment-failure.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentFailureComponent);
    return PaymentFailureComponent;
}());



/***/ }),

/***/ "./src/app/component/user/payment-success/payment-success.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/component/user/payment-success/payment-success.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3BheW1lbnQtc3VjY2Vzcy9wYXltZW50LXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/user/payment-success/payment-success.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/component/user/payment-success/payment-success.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  payment-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/user/payment-success/payment-success.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/user/payment-success/payment-success.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentSuccessComponent = /** @class */ (function () {
    function PaymentSuccessComponent() {
    }
    PaymentSuccessComponent.prototype.ngOnInit = function () {
    };
    PaymentSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-success',
            template: __webpack_require__(/*! ./payment-success.component.html */ "./src/app/component/user/payment-success/payment-success.component.html"),
            styles: [__webpack_require__(/*! ./payment-success.component.css */ "./src/app/component/user/payment-success/payment-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentSuccessComponent);
    return PaymentSuccessComponent;
}());



/***/ }),

/***/ "./src/app/component/user/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/user/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/user/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/user/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n\t<div class=\"content-wrapper\">\r\n\t\t<div class=\"content-wrapper-before\"></div>\r\n\t\t<div class=\"content-header row\">\r\n\t\t\t<div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n\t\t\t\t<h3 class=\"content-header-title\">Register</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"content-header-right col-md-8 col-12\">\r\n\t\t\t\t<div class=\"breadcrumbs-top float-md-right\">\r\n\t\t\t\t\t<div class=\"breadcrumb-wrapper mr-1\">\r\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\"\r\n\t\t\t\t\t\t\t\t [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Register\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"content-body\">\r\n\t\t\t<section id=\"content-types\">\r\n\t\t\t\t<div class=\"row match-height justify-content-md-center\">\r\n\t\t\t\t\t<div class=\"col-xl-6 col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"font-large-1  text-center\">\r\n\t\t\t\t\t\t\t\t\t\tRegister <i class=\"far fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<form class=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=onSubmit(registerForm.value)>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control round\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{'is-invalid': submitted &&f.name.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.name.errors.required\">Name is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.name.errors && !f.name.errors.required\">Not a Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control round\" placeholder=\"Email ID\" formControlName=\"email_id\" [ngClass]=\"{'is-invalid': submitted &&f.email_id.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.email_id.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.email_id.errors.required\">Email_id is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.email_id.errors && !f.email_id.errors.required\">Not a Valid Email ID\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control round\" placeholder=\"Mobile Number\" formControlName=\"mobile_number\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t [ngClass]=\"{'is-invalid': submitted && f.mobile_number.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.mobile_number.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.mobile_number.errors.required\">Mobile Number is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.mobile_number.errors && !f.mobile_number.errors.required\">Not a Valid Mobile Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select round\" formControlName=\"gender\" [ngClass]=\"{'is-invalid': submitted && f.gender.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled value=\"\">Gender</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Male\">Male</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Female\">Female</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Others\">Others</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.gender.errors.required\">Gender is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.gender.errors && !f.gender.errors.required \">Not a Valid Gender\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select round\" formControlName=\"college_id\" [ngClass]=\"{'is-invalid': submitted && f.college_id.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled value=\"\">College</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let college of colleges\" value={{college._id}}>{{college.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.college_id.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.college_id.errors.required\">College is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.college_id.errors && !f.college_id.errors.required\">Not a Valid College\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select round\" formControlName=\"course_id\" [ngClass]=\"{'is-invalid': submitted && f.college_id.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled value=\"\">Course</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let course of courses\" value={{course._id}}>{{course.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.course_id.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.course_id.errors.required\">Course is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.course_id.errors && !f.course_id.errors.required\">Not a Valid Course\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select round\" formControlName=\"year_id\" [ngClass]=\"{'is-invalid': submitted && f.year_id.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled value=\"\">Year of Studying</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let year of years\" value={{year._id}}>{{year.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.year_id.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.year_id.errors.required\">Year is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.year_id.errors && !f.year_id.errors.required\">Not a Valid Year\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select round\" formControlName=\"degree_id\" [ngClass]=\"{'is-invalid': submitted && f.degree_id.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled value=\"\">Degree</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let degree of degrees\" value={{degree._id}}>{{degree.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.degree_id.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.degree_id.errors.required\">Degree is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.degree_id.errors && !f.degree_id.errors.required\">Not a Valid Degree\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control round\" placeholder=\"Password\" formControlName=\"password\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t [ngClass]=\"{'is-invalid': submitted &&f.password.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control round\" placeholder=\"Confirm Password\" formControlName=\"conpassword\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t [ngClass]=\"{'is-invalid': submitted &&f.conpassword.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.conpassword.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.conpassword.errors.required\">Confirm Password is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-action left row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"createForm()\" class=\"btn btn-outline-danger left round\">Reset</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-success right round\">{{this.Button}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<h1> </h1>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/user/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/user/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_userregistration_userregistration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userregistration/userregistration.service */ "./src/app/services/userregistration/userregistration.service.ts");
/* harmony import */ var src_app_services_course_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/college/college.service */ "./src/app/services/college/college.service.ts");
/* harmony import */ var src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/degree/degree.service */ "./src/app/services/degree/degree.service.ts");
/* harmony import */ var src_app_services_year_year_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/year/year.service */ "./src/app/services/year/year.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(degreeservice, yearService, collegeservice, courseservice, reg, router, formBuilder, userRegisterService) {
        this.degreeservice = degreeservice;
        this.yearService = yearService;
        this.collegeservice = collegeservice;
        this.courseservice = courseservice;
        this.reg = reg;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userRegisterService = userRegisterService;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getCourses();
        this.getColleges();
        this.getDegrees();
        this.getYears();
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    //Create Form is Used to Initalize the Values the Form
    RegisterComponent.prototype.createForm = function () {
        this.Button = "Register";
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            email_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            conpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[0-9]{10}$")])],
            degree_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            college_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            course_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            year_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    //The action performed After the Button is Pressed
    RegisterComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        this.Button = "Checking...";
        if (this.registerForm.valid) {
            var email_id = this.registerForm.get('email_id').value;
            var password = this.registerForm.get('password').value;
            var conpassword = this.registerForm.get('conpassword').value;
            var name_1 = this.registerForm.get('name').value;
            var mobile_number = this.registerForm.get('mobile_number').value;
            var gender = this.registerForm.get('gender').value;
            var college_id = this.registerForm.get('college_id').value;
            var degree_id = this.registerForm.get('degree_id').value;
            var course_id = this.registerForm.get('course_id').value;
            var year = this.registerForm.get('year_id').value;
            console.log(this.registerForm.get('email_id').value);
            if (password !== conpassword) {
                M.toast({ html: 'Passwords does not match', classes: 'rounded' });
                this.createForm();
            }
            else {
                this.Button = "Sending Mail......";
                this.reg.createUser(name_1, college_id, course_id, degree_id, email_id, gender, mobile_number, password, year, false, "online").subscribe(function (response) {
                    if (response.error) {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                    }
                    else {
                        M.toast({ html: response.msg, classes: 'roundeds' });
                        _this.createForm();
                    }
                });
            }
        }
        else {
            M.toast({ html: 'Please Check the Form', classes: 'rounded' });
            this.Button = "Register";
        }
    };
    RegisterComponent.prototype.getCourses = function () {
        var _this = this;
        this.courseservice.readCourse(0).subscribe(function (response) {
            _this.courses = response;
        });
    };
    RegisterComponent.prototype.getColleges = function () {
        var _this = this;
        this.collegeservice.readCollege(0).subscribe(function (response) {
            _this.colleges = response;
        });
    };
    RegisterComponent.prototype.getDegrees = function () {
        var _this = this;
        this.degreeservice.readDegree(0).subscribe(function (response) {
            _this.degrees = response;
        });
    };
    RegisterComponent.prototype.getYears = function () {
        var _this = this;
        this.yearService.readYear(0).subscribe(function (response) {
            _this.years = response;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/component/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_degree_degree_service__WEBPACK_IMPORTED_MODULE_6__["DegreeService"], src_app_services_year_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"], src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_5__["CollegeService"], src_app_services_course_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"], src_app_services_userregistration_userregistration_service__WEBPACK_IMPORTED_MODULE_3__["UserregistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_userregistration_userregistration_service__WEBPACK_IMPORTED_MODULE_3__["UserregistrationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/user/team-register/team-register.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/component/user/team-register/team-register.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3RlYW0tcmVnaXN0ZXIvdGVhbS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/user/team-register/team-register.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/user/team-register/team-register.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n\t<div class=\"content-wrapper\">\r\n\t\t<div class=\"content-wrapper-before\"></div>\r\n\t\t<div class=\"content-header row\">\r\n\t\t\t<div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n\t\t\t\t<h3 class=\"content-header-title\">Manage Team</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"content-header-right col-md-8 col-12\">\r\n\t\t\t\t<div class=\"breadcrumbs-top float-md-right\">\r\n\t\t\t\t\t<div class=\"breadcrumb-wrapper mr-1\">\r\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\"\r\n\t\t\t\t\t\t\t\t [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/events']\" [routerLinkActive]=\"['active']\"\r\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">Event</a>\r\n\t\t\t\t\t\t    </li>\r\n\t\t\t\t\t\t    <li class=\"breadcrumb-item active\">Team Register\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"content-body\">\r\n\t\t\t<section id=\"content-types\">\r\n\t\t\t\t<div class=\"row match-height justify-content-md-center\">\r\n\t\t\t\t\t<div class=\"col-xl-6 col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Team Registration</h4>\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-subtitle text-muted\">Register a team</h6>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<form class=\"form\" [formGroup]=\"teamRegisterForm\" (ngSubmit)=onSubmit(teamRegisterForm)>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"_id\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Team Name\" formControlName=\"name\" required pattern=\"[a-zA-Z ]*\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t [ngClass]=\"{'is-invalid': submitted && f.name.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.name.errors.required\">Team Name is required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.name.errors && !f.name.errors.required\">Only Alpahabets</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id='default-multiple' value=\"\" style=\"width:100%\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-action left row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"createForm()\" class=\"btn btn-outline-danger left\">Reset</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-success right\">{{this.Button}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/user/team-register/team-register.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/user/team-register/team-register.component.ts ***!
  \*************************************************************************/
/*! exports provided: TeamRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRegisterComponent", function() { return TeamRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventRegistration/event-registration.service */ "./src/app/services/eventRegistration/event-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/registration/registration.service */ "./src/app/services/registration/registration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamRegisterComponent = /** @class */ (function () {
    function TeamRegisterComponent(router, route, registrationService, formbuilder, eventRegister) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.registrationService = registrationService;
        this.formbuilder = formbuilder;
        this.eventRegister = eventRegister;
        this.route.params.subscribe(function (param) { _this.event_id = param.id; });
    }
    TeamRegisterComponent.prototype.ngOnInit = function () {
        this.Button = 'Register Team';
        this.team_mates = [];
        this.createForm();
        this.getCollegeMates();
    };
    Object.defineProperty(TeamRegisterComponent.prototype, "f", {
        get: function () { return this.teamRegisterForm.controls; },
        enumerable: true,
        configurable: true
    });
    TeamRegisterComponent.prototype.createForm = function () {
        this.teamRegisterForm = this.formbuilder.group({
            _id: '',
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            //collegeMates:[this.college_mates]
        });
        this.Submitted = false;
    };
    TeamRegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.Button = 'Loading....';
        this.Submitted = true;
        var iCnt = 0;
        var data = $('#default-multiple').select2('data');
        var user_ids = [];
        $.each(data, function () {
            var user_id = $('#default-multiple').select2('data')[iCnt]['id'];
            user_ids.push(user_id);
            iCnt += 1;
        });
        if (form.valid) {
            this.route.params.subscribe(function (param) {
                _this.eventRegister.getEventById(param.id).subscribe(function (res) {
                    if (res[0].max_members > user_ids.length) {
                        _this.eventRegister.createEventWithTeamRegistration(JSON.parse(localStorage.getItem('user')).id, _this.event_id, _this.teamRegisterForm.get('name').value, "leader").subscribe(function (response) {
                            if (response.error) {
                                M.toast({ html: response.msg, classes: 'roundeds danger' });
                                _this.createForm();
                            }
                            else {
                                M.toast({ html: response.msg, classes: 'roundeds' });
                                _this.createForm();
                            }
                        });
                        var flag_1 = 0;
                        for (var _i = 0, user_ids_1 = user_ids; _i < user_ids_1.length; _i++) {
                            var user = user_ids_1[_i];
                            _this.eventRegister.createEventWithTeamRegistration(user, _this.event_id, _this.teamRegisterForm.get('name').value, "member").subscribe(function (response) {
                                if (response.error) {
                                    M.toast({ html: response.msg, classes: 'roundeds danger' });
                                    _this.createForm();
                                }
                                else {
                                    M.toast({ html: response.msg, classes: 'roundeds' });
                                    _this.createForm();
                                    flag_1 = flag_1 + 1;
                                }
                            });
                            if (flag_1 = user_ids.length) {
                                _this.router.navigate(['/user/cart']);
                            }
                        }
                    }
                    else {
                        M.toast({ html: "Maximum " + res[0].max_members + " are allowed.", classes: 'roundeds danger' });
                        _this.createForm();
                    }
                });
            });
        }
    };
    TeamRegisterComponent.prototype.getCollegeMates = function () {
        var _this = this;
        //console.log(JSON.parse(localStorage.getItem('user')).id);
        this.eventRegister.getCollegeMates(this.event_id, JSON.parse(localStorage.getItem('user')).id).subscribe(function (response) {
            if (response.error) {
                console.log(response.error);
            }
            else {
                _this.college_mates = response.msg;
                $(document).ready(function () {
                    $('#default-multiple').select2({
                        data: response.msg,
                        multiple: true,
                        placeholder: 'Add TeamMates',
                    });
                });
            }
        });
    };
    TeamRegisterComponent.prototype.getEmailId = function (value) {
        if (this.team_mates.includes(value)) {
            this.team_mates.splice(this.team_mates.indexOf(value), 1);
        }
        else {
            this.team_mates.push(value);
        }
        console.log(this.team_mates);
    };
    TeamRegisterComponent.prototype.getEventById = function (event_id) {
        var _this = this;
        this.eventRegister.getEventById(event_id).subscribe(function (response) {
            _this.event = response;
        });
    };
    TeamRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-register',
            template: __webpack_require__(/*! ./team-register.component.html */ "./src/app/component/user/team-register/team-register.component.html"),
            styles: [__webpack_require__(/*! ./team-register.component.css */ "./src/app/component/user/team-register/team-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_2__["EventRegistrationService"]])
    ], TeamRegisterComponent);
    return TeamRegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/user/user-accomodation/user-accomodation.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/component/user/user-accomodation/user-accomodation.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3VzZXItYWNjb21vZGF0aW9uL3VzZXItYWNjb21vZGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/user/user-accomodation/user-accomodation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/component/user/user-accomodation/user-accomodation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n        <h3 class=\"content-header-title\">Accomodation</h3>\r\n      </div>\r\n      <div class=\"content-header-right col-md-8 col-12\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\"> Accomodation\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height justify-content-md-center\">\r\n          <div class=\"col-xl-6 col-md-12\">\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">\r\n                <span *ngIf=\"accomodation\" [ngClass]=\"{'success': accomodation.acc_payment_status == 'Paid' && accomodation.acc_status == 'Confirmed'}\"\r\n                  [ngClass]=\"{'danger': accomodation.acc_payment_status == 'Not Paid' && accomodation.acc_status == 'Not Confirmed'}\">\r\n                  Payment Status : {{accomodation.acc_payment_status}} | Accomodation Status :\r\n                  {{accomodation.acc_status}}\r\n                </span>\r\n                <span *ngIf=\"!accomodation\">\r\n                  Accomodation Status : Not Applied\r\n                </span>\r\n              </h4>\r\n              <a class=\"heading-elements-toggle\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\r\n              <div class=\"heading-elements\">\r\n                <ul class=\"list-inline mb-0\">\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content collapse show\">\r\n              <div class=\"card-body\">\r\n                <div *ngIf=\"!accomodation\">\r\n                  <form class=\"form\" [formGroup]=\"accomodationForm\" (ngSubmit)=onSubmit(accomodationForm.value)>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-5\">\r\n\r\n                          <select class=\"custom-select\" placeholder=\"Number of Days\" formControlName=\"acc_days\">\r\n                            <option value=\"0\" selected disabled>Number of Days</option>\r\n                            <option value=\"1\">1</option>\r\n                            <option value=\"2\">2</option>\r\n                          </select>\r\n\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                          <button type=\"reset\" class=\"btn btn-outline-success right\">Reset</button>\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                          <button type=\"submit\" class=\"btn btn-outline-success right\">Apply</button>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div>\r\n                  <div *ngIf=\"hasAccomodation && accomodation.acc_status=='Approved' && accomodation.acc_payment_status=='Not Paid'\">\r\n                    <div class=\"container\">\r\n                      <h2>Payment</h2>\r\n                      <hr />\r\n                      <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <button class=\"btn btn-bg-gradient-x-blue-cyan border-white border-2  float-right\"\r\n                            (click)=\"payOnline()\" data-toggle=\"modal\" data-target=\"#PayOnline\">Online</button>\r\n                          <button class=\"btn btn-google\" type=\"button\" data-toggle=\"collapse\" data-target=\"#DDUpload\">Upload\r\n                            Demand Draft</button>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"collapse\" id=\"DDUpload\">\r\n                          <div class=\"card card-body\">\r\n                            <form>\r\n                              <input #imageInput placeholder=\"Select an Image\" type=\"file\" accept=\"image/*\" (change)=\"processFile($event)\">\r\n                            </form>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"danger\" *ngIf=\"hasAccomodation && accomodation.acc_status=='Not Confirmed' && accomodation.acc_payment_status=='Not Paid'\">\r\n                    <div class=\"container\">\r\n                      <h2>\r\n                        Wait till your accomodation is opened up for payment\r\n                      </h2>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<form action=\"https://test.payu.in/_payment\" id=\"frm-payment\" method=\"post\">\r\n  <input type=\"hidden\" name=\"key\" value={{appService.getKey()}}>\r\n  <input type=\"hidden\" name=\"txnid\" value={{txnId}}>\r\n  <input type=\"hidden\" name=\"amount\" value={{totalAmount+(totalAmount*appService.getTransactionFee())}}>\r\n  <input type=\"hidden\" name=\"productinfo\" value={{this.appService.getProductInfo()}}>\r\n  <input type=\"hidden\" name=\"firstname\" value={{user.name}}>\r\n  <input type=\"hidden\" name=\"email\" value={{user.email_id}}>\r\n  <input type=\"hidden\" name=\"phone\" value={{user.mobile_number}}>\r\n  <input type=\"hidden\" name=\"surl\" value=\"http://localhost:3000/payment/acc/success\">\r\n  <input type=\"hidden\" name=\"furl\" value=\"http://localhost:3000/payment/acc/failure\">\r\n  <input type=\"hidden\" name=\"hash\" value={{hashString}}>\r\n\r\n</form>\r\n<div class=\"modal fade\" id=\"PayOnline\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cart Amount - Rs.\r\n          {{totalAmount+(totalAmount*appService.getTransactionFee())}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        DO You Really Want Pay Online?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" onclick=\"$('#frm-payment').submit()\" class=\"btn btn-secondary\">PAY</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/user/user-accomodation/user-accomodation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/user/user-accomodation/user-accomodation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserAccomodationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccomodationComponent", function() { return UserAccomodationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_accomodation_accomodation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/accomodation/accomodation.service */ "./src/app/services/accomodation/accomodation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Check line:64 error
var UserAccomodationComponent = /** @class */ (function () {
    function UserAccomodationComponent(accomodationService, appService, paymentService, formBuilder) {
        this.accomodationService = accomodationService;
        this.appService = appService;
        this.paymentService = paymentService;
        this.formBuilder = formBuilder;
    }
    UserAccomodationComponent.prototype.ngOnInit = function () {
        this._id = JSON.parse(localStorage.getItem('user')).id;
        this.submitted = false;
        this.hasAccomodation = false;
        this.getAccomodation();
        this.createForm();
    };
    UserAccomodationComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        this.accomodationService.createAccomodation('GM' + this._id.substring(this._id.length - 7), '', values.acc_days, '', 'Not Paid', 'Not Confirmed', this._id, Number(Number(values.acc_days) * 100).toString()).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getAccomodation();
            }
            else {
                M.toast({ html: response.msg, classes: 'roundeds' });
                _this.getAccomodation();
            }
        });
    };
    UserAccomodationComponent.prototype.createForm = function () {
        this.submitted = false;
        this.accomodationForm = this.formBuilder.group({
            acc_days: ''
        });
    };
    UserAccomodationComponent.prototype.getAccomodation = function () {
        var _this = this;
        this.accomodationService.getAccomodation(this._id).subscribe(function (response) {
            if (response) {
                if (response.docs.length == 0) {
                    _this.hasAccomodation = false;
                    _this.accomodation = response.docs[0];
                }
                else {
                    _this.hasAccomodation = true;
                    _this.accomodation = response.docs[0];
                }
            }
        });
    };
    UserAccomodationComponent.prototype.processFile = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            formData.append('id', JSON.parse(localStorage.getItem('user')).id);
            this.accomodationService.uploadFile(formData).subscribe(function (response) {
                if (response.error == true) {
                    M.toast({ html: response.msg, classes: 'roundeds danger' });
                }
                else {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                }
            });
        }
    };
    UserAccomodationComponent.prototype.payOnline = function () {
        this.genTxnId(true);
        this.hashData(true);
        //this.finished();
        console.log("Pay " + this.txnId);
        console.log("HASH " + this.hashString);
    };
    UserAccomodationComponent.prototype.genTxnId = function (value) {
        if (value) {
            this.txnId = '';
            var d = new Date();
            this.txnId = JSON.parse(localStorage.getItem('user')).gmID + this.reverseString(d.getTime().toString());
            this.txnId = this.txnId.substr(0, 25);
        }
    };
    UserAccomodationComponent.prototype.reverseString = function (str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    };
    UserAccomodationComponent.prototype.hashData = function (value) {
        var _this = this;
        if (value) {
            var tamount = 100 + (100 * this.appService.getTransactionFee());
            var body = {
                key: this.appService.getKey(),
                salt: this.appService.getSalt(),
                amount: tamount,
                txnId: this.txnId,
                productInfo: this.appService.getProductInfo(),
                name: JSON.parse(localStorage.getItem('user')).name,
                email: JSON.parse(localStorage.getItem('user')).email_id,
                mobile_number: JSON.parse(localStorage.getItem('user')).mobile_number,
            };
            console.log("In Traxn HashData" + this.txnId);
            this.paymentService.genHash(body).subscribe(function (response) {
                if (response.error) {
                    _this.hashString = response.hash;
                }
            });
        }
    };
    UserAccomodationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-accomodation',
            template: __webpack_require__(/*! ./user-accomodation.component.html */ "./src/app/component/user/user-accomodation/user-accomodation.component.html"),
            styles: [__webpack_require__(/*! ./user-accomodation.component.css */ "./src/app/component/user/user-accomodation/user-accomodation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_accomodation_accomodation_service__WEBPACK_IMPORTED_MODULE_1__["AccomodationService"],
            src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserAccomodationComponent);
    return UserAccomodationComponent;
}());



/***/ }),

/***/ "./src/app/component/user/user-home/user-home.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/user/user-home/user-home.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono\");\r\n* {\r\n  box-sizing: border-box;\r\n  font-weight: normal;\r\n}\r\nbody {\r\n  text-align: center;\r\n  font-family: 'Roboto Mono';\r\n  padding: 1em;\r\n}\r\nh1 {\r\n  font-size: 2.2em;\r\n}\r\n.flip {\r\n  position: relative;\r\n}\r\n.flip > .front,\r\n.flip > .back {\r\n  display: block;\r\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n  transition-duration: .5s;\r\n  transition-property: opacity, -webkit-transform;\r\n  transition-property: transform, opacity;\r\n  transition-property: transform, opacity, -webkit-transform;\r\n}\r\n.flip > .front {\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n}\r\n.flip > .back {\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transform: rotateY(-180deg);\r\n          transform: rotateY(-180deg);\r\n}\r\n.flip:hover > .front {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n.flip:hover > .back {\r\n  opacity: 1;\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n}\r\n.flip.flip-vertical > .back {\r\n  -webkit-transform: rotateX(-180deg);\r\n          transform: rotateX(-180deg);\r\n}\r\n.flip.flip-vertical:hover > .front {\r\n  -webkit-transform: rotateX(180deg);\r\n          transform: rotateX(180deg);\r\n}\r\n.flip.flip-vertical:hover > .back {\r\n  -webkit-transform: rotateX(0deg);\r\n          transform: rotateX(0deg);\r\n}\r\n.flip {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-right: 2px;\r\n  margin-bottom: 1em;\r\n  width: 400px;\r\n}\r\n.flip > .front,\r\n.flip > .back {\r\n  display: block;\r\n  color: black;\r\n  width: inherit;\r\n  background-size: cover !important;\r\n  background-position: center !important;\r\n  height: 220px;\r\n  padding: 1em 2em;\r\n  background: white;\r\n  border-radius: 10px;\r\n}\r\n.flip > .front p,\r\n.flip > .back p {\r\n  font-size: 0.9125rem;\r\n  line-height: 160%;\r\n  color: black;\r\n}\r\n.text-shadow {\r\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXIvdXNlci1ob21lL3VzZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTtBQUNuRTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYTtDQUNkO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLGVBQWU7RUFDZixvRUFBb0U7RUFDcEUseUJBQXlCO0VBQ3pCLGdEQUF3QztFQUF4Qyx3Q0FBd0M7RUFBeEMsMkRBQXdDO0NBQ3pDO0FBQ0Q7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0NBQzFCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBNEI7VUFBNUIsNEJBQTRCO0NBQzdCO0FBQ0Q7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0Usb0NBQTRCO1VBQTVCLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUMxQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEOztFQUVFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7QUFFRDtFQUNFLHdvQkFBd29CO0NBQ3pvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vXCIpO1xyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJztcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIuMmVtO1xyXG59XHJcblxyXG4uZmxpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mbGlwID4gLmZyb250LFxyXG4uZmxpcCA+IC5iYWNrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbn1cclxuLmZsaXAgPiAuZnJvbnQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxufVxyXG4uZmxpcCA+IC5iYWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxufVxyXG4uZmxpcDpob3ZlciA+IC5mcm9udCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuLmZsaXA6aG92ZXIgPiAuYmFjayB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxuLmZsaXAuZmxpcC12ZXJ0aWNhbCA+IC5iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XHJcbn1cclxuLmZsaXAuZmxpcC12ZXJ0aWNhbDpob3ZlciA+IC5mcm9udCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbn1cclxuLmZsaXAuZmxpcC12ZXJ0aWNhbDpob3ZlciA+IC5iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbn1cclxuXHJcbi5mbGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuLmZsaXAgPiAuZnJvbnQsXHJcbi5mbGlwID4gLmJhY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxuICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmZsaXAgPiAuZnJvbnQgcCxcclxuLmZsaXAgPiAuYmFjayBwIHtcclxuICBmb250LXNpemU6IDAuOTEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMTYwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50ZXh0LXNoYWRvdyB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMC4xMjVyZW0gMC4xMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA0KSwgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgOXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwLjMxMjVyZW0gMC4zMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNCksIDExcHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMTNweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDE0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwLjYyNXJlbSAwLjYyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMTdweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDE4cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxOXB4IDE5cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMS4yNXJlbSAxLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/user/user-home/user-home.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/user/user-home/user-home.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content-wrapper-before\"></div>\r\n        <div class=\"content-header row\">\r\n            <div class=\"content-header-left col-md-4 col-12 mb-2\">\r\n                <h3 class=\"content-header-title\">Home</h3>\r\n            </div>\r\n            <div class=\"content-header-right col-md-8 col-12\">\r\n                <div class=\"breadcrumbs-top float-md-right\">\r\n                    <div class=\"breadcrumb-wrapper mr-1\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\"\r\n                                    [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n                            </li>\r\n                        </ol>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"content-body\">\r\n                    <section id=\"content-types\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row match-height justify-content-md-center\">\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-header\">\r\n                                            <h1 class=\"text-center\">MEPCO SCHLENK ENGINEERING COLLEGE,SIVAKASI</h1>\r\n                                            <h2 class=\"text-center\">GyanMitra19</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"justify-content-md-center\">\r\n\r\n\r\n            <div class=\"row justify-content-md-center\">\r\n\r\n                <div class=\"col-6\">\r\n                    <div class=\"flip float-right\">\r\n                        <div class=\"front\" style=\"background-image: url('../../../../public/images/Departments/CSEW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>IE(CSE) Students chapter</li>\r\n                                <li>IE(IT) Students chapter</li>\r\n                                <li>Microsoft Campus Club</li>\r\n                                <li>Google Students Club</li>\r\n                                <li>CSI Students chapter</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6 \">\r\n                    <div class=\"flip  float-left\">\r\n                        <div class=\"front\" style=\"background-image: url('public/images/Departments/MECHW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>IE(Mechanical) Students chapter</li>\r\n\t\t\t\t\t\t\t\t<li>SAE India</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div class=\"flip  float-right\">\r\n                        <div class=\"front\" style=\"background-image: url('public/images/Departments/electfrW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>IE(EEE) Students chapter</li>\r\n\t\t\t\t\t\t\t\t<li>IEEE Students Chapter</li>\r\n\t\t\t\t\t\t\t\t<li>IETE Students chapter</li>\r\n\t\t\t\t\t\t\t\t<li>ISTE Students Chapter</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                    <div class=\"flip  float-left\">\r\n                        <div class=\"front\" style=\"background-image: url('public/images/Departments/ELECTRONICSW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>IE(ECE) Students chapter</li>\r\n\t\t\t\t\t\t\t\t<li>Robotics Club</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                    <div class=\"flip  float-right\">\r\n                        <div class=\"front\" style=\"background-image: url('public/images/Departments/BIO-TECHW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>IE(BioTech) Students chapter</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col-6\">\r\n                    <div class=\"flip  float-left\">\r\n                        <div class=\"front\" style=\"background-image: url('../../../../public/images/Departments/CIVILW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>IE(Civil) Students chapter</li>\r\n\t\t\t\t\t\t\t\t<li>IACES</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                    <div class=\"flip  float-right\">\r\n                        <div class=\"front\" style=\"background-image: url('../../../../public/images/Departments/MBAW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>MBA Association</li>\r\n\t\t\t\t\t\t\t\t<li>Consumer Club</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                    <div class=\"flip  float-left\">\r\n                        <div class=\"front\" style=\"background-image: url('../../../../public/images/Departments/ITW.jpg')\">\r\n                        </div>\r\n                        <div class=\"back\">\r\n                            <h3>CLUBS</h3>\r\n                            <ul>\r\n                                <li>MCA Association</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/user/user-home/user-home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/user/user-home/user-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent() {
    }
    UserHomeComponent.prototype.ngOnInit = function () {
    };
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(/*! ./user-home.component.html */ "./src/app/component/user/user-home/user-home.component.html"),
            styles: [__webpack_require__(/*! ./user-home.component.css */ "./src/app/component/user/user-home/user-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/component/user/user-navbar/user-navbar.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/component/user/user-navbar/user-navbar.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3VzZXItbmF2YmFyL3VzZXItbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/user/user-navbar/user-navbar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/user/user-navbar/user-navbar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light\">\r\n  <div class=\"navbar-wrapper\">\r\n    <div class=\"navbar-container content\">\r\n      <div class=\"collapse navbar-collapse show\" id=\"navbar-mobile\">\r\n        <ul class=\"nav navbar-nav mr-auto float-left\">\r\n          <li class=\"nav-item d-block d-md-none\"><a class=\"nav-link nav-menu-main menu-toggle hidden-xs\" href=\"#\"><i\r\n                class=\"ft-menu\"></i></a></li>\r\n          <li class=\"nav-item d-none d-md-block\"><a class=\"nav-link nav-link-expand\" href=\"#\"><i class=\"ficon ft-maximize\"></i></a></li>\r\n          <li class=\"nav-item dropdown navbar-search\"><a class=\"nav-link dropdown-toggle hide\" data-toggle=\"dropdown\"\r\n              href=\"#\"><i class=\"ficon ft-search\"></i></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"arrow_box\">\r\n                <form>\r\n                  <div class=\"input-group search-box\">\r\n                    <div class=\"position-relative has-icon-right full-width\">\r\n                      <input class=\"form-control\" id=\"search\" type=\"text\" placeholder=\"Search here...\">\r\n                      <div class=\"form-control-position navbar-search-close\"><i class=\"ft-x\"> </i></div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav float-right\" *ngIf=\"authService.isLoggedIn()\">\r\n          <li class=\"dropdown dropdown-user nav-item\">\r\n            <a class=\"dropdown-toggle nav-link dropdown-user-link\" href=\"#\" data-toggle=\"dropdown\">\r\n                <span class=\"user-name text-bold-700 ml-1\" style=\"margin: 4px\">\r\n                    {{user.name}} &nbsp;&nbsp;\r\n                  </span>\r\n              <span *ngIf=\"gender == 'Female'\">\r\n                <i class=\"la la-2x la-female\" aria-hidden=\"true\">\r\n                </i>\r\n              </span>\r\n              <span *ngIf=\"gender == 'Male'\">\r\n                <i class=\"la la-2x la-male\" aria-hidden=\"true\">\r\n                </i>\r\n              </span>\r\n              <span class=\"avatar-online\">\r\n              </span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\">\r\n              <div class=\"arrow_box_right\">\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" [routerLink]=\"['/user/cart']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                  <i class=\" ft-shopping-cart\">\r\n                    </i>Cart\r\n                </a>\r\n                  \r\n                  <a class=\"dropdown-item\" [routerLink]=\"['/user/accomodation']\" [routerLinkActive]=\"['active']\"\r\n                  [routerLinkActiveOptions]=\"{exact:true}\">\r\n                  <i class=\" ft-home\"></i>Accomodation</a>\r\n                <div class=\"dropdown-divider\" *ngIf=\" authService.isLoggedIn()\"></div><a class=\"dropdown-item\" *ngIf=\" authService.isLoggedIn()\"\r\n                  (click)=\"onLogoutClick() \" href=\"#\"><i class=\"ft-power\"></i> Logout</a>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav float-right\" *ngIf=\"!authService.isLoggedIn()\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/user/register']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav float-right\" *ngIf=\"!authService.isLoggedIn()\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/user/login']\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{exact:true}\">Login</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<app-user-sidebar></app-user-sidebar>\r\n"

/***/ }),

/***/ "./src/app/component/user/user-navbar/user-navbar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/user/user-navbar/user-navbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNavbarComponent", function() { return UserNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserNavbarComponent = /** @class */ (function () {
    function UserNavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.gender = "Male";
    }
    UserNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            this.authService.getCurrentUser().subscribe(function (res) {
                _this.user = res.profile;
                _this.gender = res.profile.gender;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    UserNavbarComponent.prototype.onLogoutClick = function () {
        this.authService.destroySession();
        this.router.navigate(['/auth/login']);
    };
    UserNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-navbar',
            template: __webpack_require__(/*! ./user-navbar.component.html */ "./src/app/component/user/user-navbar/user-navbar.component.html"),
            styles: [__webpack_require__(/*! ./user-navbar.component.css */ "./src/app/component/user/user-navbar/user-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserNavbarComponent);
    return UserNavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/user/user-sidebar/user-sidebar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/user/user-sidebar/user-sidebar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3VzZXItc2lkZWJhci91c2VyLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/user/user-sidebar/user-sidebar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/user/user-sidebar/user-sidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-menu menu-fixed menu-light menu-accordion menu-shadow \" data-scroll-to-active=\"true\" data-img='public/images/backgrounds/02.jpg'>\r\n  <div class=\"navbar-header\">\r\n    <ul class=\"nav navbar-nav flex-row\">\r\n      <li class=\"nav-item mr-auto\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <h3 class=\"brand-text\">GyanMitra19 </h3>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item d-md-none\"><a class=\"nav-link close-navbar\"><i class=\"ft-x\"></i></a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"main-menu-content\">\r\n    <ul class=\"navigation navigation-main\" id=\"main-menu-navigation\" data-menu=\"menu-navigation\">\r\n      <li class=\"nav-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><i\r\n            class=\"fas fa-home\"></i><span class=\"menu-title\" data-i18n=\"\">Home</span></a></li>\r\n      <li class=\"nav-item\"><a [routerLink]=\"['/user/about']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><i\r\n            class=\"fas fa-info\"></i><span class=\"menu-title\" data-i18n=\"\">About</span></a></li>\r\n      <li class=\"nav-item\"><a [routerLink]=\"['/user/gyanmitra18']\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fas fa-history\"></i><span class=\"menu-title\" data-i18n=\"\">GyanMitra18</span></a></li>\r\n      <li class=\"nav-item\"><a [routerLink]=\"['/user/events']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><i\r\n            class=\"fas fa-flag-checkered \"></i><span class=\"menu-title\" data-i18n=\"\">Events</span></a></li>\r\n      <li class=\"nav-item\"><a [routerLink]=\"['/user/workshops']\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fas fa-tools\"></i><span class=\"menu-title\" data-i18n=\"\">Workshops</span></a></li>\r\n      <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/user/cart']\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fas fa-shopping-cart \"></i><span class=\"menu-title\"\r\n            data-i18n=\"\">Cart</span></a></li>\r\n      <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/user/accomodation']\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fab fa-fort-awesome\"></i><span class=\"menu-title\"\r\n            data-i18n=\"\">Accomodation</span></a></li>\r\n      <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/user/login']\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fas fa-sign-in-alt\"></i><span class=\"menu-title\"\r\n            data-i18n=\"\">Login</span></a></li>\r\n      <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/user/register']\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"far fa-edit\"></i><span class=\"menu-title\"\r\n            data-i18n=\"\">Register</span></a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"navigation-background\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/user/user-sidebar/user-sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/user/user-sidebar/user-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSidebarComponent", function() { return UserSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSidebarComponent = /** @class */ (function () {
    function UserSidebarComponent(authService, appService) {
        this.authService = authService;
        this.appService = appService;
    }
    UserSidebarComponent.prototype.ngOnInit = function () {
        this.loadSideBarImage();
    };
    UserSidebarComponent.prototype.loadSideBarImage = function () {
        if (this.appService.isProduction) {
            this.sideBarImage = this.appService.getFrontEndUrl() + 'public/images/backgrounds/02.jpg';
            this.sideBarImage.toString();
        }
        else {
            this.sideBarImage = this.appService.getFrontEndUrl() + 'public/images/backgrounds/02.jpg';
        }
    };
    UserSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-sidebar',
            template: __webpack_require__(/*! ./user-sidebar.component.html */ "./src/app/component/user/user-sidebar/user-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./user-sidebar.component.css */ "./src/app/component/user/user-sidebar/user-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], UserSidebarComponent);
    return UserSidebarComponent;
}());



/***/ }),

/***/ "./src/app/component/user/user.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/user/user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/user/user.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/user/user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/component/user/user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/user/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
        //  this.reloadToLoadJs();
    };
    UserComponent.prototype.reloadToLoadJs = function () {
        var urlParams = [];
        window.location.search.replace("?", "").split("&").forEach(function (e, i) {
            var p = e.split("=");
            urlParams[p[0]] = p[1];
        });
        // We have all the params now -> you can access it by name
        console.log(urlParams["loaded"]);
        if (urlParams["loaded"]) { }
        else {
            var win = window;
            win.location.search = '?loaded=1';
            //win.location.reload('?loaded=1');
        }
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/component/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/component/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/component/user/workshops/workshops.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/user/workshops/workshops.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    white-space:normal !important;\r\n    word-wrap: break-word; \r\n}\r\n\r\n/* Form Style */\r\n\r\na:hover,a:focus{\r\n    text-decoration: none;\r\n    outline: none;\r\n   }\r\n\r\n#accordion .panel{\r\n    border: none;\r\n    box-shadow: none;\r\n    border-radius: 0;\r\n    margin-bottom: 5px;\r\n   }\r\n\r\n#accordion .panel-heading{\r\n    padding: 0;\r\n    border-radius: 0;\r\n    text-align: center;\r\n    border: none;\r\n   }\r\n\r\n#accordion .panel-title a{\r\n    display: block;\r\n    padding: 15px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    background: #0C0119;\r\n    transition: all 0.5s ease 0s;\r\n   }\r\n\r\n#accordion .panel-title a:hover{\r\n    background: rgba(12, 1, 25, 0.8);\r\n   }\r\n\r\n#accordion .panel-body{\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #29b0a0;\r\n    padding: 15px 20px;\r\n    line-height: 25px;\r\n    border: none;\r\n    position: relative;\r\n   }\r\n\r\n#accordion .panel-body:after{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -30px;\r\n    left: 40px;\r\n    border: 15px solid transparent;\r\n    border-bottom: 15px solid #29b0a0;\r\n   }\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXIvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6Qjs7QUFFRCxnQkFBZ0I7O0FBQ2hCO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZDs7QUFFRDtJQUNDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQjs7QUFFRDtJQUNDLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYjs7QUFFRDtJQUNDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3Qjs7QUFFRDtJQUNDLGlDQUFpQztJQUNqQzs7QUFFRDtJQUNDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjs7QUFFRDtJQUNDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3VzZXIvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICAgIHdoaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyBcclxufVxyXG5cclxuLyogRm9ybSBTdHlsZSAqL1xyXG5hOmhvdmVyLGE6Zm9jdXN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICB9XHJcbiAgIFxyXG4gICAjYWNjb3JkaW9uIC5wYW5lbHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAjYWNjb3JkaW9uIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgIH1cclxuICAgXHJcbiAgICNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzBDMDExOTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XHJcbiAgIH1cclxuICAgXHJcbiAgICNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxLCAyNSwgMC44KTtcclxuICAgfVxyXG4gICBcclxuICAgI2FjY29yZGlvbiAucGFuZWwtYm9keXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzI5YjBhMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB9XHJcbiAgIFxyXG4gICAjYWNjb3JkaW9uIC5wYW5lbC1ib2R5OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjMjliMGEwO1xyXG4gICB9XHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/component/user/workshops/workshops.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/user/workshops/workshops.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-wrapper-before\"></div>\r\n    <div class=\"content-header row\">\r\n      <span class=\"content-header-left h3 col-md-3 col-3 mb-3\">\r\n        <span class=\"content-header-title\">Workshops\r\n        </span>\r\n      </span>\r\n      <span class=\"content-header-left col-md-3 col-3 mb-3\">\r\n        <select id=\"deptSelect\" (click)=\"filter()\" [(ngModel)]=\"searchText\" class=\"custom-select float-right\">\r\n          <option class=\"custom-select\" *ngFor=\"let dept of departments\" value=\"{{dept.name}}\">\r\n            {{dept.name}}\r\n          </option>\r\n        </select>\r\n      </span>\r\n      <span class=\"content-header-right col-md-3 col-3\">\r\n        <div class=\"breadcrumbs-top float-md-right\">\r\n          <div class=\"breadcrumb-wrapper mr-1\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/user/home']\" [routerLinkActive]=\"['active']\"\r\n                  [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n              </li>\r\n              <li class=\"breadcrumb-item active\">Workshops\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </span>\r\n      <span class=\"content-header-right col-md-3 col-3\">\r\n        <div class=\"row float-right white\">\r\n          <span *ngIf=\"this.currentPage != 1\">\r\n            <span class=\"btn btn-sm btn-info\" (click)=\"previousPage()\"> &lt; </span>\r\n          </span>\r\n          &nbsp; Page {{currentPage}} &nbsp;\r\n          <span class=\"btn btn-sm btn-info\" (click)=\"nextPage()\"> &gt; </span>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <br />\r\n    <div class=\"content-body\">\r\n      <section id=\"content-types\">\r\n        <div class=\"row match-height\">\r\n          <div class=\"col-4\" *ngFor=\"let workshop of workshops | filterEventsBasedOnDepartment : searchText\">\r\n            <div class=\"card pull-up\">\r\n              <div class=\"card-body\">\r\n                <h3 class=\"card-title\">{{workshop.title}} <span class=\"card-title activator grey-text text-darken-4 float-right\"><i\r\n                      class=\"fas fa-ellipsis-v right\"></i></span></h3>\r\n                <h6 class=\"card-subtitle text-muted\">Department of {{workshop.department_id.name}}</h6>\r\n              </div>\r\n              <img class=\"activator card-image\" src=\"http://www.gyanmitra19.mepcoeng.ac.in/assests/images/events/{{workshop.image_name}}\">\r\n              \r\n              <div class=\"card-body\">\r\n                Contact <p class=\"card-text\">\r\n                  <a href=\"mailto:{{workshop.contact_email}}\">{{workshop.contact_email}}</a>\r\n                </p>\r\n              </div>\r\n              <div class=\"card-reveal\">\r\n                <span class=\"card-title grey-text text-darken-4\">Pre Requesites<i class=\"fas fa-times float-right\"></i></span>\r\n                {{workshop.rules}}\r\n                <hr />\r\n\t\t\t\t\r\n\t\t\t\t<span class=\"card-title grey-text text-darken-4\">Description</span>\r\n\t\t\t\t{{workshop.description}}\r\n\t\t\t\t<hr>\r\n                <h4>Timing</h4>\r\n\r\n                Date : {{workshop.event_date | date}}\r\n                {{workshop.start_time}} -\r\n                {{workshop.end_time}}\r\n              </div>\r\n              <div class=\"card-footer border-top-blue-grey border-top-lighten-5 text-muted\">\r\n                <span class=\"float-left\"> {{workshop.event_date | date }}</span>\r\n                <span class=\"float-right\">\r\n                  <ng-container *ngIf=\"user; else notLoggedIn\">\r\n                      <ng-container *ngIf=\"user.cart_confirmed; else cartNotConfirmed\">\r\n                          <button type=\"button\" class=\"btn btn-outline-danger\" style=\"width:100%\">\r\n                              Cart already Confirmed\r\n                            </button>\r\n                      </ng-container>\r\n                      <ng-template #cartNotConfirmed>\r\n                          <div *ngIf=\"!registeredEvents.includes(workshop._id)\">\r\n                              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"selectWorkshop(workshop._id)\" style=\"width:100%\">\r\n                                Register Now <i class=\"la la-angle-right\"></i>\r\n                              </button>\r\n                            </div>\r\n                            <div *ngIf=\"registeredEvents.includes(workshop._id)\">\r\n                              <button type=\"button\" *ngIf=\"registeredEvents.includes(workshop._id)d\" class=\"btn btn-sm round btn-bg-gradient-x-purple-red\"\r\n                                style=\"width:100%\">\r\n                                Already Registered | Parallel Event\r\n                              </button>\r\n                            </div>\r\n                      </ng-template>\r\n                    </ng-container>\r\n                    <ng-template #notLoggedIn>\r\n                      <a class=\"btn btn-lg btn-glow btn-bg-gradient-x-blue-purple-2\" style=\"width:100%\" [routerLink]=\"['/user/login']\"\r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Login to Register</a>\r\n                    </ng-template>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/user/workshops/workshops.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/user/workshops/workshops.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorkshopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsComponent", function() { return WorkshopsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/event/event.service */ "./src/app/services/event/event.service.ts");
/* harmony import */ var src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventRegistration/event-registration.service */ "./src/app/services/eventRegistration/event-registration.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/department/department.service */ "./src/app/services/department/department.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkshopsComponent = /** @class */ (function () {
    function WorkshopsComponent(eventService, eventRegistrationService, authService, deptService, formBuilder) {
        var _this = this;
        this.eventService = eventService;
        this.eventRegistrationService = eventRegistrationService;
        this.authService = authService;
        this.deptService = deptService;
        this.formBuilder = formBuilder;
        this.registeredEvents = [];
        this.workshops = [];
        this.statuses = {};
        this.departments = [];
        this.searchText = 'Computer Science and Engineering and Information Technology';
        this.isCartConfirmed = true;
        this.statusesLoaded = false;
        this.currentPage = 1;
        this.currentPage = 1;
        this.eventService.readWithPageAndDepartment('Workshop', this.searchText, 1).subscribe(function (response) {
            _this.workshops = response;
            if (_this.currentUserId != '') {
                _this.checkEventRegistrations();
            }
        });
    }
    WorkshopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserId != '') {
            this.eventService.readWithPageAndDepartment('Workshop', 'All', 1).subscribe(function (response) {
                _this.workshops = response;
            });
        }
        this.currentPage = 1;
        this.currentUserId = '';
        this.user = (JSON.parse(localStorage.getItem('user')));
        if (this.user != null) {
            this.currentUserId = this.user.id;
        }
        this.getRegistrations();
        this.loadFull(this.currentPage);
    };
    WorkshopsComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (response) {
            _this.user = response.profile;
        });
    };
    WorkshopsComponent.prototype.getWorkshop = function (page) {
        var _this = this;
        this.eventService.readWithPageAndDepartment('Workshop', this.searchText, page).subscribe(function (response) {
            if (response.length == []) {
                _this.currentPage -= 1;
            }
            else {
                _this.workshops = response;
                _this.getRegistrations();
            }
            if (_this.currentUserId != '') {
                _this.checkEventRegistrations();
            }
        });
        this.deptService.readDepartment(0).subscribe(function (response) {
            _this.departments = response;
        });
    };
    WorkshopsComponent.prototype.getRegistrations = function () {
        var _this = this;
        this.eventRegistrationService.getRegisteredEvents(this.currentUserId, 'Workshop').subscribe(function (response) {
            _this.registeredEvents = response.msg;
        });
    };
    WorkshopsComponent.prototype.checkEventRegistrations = function () {
        var _this = this;
        this.statuses = {};
        this.workshops.forEach(function (workshop) {
            _this.eventRegistrationService.checkRegistration(workshop._id, _this.currentUserId).subscribe(function (response) {
                _this.statuses[workshop._id] = response;
            });
        });
        this.statusesLoaded = true;
    };
    WorkshopsComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.getWorkshop(this.currentPage);
    };
    WorkshopsComponent.prototype.previousPage = function () {
        this.currentPage = this.currentPage - 1;
        this.getWorkshop(this.currentPage);
    };
    WorkshopsComponent.prototype.reloadEvents = function () {
        this.getWorkshop(this.currentPage);
    };
    WorkshopsComponent.prototype.selectWorkshop = function (_id) {
        var _this = this;
        var user_id = JSON.parse(localStorage.getItem('user')).id;
        this.eventRegistrationService.checkWorkshopRegistration(_id, user_id).subscribe(function (response) {
            if (response.error) {
                M.toast({ html: response.msg, classes: 'roundeds' });
            }
            else {
                if (response.registered) {
                    M.toast({ html: response.msg, classes: 'roundeds' });
                }
                else {
                    _this.eventRegistrationService.createWorkshopRegistration(_id, user_id).subscribe(function (response) {
                        if (response.error) {
                            M.toast({ html: response.msg, classes: 'roundeds' });
                        }
                        else {
                            M.toast({ html: response.msg, classes: 'roundeds' });
                            _this.reloadEvents();
                        }
                    });
                }
            }
        });
    };
    WorkshopsComponent.prototype.filter = function () {
        this.currentPage = 1;
        this.loadFull(this.currentPage);
    };
    WorkshopsComponent.prototype.loadFull = function (page) {
        var _this = this;
        if (this.searchText == 'All') {
            this.eventService.readWithPageAndDepartment('Workshop', 'All', this.currentPage).subscribe(function (response) {
                if (response.length == []) {
                    _this.currentPage -= 1;
                }
                else {
                    _this.getRegistrations();
                    _this.workshops = response;
                }
            });
        }
        else {
            this.eventService.readWithPageAndDepartment('Workshop', this.searchText, page).subscribe(function (response) {
                if (response.length == []) {
                    _this.currentPage -= 1;
                }
                else {
                    _this.getRegistrations();
                    _this.workshops = response;
                }
            });
        }
        this.deptService.readDepartment(0).subscribe(function (response) {
            _this.departments = response;
        });
    };
    WorkshopsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workshops',
            template: __webpack_require__(/*! ./workshops.component.html */ "./src/app/component/user/workshops/workshops.component.html"),
            styles: [__webpack_require__(/*! ./workshops.component.css */ "./src/app/component/user/workshops/workshops.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_event_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"],
            src_app_services_eventRegistration_event_registration_service__WEBPACK_IMPORTED_MODULE_2__["EventRegistrationService"],
            src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_department_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], WorkshopsComponent);
    return WorkshopsComponent;
}());



/***/ }),

/***/ "./src/app/guard/admin/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guard/admin/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isAdmin()) {
            this.router.navigate(['/user/home']);
            return false;
        }
        else {
            return true;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guard/auth/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guard/auth/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pipes/filter-events-based-on-department.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pipes/filter-events-based-on-department.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: FilterEventsBasedOnDepartmentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterEventsBasedOnDepartmentPipe", function() { return FilterEventsBasedOnDepartmentPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterEventsBasedOnDepartmentPipe = /** @class */ (function () {
    function FilterEventsBasedOnDepartmentPipe() {
    }
    FilterEventsBasedOnDepartmentPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it.department_id.name != undefined) {
                return it.department_id.name.toLowerCase().includes(searchText);
            }
            else {
                return true;
            }
        });
    };
    FilterEventsBasedOnDepartmentPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterEventsBasedOnDepartment'
        })
    ], FilterEventsBasedOnDepartmentPipe);
    return FilterEventsBasedOnDepartmentPipe;
}());



/***/ }),

/***/ "./src/app/pipes/resolve-category.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/resolve-category.pipe.ts ***!
  \************************************************/
/*! exports provided: ResolveCategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveCategoryPipe", function() { return ResolveCategoryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResolveCategoryPipe = /** @class */ (function () {
    function ResolveCategoryPipe() {
    }
    ResolveCategoryPipe.prototype.transform = function (value, args) {
        return null;
    };
    ResolveCategoryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'resolveCategory'
        })
    ], ResolveCategoryPipe);
    return ResolveCategoryPipe;
}());



/***/ }),

/***/ "./src/app/pipes/resolvecollege.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/resolvecollege.pipe.ts ***!
  \**********************************************/
/*! exports provided: ResolvecollegePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvecollegePipe", function() { return ResolvecollegePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/college/college.service */ "./src/app/services/college/college.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResolvecollegePipe = /** @class */ (function () {
    function ResolvecollegePipe(clgService) {
        var _this = this;
        this.clgService = clgService;
        this.clgService.readCollege(0).subscribe(function (response) {
            _this.colleges = response;
        });
    }
    ResolvecollegePipe.prototype.ngOnInit = function () {
    };
    ResolvecollegePipe.prototype.getCollege = function (_id) {
        if (_id == '') {
            return '';
        }
        else {
            return this.colleges.filter(function (data) {
                return data._id == _id;
            });
        }
    };
    ResolvecollegePipe.prototype.transform = function (value) {
        var found = this.getCollege(value);
        return found[0].name;
    };
    ResolvecollegePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'resolvecollege'
        }),
        __metadata("design:paramtypes", [src_app_services_college_college_service__WEBPACK_IMPORTED_MODULE_1__["CollegeService"]])
    ], ResolvecollegePipe);
    return ResolvecollegePipe;
}());



/***/ }),

/***/ "./src/app/pipes/rules-transform.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/rules-transform.pipe.ts ***!
  \***********************************************/
/*! exports provided: RulesTransformPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesTransformPipe", function() { return RulesTransformPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RulesTransformPipe = /** @class */ (function () {
    function RulesTransformPipe() {
    }
    RulesTransformPipe.prototype.transform = function (input, args) {
        var arr = input.split('$');
        return arr;
    };
    RulesTransformPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'rulesTransform'
        })
    ], RulesTransformPipe);
    return RulesTransformPipe;
}());



/***/ }),

/***/ "./src/app/pipes/searchfilter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/searchfilter.pipe.ts ***!
  \********************************************/
/*! exports provided: SearchfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchfilterPipe", function() { return SearchfilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchfilterPipe = /** @class */ (function () {
    function SearchfilterPipe() {
    }
    SearchfilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it.name != undefined) {
                return it.name.toLowerCase().includes(searchText);
            }
            else if (it.title != undefined) {
                return it.title.toLowerCase().includes(searchText);
            }
        });
    };
    SearchfilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchfilter'
        })
    ], SearchfilterPipe);
    return SearchfilterPipe;
}());



/***/ }),

/***/ "./src/app/services/accomodation/accomodation.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/accomodation/accomodation.service.ts ***!
  \***************************************************************/
/*! exports provided: AccomodationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomodationService", function() { return AccomodationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for Accomodation
// Created by Aravind Raj
// 23/12/18
var AccomodationService = /** @class */ (function () {
    function AccomodationService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'accommodation/';
    }
    AccomodationService.prototype.createAccomodation = function (acc_transaction_id, acc_mode_of_payment, acc_days, acc_file_name, acc_payment_status, acc_status, user_id, acc_amount) {
        var body = {
            acc_transaction_id: acc_transaction_id,
            acc_mode_of_payment: acc_mode_of_payment,
            acc_days: acc_days,
            acc_file_name: acc_file_name,
            acc_payment_status: acc_payment_status,
            acc_status: acc_status,
            user_id: user_id,
            acc_amount: acc_amount
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AccomodationService.prototype.populateAccomodation = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'populate');
    };
    AccomodationService.prototype.confirmAccomodation = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'confirmAccommodation/' + id), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AccomodationService.prototype.approveAccomodation = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'approveAccommodation/' + id), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AccomodationService.prototype.deproveAccomodation = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'deproveAccommodation/' + id), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AccomodationService.prototype.refusePayment = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'refusePayment/' + id), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AccomodationService.prototype.readAccomodation = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    AccomodationService.prototype.getAccomodation = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '?id=' + id);
    };
    AccomodationService.prototype.uploadFile = function (formData) {
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        return this.http.post(this.app.getUrl(this.baseUrl) + 'uploadImage/' + formData.get('id'), formData);
    };
    AccomodationService.prototype.updateAccomodation = function (id, acc_transaction_id, acc_mode_of_payment, acc_days, acc_file_name, acc_payment_status, acc_status, user_id, acc_amount) {
        var body = {
            _id: id,
            acc_transaction_id: acc_transaction_id,
            acc_mode_of_payment: acc_mode_of_payment,
            acc_days: acc_days,
            acc_file_name: acc_file_name,
            acc_payment_status: acc_payment_status,
            acc_status: acc_status,
            user_id: user_id,
            acc_amount: acc_amount
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AccomodationService.prototype.deleteAccomodation = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AccomodationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], AccomodationService);
    return AccomodationService;
}());



/***/ }),

/***/ "./src/app/services/app/app.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/app/app.service.ts ***!
  \*********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.server = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend.server;
    }
    AppService.prototype.getUrl = function (uri) {
        if (uri === void 0) { uri = ''; }
        return this.server + "/" + uri;
    };
    AppService.prototype.getFrontEndUrl = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].frontend.server;
    };
    AppService.prototype.getKey = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].payment.key;
    };
    AppService.prototype.getSalt = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].payment.salt;
    };
    AppService.prototype.getPaymentUrl = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].payment.url;
    };
    AppService.prototype.getAccomodationAmount = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].payment.accomodation;
    };
    AppService.prototype.getTransactionFee = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].payment.transcationFee;
    };
    AppService.prototype.getProductInfo = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].payment.productInfo;
    };
    AppService.prototype.isProduction = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, app, jwtHelper, router) {
        this.http = http;
        this.app = app;
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    AuthService.prototype.authenticate = function (email_id, password) {
        var body = { email_id: email_id, password: password };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl('auth/authenticate'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    AuthService.prototype.createSession = function (response) {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
    };
    AuthService.prototype.destroySession = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (token) {
            if (this.jwtHelper.isTokenExpired(token)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getCurrentUser = function () {
        var token = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get(this.app.getUrl('auth/profile'), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getCurrentUserId = function () {
        if (this.isLoggedIn()) {
            var user = localStorage.getItem('user');
            return JSON.parse(user).id;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.getUserType = function () {
        if (this.isLoggedIn()) {
            var user = localStorage.getItem('user');
            return JSON.parse(user).type;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isAdmin = function () {
        if (this.isLoggedIn()) {
            var user = localStorage.getItem('user');
            var type = JSON.parse(user).type;
            if (type === 'admin') {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/category/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for Category
// Created by Aravind Raj
// 23/12/18
var CategoryService = /** @class */ (function () {
    function CategoryService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'category/';
    }
    CategoryService.prototype.createCategory = function (name) {
        var body = { name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CategoryService.prototype.readCategory = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    CategoryService.prototype.updateCategory = function (id, name) {
        var body = { _id: id, name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CategoryService.prototype.deleteCategory = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CategoryService.prototype.ReadACategory = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/college/college.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/college/college.service.ts ***!
  \*****************************************************/
/*! exports provided: CollegeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeService", function() { return CollegeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollegeService = /** @class */ (function () {
    function CollegeService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'college/';
    }
    CollegeService.prototype.createCollege = function (name, locale) {
        var body = { name: name, locale: locale };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CollegeService.prototype.readCollege = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + "?page=" + page);
    };
    CollegeService.prototype.updateCollege = function (id, name, locale) {
        var body = { _id: id, name: name, locale: locale };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CollegeService.prototype.deleteCollege = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CollegeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], CollegeService);
    return CollegeService;
}());



/***/ }),

/***/ "./src/app/services/configurations/configurations.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/configurations/configurations.service.ts ***!
  \*******************************************************************/
/*! exports provided: ConfigurationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsService", function() { return ConfigurationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationsService = /** @class */ (function () {
    function ConfigurationsService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'config/';
    }
    ConfigurationsService.prototype.createConfig = function (name, value) {
        var body = { name: name, value: value };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    ConfigurationsService.prototype.readConfig = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    ConfigurationsService.prototype.updateConfig = function (id, name, value) {
        var body = { _id: id, name: name, value: value };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    ConfigurationsService.prototype.deleteConfig = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    ConfigurationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ConfigurationsService);
    return ConfigurationsService;
}());



/***/ }),

/***/ "./src/app/services/course/course.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course/course.service.ts ***!
  \***************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for Course
// Created by Aravind Raj
// 23/12/18
var CourseService = /** @class */ (function () {
    function CourseService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'course/';
    }
    CourseService.prototype.createCourse = function (name) {
        var body = { name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CourseService.prototype.readCourse = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + "?page=" + page);
    };
    CourseService.prototype.updateCourse = function (id, name) {
        var body = { _id: id, name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CourseService.prototype.deleteCourse = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/services/degree/degree.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/degree/degree.service.ts ***!
  \***************************************************/
/*! exports provided: DegreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreeService", function() { return DegreeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DegreeService = /** @class */ (function () {
    function DegreeService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'degree/';
    }
    DegreeService.prototype.createDegree = function (name) {
        var body = { name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    DegreeService.prototype.readDegree = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + "?page=" + page);
    };
    DegreeService.prototype.updateDegree = function (id, name) {
        var body = { _id: id, name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    DegreeService.prototype.deleteDegree = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    DegreeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], DegreeService);
    return DegreeService;
}());



/***/ }),

/***/ "./src/app/services/department/department.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/department/department.service.ts ***!
  \***********************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepartmentService = /** @class */ (function () {
    function DepartmentService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'department/';
    }
    DepartmentService.prototype.createDepartment = function (name) {
        var body = { name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    DepartmentService.prototype.readDepartment = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + "?page=" + page);
    };
    DepartmentService.prototype.updateDepartment = function (id, name) {
        var body = { _id: id, name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    DepartmentService.prototype.deleteDepartment = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    DepartmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/services/event/event.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/event/event.service.ts ***!
  \*************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = /** @class */ (function () {
    function EventService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'event/';
    }
    EventService.prototype.createEvent = function (title, category_id, department_id, description, image_name, rules, start_time, end_time, event_date, prelims, round_1, round_2, finals, min_members, max_members, max_limit, contact_email, venue, amount, allow_gender_mixing, resourse_person) {
        var body = {
            title: title,
            category_id: category_id,
            department_id: department_id,
            description: description,
            image_name: image_name,
            rules: rules,
            start_time: start_time,
            end_time: end_time,
            event_date: event_date,
            prelims: prelims,
            round_1: round_1,
            round_2: round_2,
            finals: finals,
            min_members: min_members,
            max_members: max_members,
            max_limit: max_limit,
            contact_email: contact_email,
            venue: venue,
            amount: amount,
            allow_gender_mixing: allow_gender_mixing,
            resourse_person: resourse_person
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventService.prototype.uploadFile = function (formData) {
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        return this.http.post(this.app.getUrl(this.baseUrl) + 'uploadImage/' + formData.get('_id'), formData);
    };
    EventService.prototype.readAllEvents = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'all');
    };
    EventService.prototype.readWithEventCategory = function (event, page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + event + '/' + page);
    };
    EventService.prototype.readEvent = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '?page=' + page);
    };
    EventService.prototype.readWithPage = function (page) {
        var headers = new Headers();
        return this.http.get(this.app.getUrl(this.baseUrl) + 'all' + '/' + page);
    };
    EventService.prototype.readWithPageAndDepartment = function (type, department, page) {
        var headers = new Headers();
        return this.http.get(this.app.getUrl(this.baseUrl) + type + '/' + department + '/' + page);
    };
    EventService.prototype.updateEvent = function (id, title, category_id, department_id, description, image_name, rules, start_time, end_time, event_date, prelims, round_1, round_2, finals, min_members, max_members, max_limit, contact_email, venue, amount, allow_gender_mixing, resource_person) {
        var body = {
            title: title,
            category_id: category_id,
            department_id: department_id,
            description: description,
            image_name: image_name,
            rules: rules,
            start_time: start_time,
            end_time: end_time,
            prelims: prelims,
            round_1: round_1,
            round_2: round_2,
            finals: finals,
            min_members: min_members,
            max_members: max_members,
            max_limit: max_limit,
            contact_email: contact_email,
            venue: venue,
            amount: amount,
            allow_gender_mixing: allow_gender_mixing,
            resource_person: resource_person
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventService.prototype.deleteEvent = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/eventRegistration/event-registration.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/eventRegistration/event-registration.service.ts ***!
  \**************************************************************************/
/*! exports provided: EventRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegistrationService", function() { return EventRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventRegistrationService = /** @class */ (function () {
    function EventRegistrationService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'eventRegistration/';
    }
    EventRegistrationService.prototype.createEventRegistration = function (user_id, event_id) {
        var data = {
            event_id: event_id,
            user_id: user_id,
            registration_type: "Single"
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'newEventRegistration'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventRegistrationService.prototype.createEventWithTeamRegistration = function (user_id, event_id, name, position) {
        var data = {
            user_id: user_id,
            event_id: event_id,
            name: name,
            position: position
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'newTeamEventRegistration'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventRegistrationService.prototype.getRegisteredEvents = function (user_id, type) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'registeredEvents/' + user_id + '/' + type);
    };
    EventRegistrationService.prototype.createWorkshopRegistration = function (event_id, id) {
        var data = {
            event_id: event_id,
            user_id: id,
            registration_type: 'Single'
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'newWorkshopRegistration'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventRegistrationService.prototype.getPendingDDConfirmation = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'checkPendingDDConfirmation/');
    };
    EventRegistrationService.prototype.checkWorkshopRegistration = function (user_id, event_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'checkRegistration/' + user_id + "/" + event_id);
    };
    EventRegistrationService.prototype.checkEventRegistration = function (user_id, event_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'checkEventRegistration/' + event_id + "/" + user_id);
    };
    EventRegistrationService.prototype.getUserWorkshops = function (user_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'userRegisteredEvents/' + user_id + "/Workshop");
    };
    EventRegistrationService.prototype.getUserEvents = function (user_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'userRegisteredEvents/' + user_id + "/Event");
    };
    EventRegistrationService.prototype.confirmPayment = function (user_id) {
        var data = {
            user_id: user_id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'confirmCartPayment'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventRegistrationService.prototype.checkRegistration = function (event_id, user_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '/checkRegistration/' + event_id + '/' + user_id);
    };
    EventRegistrationService.prototype.getUnconfirmedDDPayments = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '/getUnconfirmedDDPayments');
    };
    EventRegistrationService.prototype.getEvents = function (event_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + "events/" + event_id);
    };
    EventRegistrationService.prototype.cancelWorkshopRegistration = function (_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl) + _id);
    };
    EventRegistrationService.prototype.cancelEventRegistration = function (_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl) + _id);
    };
    EventRegistrationService.prototype.getUserByEmail = function (email_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + email_id);
    };
    EventRegistrationService.prototype.updateAttendance = function (id, participation) {
        var body = {
            participation: participation
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    EventRegistrationService.prototype.getCollegeMates = function (event_id, user_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'getCollegeMates/' + event_id + '/' + user_id);
    };
    EventRegistrationService.prototype.getEventById = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'getEvent/' + id);
    };
    EventRegistrationService.prototype.getCollegeUsers = function (college) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'getCollegeParticipant/' + college);
    };
    EventRegistrationService.prototype.checkEventRegistrationStatus = function (user_id, event_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get(this.app.getUrl(this.baseUrl) + 'checkEventRegistrationStatus/' + event_id + '/' + user_id).subscribe(function (response) {
            return response.registered;
        });
    };
    EventRegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], EventRegistrationService);
    return EventRegistrationService;
}());



/***/ }),

/***/ "./src/app/services/participationstatus/participationstatus.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/participationstatus/participationstatus.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ParticipationstatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipationstatusService", function() { return ParticipationstatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipationstatusService = /** @class */ (function () {
    function ParticipationstatusService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'participationstatus/';
    }
    ParticipationstatusService.prototype.createParticipationStatus = function (name, score) {
        var body = {
            name: name,
            score: score
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    ParticipationstatusService.prototype.readParticipationStatus = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + "?page=" + page);
    };
    ParticipationstatusService.prototype.updateParticipationStatus = function (id, name, score) {
        var body = { _id: id, name: name, score: score };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    ParticipationstatusService.prototype.deleteParticipationStatus = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    ParticipationstatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ParticipationstatusService);
    return ParticipationstatusService;
}());



/***/ }),

/***/ "./src/app/services/payment/payment.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/payment/payment.service.ts ***!
  \*****************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentService = /** @class */ (function () {
    function PaymentService(http, app, paymentService) {
        this.http = http;
        this.app = app;
        this.paymentService = paymentService;
        this.baseUrl = 'payment/';
    }
    PaymentService.prototype.genHash = function (data) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'getHash'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], PaymentService])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/services/registration/registration.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/registration/registration.service.ts ***!
  \***************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for registration
// Created by Aravind Raj
// 23/12/18
var RegistrationService = /** @class */ (function () {
    function RegistrationService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'registration/';
    }
    RegistrationService.prototype.checkRegistration = function (event_id, user_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '/checkRegistration/' + user_id + '/' + event_id);
    };
    RegistrationService.prototype.createRegistration = function (user_id, registration_type, registration_id) {
        var body = {
            user_id: user_id,
            registration_id: registration_id,
            registration_type: registration_type
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RegistrationService.prototype.checkConfirmation = function (user_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '/hasConfirmed/' + user_id);
    };
    RegistrationService.prototype.readRegistration = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    RegistrationService.prototype.updateRegistration = function (id, user_id, registration_type, registration_id) {
        var body = {
            _id: id,
            user_id: user_id,
            registration_id: registration_id,
            registration_type: registration_type
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RegistrationService.prototype.deleteCategory = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/services/role/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/role/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for role
// Created by Aravind Raj
// 23/12/18
var RoleService = /** @class */ (function () {
    function RoleService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'role/';
    }
    RoleService.prototype.createRole = function (name) {
        var body = {
            name: name
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RoleService.prototype.readRole = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '?page=' + page);
    };
    RoleService.prototype.updateRole = function (id, name) {
        var body = {
            _id: id,
            name: name
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RoleService.prototype.deleteRole = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RoleService.prototype.readRoles = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/services/role_user/role-user.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/role_user/role-user.service.ts ***!
  \*********************************************************/
/*! exports provided: RoleUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleUserService", function() { return RoleUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for role_user
// Created by Aravind Raj
// 23/12/18
var RoleUserService = /** @class */ (function () {
    function RoleUserService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'role_user/';
    }
    RoleUserService.prototype.createRoleUser = function (role_id, user_id) {
        var body = {
            role_id: role_id,
            user_id: user_id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RoleUserService.prototype.readRoleUser = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    RoleUserService.prototype.updateRoleUser = function (id, role_id, user_id) {
        var body = {
            _id: id,
            role_id: role_id,
            user_id: user_id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RoleUserService.prototype.deleteRoleUser = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    RoleUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], RoleUserService);
    return RoleUserService;
}());



/***/ }),

/***/ "./src/app/services/team/team.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/team/team.service.ts ***!
  \***********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for team
// Created by Aravind Raj
// 23/12/18
var TeamService = /** @class */ (function () {
    function TeamService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'team/';
    }
    TeamService.prototype.createTeam = function (name, user_id) {
        var body = {
            name: name,
            user_id: user_id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    TeamService.prototype.readTeam = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    TeamService.prototype.updateTeam = function (id, name, user_id) {
        var body = {
            _id: id,
            name: name,
            user_id: user_id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    TeamService.prototype.deleteTeam = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/services/team_member/team-member.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/team_member/team-member.service.ts ***!
  \*************************************************************/
/*! exports provided: TeamMemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberService", function() { return TeamMemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for team_member
// Created by Aravind Raj
// 23/12/18
var TeamMemberService = /** @class */ (function () {
    function TeamMemberService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'team_member/';
    }
    TeamMemberService.prototype.createTeamMember = function (team_id, user_id) {
        var body = {
            team_id: team_id,
            user_id: user_id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    TeamMemberService.prototype.readTeamMember = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    TeamMemberService.prototype.updateTeamMember = function (id, team_id, user_id) {
        var body = {
            _id: id,
            team_id: team_id,
            user_id: user_id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    TeamMemberService.prototype.deleteTeamMember = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    TeamMemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], TeamMemberService);
    return TeamMemberService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'users/';
    }
    // createCollege (name: String, locale: String ) {
    //   const body = { name: name ,locale : locale};
    //   const headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(map(res => res, {'headers': headers}));
    // }
    UserService.prototype.confirmPayment = function (_id) {
        var body = { _id: _id };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'confirmPayment'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    UserService.prototype.getAllParticipants = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'participants');
    };
    UserService.prototype.uploadCartDDImage = function (formData) {
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        return this.http.post(this.app.getUrl(this.baseUrl) + 'uploadCartDDImage/' + formData.get('id'), formData);
    };
    UserService.prototype.confirmCart = function (_id) {
        var data = {
            user_id: _id
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'confirmCart'), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    UserService.prototype.getParticpants = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'participants/?page=' + page);
    };
    UserService.prototype.getParticipant = function (_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'participants/search/?id=' + _id);
    };
    UserService.prototype.isCartConfirmed = function (_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + 'isCartConfirmed/' + _id);
    };
    UserService.prototype.createUser = function (values) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    UserService.prototype.deleteUser = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    UserService.prototype.getAdmin = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + '/admin');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/userregistration/userregistration.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/userregistration/userregistration.service.ts ***!
  \***********************************************************************/
/*! exports provided: UserregistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserregistrationService", function() { return UserregistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// CRUD Service for team_member
// Created by Aravind Raj
// 23/12/18
var UserregistrationService = /** @class */ (function () {
    function UserregistrationService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'registration/';
    }
    UserregistrationService.prototype.createUser = function (name, college_id, department_id, degree_id, email_id, gender, mobile_number, password, year_id, activate, registration_mode) {
        var body = {
            name: name,
            college_id: college_id,
            department_id: department_id,
            degree_id: degree_id,
            email_id: email_id,
            gender: gender,
            mobile_number: mobile_number,
            type: "user",
            password: password,
            year_id: year_id,
            activated: false,
            registration_mode: registration_mode
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    UserregistrationService.prototype.readUser = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl));
    };
    UserregistrationService.prototype.verifyUser = function (mail_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var body = {
            email_id: mail_id
        };
        return this.http.post(this.app.getUrl(this.baseUrl + 'activate'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    UserregistrationService.prototype.activateUser = function (id, hash) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var body = { _id: id, activation_code: hash };
        return this.http.post(this.app.getUrl(this.baseUrl + 'activate'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    UserregistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], UserregistrationService);
    return UserregistrationService;
}());



/***/ }),

/***/ "./src/app/services/year/year.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/year/year.service.ts ***!
  \***********************************************/
/*! exports provided: YearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearService", function() { return YearService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "./src/app/services/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YearService = /** @class */ (function () {
    function YearService(http, app) {
        this.http = http;
        this.app = app;
        this.baseUrl = 'year/';
    }
    YearService.prototype.createYear = function (name) {
        var body = { name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.app.getUrl(this.baseUrl + 'create'), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    YearService.prototype.readYear = function (page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.app.getUrl(this.baseUrl) + "?page=" + page);
    };
    YearService.prototype.updateYear = function (id, name) {
        var body = { _id: id, name: name };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.app.getUrl(this.baseUrl + ("" + id)), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    YearService.prototype.deleteYear = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.app.getUrl(this.baseUrl + ("" + id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }, { 'headers': headers }));
    };
    YearService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], YearService);
    return YearService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backend: {
        server: 'http://192.168.16.14/'
    },
    frontend: {
        server: 'http://192.168.16.14/'
    },
    payment: {
        key: 'AFqk4w',
        salt: 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQB5hDQhkawze7s4dGtwYW1B0js4RoooRqW/WBl0IwTXZM8ct6QE9EdX2R72lNMFNynnukVz88V/HnDXAiZqvVkZjVzKGaWTU1PcHscI3vK85s00tzM/h+9xhdnPnHQk90r+WfYe3DwhS/y7QZMA4hrk3MnAEDHIfCR7OCpPLutd64kiwIGYdtVkYGVgYXqx4u12U4Ws2D4yZNBHlpsx3LQ03CCzLZlOWoGasELfHfh7mGTuEPqSvDdwTpOiwuOqKdl+/jMwrfKtEEU/zcNZhaLIdHFMuZ6g+5auMid8benMyJ54GWNq9Pve/cjMyVZaFv2DlqIFwgn9KzWsFT+YXZAgMBAAECggEBAMyE2vYs0p+UE4QO0Uz9fRgOe4Nw5xkzxbkHJYu9WI5Caa7l/OT4urWUSNqjpEQF4dSK6QW93OaHk8RTWs4HYKJ8HOT85FfpojzwtWmtkmz0BWLKLKBbFNBGP4cxYAO9Nn6Cu96BGY9ejKWvMCWfMBV+1u/0463aa8HeWiZz4n45OuXbWYa0O/T8KZQd8rBXm26e6jBaIeXztcTrX6uZypr2cWXs1XqLb0Zjw/buJbtdPdJ22ndzIMr2uaihhibRbkxJz0JXIl0aHIruOghHqGHJ2T+YJ3Ef9olH1OGYNDXAQmGPJ+w7M4BlKD7MMyOpv70GYSrIK6Nt9DTXKRxR0IECgYEA9QIxr4zMN6kRoRff7U8LxaiXxFA7XwtDy8a3wU8IQbZanG7oCM5sYlZMk9NfpbVVMCo4jNujMcEawNYdvBaayFo9GrWm/cWY4xfkq61rJiEGlx6St0zH1xKHGlDgWCmBxi3aeHL8mHJT9drVJlXY4a6JP2uzSMe/pgr+oE3+FCkCgYEA2Vy3OX8dAJVCnqD6HdQboDFe6iP2Zx/Tdrts415w79uD6PHY/XlmctbXTexbvQTPLlBkK0MABxa5ponDaANpBHTB983bn93WoM+K1gCWUpMX8rwwH4I7APZECR2y20bHVwJZTuDeifahKI2tU8GeShCI1IWE2pAsRHhZh9tfmjECgYAvq1idbkiBf9yVOj7wPhPtRisZH/8dM+Th7ezsqILTvjYM/6sXo4oE7AOEM3kFla1YbK6KAWXUFV0uLbqlUMSWvK/s1XEDKQHhFVIBcQFK7twIZQNotIChQNKWdSvhG1pLg7pg+wZYZs4dJJGaHtPOvRWpCDxeqbaJCNSXvfT0WQKBgQCqwcCbJbYGCDwu3C3BkykkvsRe0mO3ffQlOXaAZGf6tou5S415C48lNowsBjvHkWilbLhUmC0EZKDyKRXet5cfzg23e/xGagM7j+/00L9HHZFZuudfSXLK/axTMQaaZs8hFpJMejG5VowijLKWsuuEKdskgcPt5Acyvw0uwnMncQKBgBUtfvw390WC90Sm+iSZszsp4dZBgXCJPb5trhxotL7JMv5s6V5sraLV6E9AiDvtMSrzOPhbYV1UDyYcXIICuwQi2fkFZvgmM+qWdNaSZMyDG+6HG5gtqfhDOgePITtuwt07xoV4RD6KBjy6M/09m4eWGiRaOLPYNumvpOjmnU1b',
        url: 'https://secure.payu.in/_payment',
        accomodation: 100,
        transcationFee: 0.04,
        productInfo: 'GyanMitra19'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/routes/admin.routes.ts":
/*!************************************!*\
  !*** ./src/routes/admin.routes.ts ***!
  \************************************/
/*! exports provided: ADMIN_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_ROUTE", function() { return ADMIN_ROUTE; });
/* harmony import */ var src_app_component_admin_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/admin/home/home.component */ "./src/app/component/admin/home/home.component.ts");
/* harmony import */ var src_app_component_admin_college_college_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/admin/college/college.component */ "./src/app/component/admin/college/college.component.ts");
/* harmony import */ var _app_component_admin_category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/component/admin/category/category.component */ "./src/app/component/admin/category/category.component.ts");
/* harmony import */ var _app_component_admin_degree_degree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/component/admin/degree/degree.component */ "./src/app/component/admin/degree/degree.component.ts");
/* harmony import */ var _app_component_admin_department_department_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/component/admin/department/department.component */ "./src/app/component/admin/department/department.component.ts");
/* harmony import */ var _app_component_admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/component/admin/admin-event/admin-event.component */ "./src/app/component/admin/admin-event/admin-event.component.ts");
/* harmony import */ var src_app_component_admin_participantstatus_participantstatus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/admin/participantstatus/participantstatus.component */ "./src/app/component/admin/participantstatus/participantstatus.component.ts");
/* harmony import */ var src_app_component_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/admin/registration/registration.component */ "./src/app/component/admin/registration/registration.component.ts");
/* harmony import */ var src_app_component_admin_new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/admin/new-registration/new-registration.component */ "./src/app/component/admin/new-registration/new-registration.component.ts");
/* harmony import */ var src_app_component_admin_year_year_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/component/admin/year/year.component */ "./src/app/component/admin/year/year.component.ts");
/* harmony import */ var src_app_component_admin_course_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/component/admin/course/course.component */ "./src/app/component/admin/course/course.component.ts");
/* harmony import */ var src_app_component_admin_admin_accomodation_admin_accomodation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/component/admin/admin-accomodation/admin-accomodation.component */ "./src/app/component/admin/admin-accomodation/admin-accomodation.component.ts");
/* harmony import */ var src_app_component_admin_role_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/component/admin/role/role.component */ "./src/app/component/admin/role/role.component.ts");
/* harmony import */ var src_app_component_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/component/admin/admin-users/admin-users.component */ "./src/app/component/admin/admin-users/admin-users.component.ts");
/* harmony import */ var src_app_component_admin_event_participants_event_participants_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/component/admin/event-participants/event-participants.component */ "./src/app/component/admin/event-participants/event-participants.component.ts");
/* harmony import */ var src_app_component_admin_admin_cart_confirmation_admin_cart_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component */ "./src/app/component/admin/admin-cart-confirmation/admin-cart-confirmation.component.ts");
/* harmony import */ var src_app_component_admin_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/component/admin/configurations/configurations.component */ "./src/app/component/admin/configurations/configurations.component.ts");

















var ADMIN_ROUTE = [
    { path: 'home', component: src_app_component_admin_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'college', component: src_app_component_admin_college_college_component__WEBPACK_IMPORTED_MODULE_1__["CollegeComponent"] },
    { path: 'category', component: _app_component_admin_category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"] },
    { path: 'degree', component: _app_component_admin_degree_degree_component__WEBPACK_IMPORTED_MODULE_3__["DegreeComponent"] },
    { path: 'department', component: _app_component_admin_department_department_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentComponent"] },
    { path: 'events', component: _app_component_admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_5__["AdminEventComponent"] },
    { path: 'year', component: src_app_component_admin_year_year_component__WEBPACK_IMPORTED_MODULE_9__["YearComponent"] },
    { path: 'course', component: src_app_component_admin_course_course_component__WEBPACK_IMPORTED_MODULE_10__["CourseComponent"] },
    { path: 'participationstatus', component: src_app_component_admin_participantstatus_participantstatus_component__WEBPACK_IMPORTED_MODULE_6__["ParticipantstatusComponent"] },
    { path: 'registration', component: src_app_component_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    { path: 'new_registration', component: src_app_component_admin_new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_8__["NewRegistrationComponent"] },
    { path: 'role', component: src_app_component_admin_role_role_component__WEBPACK_IMPORTED_MODULE_12__["RoleComponent"] },
    { path: 'users', component: src_app_component_admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_13__["AdminUsersComponent"] },
    { path: 'accomodation', component: src_app_component_admin_admin_accomodation_admin_accomodation_component__WEBPACK_IMPORTED_MODULE_11__["AdminAccomodationComponent"] },
    { path: 'eventParticipants/:id', component: src_app_component_admin_event_participants_event_participants_component__WEBPACK_IMPORTED_MODULE_14__["EventParticipantsComponent"] },
    { path: 'cartConfirmation', component: src_app_component_admin_admin_cart_confirmation_admin_cart_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["AdminCartConfirmationComponent"] },
    { path: 'configurations', component: src_app_component_admin_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_16__["ConfigurationsComponent"] }
];


/***/ }),

/***/ "./src/routes/app.routes.ts":
/*!**********************************!*\
  !*** ./src/routes/app.routes.ts ***!
  \**********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_component_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _admin_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.routes */ "./src/routes/admin.routes.ts");
/* harmony import */ var src_app_component_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/user/user.component */ "./src/app/component/user/user.component.ts");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.routes */ "./src/routes/user.routes.ts");
/* harmony import */ var src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guard/auth/auth.guard */ "./src/app/guard/auth/auth.guard.ts");
/* harmony import */ var src_app_guard_admin_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/guard/admin/admin.guard */ "./src/app/guard/admin/admin.guard.ts");



//////////////////////////////////////////////////




/////////////////////////////////////////////////
var APP_ROUTES = [
    { path: 'admin', component: src_app_component_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"], children: _admin_routes__WEBPACK_IMPORTED_MODULE_2__["ADMIN_ROUTE"], canActivate: [src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], src_app_guard_admin_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]] },
    { path: 'user', component: src_app_component_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], children: _user_routes__WEBPACK_IMPORTED_MODULE_4__["USER_ROUTE"] }
    //Start typing here the import is automatically done is VS CODE
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/routes/user.routes.ts":
/*!***********************************!*\
  !*** ./src/routes/user.routes.ts ***!
  \***********************************/
/*! exports provided: USER_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROUTE", function() { return USER_ROUTE; });
/* harmony import */ var src_app_component_user_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/user/about/about.component */ "./src/app/component/user/about/about.component.ts");
/* harmony import */ var src_app_component_user_events_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/user/events/events.component */ "./src/app/component/user/events/events.component.ts");
/* harmony import */ var src_app_component_user_workshops_workshops_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/user/workshops/workshops.component */ "./src/app/component/user/workshops/workshops.component.ts");
/* harmony import */ var src_app_component_user_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/user/cart/cart.component */ "./src/app/component/user/cart/cart.component.ts");
/* harmony import */ var src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guard/auth/auth.guard */ "./src/app/guard/auth/auth.guard.ts");
/* harmony import */ var src_app_component_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/component/user/login/login.component */ "./src/app/component/user/login/login.component.ts");
/* harmony import */ var src_app_component_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/user/register/register.component */ "./src/app/component/user/register/register.component.ts");
/* harmony import */ var src_app_component_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/user/activation/activation.component */ "./src/app/component/user/activation/activation.component.ts");
/* harmony import */ var src_app_component_user_user_accomodation_user_accomodation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/user/user-accomodation/user-accomodation.component */ "./src/app/component/user/user-accomodation/user-accomodation.component.ts");
/* harmony import */ var src_app_component_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/component/user/user-home/user-home.component */ "./src/app/component/user/user-home/user-home.component.ts");
/* harmony import */ var src_app_component_user_team_register_team_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/component/user/team-register/team-register.component */ "./src/app/component/user/team-register/team-register.component.ts");
/* harmony import */ var src_app_component_user_gyan_mitra18_gyan_mitra18_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/component/user/gyan-mitra18/gyan-mitra18.component */ "./src/app/component/user/gyan-mitra18/gyan-mitra18.component.ts");
/* harmony import */ var src_app_component_user_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/component/user/payment-success/payment-success.component */ "./src/app/component/user/payment-success/payment-success.component.ts");
/* harmony import */ var src_app_component_user_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/component/user/payment-failure/payment-failure.component */ "./src/app/component/user/payment-failure/payment-failure.component.ts");
/* harmony import */ var src_app_component_user_acc_failure_acc_failure_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/component/user/acc-failure/acc-failure.component */ "./src/app/component/user/acc-failure/acc-failure.component.ts");
/* harmony import */ var src_app_component_user_acc_success_acc_success_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/component/user/acc-success/acc-success.component */ "./src/app/component/user/acc-success/acc-success.component.ts");
















var USER_ROUTE = [
    { path: 'home', component: src_app_component_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_9__["UserHomeComponent"] },
    { path: 'about', component: src_app_component_user_about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"] },
    { path: 'events', component: src_app_component_user_events_events_component__WEBPACK_IMPORTED_MODULE_1__["EventsComponent"] },
    { path: 'workshops', component: src_app_component_user_workshops_workshops_component__WEBPACK_IMPORTED_MODULE_2__["WorkshopsComponent"] },
    { path: 'login', component: src_app_component_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: src_app_component_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'activate/:id/:hash', component: src_app_component_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_7__["ActivationComponent"] },
    { path: 'cart', component: src_app_component_user_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"], canActivate: [src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'accomodation', component: src_app_component_user_user_accomodation_user_accomodation_component__WEBPACK_IMPORTED_MODULE_8__["UserAccomodationComponent"] },
    { path: 'teamRegister/:id', component: src_app_component_user_team_register_team_register_component__WEBPACK_IMPORTED_MODULE_10__["TeamRegisterComponent"] },
    { path: 'gyanmitra18', component: src_app_component_user_gyan_mitra18_gyan_mitra18_component__WEBPACK_IMPORTED_MODULE_11__["GyanMitra18Component"] },
    { path: 'payment/success', component: src_app_component_user_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_12__["PaymentSuccessComponent"], canActivate: [src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'payment/failure', component: src_app_component_user_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_13__["PaymentFailureComponent"], canActivate: [src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'acc/payment/success', component: src_app_component_user_acc_success_acc_success_component__WEBPACK_IMPORTED_MODULE_15__["AccSuccessComponent"], canActivate: [src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'acc/payment/failure', component: src_app_component_user_acc_failure_acc_failure_component__WEBPACK_IMPORTED_MODULE_14__["AccFailureComponent"], canActivate: [src_app_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\STUDY\PROJECT\MEAN\GyanMitra19\GyanMitra19-AngularJs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpublic"] = self["webpackChunkpublic"] || []).push([["src_auth_verify_js"],{

/***/ "./src/auth/verify.js":
/*!****************************!*\
  !*** ./src/auth/verify.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _config_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase.js */ \"./src/config/firebase.js\");\n\r\n\r\n\r\nconst firebaseApp = (0,_config_firebase_js__WEBPACK_IMPORTED_MODULE_1__.getFirebaseApp)();\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(firebaseApp);\r\nconst urlSecurityRules = __webpack_require__(/*! ../config/urlSecurityRules.json */ \"./src/config/urlSecurityRules.json\");\r\nconst baseURL = window.location.protocol + '//' + window.location.host + '/';\r\nconst route = window.location.href.replace(baseURL,'').replace(/\\/$/, \"\").toLowerCase();\r\n\r\n// Redirrecting Pages Users cant go If they are not authenticated\r\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, user => {\r\n    if(user == null){\r\n        for (const [key, value] of Object.entries(urlSecurityRules)) {\r\n            if(key.toLocaleLowerCase() == route && value.requireAuth === true){\r\n                window.location = baseURL + '/app/signin'\r\n            }\r\n        }\r\n    }\r\n    if(user !== null){\r\n        for (const [key, value] of Object.entries(urlSecurityRules)) {\r\n            if(key.toLocaleLowerCase() == route && value.avaibleWhenAuthenticated === false){\r\n                window.location = baseURL + value.AuthenticatedRedirrectionUrl\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC92ZXJpZnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTREO0FBQ0w7QUFDdkQ7QUFDQSxvQkFBb0IsbUVBQWM7QUFDbEMsYUFBYSxzREFBTztBQUNwQix5QkFBeUIsbUJBQU8sQ0FBQywyRUFBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2F1dGgvdmVyaWZ5LmpzP2JiOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZWJhc2VBcHAgfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlLmpzXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUFwcCA9IGdldEZpcmViYXNlQXBwKCk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKTtcclxuY29uc3QgdXJsU2VjdXJpdHlSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbmZpZy91cmxTZWN1cml0eVJ1bGVzLmpzb24nKTtcclxuY29uc3QgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArICcvJztcclxuY29uc3Qgcm91dGUgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKGJhc2VVUkwsJycpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuLy8gUmVkaXJyZWN0aW5nIFBhZ2VzIFVzZXJzIGNhbnQgZ28gSWYgdGhleSBhcmUgbm90IGF1dGhlbnRpY2F0ZWRcclxub25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIHVzZXIgPT4ge1xyXG4gICAgaWYodXNlciA9PSBudWxsKXtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh1cmxTZWN1cml0eVJ1bGVzKSkge1xyXG4gICAgICAgICAgICBpZihrZXkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSByb3V0ZSAmJiB2YWx1ZS5yZXF1aXJlQXV0aCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBiYXNlVVJMICsgJy9hcHAvc2lnbmluJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodXNlciAhPT0gbnVsbCl7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModXJsU2VjdXJpdHlSdWxlcykpIHtcclxuICAgICAgICAgICAgaWYoa2V5LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gcm91dGUgJiYgdmFsdWUuYXZhaWJsZVdoZW5BdXRoZW50aWNhdGVkID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBiYXNlVVJMICsgdmFsdWUuQXV0aGVudGljYXRlZFJlZGlycmVjdGlvblVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/auth/verify.js\n");

/***/ }),

/***/ "./src/config/urlSecurityRules.json":
/*!******************************************!*\
  !*** ./src/config/urlSecurityRules.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"app/signin":{"requireAuth":false,"avaibleWhenAuthenticated":false,"AuthenticatedRedirrectionUrl":"/app/add/"},"app/signip":{"requireAuth":false,"avaibleWhenAuthenticated":false,"AuthenticatedRedirrectionUrl":"/app/add/"},"app/add":{"requireAuth":true},"app/settings":{"requireAuth":true}}');

/***/ })

}]);
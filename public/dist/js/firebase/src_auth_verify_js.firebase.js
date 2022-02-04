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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _config_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase.js */ \"./src/config/firebase.js\");\n\r\n\r\n\r\nconst firebaseApp = (0,_config_firebase_js__WEBPACK_IMPORTED_MODULE_1__.getFirebaseApp)();\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(firebaseApp);\r\nconst urlSecurityRules = __webpack_require__(/*! ../config/urlSecurityRules.json */ \"./src/config/urlSecurityRules.json\");\r\nconst baseURL = window.location.protocol + '//' + window.location.host + '/';\r\nconst route = window.location.href.replace(baseURL,'').replace(/\\/$/, \"\").toLowerCase();\r\n\r\n// Redirrecting Pages Users cant go If they are not authenticated\r\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, user => {\r\n    if(user == null){\r\n        for (const [key, value] of Object.entries(urlSecurityRules)) {\r\n            if(key == route && value.requireAuth === true){\r\n                window.location = baseURL + '/app/signIn'\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC92ZXJpZnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTREO0FBQ0w7QUFDdkQ7QUFDQSxvQkFBb0IsbUVBQWM7QUFDbEMsYUFBYSxzREFBTztBQUNwQix5QkFBeUIsbUJBQU8sQ0FBQywyRUFBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpYy8uL3NyYy9hdXRoL3ZlcmlmeS5qcz9iYjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEZpcmViYXNlQXBwIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZS5qc1wiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VBcHAgPSBnZXRGaXJlYmFzZUFwcCgpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChmaXJlYmFzZUFwcCk7XHJcbmNvbnN0IHVybFNlY3VyaXR5UnVsZXMgPSByZXF1aXJlKCcuLi9jb25maWcvdXJsU2VjdXJpdHlSdWxlcy5qc29uJyk7XHJcbmNvbnN0IGJhc2VVUkwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLyc7XHJcbmNvbnN0IHJvdXRlID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShiYXNlVVJMLCcnKS5yZXBsYWNlKC9cXC8kLywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuXHJcbi8vIFJlZGlycmVjdGluZyBQYWdlcyBVc2VycyBjYW50IGdvIElmIHRoZXkgYXJlIG5vdCBhdXRoZW50aWNhdGVkXHJcbm9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCB1c2VyID0+IHtcclxuICAgIGlmKHVzZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModXJsU2VjdXJpdHlSdWxlcykpIHtcclxuICAgICAgICAgICAgaWYoa2V5ID09IHJvdXRlICYmIHZhbHVlLnJlcXVpcmVBdXRoID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGJhc2VVUkwgKyAnL2FwcC9zaWduSW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/auth/verify.js\n");

/***/ }),

/***/ "./src/config/firebase.js":
/*!********************************!*\
  !*** ./src/config/firebase.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFirebaseApp\": () => (/* binding */ getFirebaseApp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\r\n\r\nfunction getFirebaseApp() {\r\n    \r\n    const firebaseConfig = {\r\n        apiKey: \"AIzaSyBAl6ohxngBZsKcVsbSechx8tpm_SP44UY\",\r\n        authDomain: \"infina-dc87c.firebaseapp.com\",\r\n        projectId: \"infina-dc87c\",\r\n        storageBucket: \"infina-dc87c.appspot.com\",\r\n        messagingSenderId: \"308815347437\",\r\n        appId: \"1:308815347437:web:30e628af9b4ccc49be96e4\",\r\n        measurementId: \"G-ME3GHPG7ZN\"\r\n    };\r\n\r\n    // Initialize Firebase\r\n    const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\n    return firebaseApp;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2ZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZDO0FBQzdDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQWE7QUFDckM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2NvbmZpZy9maXJlYmFzZS5qcz9kOTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlyZWJhc2VBcHAoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgICAgIGFwaUtleTogXCJBSXphU3lCQWw2b2h4bmdCWnNLY1ZzYlNlY2h4OHRwbV9TUDQ0VVlcIixcclxuICAgICAgICBhdXRoRG9tYWluOiBcImluZmluYS1kYzg3Yy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwiaW5maW5hLWRjODdjXCIsXHJcbiAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJpbmZpbmEtZGM4N2MuYXBwc3BvdC5jb21cIixcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMDg4MTUzNDc0MzdcIixcclxuICAgICAgICBhcHBJZDogXCIxOjMwODgxNTM0NzQzNzp3ZWI6MzBlNjI4YWY5YjRjY2M0OWJlOTZlNFwiLFxyXG4gICAgICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1NRTNHSFBHN1pOXCJcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gICAgY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbiAgICByZXR1cm4gZmlyZWJhc2VBcHA7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/firebase.js\n");

/***/ }),

/***/ "./src/config/urlSecurityRules.json":
/*!******************************************!*\
  !*** ./src/config/urlSecurityRules.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"app/signIn":{"requireAuth":false},"app/signUp":{"requireAuth":false},"app/add":{"requireAuth":true}}');

/***/ })

}]);
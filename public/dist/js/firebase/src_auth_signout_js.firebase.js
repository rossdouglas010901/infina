"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpublic"] = self["webpackChunkpublic"] || []).push([["src_auth_signOut_js"],{

/***/ "./src/auth/signOut.js":
/*!*****************************!*\
  !*** ./src/auth/signOut.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _config_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase.js */ \"./src/config/firebase.js\");\n\r\n\r\n\r\nconst firebaseApp = (0,_config_firebase_js__WEBPACK_IMPORTED_MODULE_1__.getFirebaseApp)();\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(firebaseApp);\r\nconst signOutButton = document.getElementById('signOutButton');\r\n\r\n// Signin In Function\r\nif(signOutButton){\r\n    signOutButton.addEventListener(\"click\", signUserOut, false)\r\n}\r\n\r\n// Redirrecting Pages Users cant go If they are not authenticated\r\nasync function signUserOut(){\r\n    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(auth);\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC9zaWduT3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFpRDtBQUNNO0FBQ3ZEO0FBQ0Esb0JBQW9CLG1FQUFjO0FBQ2xDLGFBQWEsc0RBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzREFBTztBQUNqQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2F1dGgvc2lnbk91dC5qcz8zYjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEF1dGgsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlYmFzZUFwcCB9IGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2UuanNcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQXBwID0gZ2V0RmlyZWJhc2VBcHAoKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoZmlyZWJhc2VBcHApO1xyXG5jb25zdCBzaWduT3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25PdXRCdXR0b24nKTtcclxuXHJcbi8vIFNpZ25pbiBJbiBGdW5jdGlvblxyXG5pZihzaWduT3V0QnV0dG9uKXtcclxuICAgIHNpZ25PdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZ25Vc2VyT3V0LCBmYWxzZSlcclxufVxyXG5cclxuLy8gUmVkaXJyZWN0aW5nIFBhZ2VzIFVzZXJzIGNhbnQgZ28gSWYgdGhleSBhcmUgbm90IGF1dGhlbnRpY2F0ZWRcclxuYXN5bmMgZnVuY3Rpb24gc2lnblVzZXJPdXQoKXtcclxuICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/auth/signOut.js\n");

/***/ }),

/***/ "./src/config/firebase.js":
/*!********************************!*\
  !*** ./src/config/firebase.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFirebaseApp\": () => (/* binding */ getFirebaseApp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\r\n\r\nfunction getFirebaseApp() {\r\n    \r\n    const firebaseConfig = {\r\n        apiKey: \"AIzaSyBAl6ohxngBZsKcVsbSechx8tpm_SP44UY\",\r\n        authDomain: \"infina-dc87c.firebaseapp.com\",\r\n        projectId: \"infina-dc87c\",\r\n        storageBucket: \"infina-dc87c.appspot.com\",\r\n        messagingSenderId: \"308815347437\",\r\n        appId: \"1:308815347437:web:30e628af9b4ccc49be96e4\",\r\n        measurementId: \"G-ME3GHPG7ZN\"\r\n    };\r\n\r\n    // Initialize Firebase\r\n    const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\n    return firebaseApp;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2ZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZDO0FBQzdDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQWE7QUFDckM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2NvbmZpZy9maXJlYmFzZS5qcz9kOTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlyZWJhc2VBcHAoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgICAgIGFwaUtleTogXCJBSXphU3lCQWw2b2h4bmdCWnNLY1ZzYlNlY2h4OHRwbV9TUDQ0VVlcIixcclxuICAgICAgICBhdXRoRG9tYWluOiBcImluZmluYS1kYzg3Yy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwiaW5maW5hLWRjODdjXCIsXHJcbiAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJpbmZpbmEtZGM4N2MuYXBwc3BvdC5jb21cIixcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMDg4MTUzNDc0MzdcIixcclxuICAgICAgICBhcHBJZDogXCIxOjMwODgxNTM0NzQzNzp3ZWI6MzBlNjI4YWY5YjRjY2M0OWJlOTZlNFwiLFxyXG4gICAgICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1NRTNHSFBHN1pOXCJcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gICAgY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbiAgICByZXR1cm4gZmlyZWJhc2VBcHA7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/firebase.js\n");

/***/ })

}]);
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpublic"] = self["webpackChunkpublic"] || []).push([["src_auth_signIn_js"],{

/***/ "./src/auth/signIn.js":
/*!****************************!*\
  !*** ./src/auth/signIn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _config_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase.js */ \"./src/config/firebase.js\");\n\r\n\r\n\r\nconst firebaseApp = (0,_config_firebase_js__WEBPACK_IMPORTED_MODULE_1__.getFirebaseApp)();\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(firebaseApp);\r\nconst baseURL = window.location.protocol + '//' + window.location.host + '/';\r\nconst route = window.location.href.replace(baseURL,'').replace(/\\/$/, \"\").toLowerCase();\r\n\r\n// Signin In Function\r\nif(route == 'app/signin'.toLowerCase()){\r\n    document.getElementById('signInButton').addEventListener(\"click\", signIn, false)\r\n\r\n    hideAuthenticationError();\r\n}\r\n\r\nasync function signIn(){\r\n    hideAuthenticationError()\r\n\r\n    const email = document.getElementById('signInEmail').value;\r\n    const password = document.getElementById('signInPassword').value;\r\n    \r\n    console.log(email);\r\n    console.log(password);\r\n    try {\r\n        const userCredentail = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(auth, email, password).then(() => {\r\n            window.location = baseURL + '/app/add';\r\n        });\r\n        console.log(userCredentail.user); \r\n    }catch(error){\r\n        console.log(error);\r\n        if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD || error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_EMAIL){\r\n            showAuthenticationError('Wrong username or password');\r\n            \r\n        }\r\n    }\r\n    \r\n};\r\n\r\nfunction showAuthenticationError(message){\r\n    let errorMessage = document.getElementById('signInErrorMessage');\r\n    let errorMessageText = document.getElementById('signInErrorMessageText');\r\n    errorMessageText.innerText = message;\r\n    errorMessage.style.display = \"block\";\r\n}\r\n\r\nfunction hideAuthenticationError(){\r\n    let errorMessage = document.getElementById('signInErrorMessage');\r\n    errorMessage.style.display = \"none\";\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC9zaWduSW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9GO0FBQzdCO0FBQ3ZEO0FBQ0Esb0JBQW9CLG1FQUFjO0FBQ2xDLGFBQWEsc0RBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUVBQTBCO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLDBFQUErQixrQkFBa0IsdUVBQTRCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpYy8uL3NyYy9hdXRoL3NpZ25Jbi5qcz8yM2EzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhFcnJvckNvZGVzLCBnZXRBdXRoLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEZpcmViYXNlQXBwIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZS5qc1wiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VBcHAgPSBnZXRGaXJlYmFzZUFwcCgpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChmaXJlYmFzZUFwcCk7XHJcbmNvbnN0IGJhc2VVUkwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLyc7XHJcbmNvbnN0IHJvdXRlID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShiYXNlVVJMLCcnKS5yZXBsYWNlKC9cXC8kLywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuXHJcbi8vIFNpZ25pbiBJbiBGdW5jdGlvblxyXG5pZihyb3V0ZSA9PSAnYXBwL3NpZ25pbicudG9Mb3dlckNhc2UoKSl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbkluQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZ25JbiwgZmFsc2UpXHJcblxyXG4gICAgaGlkZUF1dGhlbnRpY2F0aW9uRXJyb3IoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2lnbkluKCl7XHJcbiAgICBoaWRlQXV0aGVudGljYXRpb25FcnJvcigpXHJcblxyXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbkluRW1haWwnKS52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25JblBhc3N3b3JkJykudmFsdWU7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlckNyZWRlbnRhaWwgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBiYXNlVVJMICsgJy9hcHAvYWRkJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyQ3JlZGVudGFpbC51c2VyKTsgXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PSBBdXRoRXJyb3JDb2Rlcy5JTlZBTElEX1BBU1NXT1JEIHx8IGVycm9yLmNvZGUgPT0gQXV0aEVycm9yQ29kZXMuSU5WQUxJRF9FTUFJTCl7XHJcbiAgICAgICAgICAgIHNob3dBdXRoZW50aWNhdGlvbkVycm9yKCdXcm9uZyB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNob3dBdXRoZW50aWNhdGlvbkVycm9yKG1lc3NhZ2Upe1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduSW5FcnJvck1lc3NhZ2UnKTtcclxuICAgIGxldCBlcnJvck1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25JbkVycm9yTWVzc2FnZVRleHQnKTtcclxuICAgIGVycm9yTWVzc2FnZVRleHQuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlQXV0aGVudGljYXRpb25FcnJvcigpe1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduSW5FcnJvck1lc3NhZ2UnKTtcclxuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/auth/signIn.js\n");

/***/ }),

/***/ "./src/config/firebase.js":
/*!********************************!*\
  !*** ./src/config/firebase.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFirebaseApp\": () => (/* binding */ getFirebaseApp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\r\n\r\nfunction getFirebaseApp() {\r\n    \r\n    const firebaseConfig = {\r\n        apiKey: \"AIzaSyBAl6ohxngBZsKcVsbSechx8tpm_SP44UY\",\r\n        authDomain: \"infina-dc87c.firebaseapp.com\",\r\n        projectId: \"infina-dc87c\",\r\n        storageBucket: \"infina-dc87c.appspot.com\",\r\n        messagingSenderId: \"308815347437\",\r\n        appId: \"1:308815347437:web:30e628af9b4ccc49be96e4\",\r\n        measurementId: \"G-ME3GHPG7ZN\"\r\n    };\r\n\r\n    // Initialize Firebase\r\n    const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\n    return firebaseApp;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2ZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZDO0FBQzdDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQWE7QUFDckM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2NvbmZpZy9maXJlYmFzZS5qcz9kOTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlyZWJhc2VBcHAoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgICAgIGFwaUtleTogXCJBSXphU3lCQWw2b2h4bmdCWnNLY1ZzYlNlY2h4OHRwbV9TUDQ0VVlcIixcclxuICAgICAgICBhdXRoRG9tYWluOiBcImluZmluYS1kYzg3Yy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwiaW5maW5hLWRjODdjXCIsXHJcbiAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJpbmZpbmEtZGM4N2MuYXBwc3BvdC5jb21cIixcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMDg4MTUzNDc0MzdcIixcclxuICAgICAgICBhcHBJZDogXCIxOjMwODgxNTM0NzQzNzp3ZWI6MzBlNjI4YWY5YjRjY2M0OWJlOTZlNFwiLFxyXG4gICAgICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1NRTNHSFBHN1pOXCJcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gICAgY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbiAgICByZXR1cm4gZmlyZWJhc2VBcHA7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/firebase.js\n");

/***/ })

}]);
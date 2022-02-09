"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpublic"] = self["webpackChunkpublic"] || []).push([["src_settings_accountSettings_js"],{

/***/ "./src/settings/accountSettings.js":
/*!*****************************************!*\
  !*** ./src/settings/accountSettings.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _config_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase.js */ \"./src/config/firebase.js\");\n/* harmony import */ var _functions_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/update */ \"./src/functions/update.js\");\n/* harmony import */ var _functions_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/dom */ \"./src/functions/dom.js\");\n/* harmony import */ var _functions_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/settings */ \"./src/functions/settings.js\");\n// Importing External Modules\r\n\r\n\r\n// Importing Internal Modules\r\n\r\n\r\n\r\n\r\n\r\n// Setting Up modules\r\nconst firebaseApp = (0,_config_firebase_js__WEBPACK_IMPORTED_MODULE_1__.getFirebaseApp)();\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(firebaseApp);\r\n\r\n// Setting up route\r\nconst baseURL = window.location.protocol + '//' + window.location.host + '/';\r\nconst route = window.location.href.replace(baseURL,'').replace(/\\/$/, \"\").toLowerCase();\r\n\r\n// running alow save on page load incse the ui Updates and chnages werent saved yet\r\nallowSave();\r\n\r\n// Setting Up event listeners\r\nauth.onAuthStateChanged(function(user) {\r\n    if (user && route == \"app/settings\") {\r\n\r\n        // Getting elements\r\n        const elmt = (0,_functions_dom__WEBPACK_IMPORTED_MODULE_3__.importELemntsByID)([\r\n            \"verifyEmailButton\",\r\n            \"saveProfileButton\",\r\n            \"settingsDisplayName\",\r\n            \"settingsEmail\",\r\n            \"settingsPhoneNumber\"\r\n        ]);\r\n\r\n        // Adding event listners for buttons\r\n        elmt.verifyEmailButton.addEventListener(\"click\", verifyEmail, false);\r\n        elmt.saveProfileButton.addEventListener(\"click\", updateUserInfo, false);\r\n\r\n        // Adding event listerns for the save button\r\n        elmt.settingsDisplayName.addEventListener(\"input\", allowSave, false);\r\n        elmt.settingsEmail.addEventListener(\"input\", allowSave, false);\r\n        elmt.settingsPhoneNumber.addEventListener(\"input\", allowSave, false);\r\n    }\r\n});\r\n\r\n// Updating User Info\r\nasync function updateUserInfo(){\r\n\r\n    // Getting Elements\r\n    const elmt = (0,_functions_dom__WEBPACK_IMPORTED_MODULE_3__.importELemntsByID)([\r\n        \"settingsDisplayName\",\r\n        \"saveProfileButton\"\r\n    ]);\r\n\r\n    let newUsername;\r\n\r\n    if(auth.currentUser.displayName !== elmt.settingsDisplayName.value\r\n    && elmt.settingsDisplayName.value !== null){\r\n        newUsername = elmt.settingsDisplayName.value.trim().replace(/ +(?= )/g,'');\r\n    }\r\n\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateProfile)(auth.currentUser, {\r\n        displayName: newUsername\r\n      }).then(() => {\r\n\r\n        elmt.saveProfileButton.innerHTML = '<i class=\"uil uil-check\"></i> Saved';\r\n\r\n        (0,_functions_update__WEBPACK_IMPORTED_MODULE_2__.updateUI)();\r\n      }).catch((error) => {\r\n        elmt.saveProfileButton.innerHTML = '<i class=\"uil uil-times\"></i> Unable to Save';\r\n      });\r\n}\r\n\r\n// Sending verification email\r\nasync function verifyEmail() {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendEmailVerification)(auth.currentUser)\r\n    .then(() => {\r\n        const elmt = (0,_functions_dom__WEBPACK_IMPORTED_MODULE_3__.importELemntsByID)([\r\n            \"verifyEmailButton\"\r\n        ]);\r\n\r\n        elmt.verifyEmailButton.innerHTML = '<i class=\"uil uil-envelope-redo\"></i> Re-Send Verification Email';\r\n        (0,_functions_update__WEBPACK_IMPORTED_MODULE_2__.updateUI)();\r\n    });\r\n}\r\n\r\nfunction allowSave(){\r\n    auth.onAuthStateChanged(function(user) {\r\n        if (user && route == \"app/settings\") {\r\n    \r\n            // Getting Elements\r\n            const elmt = (0,_functions_dom__WEBPACK_IMPORTED_MODULE_3__.importELemntsByID)([\r\n                \"settingsDisplayName\",\r\n                \"settingsEmail\",\r\n                \"settingsPhoneNumber\",\r\n                \"saveProfileButton\"\r\n            ]);\r\n\r\n            elmt.saveProfileButton.innerHTML = '<i class=\"uil uil-save\"></i> Save';\r\n        \r\n            if(elmt.settingsDisplayName.value !== user.displayName\r\n            && elmt.settingsEmail.value !== user.email\r\n            && elmt.settingsPhoneNumber.value !== user.phoneNumber){\r\n                (0,_functions_settings__WEBPACK_IMPORTED_MODULE_4__.enableSaveButton)('saveProfileButton');\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\n\r\nfunction disAllowSave(){\r\n    (0,_functions_settings__WEBPACK_IMPORTED_MODULE_4__.disableSaveButton)('saveProfileButton');\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2V0dGluZ3MvYWNjb3VudFNldHRpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ2tHO0FBQ2xHO0FBQ0E7QUFDdUQ7QUFDUjtBQUNLO0FBQ3VCO0FBQzNFO0FBQ0E7QUFDQSxvQkFBb0IsbUVBQWM7QUFDbEMsYUFBYSxzREFBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRUFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpRUFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBUTtBQUNoQixPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFxQjtBQUN6QjtBQUNBLHFCQUFxQixpRUFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFRO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpRUFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBZ0I7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQWlCO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL3NldHRpbmdzL2FjY291bnRTZXR0aW5ncy5qcz8yMTEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGluZyBFeHRlcm5hbCBNb2R1bGVzXHJcbmltcG9ydCB7IGdldEF1dGgsIHVwZGF0ZVByb2ZpbGUsIHNlbmRFbWFpbFZlcmlmaWNhdGlvbiwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbi8vIEltcG9ydGluZyBJbnRlcm5hbCBNb2R1bGVzXHJcbmltcG9ydCB7IGdldEZpcmViYXNlQXBwIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZS5qc1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVVSSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvdXBkYXRlXCI7XHJcbmltcG9ydCB7IGltcG9ydEVMZW1udHNCeUlEIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9kb21cIlxyXG5pbXBvcnQgeyBlbmFibGVTYXZlQnV0dG9uLCBkaXNhYmxlU2F2ZUJ1dHRvbiB9IGZyb20gXCIuLi9mdW5jdGlvbnMvc2V0dGluZ3NcIlxyXG5cclxuLy8gU2V0dGluZyBVcCBtb2R1bGVzXHJcbmNvbnN0IGZpcmViYXNlQXBwID0gZ2V0RmlyZWJhc2VBcHAoKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoZmlyZWJhc2VBcHApO1xyXG5cclxuLy8gU2V0dGluZyB1cCByb3V0ZVxyXG5jb25zdCBiYXNlVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy8nO1xyXG5jb25zdCByb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoYmFzZVVSTCwnJykucmVwbGFjZSgvXFwvJC8sIFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4vLyBydW5uaW5nIGFsb3cgc2F2ZSBvbiBwYWdlIGxvYWQgaW5jc2UgdGhlIHVpIFVwZGF0ZXMgYW5kIGNobmFnZXMgd2VyZW50IHNhdmVkIHlldFxyXG5hbGxvd1NhdmUoKTtcclxuXHJcbi8vIFNldHRpbmcgVXAgZXZlbnQgbGlzdGVuZXJzXHJcbmF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgIGlmICh1c2VyICYmIHJvdXRlID09IFwiYXBwL3NldHRpbmdzXCIpIHtcclxuXHJcbiAgICAgICAgLy8gR2V0dGluZyBlbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IGVsbXQgPSBpbXBvcnRFTGVtbnRzQnlJRChbXHJcbiAgICAgICAgICAgIFwidmVyaWZ5RW1haWxCdXR0b25cIixcclxuICAgICAgICAgICAgXCJzYXZlUHJvZmlsZUJ1dHRvblwiLFxyXG4gICAgICAgICAgICBcInNldHRpbmdzRGlzcGxheU5hbWVcIixcclxuICAgICAgICAgICAgXCJzZXR0aW5nc0VtYWlsXCIsXHJcbiAgICAgICAgICAgIFwic2V0dGluZ3NQaG9uZU51bWJlclwiXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIC8vIEFkZGluZyBldmVudCBsaXN0bmVycyBmb3IgYnV0dG9uc1xyXG4gICAgICAgIGVsbXQudmVyaWZ5RW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZlcmlmeUVtYWlsLCBmYWxzZSk7XHJcbiAgICAgICAgZWxtdC5zYXZlUHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlVXNlckluZm8sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gQWRkaW5nIGV2ZW50IGxpc3Rlcm5zIGZvciB0aGUgc2F2ZSBidXR0b25cclxuICAgICAgICBlbG10LnNldHRpbmdzRGlzcGxheU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGFsbG93U2F2ZSwgZmFsc2UpO1xyXG4gICAgICAgIGVsbXQuc2V0dGluZ3NFbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgYWxsb3dTYXZlLCBmYWxzZSk7XHJcbiAgICAgICAgZWxtdC5zZXR0aW5nc1Bob25lTnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBhbGxvd1NhdmUsIGZhbHNlKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBVcGRhdGluZyBVc2VyIEluZm9cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckluZm8oKXtcclxuXHJcbiAgICAvLyBHZXR0aW5nIEVsZW1lbnRzXHJcbiAgICBjb25zdCBlbG10ID0gaW1wb3J0RUxlbW50c0J5SUQoW1xyXG4gICAgICAgIFwic2V0dGluZ3NEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgIFwic2F2ZVByb2ZpbGVCdXR0b25cIlxyXG4gICAgXSk7XHJcblxyXG4gICAgbGV0IG5ld1VzZXJuYW1lO1xyXG5cclxuICAgIGlmKGF1dGguY3VycmVudFVzZXIuZGlzcGxheU5hbWUgIT09IGVsbXQuc2V0dGluZ3NEaXNwbGF5TmFtZS52YWx1ZVxyXG4gICAgJiYgZWxtdC5zZXR0aW5nc0Rpc3BsYXlOYW1lLnZhbHVlICE9PSBudWxsKXtcclxuICAgICAgICBuZXdVc2VybmFtZSA9IGVsbXQuc2V0dGluZ3NEaXNwbGF5TmFtZS52YWx1ZS50cmltKCkucmVwbGFjZSgvICsoPz0gKS9nLCcnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9maWxlKGF1dGguY3VycmVudFVzZXIsIHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogbmV3VXNlcm5hbWVcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsbXQuc2F2ZVByb2ZpbGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwidWlsIHVpbC1jaGVja1wiPjwvaT4gU2F2ZWQnO1xyXG5cclxuICAgICAgICB1cGRhdGVVSSgpO1xyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBlbG10LnNhdmVQcm9maWxlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cInVpbCB1aWwtdGltZXNcIj48L2k+IFVuYWJsZSB0byBTYXZlJztcclxuICAgICAgfSk7XHJcbn1cclxuXHJcbi8vIFNlbmRpbmcgdmVyaWZpY2F0aW9uIGVtYWlsXHJcbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUVtYWlsKCkge1xyXG4gICAgc2VuZEVtYWlsVmVyaWZpY2F0aW9uKGF1dGguY3VycmVudFVzZXIpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxtdCA9IGltcG9ydEVMZW1udHNCeUlEKFtcclxuICAgICAgICAgICAgXCJ2ZXJpZnlFbWFpbEJ1dHRvblwiXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGVsbXQudmVyaWZ5RW1haWxCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwidWlsIHVpbC1lbnZlbG9wZS1yZWRvXCI+PC9pPiBSZS1TZW5kIFZlcmlmaWNhdGlvbiBFbWFpbCc7XHJcbiAgICAgICAgdXBkYXRlVUkoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxvd1NhdmUoKXtcclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICBpZiAodXNlciAmJiByb3V0ZSA9PSBcImFwcC9zZXR0aW5nc1wiKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gR2V0dGluZyBFbGVtZW50c1xyXG4gICAgICAgICAgICBjb25zdCBlbG10ID0gaW1wb3J0RUxlbW50c0J5SUQoW1xyXG4gICAgICAgICAgICAgICAgXCJzZXR0aW5nc0Rpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBcInNldHRpbmdzRW1haWxcIixcclxuICAgICAgICAgICAgICAgIFwic2V0dGluZ3NQaG9uZU51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJzYXZlUHJvZmlsZUJ1dHRvblwiXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgZWxtdC5zYXZlUHJvZmlsZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJ1aWwgdWlsLXNhdmVcIj48L2k+IFNhdmUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZihlbG10LnNldHRpbmdzRGlzcGxheU5hbWUudmFsdWUgIT09IHVzZXIuZGlzcGxheU5hbWVcclxuICAgICAgICAgICAgJiYgZWxtdC5zZXR0aW5nc0VtYWlsLnZhbHVlICE9PSB1c2VyLmVtYWlsXHJcbiAgICAgICAgICAgICYmIGVsbXQuc2V0dGluZ3NQaG9uZU51bWJlci52YWx1ZSAhPT0gdXNlci5waG9uZU51bWJlcil7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVTYXZlQnV0dG9uKCdzYXZlUHJvZmlsZUJ1dHRvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNBbGxvd1NhdmUoKXtcclxuICAgIGRpc2FibGVTYXZlQnV0dG9uKCdzYXZlUHJvZmlsZUJ1dHRvbicpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/settings/accountSettings.js\n");

/***/ })

}]);
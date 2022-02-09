// importing internal modules
const DOM = require("../functions/dom");
const firebase = require("../config/firebase.js");

// Importing node modules
const firebaseAuth = require("firebase/auth");

// Setting up modules for use
const firebaseApp = firebase.getFirebaseApp();
const auth = firebaseAuth.getAuth(firebaseApp);

// Getting route info
const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

module.exports.updateSettingsUI = function () { 
    /** 
     * Decsription.
     * Updates all the sections in the settings UI.
     */
    
     exports.updateSettingsUIAccount();

};

module.exports.updateSettingsUIAccount = async function () { 
    /** 
     * Decsription.
     * Updates the Account section in the settings UI.
     */

    // let user = auth.currentUser;
    await auth.onAuthStateChanged(function(user) {
        if(user){
            // Checking if there is a user and we are in teh settings page view
            if (user && route == "app/settings") {

                // Importing DOM Elements
                const elmt = DOM.importELemntsByID([
                    "settingsAccountUserCardDisplayName",
                    "settingsAccountUserCardEmail",
                    "settingsDisplayName",
                    "settingsPhoneNumber",
                    "verifyEmailButton",
                    "verifyEmailLabel"
                ]);

                // Diableing save button by default, it is up to accountSettings.js to enable it when needed
                exports.disableSaveButton('saveProfileButton');

                // Setting the sisplay name & email
                if(user.displayName !== null){
                    elmt.settingsAccountUserCardDisplayName.innerText = user.displayName;
                    elmt.settingsAccountUserCardEmail.innerText = user.email;
                }else{
                    elmt.settingsAccountUserCardDisplayName.innerText = auth.currentUser.email;
                    elmt.settingsAccountUserCardEmail.style.display = 'none';
                }

                // Setting the users info in the input feilds
                elmt.settingsDisplayName.value = user.displayName;
                elmt.settingsPhoneNumber.value = user.phoneNumber;

                // Hiding the 'Verify email" Button is email is already verfied
                if(user.emailVerified === true){
                    elmt.verifyEmailButton.style.display = "none";
                    elmt.verifyEmailLabel.style.display = "none";
                }

            }
        }
    });

};

module.exports.disableSaveButton = function (buttonID) {
    // Getting elements
    button = document.getElementById(buttonID);

    button.disabled = true;
    button.classList.add("disabledButton");
}

module.exports.enableSaveButton = function (buttonID) {
    // Getting elements
    button = document.getElementById(buttonID);

    button.disabled = false;
    button.classList.remove("disabledButton");
}
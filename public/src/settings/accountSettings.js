// Importing External Modules
import { getAuth, updateProfile, sendEmailVerification, onAuthStateChanged } from "firebase/auth";

// Importing Internal Modules
import { getFirebaseApp } from "../config/firebase.js";
import { updateUI } from "../functions/update";
import { importELemntsByID } from "../functions/dom"
import { enableSaveButton, disableSaveButton } from "../functions/settings"

// Setting Up modules
const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);

// Setting up route
const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

// running alow save on page load incse the ui Updates and chnages werent saved yet
allowSave();

// Setting Up event listeners
auth.onAuthStateChanged(function(user) {
    if (user && route == "app/settings") {

        // Getting elements
        const elmt = importELemntsByID([
            "verifyEmailButton",
            "saveProfileButton",
            "settingsDisplayName",
            "settingsEmail",
            "settingsPhoneNumber"
        ]);

        // Adding event listners for buttons
        elmt.verifyEmailButton.addEventListener("click", verifyEmail, false);
        elmt.saveProfileButton.addEventListener("click", updateUserInfo, false);

        // Adding event listerns for the save button
        elmt.settingsDisplayName.addEventListener("input", allowSave, false);
        elmt.settingsEmail.addEventListener("input", allowSave, false);
        elmt.settingsPhoneNumber.addEventListener("input", allowSave, false);
    }
});

// Updating User Info
async function updateUserInfo(){

    // Getting Elements
    const elmt = importELemntsByID([
        "settingsDisplayName",
        "saveProfileButton"
    ]);

    let newUsername;

    if(auth.currentUser.displayName !== elmt.settingsDisplayName.value
    && elmt.settingsDisplayName.value !== null){
        newUsername = elmt.settingsDisplayName.value.trim().replace(/ +(?= )/g,'');
    }

    updateProfile(auth.currentUser, {
        displayName: newUsername
      }).then(() => {

        elmt.saveProfileButton.innerHTML = '<i class="uil uil-check"></i> Saved';

        updateUI();
      }).catch((error) => {
        elmt.saveProfileButton.innerHTML = '<i class="uil uil-times"></i> Unable to Save';
      });
}

// Sending verification email
async function verifyEmail() {
    sendEmailVerification(auth.currentUser)
    .then(() => {
        const elmt = importELemntsByID([
            "verifyEmailButton"
        ]);

        elmt.verifyEmailButton.innerHTML = '<i class="uil uil-envelope-redo"></i> Re-Send Verification Email';
        updateUI();
    });
}

function allowSave(){
    auth.onAuthStateChanged(function(user) {
        if (user && route == "app/settings") {
    
            // Getting Elements
            const elmt = importELemntsByID([
                "settingsDisplayName",
                "settingsEmail",
                "settingsPhoneNumber",
                "saveProfileButton"
            ]);

            elmt.saveProfileButton.innerHTML = '<i class="uil uil-save"></i> Save';
        
            if(elmt.settingsDisplayName.value !== user.displayName
            && elmt.settingsEmail.value !== user.email
            && elmt.settingsPhoneNumber.value !== user.phoneNumber){
                enableSaveButton('saveProfileButton');
            }
        }
    });
}


function disAllowSave(){
    disableSaveButton('saveProfileButton');
}

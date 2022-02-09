// Importing External Modules
import { getAuth, updateProfile, sendEmailVerification, onAuthStateChanged } from "firebase/auth";

// Importing Internal Modules
import { getFirebaseApp } from "../config/firebase.js";
import { updateUI } from "../functions/update";
import { importELemntsByID } from "../functions/dom"

// Setting Up modules
const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);

// Setting up route
const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

// Setting Up event listeners
auth.onAuthStateChanged(function(user) {
    if (user && route == "app/settings") {

        // Getting elements
        const elmt = importELemntsByID([
            "verifyEmailButton",
            "saveProfileButton"
        ]);

        elmt.verifyEmailButton.addEventListener("click", verifyEmail, false)
        elmt.saveProfileButton.addEventListener("click", updateUserInfo, false)
    }
});

// Updating User Info
async function updateUserInfo(){

    // Getting Elements
    const elmt = importELemntsByID([
        "settingsDisplayName",
        "settingsPhoneNumber"
    ]);

    updateProfile(auth.currentUser, {
        displayName: elmt.settingsDisplayName.value,
        phoneNumber: elmt.settingsPhoneNumber.value
      }).then(() => {
        alert('Profile Updated');
        updateUI();
      }).catch((error) => {
        alert('Something went wrong');
      });
}

// Sending verification email
async function verifyEmail() {
    sendEmailVerification(auth.currentUser)
    .then(() => {
        alert('verification Email sent')
        updateUI();
    });
}


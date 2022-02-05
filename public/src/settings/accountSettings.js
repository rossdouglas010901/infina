import { getAuth, updateProfile, sendEmailVerification, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from "../config/firebase.js";

const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);

const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

//Popluationg the UI
auth.onAuthStateChanged(function(user) {
    if (user && route == "app/settings") {
        const verifyEmailButton = document.getElementById('verifyEmailButton');
        verifyEmailButton.addEventListener("click", verifyEmail, false)

        const saveProfileButton = document.getElementById('saveProfileButton');
        saveProfileButton.addEventListener("click", updateUserInfo, false)

        const settingsEmail = document.getElementById('settingsEmail');
        settingsEmail.innerText = auth.currentUser.email;

        const settingsDisplayName = document.getElementById('settingsDisplayName');
        settingsDisplayName.value = auth.currentUser.displayName;

        const settingsPhoneNumber = document.getElementById('settingsPhoneNumber');
        settingsPhoneNumber.value = auth.currentUser.phoneNumber;

    }
});

async function updateUserInfo(){
    const settingsDisplayName = document.getElementById('settingsDisplayName');
    const settingsPhoneNumber = document.getElementById('settingsPhoneNumber');
    updateProfile(auth.currentUser, {
        displayName: settingsDisplayName.value,
        phoneNumber: settingsPhoneNumber.value
      }).then(() => {
        alert('Profile Updated');
      }).catch((error) => {
        alert('Something went wrong');
      });
}

// auth.onAuthStateChanged(function(user) {
//     if(auth.currentUser.emailVerified === true){
//         const verifyEmailButton = document.getElementById('verifyEmailButton');
//         verifyEmailButton.style.display = "none";
//     }
// });

async function verifyEmail() {
    sendEmailVerification(auth.currentUser)
    .then(() => {
        alert('verification Email sent')
    });
}


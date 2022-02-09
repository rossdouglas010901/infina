// importing internal modules
const DOM = require("./dom");
const firebase = require("../config/firebase.js");

// Importing node modules
const firebaseAuth = require("firebase/auth");

// Setting up modules for use
const firebaseApp = firebase.getFirebaseApp();
const auth = firebaseAuth.getAuth(firebaseApp);

module.exports.updateNavbarUI = async function () { 
    /** 
    * Decsription.
    * Updates the navigation UI.
    */

    // Importing DOM Elements
    const elmt = DOM.importELemntsByID([
        "navbarUserIcon",
        "navbarUserIconDropdownAvitar",
        "navbarUserIconDropdownDisplayName",
        "navbarUserIconDropdownEmail",
        "signUpNavbarButton",
        "signInNavbarButton",
        "openAppNavbarButton"
    ]);
    
    //Gathering current User user info
    auth.onAuthStateChanged(function(user) {
        // Checking if elemnts and user object are avaible
        if (user
         
        && elmt.navbarUserIconDropdownAvitar
        && elmt.navbarUserIconDropdownDisplayName
        && elmt.navbarUserIconDropdownEmail){

            if(auth.currentUser.photoURL){
                // If there is a user profile photo, add it
                elmt.navbarUserIcon.src =  auth.currentUser.photoURL;
                elmt.navbarUserIconDropdownAvitar.src =  auth.currentUser.photoURL;

            }
            if(auth.currentUser.displayName && auth.currentUser.email){
                // If there is a user Display name and email, add it
                elmt.navbarUserIconDropdownEmail.style.display = 'block';
                elmt.navbarUserIconDropdownDisplayName.innerText = auth.currentUser.displayName;
                elmt.navbarUserIconDropdownEmail.innerText = auth.currentUser.email;

            }else if(auth.currentUser.email && !auth.currentUser.displayName){
                // If there is a user email and no display name, add it
                elmt.navbarUserIconDropdownEmail.style.display = 'none';
                elmt.navbarUserIconDropdownDisplayName.innerText = auth.currentUser.email;

            }else{
                // If tehre is no user display anonomus
                elmt.navbarUserIconDropdownEmail.style.display = 'none';
                elmt.navbarUserIconDropdownDisplayName.innerText = 'Anonomus User';
            }

        }

        if(elmt.signUpNavbarButton
        && elmt.signInNavbarButton){
            // If the default navbar is active and the user is signed in hide sign up button
            elmt.signUpNavbarButton.style.display = "none";

            // highjacking sign in button to instead open app
            elmt.signInNavbarButton.innerText = "Open App";
            elmt.signInNavbarButton.setAttribute('onclick','linkAbs(`app/add`)')
        }
    });
}
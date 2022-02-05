import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from "../config/firebase.js";

const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);

const navbarUserIcon = document.getElementById('navbarUserIcon');
const navbarUserIconDropdownAvitar = document.getElementById('navbarUserIconDropdownAvitar');
const navbarUserIconDropdownDisplayName = document.getElementById('navbarUserIconDropdownDisplayName');
const navbarUserIconDropdownEmail = document.getElementById('navbarUserIconDropdownEmail');

//Gathering current User user info
auth.onAuthStateChanged(function(user) {
    if (user) {
        if(navbarUserIcon 
            && navbarUserIconDropdownAvitar
            && navbarUserIconDropdownDisplayName
            && navbarUserIconDropdownEmail){
                if(auth.currentUser.photoURL){
                    navbarUserIcon.src =  auth.currentUser.photoURL;
                    navbarUserIconDropdownAvitar.src =  auth.currentUser.photoURL;
                }
                if(auth.currentUser.displayName && auth.currentUser.email){
                    navbarUserIconDropdownEmail.style.display = 'block';

                    navbarUserIconDropdownDisplayName.innerText = auth.currentUser.displayName;
                    navbarUserIconDropdownEmail.innerText = auth.currentUser.email;
                }else if(auth.currentUser.email && !auth.currentUser.displayName){
                    navbarUserIconDropdownEmail.style.display = 'none';

                    navbarUserIconDropdownDisplayName.innerText = auth.currentUser.email;
                }else{
                    navbarUserIconDropdownEmail.style.display = 'none';

                    navbarUserIconDropdownDisplayName.innerText = 'Anonomus User';
                }
        }
    } else {
      // No user is signed in.
    }
});
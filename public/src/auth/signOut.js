import { getAuth, signOut } from "firebase/auth";
import { getFirebaseApp } from "../config/firebase.js";

const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);
const signOutButton = document.getElementById('signOutButton');

// Signin In Function
if(signOutButton){
    signOutButton.addEventListener("click", signUserOut, false)
}

// Redirrecting Pages Users cant go If they are not authenticated
async function signUserOut(){
    await signOut(auth);
};


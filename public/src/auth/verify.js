import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from "../config/firebase.js";

const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);
const urlSecurityRules = require('../config/urlSecurityRules.json');
const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

// Redirrecting Pages Users cant go If they are not authenticated
onAuthStateChanged(auth, user => {
    if(user == null){
        for (const [key, value] of Object.entries(urlSecurityRules)) {
            if(key == route && value.requireAuth === true){
                window.location = baseURL + '/app/signIn'
            }
        }
    }
});



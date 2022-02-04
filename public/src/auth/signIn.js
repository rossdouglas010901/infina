import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseApp } from "../config/firebase.js";

const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);
const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

// Signin In Function
if(route == 'app/signin'.toLowerCase()){
    document.getElementById('signInButton').addEventListener("click", signIn, false)

    hideAuthenticationError();
}

async function signIn(){
    hideAuthenticationError()

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    
    console.log(email);
    console.log(password);
    try {
        const userCredentail = await signInWithEmailAndPassword(auth, email, password).then(() => {
            window.location = baseURL + '/app/add';
        });
        console.log(userCredentail.user); 
    }catch(error){
        console.log(error);
        if (error.code == AuthErrorCodes.INVALID_PASSWORD || error.code == AuthErrorCodes.INVALID_EMAIL){
            showAuthenticationError('Wrong username or password');
            
        }
    }
    
};

function showAuthenticationError(message){
    let errorMessage = document.getElementById('signInErrorMessage');
    let errorMessageText = document.getElementById('signInErrorMessageText');
    errorMessageText.innerText = message;
    errorMessage.style.display = "block";
}

function hideAuthenticationError(){
    let errorMessage = document.getElementById('signInErrorMessage');
    errorMessage.style.display = "none";
}
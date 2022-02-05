import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseApp } from "../config/firebase.js";

const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);
const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

// Signin In Function
if(route == 'app/signin'.toLowerCase()){
    document.getElementById('signInButton').addEventListener("click", signIn, false)

    document.getElementById('signInPassword').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          signIn();
        }
    });

    hideAuthenticationError();
}

async function signIn(){
    hideAuthenticationError()

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    
    try {
        const userCredentail = await signInWithEmailAndPassword(auth, email, password).then(() => {
            window.location = baseURL + '/app/add';
        }); 
    }catch(error){
        switch(error.code){
            case "auth/user-disabled":
                showAuthenticationError('This account has been disabled');
                break;
            case "auth/invalid-email":
                showAuthenticationError('The email address you enterd is invalid');
                break;
            case "auth/user-not-found":
                showAuthenticationError('Username or password is incorrect');
                break;
            case "auth/wrong-password":
                showAuthenticationError('Username or password is incorrect');
                break;
            case "auth/network-request-failed":
                showAuthenticationError('Network error, Check your internet connection or firewall');
                break;
            default:
                let errorCode = error.code.replace('auth/','').replace(/-/g, ' ');
                errorCode = errorCode[0].toUpperCase() + errorCode.slice(1);
                showAuthenticationError(errorCode);
                break;
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
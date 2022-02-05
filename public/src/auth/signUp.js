import { AuthErrorCodes, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirebaseApp } from "../config/firebase.js";

const firebaseApp = getFirebaseApp();
const auth = getAuth(firebaseApp);
const baseURL = window.location.protocol + '//' + window.location.host + '/';
const route = window.location.href.replace(baseURL,'').replace(/\/$/, "").toLowerCase();

// Signin In Function
if(route == 'app/signup'.toLowerCase()){
    document.getElementById('signUpButton').addEventListener("click", signUp, false)

    document.getElementById('signUpPasswordConfirm').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            signUp();
        }
    });

    hideAuthenticationError();
}

async function signUp(){
    hideAuthenticationError()

    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const signUpPasswordConfirm = document.getElementById('signUpPasswordConfirm').value;
    
    try {
        if(password === signUpPasswordConfirm){
            const userCredentail = await createUserWithEmailAndPassword(auth, email, password).then(() => {
                window.location = baseURL + '/app/add';
            });
        }else{
            showAuthenticationError('Passwords don\'t not match');
        }
    }catch(error){
        switch(error.code){
            case "auth/email-already-in-use":
                showAuthenticationError('This email is already in use. You may have to sign in instead');
                break;
            case "auth/invalid-email":
                showAuthenticationError('The email address you enterd is invalid');
                break;
            case "auth/operation-not-allowed":
                showAuthenticationError('Sign up has been temporarily diabled');
                break;
            case "auth/weak-password":
                showAuthenticationError('Your password is too weak');
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
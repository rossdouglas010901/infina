import { initializeApp } from "firebase/app";

export function getFirebaseApp() {
    
    const firebaseConfig = {
        apiKey: "AIzaSyBAl6ohxngBZsKcVsbSechx8tpm_SP44UY",
        authDomain: "infina-dc87c.firebaseapp.com",
        projectId: "infina-dc87c",
        storageBucket: "infina-dc87c.appspot.com",
        messagingSenderId: "308815347437",
        appId: "1:308815347437:web:30e628af9b4ccc49be96e4",
        measurementId: "G-ME3GHPG7ZN"
    };

    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);

    return firebaseApp;
}
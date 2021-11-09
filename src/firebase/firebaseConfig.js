
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBomEElyPOJlMPfDFquF6C_E_qJCav9NOk",
    authDomain: "react-journal-app-8b428.firebaseapp.com",
    projectId: "react-journal-app-8b428",
    storageBucket: "react-journal-app-8b428.appspot.com",
    messagingSenderId: "571774134460",
    appId: "1:571774134460:web:376569b2d998bc8eaa88b9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    app,
    firebaseConfig

}

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



const firebaseConfigTesting = {
    apiKey: "AIzaSyDBHO4znF-FUFcD2DUdXaA2LqGxC2a-s9A",
    authDomain: "pruebagimnasio-9eef2.firebaseapp.com",
    databaseURL: "https://pruebagimnasio-9eef2.firebaseio.com",
    projectId: "pruebagimnasio-9eef2",
    storageBucket: "pruebagimnasio-9eef2.appspot.com",
    messagingSenderId: "139676948687",
    appId: "1:139676948687:web:6899661f2df67fe8dfffba",
    measurementId: "G-9BJ3DDJJPY"
};


if( process.env.NODE_ENV === 'test'){
    initializeApp(firebaseConfigTesting);
}else{
    // Initialize Firebase
    initializeApp(firebaseConfig);
}



const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebaseConfig
}
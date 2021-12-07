
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:  process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

/* data hide

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
*/
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebaseConfig
}
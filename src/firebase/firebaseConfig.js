import firebase  from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';



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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = firebase.auth.googleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

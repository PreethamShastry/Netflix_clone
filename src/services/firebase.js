// rect-netflix is the project name in firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI78bMrryoJL6nfSDsoCnLhjxv6AVrImM",
  authDomain: "react-netflix-250a5.firebaseapp.com",
  projectId: "react-netflix-250a5",
  storageBucket: "react-netflix-250a5.appspot.com",
  messagingSenderId: "685594962341",
  appId: "1:685594962341:web:c3e262eea19739d93ea04c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "@firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClIUjXljyf-jSuS-Jvs6kmuJS1S7JFlG0",
  authDomain: "socialmediaapp-d705d.firebaseapp.com",
  projectId: "socialmediaapp-d705d",
  storageBucket: "socialmediaapp-d705d.appspot.com",
  messagingSenderId: "814808922411",
  appId: "1:814808922411:web:7c3ae5295d184ff7d62d6e",
  measurementId: "G-BVWS7W55VE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);     // initialize app with firebaseConfig //
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app)                    // inialize database
export const storage=getStorage();
export const provider=new GoogleAuthProvider()




  
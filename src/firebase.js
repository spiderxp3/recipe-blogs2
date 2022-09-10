// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD-LVoSCHtb_74_dUo-LBvijrwZbWHKuAc",
  authDomain: "recipes-17082.firebaseapp.com",
  projectId: "recipes-17082",
  storageBucket: "recipes-17082.appspot.com",
  messagingSenderId: "273373543202",
  appId: "1:273373543202:web:0048b92f83f5c7a96bc37b",
  measurementId: "G-PR96G89CEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

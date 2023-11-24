// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCeHwU_u0Mmpm8TMywyARhhu4oK3OKr4MA",
  authDomain: "xiione.firebaseapp.com",
  projectId: "xiione",
  storageBucket: "xiione.appspot.com",
  messagingSenderId: "253350715958",
  appId: "1:253350715958:web:23257902c0b2dfb99b2e97",
  measurementId: "G-DY8DZDNL6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId:process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID
// };
//all the above env valibles prefiexd with REACT_APP
const firebaseConfig = {
  apiKey: "AIzaSyCWYy3o576YnRhuxXxo51gE6bZqd3mCHsk",
  authDomain: "healthcare-c4c23.firebaseapp.com",
  projectId: "healthcare-c4c23",
  storageBucket: "healthcare-c4c23.appspot.com",
  messagingSenderId: "551231844811",
  appId: "1:551231844811:web:58cc1130f6421265bcc64e",
  measurementId: "G-Z8T498DHDR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export { app, firestore, storage}



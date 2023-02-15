// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACtZjbF-MPA2u-EGfFDz2ofb90VQiSrzM",
  authDomain: "bby-wen.firebaseapp.com",
  projectId: "bby-wen",
  storageBucket: "bby-wen.appspot.com",
  messagingSenderId: "975957421218",
  appId: "1:975957421218:web:fbecb588ca0a47cb4c7bfb",
  measurementId: "G-4VMW0SNNGT",
  databaseURL:
    "https://bby-wen-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = getDatabase();

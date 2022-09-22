// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to  
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "agus-funkos.firebaseapp.com",
    projectId: "agus-funkos",
    storageBucket: "agus-funkos.appspot.com",
    messagingSenderId: "967482144466",
    appId: "1:967482144466:web:5dbbe23da8516477b75f0b",
    measurementId: "G-WMHMRVHFJV"
};

// Initialize Firebase
initializeApp(firebaseConfig);
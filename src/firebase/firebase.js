
import { initializeApp } from "firebase/app";

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
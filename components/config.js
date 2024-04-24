// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDziMltP7yLEpKW7wJgZaHfDvJ_Y0QSmAc",
    authDomain: "final-4bf17.firebaseapp.com",
    projectId: "final-4bf17",
    storageBucket: "final-4bf17.appspot.com",
    messagingSenderId: "537939775598",
    appId: "1:537939775598:web:f9972f54e191db0609567f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
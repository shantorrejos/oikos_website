// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8yOerkjDuaZr_MHbdTRMkCeVNpdNM4LY",
  authDomain: "oikos-foundation.firebaseapp.com",
  projectId: "oikos-foundation",
  storageBucket: "oikos-foundation.appspot.com",
  messagingSenderId: "588393541405",
  appId: "1:588393541405:web:8879f218dcca6edc387bf4",
  measurementId: "G-MKEQ7S0GPW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export default db;

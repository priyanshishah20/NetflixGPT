// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsFytwbRCZdw5qMKjtwHBYaK51q195HOg",
  authDomain: "netflixgpt-787d1.firebaseapp.com",
  projectId: "netflixgpt-787d1",
  storageBucket: "netflixgpt-787d1.firebasestorage.app",
  messagingSenderId: "804826796970",
  appId: "1:804826796970:web:3c209f9f8e2607638611d3",
  measurementId: "G-L0M734K78B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
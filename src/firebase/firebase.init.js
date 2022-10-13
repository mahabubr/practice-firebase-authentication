// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrNlgxdnyCVngQZE2xEsBgmNAQXfuP2d4",
  authDomain: "fir-authentication-53abe.firebaseapp.com",
  projectId: "fir-authentication-53abe",
  storageBucket: "fir-authentication-53abe.appspot.com",
  messagingSenderId: "58690464340",
  appId: "1:58690464340:web:e6a536b29bdd64673e5bc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
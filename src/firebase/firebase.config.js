// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhgfaEbyFKlRYUEAlag8Xky6iZ9QTQF4",
  authDomain: "user-email-password-auth-b7579.firebaseapp.com",
  projectId: "user-email-password-auth-b7579",
  storageBucket: "user-email-password-auth-b7579.appspot.com",
  messagingSenderId: "143112829037",
  appId: "1:143112829037:web:a0161280e3033a7c7b2764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

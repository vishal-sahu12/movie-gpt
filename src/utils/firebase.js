// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkeg4mdxR6Ub5HOxva0qLB6BIFOOhY1lU",
  authDomain: "moviegpt-2a1c0.firebaseapp.com",
  projectId: "moviegpt-2a1c0",
  storageBucket: "moviegpt-2a1c0.appspot.com",
  messagingSenderId: "373686616134",
  appId: "1:373686616134:web:9ae9543b04b2de7716ca47",
  measurementId: "G-CPDMS8Q1FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
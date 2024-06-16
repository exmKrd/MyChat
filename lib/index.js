// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATn82fhvv58DkWUFsX3X_R8u-k-Wq0YGw",
  authDomain: "mychat-5938a.firebaseapp.com",
  projectId: "mychat-5938a",
  storageBucket: "mychat-5938a.appspot.com",
  messagingSenderId: "445947855754",
  appId: "1:445947855754:web:44b56260dadc402c017e73",
  measurementId: "G-Q2V8R8YVDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
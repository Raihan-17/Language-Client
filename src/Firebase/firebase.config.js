// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWY6cnmclG41kJihWUKd9T0AaSBS3yWJU",
  authDomain: "language-client-a2dbe.firebaseapp.com",
  projectId: "language-client-a2dbe",
  storageBucket: "language-client-a2dbe.firebasestorage.app",
  messagingSenderId: "64084474846",
  appId: "1:64084474846:web:e5c172122f89ff697f3b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
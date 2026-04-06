// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMcr-7ESLCLvPG4MdRvuI7rLK40wzqXAs",
  authDomain: "fontseller-6c5fc.firebaseapp.com",
  projectId: "fontseller-6c5fc",
  storageBucket: "fontseller-6c5fc.firebasestorage.app",
  messagingSenderId: "788441995465",
  appId: "1:788441995465:web:a94c78ec9d5e8dba471518",
  measurementId: "G-4BB89QLW63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
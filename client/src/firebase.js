// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "summer-internship-2024-a51e1.firebaseapp.com",
  projectId: "summer-internship-2024-a51e1",
  storageBucket: "summer-internship-2024-a51e1.appspot.com",
  messagingSenderId: "547061381280",
  appId: "1:547061381280:web:f86b41ad26bfc739dbb1c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authapp-5f77d.firebaseapp.com",
  projectId: "authapp-5f77d",
  storageBucket: "authapp-5f77d.appspot.com",
  messagingSenderId: "800908994993",
  appId: "1:800908994993:web:1bef802db2ca8aefe3f590"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
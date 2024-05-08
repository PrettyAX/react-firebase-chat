import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b650b.firebaseapp.com",
  projectId: "reactchat-b650b",
  storageBucket: "reactchat-b650b.appspot.com",
  messagingSenderId: "438216428141",
  appId: "1:438216428141:web:93b67ae4f59f25c2f18d64",
  measurementId: "G-4MGZQ5R109"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage
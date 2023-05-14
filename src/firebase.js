import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBelljN-dZWtLVXfXp-bX0DA--bIB0-VWw",
  authDomain: "chat-react-bdf90.firebaseapp.com",
  projectId: "chat-react-bdf90",
  storageBucket: "chat-react-bdf90.appspot.com",
  messagingSenderId: "469568921628",
  appId: "1:469568921628:web:9b3590e065e7d5d0d7ffd9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgAQ4GeUTRRiWSc705G_y0bSwZRHv4bRs",
  authDomain: "twitter-1a85e.firebaseapp.com",
  projectId: "twitter-1a85e",
  storageBucket: "twitter-1a85e.appspot.com",
  messagingSenderId: "631805171375",
  appId: "1:631805171375:web:043ac30a63a6720d31265a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Import the necessary Firebase modules
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnCuuG2DAQHl4i04RtDaRRoXKkuJttiVc",
  authDomain: "signal-clone-69f2f.firebaseapp.com",
  projectId: "signal-clone-69f2f",
  storageBucket: "signal-clone-69f2f.appspot.com",
  messagingSenderId: "290821623328",
  appId: "1:290821623328:web:b7d3e4c510e694fc3af645",
};

// Initialize Firebase if it's not already initialized

firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const storage = firebase.storage();
export const firestore = firebase.firestore();

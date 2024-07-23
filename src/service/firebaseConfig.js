// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHy3auHxO_aUHgQXZbGOHCuapKDEYRpOQ",
  authDomain: "trip-planner2-65a43.firebaseapp.com",
  projectId: "trip-planner2-65a43",
  storageBucket: "trip-planner2-65a43.appspot.com",
  messagingSenderId: "371421790498",
  appId: "1:371421790498:web:c17eaf809e351f4e5ee57b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1x_mX4NKXKqF26KVf_W4XVWoTyTNtcNA",
  authDomain: "trip-planner-addb6.firebaseapp.com",
  projectId: "trip-planner-addb6",
  storageBucket: "trip-planner-addb6.appspot.com",
  messagingSenderId: "68716194925",
  appId: "1:68716194925:web:96a39ecb567f7659426364",
  measurementId: "G-5FJC8CT4T6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 


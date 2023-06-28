// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB0FK6Ks2HduOv__Pu1ByyxgRcuooLCOTU",
  authDomain: "teste-5c4a2.firebaseapp.com",
  databaseURL: "https://teste-5c4a2-default-rtdb.firebaseio.com",
  projectId: "teste-5c4a2",
  storageBucket: "teste-5c4a2.appspot.com",
  messagingSenderId: "788729236513",
  appId: "1:788729236513:web:19de8ea30dff63bae92760"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

const db = getDatabase();

export { db, ref, onValue };
//const analytics = getAnalytics(firebase);
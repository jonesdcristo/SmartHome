// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDsjIe5Ov25pVesIPNn2BTkF5HZulRBBOs",
  authDomain: "login-smarthome-1968d.firebaseapp.com",
  databaseURL: "https://login-smarthome-1968d-default-rtdb.firebaseio.com",
  projectId: "login-smarthome-1968d",
  storageBucket: "login-smarthome-1968d.appspot.com",
  messagingSenderId: "20163368291",
  appId: "1:20163368291:web:b5ced7574a74864d96af56",
  measurementId: "G-2TCVDGCPZN"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
//const analytics = getAnalytics(firebase);
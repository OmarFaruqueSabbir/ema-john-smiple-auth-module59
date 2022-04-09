// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ_Iq-r_YeOAjmZRQtwerdqotk7eN89T4",
  authDomain: "ema-john-simple-99cb3.firebaseapp.com",
  projectId: "ema-john-simple-99cb3",
  storageBucket: "ema-john-simple-99cb3.appspot.com",
  messagingSenderId: "841444680165",
  appId: "1:841444680165:web:c0f7cd5cb5325915998f0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
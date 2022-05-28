// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
// import 'firebase/storage';
// import 'firebase/firestore';

import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkr3Avbik2BAit5CwPQ7TEELBlKF88_08",
  authDomain: "ninja-firegram-39132.firebaseapp.com",
  projectId: "ninja-firegram-39132",
  storageBucket: "ninja-firegram-39132.appspot.com",
  messagingSenderId: "445542897812",
  appId: "1:445542897812:web:983046927f2cce865d7c81"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
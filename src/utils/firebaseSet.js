// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkE3hMNaCyzvFGam4GJ0hsyTwPalJGhq8",
  authDomain: "pollosdedomeyko-ec992.firebaseapp.com",
  projectId: "pollosdedomeyko-ec992",
  storageBucket: "pollosdedomeyko-ec992.appspot.com",
  messagingSenderId: "314926434924",
  appId: "1:314926434924:web:a5345879d7f89ad05ce649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
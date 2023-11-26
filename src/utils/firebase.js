// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-blog-403518.firebaseapp.com",
  projectId: "my-blog-403518",
  storageBucket: "my-blog-403518.appspot.com",
  messagingSenderId: "148609933511",
  appId: "1:148609933511:web:6bed40f73a5af394471ee2",
  measurementId: "G-17762EP1FF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

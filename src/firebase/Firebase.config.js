// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADIVO6xD5ycRxZEQn9uGLawyUq9AaZyPg",
  authDomain: "motor-complex.firebaseapp.com",
  projectId: "motor-complex",
  storageBucket: "motor-complex.appspot.com",
  messagingSenderId: "723716899048",
  appId: "1:723716899048:web:ddd12164cdcb8c0999495d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
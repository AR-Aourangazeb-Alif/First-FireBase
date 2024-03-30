// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDrhbuS1AE8cbkn30Y9xIgElPpLxFh--0",
  authDomain: "first-firebase-22879.firebaseapp.com",
  projectId: "first-firebase-22879",
  storageBucket: "first-firebase-22879.appspot.com",
  messagingSenderId: "667622348641",
  appId: "1:667622348641:web:8b08fa23726d22b7db9720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
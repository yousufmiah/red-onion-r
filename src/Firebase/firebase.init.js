// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAZiacELmWhFQS8Y2aBsdce34ScVBFsy4",
  authDomain: "red-onion-react-router-auth.firebaseapp.com",
  projectId: "red-onion-react-router-auth",
  storageBucket: "red-onion-react-router-auth.appspot.com",
  messagingSenderId: "49363345259",
  appId: "1:49363345259:web:9657cb9ba44bfb3d85b62e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

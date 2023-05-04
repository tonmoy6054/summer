// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJpvv6gnL_WdZUZgPodc82LFYhoN6So-M",
  authDomain: "the-hunter-chef-cookbook.firebaseapp.com",
  projectId: "the-hunter-chef-cookbook",
  storageBucket: "the-hunter-chef-cookbook.appspot.com",
  messagingSenderId: "911103221680",
  appId: "1:911103221680:web:3e9d5b8df6676afedfc075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
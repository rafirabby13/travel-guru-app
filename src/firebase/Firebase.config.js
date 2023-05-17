// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYsyiZa71oUxKOoVtfGNnufkrQMS_NF1g",
  authDomain: "travel-guru-app-eb26e.firebaseapp.com",
  projectId: "travel-guru-app-eb26e",
  storageBucket: "travel-guru-app-eb26e.appspot.com",
  messagingSenderId: "1059613011097",
  appId: "1:1059613011097:web:b7aed9b2997e9d181b9c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
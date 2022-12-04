// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlTbvvjEtmrcD7NboA-KvQNRtXv3452Tk",
  authDomain: "shoppe-online-store.firebaseapp.com",
  projectId: "shoppe-online-store",
  storageBucket: "shoppe-online-store.appspot.com",
  messagingSenderId: "1054695501333",
  appId: "1:1054695501333:web:9bdfaccebf7cdd9f03e81c",
  measurementId: "G-9J8YSW5MQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
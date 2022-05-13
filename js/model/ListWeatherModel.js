// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYX3wSmlXM7HXWpqldSCP3YHhjHqMUZkc",
  authDomain: "fir-weather-fa238.firebaseapp.com",
  projectId: "fir-weather-fa238",
  storageBucket: "fir-weather-fa238.appspot.com",
  messagingSenderId: "329698634289",
  appId: "1:329698634289:web:7323a3f63bd857c4e90310",
  measurementId: "G-XKFB98EFSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

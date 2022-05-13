import { initializeApp } from "firebase/app";
import { getDatabase , ref, set, onValue} from "firebase/database";
// Import the functions you need from the SDKs you need
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
const database = getDatabase(app);

export class ListWeatherModel{


writeData(id,date,weather){
  const db=getDatabase();
  set(ref(db,'weather/'+id),{
    date:date,
    temp: weather,
  });
}
readDate(id){
  const db=getDatabase();
  onValue(ref(db,'weather/'+id),(snapshot)=>{
    const data = snapshot.val();
    console.log(data);
  })
}
}



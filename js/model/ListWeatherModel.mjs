import { initializeApp } from "firebase/app";
import { getDatabase , ref, set, onValue} from "firebase/database";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


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



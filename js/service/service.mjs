import {getDatabase, onValue, ref, set, remove, child, get} from "firebase/database";
import {WeatherModel} from "../model/WeatherModel.mjs";
import {weatherAPI} from "../../apikey.js";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../apikey.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export class weatherService {
  constructor() {
    this.model = new WeatherModel();
  }

  getWeatherAPI(lat, lon) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI.apikey}&units=metric`
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let m = this.model.setModel(Math.floor(data.main.temp), data.weather[0].description, data.weather[0].icon, data.name, data.sys.country);
          console.log('model', JSON.stringify(m));
          console.log("1");
          let weather = m;
          resolve(weather);
        })
    })
  }

  getWeekWeatherAPI(lat, lon) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric`
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let weather_week = [];
          for (let i = 0; i < data.daily.length; i++) {
            let arr = {};
            arr.temperature = Math.floor(data.daily[i].temp.eve);
            arr.weathericon = data.daily[i].weather[0].icon;
            weather_week.push(arr);
          }
          console.log(weather_week);
          resolve(weather_week);
        })
    })
  }
  writeData(id, date, temp) {
    const db = getDatabase();
    console.log(id, date, temp);
    set(ref(db, 'weather/' + id), {
      date: date,
      temp: temp,
    });
  }

  readData() {
    const db = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(db, 'weather/')).then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          console.log(data);
          resolve(data)
        }
      })
    })
  }

  checkNumData() {
    const db = getDatabase();
    return new Promise((resolve, reject) => {
      onValue(ref(db, 'weather/'), (snapshot) => {
        console.log("numWeather::", Object.keys(snapshot.toJSON()).length)
        resolve(Object.keys(snapshot.toJSON()).length);
      })
    })
  }

  removeData(id) {
    const db = getDatabase();
    console.log("삭제 id", id);
    remove(ref(db, 'weather/' + id))
  }
}



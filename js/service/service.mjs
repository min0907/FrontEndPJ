import {getDatabase, onValue, ref, set,get,child} from "firebase/database";
import {WeatherModel} from "../model/WeatherModel.mjs";

export class getWeather{
  constructor() {
    this.model=new WeatherModel();
  }
  getWeatherAPI(){  //API_KEY = bdab0099b7b556d38af96f7adcc089f3
    return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition((position) => {
      let lat=position.coords.latitude;
      let lon=position.coords.longitude;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric`
        )
          .then((response)=>{
            console.log(response);
            return response.json();
          })
          .then((data)=>{
            console.log(data);
            let m=this.model.setModel(Math.floor(data.main.temp),data.weather[0].description,data.weather[0].icon,data.name,data.sys.country);
            console.log('model',JSON.stringify(m));
            console.log("1");
            let weather=m;
            resolve(weather);
          })
      })
      })
  }
  getWeekWeatherAPI(){
    return new Promise((resolve,reject)=> {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
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
    })
  }
}
export class saveWeather {
  writeData(id, date, temp) {
    const db = getDatabase();
    console.log(id,date,temp);
    set(ref(db, 'weather/' + id), {
      date: date,
      temp: temp,
    });
  }

  readData() {
    const db = getDatabase();
      onValue(ref(db, 'weather/'), (snapshot) => {
        let data = snapshot.val();
        const weather = document.querySelector(".weatherList");
        weather.innerHTML = '';
        console.log("check",data);
        for (let i = 0; i < data.length; i++) {
          weather.innerHTML = weather.innerHTML + `<li class="weather-list">저장 일시:${JSON.stringify(data[i].date)} 온도:${JSON.stringify(data[i].temp)}</li>`
        }
        console.log("nn", data);
        return Object.keys(snapshot.toJSON()).length;
      })
  }
  checkNumData() {
    const db = getDatabase();
    return new Promise((resolve,reject)=> {
      onValue(ref(db, 'weather/'), (snapshot) => {
        console.log("numWeather::", Object.keys(snapshot.toJSON()).length)
        resolve(Object.keys(snapshot.toJSON()).length);
      })
    })
  }
}


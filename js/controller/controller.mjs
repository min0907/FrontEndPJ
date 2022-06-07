import {getWeather,saveWeather} from "../service/service.mjs";
import {View} from "../view/WeatherView.mjs";
import {ListWeatherView} from "../view/ListWeatherView.mjs";
let get_weather=new getWeather();
let save = new View();
let disWeather=new saveWeather();
let listView=new ListWeatherView();
export class controller{
  init() {
    navigator.geolocation.getCurrentPosition((position) => {
      get_weather.getWeatherAPI(position.coords.latitude,position.coords.longitude).then(data=>save.setWeather(data));
      get_weather.getWeekWeatherAPI(position.coords.latitude,position.coords.longitude).then(data=>save.setWeekWeather(data));
    })
    listView.registerEvent(disWeather);
    this.displayList();
  }
  displayList(){
    disWeather.readData().then((data)=>{
      listView.readSavedWeather(data,disWeather)
    })
  }
}


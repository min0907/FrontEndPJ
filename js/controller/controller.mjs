import {getWeather} from "../service/service.mjs";
let get_weather=new getWeather();
export class controller{
  init(){
    get_weather.requestCoords();
  }
}


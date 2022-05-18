import {controller} from "./controller/controller.mjs";
// import {View} from './view/WeatherView.mjs';
import {ListWeatherModel} from "./model/ListWeatherModel.mjs";
import {saveWeather} from "./service/service.mjs";

let con=new controller(new saveWeather());
let m=new saveWeather();
con.init()

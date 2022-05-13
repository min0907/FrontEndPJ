import {controller} from "./controller/controller.mjs";
// import {View} from './view/WeatherView.mjs';
import {ListWeatherModel} from "./model/ListWeatherModel.mjs";
import {saveWeather} from "./service/service.mjs";

let con=new controller();
let m=new saveWeather();
con.init()
con.registerEvent();
// con.displayList();
// m.writeData(1,new Date().toString(),42);
m.readData();
// let v=new View();

// window.addEventListener('DOMContentLoaded', function() {
//   console.log("success window onload");
//   const view = new View();
//   const controller = new controller(view);
// });

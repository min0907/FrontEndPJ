import {controller} from "./controller/controller.mjs";
// import {View} from './view/WeatherView.mjs';
let con=new controller();
con.init()
con.registerEvent();
con.displayList();
// let v=new View();

// window.addEventListener('DOMContentLoaded', function() {
//   console.log("success window onload");
//   const view = new View();
//   const controller = new controller(view);
// });

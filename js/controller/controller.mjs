import {getWeather,saveWeather} from "../service/service.mjs";
import {View} from "../view/WeatherView.mjs";
let get_weather=new getWeather();
let save = new View();
let disWeather=new saveWeather();
export class controller{
  // constructor(view) {
  //   this.view=view;
  //   this.registerEvent(view);
  //   this.init();
  // }
  init(){
    get_weather.requestCoords();
  }
  registerEvent(){
    const saveBtn=save.findElement('.savebtn')
    saveBtn.addEventListener("click",() =>{
      console.log("click!!");
    })
  }
  displayList(){
    disWeather.displayWeather();
  }
  // handleSaveWeather
}


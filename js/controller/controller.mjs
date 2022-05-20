import {getWeather,saveWeather} from "../service/service.mjs";
import {View} from "../view/WeatherView.mjs";
import {ListWeatherView} from "../view/ListWeatherView.mjs";
import {getDatabase, onValue, ref} from "firebase/database";
let get_weather=new getWeather();
let save = new View();
let disWeather=new saveWeather();
let listView=new ListWeatherView();
export class controller{
  constructor(saveWeather) {
    this.saveWeather=saveWeather;
  }
  init() {
    get_weather.getWeatherAPI().then(data=>save.setWeather(data));
    get_weather.getWeekWeatherAPI().then(data=>save.setWeekWeather(data));
    this.registerEvent();
    this.displayList();
  }
 registerEvent() {
    const saveBtn = save.findElement('.savebtn')
   disWeather.checkNumData().then((data)=>
       saveBtn.addEventListener("click", () => {
       // let id=disWeather.readData();
         console.log("data",data);
       let temp = listView.findElementValue("temperature-value")
       console.log("temp:::", temp[0].innerText);
       if(temp[0].innerText!="- °C"){
         this.saveWeather.writeData(data, new Date().toString(),temp[0].innerText);
         console.log("success save!!");
         location.reload();
       }else if(temp[0].innerText=="- °C"){
         alert("날씨가 화면에 나타난 후 저장해주세요!");
       }
     }))
  }
  registerRemove(){
    // console.log(listView.findAllElement(".removeData"));
    let that=this;
    listView.findAllElement(".removeData").forEach(item=>{
      item.addEventListener('click',function (){
        console.log(this.id);
        disWeather.removeData(this.id)
        location.reload();
      })
    })
  }

  displayList(){
    this.saveWeather.readData().then((data)=>{
      listView.readSavedWeather(data)
    }).then(this.registerRemove);
  }
}


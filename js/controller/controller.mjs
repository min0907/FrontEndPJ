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
       }else if(temp[0].innerText=="- °C"){
         alert("날씨가 화면에 나타난 후 저장해주세요!");
       }
     }))
    // const db=getDatabase()
    // let num;
    // onValue(ref(db, 'weather/'),(snapshot)=> {
    //   num = snapshot.toJSON()
    //   console.log(Object.keys(num).length);
    // },{onlyOnce:true
    // });
   // console.log("checkNumData",disWeather.checkNumData());
   //    saveBtn.addEventListener("click", () => {
   //      // let id=disWeather.readData();
   //      let temp = listView.findElementValue("temperature-value")
   //      console.log("temp:::", temp[0].innerText);
   //      if(temp[0].innerText!="- °C"){
   //        this.saveWeather.writeData(Object.keys(num).length, new Date().toString(),temp[0].innerText);
   //      }else if(temp[0].innerText=="- °C"){
   //        alert("날씨가 화면에 나타난 후 저장해주세요!");
   //      }
   //    })

  }
  displayList(){
    this.saveWeather.readData();
  }
}


// class getGeo{
//   handleGeoSucc(position) {
//     /* Success Handle */
//     console.log(position);
//     const latitude = position.coords.latitude;  // 경도
//     const longitude = position.coords.longitude;  // 위도
//     const coordsObj = {
//       latitude,
//       longitude
//     }
//   }
//   handleGeoErr(err) {
//     /* Error Handle */
//     console.log("geo err! " + err);
//   }
//   requestCoords() {
//     navigator.geolocation.getCurrentPosition(this.handleGeoSucc, this.handleGeoErr);
//   }
// }
// function handleGeoSucc(position) {
//   /* Success Handle */
//   console.log(position);
//   const latitude = position.coords.latitude;  // 경도
//   const longitude = position.coords.longitude;  // 위도
//   getWeather(latitude,longitude)
// }
//
// function handleGeoErr(err) {
//   /* Error Handle */
//   console.log("geo err! " + err);
// }
import {getWeather} from "../service/service.mjs";
let get_weather=new getWeather();
export class controller{
  init(){
    get_weather.requestCoords();
  }
}


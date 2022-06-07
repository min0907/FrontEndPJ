import {getWeather,saveWeather} from "../service/service.mjs";
// import {weatherAPI} from "../../apikey.js";
import data from "../../test.json"
const nock = require('nock')

// import {initializeApp} from "firebase/app";
// import {getDatabase, onValue, ref, set} from "firebase/database";
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// import {firebaseConfig} from "../../apikey";
import fetch from "node-fetch";
globalThis.fetch = fetch
let test=new getWeather();
let test2=new saveWeather();
describe('unit test 1',function() {
  before(function(){
    nock('https://api.openweathermap.org/data/2.5/weather?lat=36.7796&lon=127.1376&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric')
      .get('')
      .reply(200,data);
  });
  it('현재 날씨 가져오기', function (done) {
    test.getWeatherAPI(36.7796,127.1376).then(()=>
      done())
      .catch(err=>{
        done(err)
        console.log('err:'+err)
      })
    })
  after(function(){
    nock.cleanAll()
  })
});
// describe('unit test 2', function () {
//   it('일주일 날씨 가져오기', function (done) {
//     test.getWeekWeatherAPI(36.7796, 127.1376).then(() =>
//       done())
//       .catch((err) => {
//         console.log('err:' + err)
//       })
//   })
// })
// describe('Firebase test!', function () {
//   it('저장된 데이터 확인', function (done) {
//     test2.readData().then(() =>
//       done())
//       .catch((err) => {
//         console.log('err:' + err)
//       })
//   })
// })



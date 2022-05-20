import {initializeApp} from "firebase/app";

const sayHello = require('./test').sayHello;
import {getDatabase, onValue, ref, set} from "firebase/database";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
import {firebaseConfig} from "../../apikey";
const request = require('request')
const expect = require('chai').expect;

// describe('App test!', function () {
//   it('sayHello should return hello', function (done) {
//     if (sayHello() === 'hello') {
//       done();
//     }
//   });
// });

describe('Firebase test!', function () {
    it('readData', function (done) {
      const db=getDatabase();
      onValue(ref(db,'weather/'),snapshot => {
        if(snapshot.val()!=undefined){
          done();
        }
      })
  });
});
describe('Api test1!', function () {
  it('getWeather', function (done) {
    request.get(`https://api.openweathermap.org/data/2.5/weather?lat=36.7796&lon=127.1376&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric`,function (err,res,body){
      expect(res.statusCode).to.equal(200)
      done()
    })
  });
});
describe('Api test2!', function () {
  it('getWeekWeather', function (done) {
    request.get(`https://api.openweathermap.org/data/2.5/onecall?lat=36.7796&lon=127.1376&exclude=current,minutely,alerts&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric`,function (err,res,body){
      expect(res.statusCode).to.equal(200)
      done()
    })
  });
});


// const {getWeather} = require("../service/service.mjs");
// let get_weather=new getWeather()
const sayHello = require('./test').sayHello;

//
describe('App test!', function () {
  it('sayHello should return hello', function (done) {
    if (sayHello() === 'hello') {
      done();
    }
  });
});

// describe('App test!', function () {
//   it('getweather should return weather', function (done) {
//     if (get_weather.requestCoords()=='success') {
//       done();
//     }
//   });
// });

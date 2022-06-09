import {weatherService} from "../js/service/service.mjs";
import weatherData from "./ExpectedWeatherResponse.json"
import weatherWeekData from "./ExpectedWeatherWeekResponse.json"
const nock = require('nock')
const request=require('request')
import fetch from "node-fetch";

globalThis.fetch = fetch
const test = new weatherService();
describe('unit test 1', function () {
  before(function () {
    nock('https://api.openweathermap.org/data/2.5')
      .get('/weather?lat=36.7796&lon=127.1376&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric')
      .reply(200, weatherData);
  });
  it('현재 날씨 가져오기', function (done) {
    test.getWeatherAPI(36.7796, 127.1376).then(() =>
      done())
      .catch(err => {
        done(err)
        console.log('err:' + err)
      })
  })
  after(function () {
    nock.restore()
  })
});
describe('unit test 2', function () {
  before(function () {
    nock('https://api.openweathermap.org/data/2.5')
      .get('/onecall?lat=36.7798583&lon=127.1377038&exclude=current,minutely,alerts&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric')
      .reply(200, weatherWeekData);
  });
  it('일주일 날씨 가져오기', function (done) {
    test.getWeekWeatherAPI(36.7796, 127.1376).then(() =>
      done())
      .catch((err) => {
        done(err)
        console.log('err:' + err)
      })
  })
  after(function () {
    nock.restore()
  })
})
describe('Firebase test!', function () {
  it('저장된 데이터 확인', function (done) {
    test.readData().then(() =>
      done())
      .catch((err) => {
        console.log('err:' + err)
      })
  })
})



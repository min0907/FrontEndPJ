import {WeatherService} from "../js/service/service.mjs";
import weatherMockResponse from "./WeatherMockResponse.json"
import weatherWeekMockResponse from "./WeatherWeekMockResponse.json"
import fetch from "node-fetch";

const assert = require('assert');
const nock = require('nock')
const request = require('request')

globalThis.fetch = fetch
const service = new WeatherService();
describe('unit test 1', function () {
  before(function () {
    nock('https://api.openweathermap.org/data/2.5')
      .get('/weather?lat=36.7796&lon=127.1376&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric')
      .reply(200, weatherMockResponse);
  });
  it('현재 날씨 가져오기', function (done) {
    service.getWeatherAPI(36.7796, 127.1376).then(response => {
      assert.equal(response.value, 22)
      assert.equal(response.description, 'clear sky')
      assert.equal(response.iconId, '01d')
      assert.equal(response.city, 'Cheonan')
      assert.equal(response.country, 'KR')
      done()
    }).catch(err => {
      done(err)
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
      .reply(200, weatherWeekMockResponse);
  });
  it('일주일 날씨 가져오기', function (done) {
    service.getWeekWeatherAPI(36.7796, 127.1376).then(response => {
      assert.equal(response.length, 8)
      assert.equal(response[0].temperature, 24)
      assert.equal(response[0].weathericon, '10d')
      done()
    }).catch(err => {
      done(err)
    })
  })
  after(function () {
    nock.restore()
  })
})




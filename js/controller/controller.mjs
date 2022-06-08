import {weatherService} from "../service/service.mjs";
import {View} from "../view/WeatherView.mjs";
import {ListWeatherView} from "../view/ListWeatherView.mjs";

const service = new weatherService();
const view = new View();
const listView = new ListWeatherView();

export class controller {
  init() {
    view.renderData(service);
    listView.registerEvent(service);
    listView.displayList(service);
  }
}


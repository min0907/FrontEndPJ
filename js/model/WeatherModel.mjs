export class WeatherModel {
  setModel(temp, des, iconId, city, country) {
    let model = {
      "value": temp,
      "description": des,
      "iconId": iconId,
      "city": city,
      "country": country
    };
    return model;
  }
}

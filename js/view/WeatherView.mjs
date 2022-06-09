export class View {
  findElement(name) {
    return document.querySelector(name);
  }
  renderData(service){
    navigator.geolocation.getCurrentPosition((position) => {
      service.getWeatherAPI(position.coords.latitude, position.coords.longitude).then(data => this.setWeather(data));
      service.getWeekWeatherAPI(position.coords.latitude, position.coords.longitude).then(data => this.setWeekWeather(data));
    })
  }
  setWeather(weather) {
    const iconElement = this.findElement(".weather-icon");
    const tempElement = this.findElement(".temperature-value p");
    const descElement = this.findElement(".temperature-description p");
    const locationElement = this.findElement(".location p")
    iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.iconId}@2x.png"/>`;
    tempElement.innerHTML = `${weather.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
  }

  setWeekWeather(weather_week) {
    const icon1 = this.findElement(".week-icon1");
    const temp1 = this.findElement(".week-temp1");
    const icon2 = this.findElement(".week-icon2");
    const temp2 = this.findElement(".week-temp2");
    const icon3 = this.findElement(".week-icon3");
    const temp3 = this.findElement(".week-temp3");
    const icon4 = this.findElement(".week-icon4");
    const temp4 = this.findElement(".week-temp4");
    const icon5 = this.findElement(".week-icon5");
    const temp5 = this.findElement(".week-temp5");
    const icon6 = this.findElement(".week-icon6");
    const temp6 = this.findElement(".week-temp6");
    const icon7 = this.findElement(".week-icon7");
    const temp7 = this.findElement(".week-temp7");
    icon1.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_week[1].weathericon}@2x.png"/>`;
    temp1.innerHTML = `${weather_week[1].temperature}°<span>C</span>`;
    icon2.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_week[2].weathericon}@2x.png"/>`;
    temp2.innerHTML = `${weather_week[2].temperature}°<span>C</span>`;
    icon3.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_week[3].weathericon}@2x.png"/>`;
    temp3.innerHTML = `${weather_week[3].temperature}°<span>C</span>`;
    icon4.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_week[4].weathericon}@2x.png"/>`;
    temp4.innerHTML = `${weather_week[4].temperature}°<span>C</span>`;
    icon5.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_week[5].weathericon}@2x.png"/>`;
    temp5.innerHTML = `${weather_week[5].temperature}°<span>C</span>`;
    icon6.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_week[6].weathericon}@2x.png"/>`;
    temp6.innerHTML = `${weather_week[6].temperature}°<span>C</span>`;
    icon7.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_week[7].weathericon}@2x.png"/>`;
    temp7.innerHTML = `${weather_week[7].temperature}°<span>C</span>`;
  }
}

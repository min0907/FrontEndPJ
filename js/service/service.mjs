export class getWeather{
  requestCoords() {
    // navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoErr);
    navigator.geolocation.getCurrentPosition((position)=>{
      // console.log(position)
      this.getWeatherAPI(position.coords.latitude,position.coords.longitude);
      // this.getWeekWeatherAPI();
    })
  }
  getWeatherAPI(lat, lon){  //API_KEY = bdab0099b7b556d38af96f7adcc089f3
    const iconElement = document.querySelector(".weather-icon");
    const tempElement = document.querySelector(".temperature-value p");
    const descElement = document.querySelector(".temperature-description p");
    const locationElement = document.querySelector(".location p")
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric`
    )
      .then((response)=>{
        console.log(response);
        return response.json();
      })
      .then((data)=>{
        console.log(data);
        let weather={};
        weather.value = Math.floor(data.main.temp);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
        // console.log(this.weather);
        console.log(weather);
        return weather;
      })
      .then((weather)=>{
        iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.iconId}@2x.png"/>`;
        tempElement.innerHTML = `${weather.value}°<span>C</span>`;
        descElement.innerHTML = weather.description;
        locationElement.innerHTML = `${weather.city}, ${weather.country}`;
      })
  }
  getWeekWeatherAPI(){

  }
}

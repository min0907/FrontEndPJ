export class getWeather{
  requestCoords() {
    // navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoErr);
    navigator.geolocation.getCurrentPosition((position)=>{
      // console.log(position)
      this.getWeatherAPI(position.coords.latitude,position.coords.longitude);
      this.getWeekWeatherAPI(position.coords.latitude,position.coords.longitude);
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
  getWeekWeatherAPI(lat,lon){
    const icon1 = document.querySelector(".week-icon1");
    const temp1 = document.querySelector(".week-temp1");
    const icon2 = document.querySelector(".week-icon2");
    const temp2 = document.querySelector(".week-temp2");
    const icon3 = document.querySelector(".week-icon3");
    const temp3 = document.querySelector(".week-temp3");
    const icon4 = document.querySelector(".week-icon4");
    const temp4 = document.querySelector(".week-temp4");
    const icon5 = document.querySelector(".week-icon5");
    const temp5 = document.querySelector(".week-temp5");
    const icon6 = document.querySelector(".week-icon6");
    const temp6 = document.querySelector(".week-temp6");
    const icon7 = document.querySelector(".week-icon7");
    const temp7 = document.querySelector(".week-temp7");
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=bdab0099b7b556d38af96f7adcc089f3&units=metric`
    )
      .then((response)=>{
        console.log(response);
        return response.json();
      })
      .then((data)=>{
        console.log(data);
        let weather_week=[];
        for (let i = 0; i < data.daily.length; i++) {
          let arr = {};
          arr.temperature=Math.floor(data.daily[i].temp.eve);
          arr.weathericon=data.daily[i].weather[0].icon;
          weather_week.push(arr);
        }
        console.log(weather_week);
        return weather_week;
      })
      .then((weather_week)=>{
        console.log('weather_week:',weather_week)
        icon1.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather_week[1].weathericon}@2x.png"/>`;
        temp1.innerHTML=`${weather_week[1].temperature}°<span>C</span>`;
        icon2.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather_week[2].weathericon}@2x.png"/>`;
        temp2.innerHTML=`${weather_week[2].temperature}°<span>C</span>`;
        icon3.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather_week[3].weathericon}@2x.png"/>`;
        temp3.innerHTML=`${weather_week[3].temperature}°<span>C</span>`;
        icon4.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather_week[4].weathericon}@2x.png"/>`;
        temp4.innerHTML=`${weather_week[4].temperature}°<span>C</span>`;
        icon5.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather_week[5].weathericon}@2x.png"/>`;
        temp5.innerHTML=`${weather_week[5].temperature}°<span>C</span>`;
        icon6.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather_week[6].weathericon}@2x.png"/>`;
        temp6.innerHTML=`${weather_week[6].temperature}°<span>C</span>`;
        icon7.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather_week[7].weathericon}@2x.png"/>`;
        temp7.innerHTML=`${weather_week[7].temperature}°<span>C</span>`;
      })
  }
}

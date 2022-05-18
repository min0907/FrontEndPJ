export class View {
  findElement(name){
    return document.querySelector(name);
  }
  setWeather(weather){
    console.log("3")
    const iconElement = document.querySelector(".weather-icon");
    const tempElement = document.querySelector(".temperature-value p");
    const descElement = document.querySelector(".temperature-description p");
    const locationElement = document.querySelector(".location p")
    iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.iconId}@2x.png"/>`;
    tempElement.innerHTML = `${weather.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
  }
  setWeekWeather(weather_week){
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
  }
}

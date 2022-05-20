export class ListWeatherView {
  findElement(name){
    return document.querySelector(name);
  }
  findAllElement(name){
    return document.querySelectorAll(name);
  }
  findId(id){
    return document.getElementById(id)
  }
  displayWeather(weathers){
    const deleteButton = this.createElement('button', 'delete');
    weathers.forEach(weather =>{
      const li = this.createElement('li');
      li.id=weather.id;
      deleteButton.textContent = 'Delete';
      li.append(deleteButton);
      // Append nodes
      this.weatherList.append(li);
    });
  }
  findElementValue(className){
    return document.getElementsByClassName(className);
  }
  readSavedWeather(data){
    const weather = document.querySelector(".weatherList");
    weather.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      weather.innerHTML = weather.innerHTML + `<li class="weather-list">저장 일시:${JSON.stringify(data[i].date)} 온도:${JSON.stringify(data[i].temp)}</li>
<button class="removeData" id=${i}> X </button>`
    }
  }
}

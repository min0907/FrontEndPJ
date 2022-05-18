export class ListWeatherView {
  constructor() {
    this.weatherList=this.createElement('ul','weather-list');
  }
  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
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
}

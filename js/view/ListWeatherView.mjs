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
  readSavedWeather(data,disWeather){
    const weather = document.querySelector(".weatherList");
    weather.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      if(data[i]!=undefined){
        weather.innerHTML = weather.innerHTML + `<li class="weather-list">저장 일시:${JSON.stringify(data[i].date)} 온도:${JSON.stringify(data[i].temp)}</li>
<button class="removeData" id=${i}> X </button>`
      }
    }
    this.registerRemove(data,disWeather)
  }
  registerEvent(disWeather) {
    const saveBtn = this.findElement('.savebtn')
    disWeather.checkNumData().then((data)=>
      saveBtn.addEventListener("click", () => {
        console.log("data",data);
        let temp = this.findElementValue("temperature-value")
        if(temp[0].innerText!="- °C"){
          disWeather.writeData(data, new Date().toString(),temp[0].innerText);
          console.log("success save!!");
          location.reload();
        }else if(temp[0].innerText=="- °C"){
          alert("날씨가 화면에 나타난 후 저장해주세요!");
        }
      }))
  }
  registerRemove(data,disWeather){
    this.findAllElement(".removeData").forEach(item=>{
      item.addEventListener('click',function (){
        console.log(this.id);
        if(this.id<data.length-1){
          alert("최근 날씨부터 삭제 가능합니다")
        }else if(this.id>=data.length-1){
          disWeather.removeData(this.id)
          location.reload();
        }
      })
    })
  }

}

export class ListWeatherView {
  findElement(name) {
    return document.querySelector(name);
  }

  findAllElement(name) {
    return document.querySelectorAll(name);
  }

  findElementValue(className) {
    return document.getElementsByClassName(className);
  }
  displayList(service){
    service.readData().then((data) => {
      this.readSavedWeather(data, service)
    })
  }
  readSavedWeather(data, service) {
    const weather = this.findElement(".weatherList");
    weather.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] != undefined) {
        weather.innerHTML = weather.innerHTML + `<li class="weather-list">저장 일시:${JSON.stringify(data[i].date)} 온도:${JSON.stringify(data[i].temp)}</li>
<button class="removeData" id=${i}> X </button>`
      }
    }
    this.registerRemove(data, service)
  }

  registerEvent(service) {
    const saveBtn = this.findElement('.savebtn')
    service.checkNumData().then((data) =>
      saveBtn.addEventListener("click", () => {
        console.log("data", data);
        let temp = this.findElementValue("temperature-value")
        if (temp[0].innerText != "- °C") {
          service.writeData(data, new Date().toString(), temp[0].innerText);
          console.log("success save!!");
          location.reload();
        } else if (temp[0].innerText == "- °C") {
          alert("날씨가 화면에 나타난 후 저장해주세요!");
        }
      }))
  }

  registerRemove(data, service) {
    this.findAllElement(".removeData").forEach(item => {
      item.addEventListener('click', function () {
        console.log(this.id);
        if (this.id < data.length - 1) {
          alert("최근 날씨부터 삭제 가능합니다")
        } else if (this.id >= data.length - 1) {
          service.removeData(this.id)
          location.reload();
        }
      })
    })
  }


}

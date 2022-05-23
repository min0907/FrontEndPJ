# WeatherDiary

## 기획
### 날씨 저장 기능을 포함한 날씨 어플리케이션
### mvc 패턴 적용
### html5 boilerplate 기

## 기능 명세
1. 실시간 날씨 받아오는 기능 - OpenWeather API, Geolocation 메서드 사용
2. 날씨 저장 기능 - firebase 사용

## OpenWeatherAPI
https://openweathermap.org/
## firebase
https://openweathermap.org/

## Geolocation
https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API

## 모듈 의존성 다이어그램(ESM)
Weather : 실시간 & 7일간 날씨 보여주는 화면
ListWeather : 날씨 저장 리스트 보여주는 화면

<img width="1172" alt="스크린샷 2022-05-03 오후 3 42 20" src="https://user-images.githubusercontent.com/67998366/166413742-5601e59a-9b7b-445e-847f-ba2744d16850.png">

### 실행
  npm run dev
### 유닛 테스트
  npm test
### firebase 실행 방법
* firebase에서 앱 생성 후 sdk 다운로드 받아서 root에 apikey.js 파일 생성후 다음과 같이 적용
  ![KakaoTalk_Photo_2022-05-20-16-24-55 001](https://user-images.githubusercontent.com/67998366/169475720-9b2ce4a7-7ea1-4279-8516-bd6aa6e45993.jpeg)

### openweatherAPI
* openweatherAPI 에서 apikey 다운로드 받아서 apikey.js에 저장
  ![KakaoTalk_Photo_2022-05-20-16-24-56 002](https://user-images.githubusercontent.com/67998366/169475902-18775f56-943c-4d79-9978-cc7e60f3fefb.jpeg)


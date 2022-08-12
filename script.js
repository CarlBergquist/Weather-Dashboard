var btn = document.querySelector('#btn')
var inputVal = document.querySelector('.inputVal')
var Cityname = document.querySelector('.cityName')
var temp = document.querySelector('.temp')
var wind = document.querySelector('.wind')
var humid = document.querySelector('.humid')
var uv = document.querySelector('.uv')
var iconCode = document.querySelector('.icon')



btn.addEventListener('click', function () {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputVal.value + "&appid=920258eaef7a61195023afcad9f13a2c&units=imperial")
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          var icon = (data.weather[0].icon);
          var iconurl = ("http://openweathermap.org/img/w/" + icon + ".png");
          $('#wicon').attr('src', iconurl);

          iconCode.innerHTML = (src = "https://openweathermap.org/img/w/" + icon + ".png");
          Cityname.innerHTML = (data.name)
          temp.innerHTML = ("Temp: " + data.main.temp + "°F")
          wind.innerHTML = ("Wind: " + data.wind.speed + " MPH")
          humid.innerHTML = ("Humidity: " + data.main.humidity + "%")

          console.log(data);

          var lat = data.coord.lat
          var lon = data.coord.lon
          
          fetch("https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=5&appid=920258eaef7a61195023afcad9f13a2c")
          .then(function (response1){
            if (response1.ok) {
              console.log(response1);
              response1.json().then(function (data1){

              })
            }
          })

        })
      }
    })
});


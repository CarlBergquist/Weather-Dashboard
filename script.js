var btn = document.querySelector('#btn')
var inputVal = document.querySelector('.inputVal')
var Cityname = document.querySelector('.cityName')
var temp = document.querySelector('.temp')
var wind = document.querySelector('.wind')
var humid = document.querySelector('.humid')
var uv = document.querySelector('.uv')

btn.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputVal.value + "&appid=920258eaef7a61195023afcad9f13a2c")
    .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
          })
          
        }
    
    })
});

    
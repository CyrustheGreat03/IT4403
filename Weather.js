
var jsonweather = {
"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"cmc stations","main":{"temp":288.26,"pressure":1026,"humidity":59,"temp_min":286.95,"temp_max":289.26},"wind":{"speed":3.6,"deg":90},"clouds":{"all":75},"dt":1441734773,"sys":{"type":1,"id":5091,"message":0.0165,"country":"GB","sunrise":1441689887,"sunset":1441737016},"id":2643743,"name":"London","cod":200
}


var temp = Math.round((jsonweather.main.temp - 273.15) * 9/5 + 32)
var maxtemp = Math.round((jsonweather.main.temp_max - 273.15) * 9/5 + 32)
var mintemp = Math.round((jsonweather.main.temp_min - 273.15) * 9/5 + 32)



$(document).ready(function() {
$("#Area").html(jsonweather.name + ", " + jsonweather.sys.country),
$("#Temp").html("<strong>Temperature: </strong> " + temp + " F"),
$("#TempMin").html("<strong>Min Temperature: </strong>" + mintemp +" F"),
$("#TempMax").html("<strong>Max Temperature: </strong>" + maxtemp +" F"),
$("#WeatherDesc").html("<strong>Weather Description: </strong>" + jsonweather.weather[0].description),
$("#Humidity").html("<strong>Humidity: </strong>" + jsonweather.main.humidity + "%"),
$("#Wind").html("<strong>Wind: </strong>" + jsonweather.wind.speed + " m/s")

})






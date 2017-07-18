const apiURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
const appID = "a4192ac11c66b463d93c577e64fda186"; //yes thats mine
let debug = null

londonlink = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&appid=a4192ac11c66b463d93c577e64fda186"

seattlelink = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&appid=a4192ac11c66b463d93c577e64fda186"


function getSeaWx() {
  var request = new XMLHttpRequest()
  console.log("request var set")
  request.open("GET", seattlelink, true)
  console.log("request opened")
  request.onload = function () {
    console.log("hit onload")
    let wxNameDiv = document.getElementById("displaywxname")
    let wxGenDiv = document.getElementById("displaywxgen")
    let wxTempDiv = document.getElementById("displaywxtemp")
    let wxHumDiv = document.getElementById("displaywxhum")
    let wxWindsDiv = document.getElementById("displaywxwinds")
    let response = JSON.parse(request.response)
    console.log(response.body)
    console.log(response.name)
    console.log(response.weather)
    console.log(response.weather.main)
    console.log(response.main.temp)
    wxNameDiv.innerHTML = ("Station location: " + response.name)
    wxGenDiv.innerHTML = (response.weather + "why is this not letting me grab weather object keys but the main and wind ones work? I want to see partly cloudyyy")
    wxTempDiv.innerHTML = (response.main.temp + " degrees Kelvin (google is your friend to convert.. jk I'll make a conversion function)")
    wxHumDiv.innerHTML = (response.main.humidity + "% humidity")
    wxWindsDiv.innerHTML = ("Winds " + response.wind.speed + " at " + response.wind.deg)
  }
  request.error = function (errorObject) {
    console.log("Oops.. You bwoke it.")
    console.log(errorObject)
  }
  request.send()
  }


function getLondonWx() {

  }

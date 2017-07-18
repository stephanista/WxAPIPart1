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
    let wxDiv = document.getElementById("displaywx")
    let response = JSON.parse(request.response)
    console.log(response.body)
    wxDiv.innerHTML = response.body
  }
  request.error = function (errorObject) {
    console.log("Oops.. You bwoke it.")
    console.log(errorObject)
  }
  request.send()
  }


function getLondonWx() {

  }

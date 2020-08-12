/* 
Information on getting the API to work

1- This is my API, must be a const
    50b9caeb9f022d5e06aded241bfda347


2- This is the website to get the information for current weather in Metric (celsius)
    api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={your api key}


3- This is the link to get the information of the last 5 days in Metric (celsius)
    api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid={your api key}


*/

const weatherNow = "api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";
console.log(weatherNow);

const weather5 = "api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";
console.log(weather5);



// Function for the Button press
document.getElementById("btn")
.addEventListener ("click", function getCityName () {
    let city = document.getElementById("cityName1").value;
    document.getElementById("output").innerHTML = city;
    
});


// Function for the Enter  Key
let input = document.getElementById("cityName1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});
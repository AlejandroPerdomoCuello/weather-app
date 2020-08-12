/* 
Information on getting the API to work

1- This is my API, must be a const
    50b9caeb9f022d5e06aded241bfda347


2- This is the website to get the information for current weather in Metric (celsius)
    api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={your api key}


3- This is the link to get the information of the last 5 days in Metric (celsius)
    api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid={your api key}


*/

// weather for now with the API already included
const weatherNow = "api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Now to break the weblink to add the city name

const weatherNow1 = "api.openweathermap.org/data/2.5/weather?q=";

const weatherNow2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// weather for 5 days with the API included
const weather5 = "api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// now to break up the weblink to add the city name

const weather51 = "api.openweathermap.org/data/2.5/forecast?q=";

const weather52 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Function for the Button press that gets the City name from the user
document.getElementById("mainBtn")
.addEventListener ("click", function getCityName () {
    let city = document.getElementById("cityName1").value;
    document.getElementById("mainOutput").innerHTML = city;

    // Here we construct the weblink with the proper name
    let weatherNow3 = weatherNow1 + city + weatherNow2;
    let weather53 = weather51 + city + weather52;

    // console.log(weatherNow1 + city + weatherNow2);
    // console.log(weather51 + city + weather52);

    console.log(weatherNow3);
    console.log(weather53);

});


// Function for the Enter  Key
let input = document.getElementById("cityName1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("mainBtn").click();
  }
});
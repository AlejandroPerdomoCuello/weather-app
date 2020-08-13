/* 
Information on getting the API to work

1- This is my API, must be a const
    50b9caeb9f022d5e06aded241bfda347

2- This is the website to get the information for current weather in Metric (celsius)
    api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={your api key}

3- This is the link to get the information of the last 5 days in Metric (celsius)
    api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid={your api key}

*/

// weather for now with the API already included, make sure that the api starts with http://
const weatherNow = "http://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Now to break the weblink to add the city name

const weatherNow1 = "http://api.openweathermap.org/data/2.5/weather?q=";

const weatherNow2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// weather for 5 days with the API included
const weather5 = "api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// now to break up the weblink to add the city name

const weather51 = "http://api.openweathermap.org/data/2.5/forecast?q=";

const weather52 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Function for the Button press that gets the City name from the user
document.getElementById("mainBtn")
    .addEventListener("click", function getCityName() {
        let city = document.getElementById("cityName1").value;
        // ocument.getElementById("mainOutput").innerHTML = city;

        // Here we construct the weblink with the proper name
        let urlNow = weatherNow1 + city + weatherNow2;

        // this is new, so I dont know what I am doing

        console.log(fetch(urlNow));
        
        fetch(urlNow)
            .then((response) => {
                if (response.ok) {
                    console.log("Success")
                } else {
                    console.log("Error")
                }
                
                return response.json();
            })
            .then((data) => {
                // Work with JSON data here
                console.log(data);
                console.log(data.main.temp,);
                let numberNow = data.main.temp + "°C";
                document.getElementById("mainOutput").innerHTML = numberNow;
            })
            .catch((err) => {
                // Do something for an error here
            });
        
    });

// Function for the Button2 press that gets the City name from the user
document.getElementById("btn2")
    .addEventListener("click", function getCityName2() {
        let city2 = document.getElementById("cityName2").value;
        // ocument.getElementById("secondOutput").innerHTML = city2;

        // Here we construct the weblink with the proper name

        let url2 = weatherNow1 + city2 + weatherNow2;

        // this is new, so I dont know what I am doing

        console.log(fetch(url2));
        
        fetch(url2)
            .then((res) => {
                if (res.ok) {
                    console.log("Success, Again")
                } else {
                    console.log("Error, Again")
                }
                
                return res.json();
            })
            .then((data2) => {
                // Work with JSON data here
                console.log(data2);
                console.log(data2.main.temp,);
                let number2 = data2.main.temp + "°C";
                document.getElementById("secondOutput").innerHTML = number2;
            })
            .catch((err) => {
                // Do something for an error here
            });
        
    });


// Function for the Enter  Key
let input = document.getElementById("cityName1");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mainBtn").click();
        document.getElementById("btn2").click();
    }
});
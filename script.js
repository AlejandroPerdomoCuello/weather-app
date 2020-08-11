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
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
  key: "3f3cbd06b73a900f034c5d70ee8f7cdb",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("inputbox");
//event listener function or keypress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);

    getWeatherReport(searchInputBox.value);
  }
});
console.log({ searchInputBox });

//get weather report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      console.log(weather);
      return weather.json();
    })
    .then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather?.sys?.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById("min-max");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;

  

  if (weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = "url('image/rain.jpg')";
  }
  if (weatherType.textContent == "Haze") {
    document.body.style.backgroundImage = "url('image/haze.jpg')";
  }
  if (weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage = "url('image/cloudy.png')";
  }
  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = "url('image/sunny.jpg')";
  }
  if (weatherType.textContent == "Snow") {
    document.body.style.backgroundImage = "url('image/snow.jpg')";
  }
}

//date manage

function updateDate(){
  let date = document.getElementById("date");
  let todayDate = new Date();

  date.innerText = datemanage(todayDate);

}
updateDate();
function datemanage(dateArg) {

  
  let year = dateArg.getFullYear();
  let month = dateArg.toLocaleDateString("hi-IN", { month: 'long' });

  let date = dateArg.getDate();
  let day = dateArg.toLocaleDateString("hi-IN", { weekday: 'long' });

  return `${date} ${month} (${day}), ${year}`;
}
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  console.log(pos);

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
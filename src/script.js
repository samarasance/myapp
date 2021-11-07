function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let sunriseElement = document.querySelector("#sunrise");
  let sunsetElement = document.querySelector("#sunset");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  sunriseElement.innerHTML = response.data.sys.sunrise;
  sunsetElement.innerHTML = response.data.sys.sunset;
}

let apiKey = "292929ff665169ef5a98dcc8cc29979a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);

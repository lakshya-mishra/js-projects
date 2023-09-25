class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }



  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.innerHTML = `${weather.main.temp} <span>&#8451;</span> (${(weather.main.temp * 9 / 5 + 32).toFixed(2)} F)`;

    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;

    this.feelsLike.innerHTML = `Feels Like: ${weather.main.feels_like}  <span>&#8451;</span>  (${(weather.main.feels_like * 9 / 5 + 32).toFixed(2)} F)`;
    
    this.wind.textContent = `Wind: ${weather.wind.speed} m/sec (${(weather.wind.speed * 3.6).toFixed(2)} km/hr)`;
  }
}
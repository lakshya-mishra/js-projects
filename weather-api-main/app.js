// Init Storage
const storage = new Storage();
// Get Stored location data
const weatherLocation = storage.getLocationData(); 

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI object
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  
  // change location
  weather.changeLocation(city);

  // Set location in local storage
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  //Close modal with jquery
  $('#locmodal').modal('hide');
})

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))
}


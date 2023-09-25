class Weather {
  constructor(city) {
    this.apiKey = '8fde83df649cd4ac53734ce249b50333';
    this.city = city;
  }
  // fetch weather from an api
  async getWeather(){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
    const responseData = await response.json();

    return responseData;
  }  

  // Change the weather location
  changeLocation(city){
    this.city = city;
  }
}

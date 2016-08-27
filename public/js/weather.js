var findWeather = function (location) {
    return new Promise(function (resolve, reject) {
      var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + location.city + '&units=imperial&appid=23ea43aa7b041f5ae63cf1c2847dfc27';

      if (!location) {
        return reject("There was an error in grabbing location");
      }

      $.getJSON(weatherUrl, function(weatherInfo) {

        var weatherIcon;
        if (weatherInfo.weather[0].main === "Rain") {
          weatherIcon = "fa-umbrella"
        } else if (weatherInfo.weather[0].main === "Clouds") {
          weatherIcon = "fa-cloud"
        } else if (weatherInfo.wind.speed > 20) {
          weatherIcon = "fa-envira"
        } else {
          weatherIcon = "fa-sun-o"
        }

        $(".weather").append('<div class="col-md-4 weather-info weather-city"><h4>' + weatherInfo.name + '</h4></div><div class="col-md-4 weather-info"><h4>' + weatherInfo.main.temp + '° </h4></div><div class="col-md-1"><i class="fa ' + weatherIcon + ' fa-3x"></i></div>')
      });
    });
  }

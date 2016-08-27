var findWeather = function (location) {
    return new Promise(function (resolve, reject) {
      var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + location.city + '&units=imperial&appid=23ea43aa7b041f5ae63cf1c2847dfc27';

      if (!location) {
        return reject("There was an error in grabbing location");
      }

      $.getJSON(weatherUrl, function(result) {
        console.log("City: " + result.name);
        console.log("Weather: "+ result.main.temp);
        $(".weather").append("<p>" + result.name + ": " + result.main.temp + " degrees</p>")
      });
    });
  }

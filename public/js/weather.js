var findWeather = function(location) {
    return new Promise(function(resolve, reject) {

        if (!location) {
            return reject("There was an error in grabbing location");
        }

        var city = location.city.replace(" ", "_");

        var weatherUrl = 'http://api.wunderground.com/api/0a4f6196a6ca6510/conditions/q/' + location.region + '/' + city + '.json';

        var currentTime = moment().format("H");
        console.log(currentTime);

        $.getJSON(weatherUrl, function(weatherInfo) {
          console.log(weatherInfo)
            var weatherIcon;
            var current = weatherInfo.current_observation;
            if (current.icon.indexOf("rain") !== -1) {
                weatherIcon = "fa-umbrella"
            } else if (current.icon.indexOf("storm") !== -1) {
                weatherIcon = "fa-flash"
            } else if (current.icon.indexOf("cloud") !== -1) {
                weatherIcon = "fa-cloud"
            } else if (current.windspeed > 20) {
                weatherIcon = "fa-envira"
            } else if (current.temperature < 60) {
                weatherIcon = "fa-frost-o"
            } else if (currentTime < 5 || currentTime >= 21) {
                weatherIcon = "fa-moon-o"
            } else {
                weatherIcon = "fa-sun-o"
            }

            $(".weather").append('<div class="col-md-5 weather-info weather-city"><h5>' + location.city + '</h5></div><div class="col-md-5 weather-info"><h4>' + current.feelslike_f + '°</h4><i class="fa ' + weatherIcon + ' fa-3x"></i><h6 class="weather-summary"><small>' + current.weather + '</small></h6></div>');
        });
    });
}

var findWeather = function(location) {
    return new Promise(function(resolve, reject) {

        if (!location) {
            return reject("There was an error in grabbing location");
        }

        var weatherUrl = 'http://api.wunderground.com/api/0a4f6196a6ca6510/conditions/q/' + location.region + '/' + location.city;

        var currentTime = moment().format("h");

        $.getJSON(weatherUrl, function(weatherInfo) {
            var weatherIcon;
            if (weatherInfo.currently.icon.indexOf("rain") !== -1) {
                weatherIcon = "fa-umbrella"
            } else if (weatherInfo.currently.icon.indexOf("storm") !== -1) {
                weatherIcon = "fa-flash"
            } else if (weatherInfo.currently.icon.indexOf("cloud") !== -1) {
                weatherIcon = "fa-cloud"
            } else if (weatherInfo.currently.windspeed > 20) {
                weatherIcon = "fa-envira"
            } else if (weatherInfo.currently.temperature < 60) {
                weatherIcon = "fa-frost-o"
            } else if (currentTime < 5 || currentTime >= 21) {
                weatherIcon = "fa-moon-o"
            } else {
                weatherIcon = "fa-sun-o"
            }

            $(".weather").append('<div class="col-md-5 weather-info weather-city"><h5>' + location.city + '</h5></div><div class="col-md-5 weather-info"><h4>' + weatherInfo.currently.temperature + '°</h4><i class="fa ' + weatherIcon + ' fa-3x"></i><h6 class="weather-summary"><small>' + weatherInfo.currently.summary + '</small></h6></div>');
        });
    });
}

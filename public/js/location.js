var locationUrl = 'https://ipinfo.io?token=50bf846b7258db';

  var getLocation = new Promise(function(resolve, reject) {
      $.get(locationUrl, function (location) {
        if (location) {
          handleUberRequest(location);
          resolve(location);
        } else {
          reject(Error("It broke"));
        }
      }, "jsonp");
  });

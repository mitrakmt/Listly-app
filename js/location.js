var locationUrl = 'http://ipinfo.io';

  var getLocation = new Promise(function(resolve, reject) {
      $.get(locationUrl, function (location) {
        if (location) {
          resolve(location);
        } else {
          reject(Error("It broke"));
        }
      }, "jsonp");
  });

  // getLocation.then(function(result) {
  //   console.log("Location worked correctly");
  // }, function(error) {
  //   console.log(error);
  // });

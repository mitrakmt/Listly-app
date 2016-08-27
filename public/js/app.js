//
function findUserWeather () {
  return new Promise(function (resolve, reject) {
    var userLocation = getLocation;

    if (userLocation) {
      resolve(userLocation);
    }
    else {
      reject(Error("It broke"));
    }
  });
};

findUserWeather().then(function (userLocation) {
  findWeather(userLocation);
}, function (error) {
  console.log("You ran into an error!")
});

getStocks('AAPL').then(function (stock) {
  console.log("Stock quote grabbed correctly");
}, function(error) {
  console.log(error);
});

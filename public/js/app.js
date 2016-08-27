var flag = false;
var url = "";
var shortenedUrl = "";

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

// getStocks('AAPL').then(function (stock) {
//   console.log("Stock quote grabbed correctly");
// }, function(error) {
//   console.log(error);
// });

getNews().then(function (news) {
  console.log("News grabbed correctly");
}, function(error) {
  console.log(error);
});

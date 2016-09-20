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

function handleUberRequest(location) {
  location = location.loc.split(',');
  var latitude = location[0];
  var longitude = location[1];

  $.ajax({
    url: 'https://api.uber.com/v1/products',
    type: 'GET',
    data: {
      'server_token': 'JChDWwvNFSYoWc604n1LgaeASmgeuzaE60eoj4Z6',
      'latitude': latitude,
      'longitude': longitude,
    },
    success: function (data) {
      console.log("Success handling Uber");
      console.log(data);
      $('.uber-text-top').text(data.products.length + " Ubers nearby");
      $('.uber-text-bottom').text("Request now")
    },
    error: function (data) {
      console.error("Error with " + data)
    }
  });
}

getNews().then(function (news) {
  console.log("News grabbed correctly");
}, function(error) {
  console.log(error);
});
